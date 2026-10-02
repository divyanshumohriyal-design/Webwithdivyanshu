"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type GridPulseProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> & {
  /** Cell size in px. The hairlines and the lit cells share it. */
  cell?: number;
  /** How far from the pointer a cell can still catch light, in cells. */
  reach?: number;
  /** How many cells light on their own each beat, so the grid is never dead. */
  ambient?: number;
  /** A lid, so a fast sweep cannot light the whole field at once. */
  maxLit?: number;
  /**
   * Elements whose lines of text the light holds back from, looked up
   * inside the grid's parent.
   */
  avoid?: string;
};

/**
 * STRICT BRAND PALETTE:
 * Muted cobalt blue (215) -> Indigo (236) -> Deep blue-violet (258)
 * NO yellow, NO orange, NO red, NO pink, NO green, NO neon.
 */
const HUE_MIN = 215;
const HUE_MAX = 258;
const HUE_SPAN = HUE_MAX - HUE_MIN;

/**
 * Muted, sophisticated lightness ladder for deep charcoal grounds.
 */
const TINTS = [44, 38, 32, 26, 20];
const SATURATION = 52; // Muted, restrained, strictly non-neon

/** How faint a cell goes right behind a line of text. */
const FAINT = 0.08;
/** How many cells it takes to come back up to full strength. */
const FADE = 2.5;
/** Clearing kept around each line of text, in px. */
const PAD = 8;
const FADE_IN = 180;
const FADE_OUT = 850;

type Cell = {
  col: number;
  row: number;
  colour: string;
  dim: number;
  born: number;
  until: number;
};

const easeOut = (t: number) => 1 - (1 - t) ** 2;
const easeIn = (t: number) => t * t;

/**
 * A technical grid that gently takes cobalt, indigo and deep blue-violet light
 * where the pointer passes and lets it go a moment later.
 * Low contrast when idle, transparent to pointer events, respects reduced motion.
 */
export function GridPulse({
  cell = 28,
  reach = 2.4,
  ambient = 2,
  maxLit = 110,
  avoid = "[data-grid-avoid]",
  className,
  style,
  ...props
}: GridPulseProps) {
  const box = React.useRef<HTMLDivElement>(null);
  const canvas = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const el = box.current;
    const paper = canvas.current;
    const ctx = paper?.getContext("2d");
    if (!el || !paper || !ctx) return;

    // Respect prefers-reduced-motion: if reduce is set, keep static CSS grid only
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cols = 1;
    let rows = 1;
    let width = 0;
    let height = 0;
    let clear: DOMRect[] = [];
    const cells = new Map<string, Cell>();

    const measureText = () => {
      const bounds = el.getBoundingClientRect();
      const scope = document;
      const nodes = scope.querySelectorAll(avoid);
      clear = [];
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        // Only consider elements currently visible in or near the viewport
        if (
          rect.bottom >= -50 &&
          rect.top <= window.innerHeight + 50 &&
          rect.width > 0 &&
          rect.height > 0
        ) {
          clear.push(
            new DOMRect(
              rect.left - bounds.left - PAD,
              rect.top - bounds.top - PAD,
              rect.width + PAD * 2,
              rect.height + PAD * 2,
            ),
          );
        }
      });
    };

    const measure = () => {
      width = el.clientWidth || window.innerWidth;
      height = el.clientHeight || window.innerHeight;
      cols = Math.max(1, Math.ceil(width / cell));
      rows = Math.max(1, Math.ceil(height / cell));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      paper.width = Math.round(width * dpr);
      paper.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      measureText();
      wake();
    };

    const brightness = (col: number, row: number) => {
      const x = col * cell + cell / 2;
      const y = row * cell + cell / 2;
      let nearest = Number.POSITIVE_INFINITY;
      for (let i = 0; i < clear.length; i++) {
        const r = clear[i];
        const dx = Math.max(r.left - x, 0, x - r.right);
        const dy = Math.max(r.top - y, 0, y - r.bottom);
        nearest = Math.min(nearest, Math.hypot(dx, dy));
        if (nearest === 0) break;
      }
      if (nearest === Number.POSITIVE_INFINITY) return 1;
      return FAINT + (1 - FAINT) * Math.min(1, nearest / (FADE * cell));
    };

    // Strict palette: Cobalt Blue -> Indigo -> Deep Blue-Violet
    const ink = (row: number) => {
      const t = rows > 1 ? Math.min(1, row / (rows - 1)) : 0;
      const hue = Math.round(HUE_MIN + t * HUE_SPAN);
      const tint = TINTS[Math.floor(Math.random() * TINTS.length)];
      return `hsl(${hue} ${SATURATION}% ${tint}%)`;
    };

    let frame = 0;
    const draw = (now: number) => {
      frame = 0;
      ctx.clearRect(0, 0, width, height);
      for (const [key, c] of cells) {
        let alpha: number;
        if (now < c.until) {
          alpha = easeOut(Math.min(1, (now - c.born) / FADE_IN));
        } else {
          const t = (now - c.until) / FADE_OUT;
          if (t >= 1) {
            cells.delete(key);
            continue;
          }
          alpha = 1 - easeIn(t);
        }
        ctx.globalAlpha = alpha * c.dim * 0.7; // Soft, restrained opacity
        ctx.fillStyle = c.colour;
        ctx.fillRect(c.col * cell + 1, c.row * cell + 1, cell - 1, cell - 1);
      }
      ctx.globalAlpha = 1;
      if (cells.size > 0) frame = requestAnimationFrame(draw);
    };

    const wake = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const light = (col: number, row: number, hold: number) => {
      if (col < 0 || row < 0 || col >= cols || row >= rows) return;
      if (cells.size >= maxLit) return;
      const key = `${col},${row}`;
      const now = performance.now();
      const lit = cells.get(key);
      if (lit && now < lit.until) return;

      let born = now;
      if (lit) {
        const faded = 1 - easeIn(Math.min(1, (now - lit.until) / FADE_OUT));
        born = now - (1 - Math.sqrt(1 - faded)) * FADE_IN;
      }
      cells.set(key, {
        col,
        row,
        colour: lit?.colour ?? ink(row),
        dim: brightness(col, row),
        born,
        until: now + hold,
      });
      wake();
    };

    let pending = 0;
    let at: { x: number; y: number } | null = null;
    const paint = () => {
      pending = 0;
      if (!at) return;
      const cx = Math.floor(at.x / cell);
      const cy = Math.floor(at.y / cell);
      const span = Math.ceil(reach);
      for (let dy = -span; dy <= span; dy++) {
        for (let dx = -span; dx <= span; dx++) {
          const away = Math.hypot(dx, dy);
          if (away > reach) continue;
          if (Math.random() > 1 - away / (reach + 0.5)) continue;
          light(cx + dx, cy + dy, 300 + Math.random() * 700);
        }
      }
    };

    const onMove = (event: PointerEvent) => {
      const bounds = el.getBoundingClientRect();
      at = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      if (!pending) pending = requestAnimationFrame(paint);
    };

    let visible = true;
    let beat = 0;
    const drift = () => {
      beat = window.setTimeout(drift, 2000 + Math.random() * 2500);
      if (!visible || document.hidden) return;
      for (let i = 0; i < ambient; i++) {
        light(
          Math.floor(Math.random() * cols),
          Math.floor(Math.random() * rows),
          700 + Math.random() * 1200,
        );
      }
    };
    beat = window.setTimeout(drift, 800);

    const sight = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    sight.observe(el);

    const resize = new ResizeObserver(measure);
    resize.observe(el);

    let scrollThrottle = 0;
    const onScroll = () => {
      if (!scrollThrottle) {
        scrollThrottle = requestAnimationFrame(() => {
          scrollThrottle = 0;
          measureText();
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    measure();
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      sight.disconnect();
      resize.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(pending);
      cancelAnimationFrame(scrollThrottle);
      clearTimeout(beat);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, [cell, reach, ambient, maxLit, avoid]);

  return (
    <div
      ref={box}
      aria-hidden
      data-slot="grid-pulse"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        // Fine technical hairlines: very subtle light grey/blue on dark charcoal
        "[--grid-pulse-line:rgba(255,255,255,0.038)]",
        className,
      )}
      style={
        {
          "--grid-pulse-cell": `${cell}px`,
          backgroundImage:
            "linear-gradient(to right, var(--grid-pulse-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-pulse-line) 1px, transparent 1px)",
          backgroundSize: "var(--grid-pulse-cell) var(--grid-pulse-cell)",
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <canvas ref={canvas} className="absolute inset-0 size-full" />
    </div>
  );
}

export default GridPulse;
