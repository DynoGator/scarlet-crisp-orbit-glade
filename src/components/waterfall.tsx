import { useEffect, useRef, useState } from "react";
import { BINS, HISTORY, type PaletteId } from "@/lib/types";
import { formatMhz } from "@/lib/utils";

const MAPS: [number, number, number][][] = [
  [
    [12, 16, 20],
    [22, 48, 52],
    [48, 118, 108],
    [148, 196, 184],
    [236, 240, 236],
  ],
  [
    [14, 12, 18],
    [48, 32, 62],
    [102, 70, 48],
    [196, 164, 112],
    [242, 236, 220],
  ],
  [
    [10, 14, 16],
    [24, 52, 66],
    [42, 104, 86],
    [168, 196, 92],
    [234, 238, 214],
  ],
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function sampleMap(t: number, pal: PaletteId): [number, number, number] {
  const stops = MAPS[pal];
  const x = Math.max(0, Math.min(0.999, t)) * (stops.length - 1);
  const i = Math.floor(x);
  const f = x - i;
  const a = stops[i];
  const b = stops[i + 1] ?? a;
  return [lerp(a[0], b[0], f), lerp(a[1], b[1], f), lerp(a[2], b[2], f)];
}

function lift(t: number) {
  return Math.pow(Math.max(0, Math.min(1, t)), 0.42);
}

export function Waterfall({
  history,
  bins,
  peakHold,
  centerHz,
  spanHz,
  floorDbm,
  ceilDbm,
  palette,
  compact = false,
  onTune,
}: {
  history: Float32Array[];
  bins: Float32Array;
  peakHold: Float32Array;
  centerHz: number;
  spanHz: number;
  floorDbm: number;
  ceilDbm: number;
  palette: PaletteId;
  compact?: boolean;
  onTune?: (hz: number) => void;
}) {
  const wf = useRef<HTMLCanvasElement>(null);
  const sp = useRef<HTMLCanvasElement>(null);
  const [cursor, setCursor] = useState<number | null>(null);

  useEffect(() => {
    const canvas = wf.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    const w = BINS;
    const h = HISTORY;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    const img = ctx.createImageData(w, h);
    const data = img.data;
    const range = Math.max(5, ceilDbm - floorDbm);
    for (let y = 0; y < h; y++) {
      const row = history[y];
      for (let x = 0; x < w; x++) {
        const v = row ? row[x] : floorDbm;
        const [r, g, b] = sampleMap(lift((v - floorDbm) / range), palette);
        const i = (y * w + x) * 4;
        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
        data[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }, [history, floorDbm, ceilDbm, palette]);

  useEffect(() => {
    const canvas = sp.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const cssW = canvas.clientWidth || 320;
    const cssH = canvas.clientHeight || 88;
    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    const range = Math.max(5, ceilDbm - floorDbm);
    const ny = (v: number) => cssH - ((v - floorDbm) / range) * cssH;

    ctx.strokeStyle = "rgba(236, 238, 241, 0.06)";
    ctx.lineWidth = 1;
    const ticks = [-90, -70, -50, -30];
    for (const db of ticks) {
      if (db <= floorDbm || db >= ceilDbm) continue;
      const y = ny(db);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(cssW, y);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(cssW / 2, 0);
    ctx.lineTo(cssW / 2, cssH);
    ctx.strokeStyle = "rgba(142, 180, 173, 0.28)";
    ctx.stroke();

    ctx.beginPath();
    for (let i = 0; i < BINS; i++) {
      const x = (i / (BINS - 1)) * cssW;
      const y = ny(bins[i] ?? floorDbm);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.lineTo(cssW, cssH);
    ctx.lineTo(0, cssH);
    ctx.closePath();
    ctx.fillStyle = "rgba(142, 180, 173, 0.18)";
    ctx.fill();

    ctx.beginPath();
    for (let i = 0; i < BINS; i++) {
      const x = (i / (BINS - 1)) * cssW;
      const y = ny(bins[i] ?? floorDbm);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(142, 180, 173, 0.95)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    for (let i = 0; i < BINS; i++) {
      const x = (i / (BINS - 1)) * cssW;
      const y = ny(peakHold[i] ?? floorDbm);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(200, 204, 210, 0.45)";
    ctx.setLineDash([3, 4]);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);

    if (cursor != null) {
      const x = ((cursor - (centerHz - spanHz / 2)) / spanHz) * cssW;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, cssH);
      ctx.strokeStyle = "rgba(236, 238, 241, 0.55)";
      ctx.stroke();
    }
  }, [bins, peakHold, floorDbm, ceilDbm, cursor, centerHz, spanHz]);

  const lo = centerHz - spanHz / 2;
  const hi = centerHz + spanHz / 2;

  const hzAt = (clientX: number, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const t = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return lo + t * spanHz;
  };

  return (
    <div className="overflow-hidden rounded-lg bg-background">
      <canvas ref={sp} className={compact ? "block h-16 w-full" : "block h-28 w-full"} />
      <canvas
        ref={wf}
        className={compact ? "block h-28 w-full" : "block h-52 w-full"}
        style={{ imageRendering: "pixelated" }}
        onPointerDown={(e) => {
          const hz = hzAt(e.clientX, e.currentTarget);
          setCursor(hz);
          onTune?.(hz);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 0 && e.pointerType !== "touch") setCursor(hzAt(e.clientX, e.currentTarget));
        }}
        onPointerLeave={() => setCursor(null)}
      />
      <div className="flex justify-between px-2 py-1.5 font-mono text-xs tabular-nums text-muted">
        <span>{formatMhz(lo, 2)}</span>
        <span className="text-primary">
          {formatMhz(cursor ?? centerHz, 3)} MHz
          {cursor != null ? " · tap" : ""}
        </span>
        <span>{formatMhz(hi, 2)}</span>
      </div>
    </div>
  );
}
