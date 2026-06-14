"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * CinematicBackground
 * -------------------
 * Full-screen fixed canvas that renders frame-by-frame samurai images
 * as the user scrolls. Preloads the frames and uses a smart fallback
 * to prevent flickering if images are loading during scroll.
 * Overlays blood-red embers, smoke gradients, and a dark vignette.
 */

const TOTAL_FRAMES = 540;
const getFramePath = (index: number) => `https://res.cloudinary.com/dimxynois/image/upload/f_auto,q_auto/hackaithon-bg-frames/frame_${index.toString().padStart(4, "0")}.jpg`;

// Ember particle type
type Ember = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  hue: number;
};

export default function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndexRef = useRef<number>(1);
  const embersRef = useRef<Ember[]>([]);
  const rafRef = useRef<number>(0);
  const dimensionsRef = useRef({ w: 0, h: 0, dpr: 1 });

  const createEmber = useCallback((): Ember => {
    const { w, h } = dimensionsRef.current;
    return {
      x: Math.random() * w,
      y: h + Math.random() * 40,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -(Math.random() * 1.2 + 0.4),
      size: Math.random() * 2.5 + 0.8,
      opacity: Math.random() * 0.7 + 0.3,
      life: 0,
      maxLife: Math.random() * 400 + 200,
      hue: Math.random() < 0.6 ? 0 : Math.random() < 0.7 ? 20 : 35,
    };
  }, []);

  // Preload frames in the background
  useEffect(() => {
    const images = imagesRef.current;
    if (images.length === 0) {
      // 1. Load the first frame immediately
      const firstImg = new Image();
      firstImg.crossOrigin = "anonymous";
      firstImg.src = getFramePath(1);
      firstImg.onload = () => {
        images[1] = firstImg;
      };

      // 2. Load remaining frames sequentially
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = getFramePath(i);
        img.onload = () => {
          images[i] = img;
        };
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // --- Resize ---
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimensionsRef.current = { w, h, dpr };
    };
    resize();
    window.addEventListener("resize", resize);

    // --- Initialize embers ---
    const EMBER_COUNT = reduce ? 0 : 35;
    embersRef.current = Array.from({ length: EMBER_COUNT }, () =>
      createEmber()
    );

    // --- GSAP ScrollTrigger for scroll progression ---
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        // Calculate frame index from 1 to TOTAL_FRAMES
        const frameIndex = Math.min(
          TOTAL_FRAMES,
          Math.max(1, Math.floor(self.progress * (TOTAL_FRAMES - 1)) + 1)
        );
        currentFrameIndexRef.current = frameIndex;
      },
    });

    // --- Draw loop ---
    const draw = () => {
      const { w, h } = dimensionsRef.current;

      // Clear
      ctx.fillStyle = "#030207";
      ctx.fillRect(0, 0, w, h);

      // --- Draw current frame (with loaded check & fallback) ---
      const targetFrame = currentFrameIndexRef.current;
      let img = imagesRef.current[targetFrame];

      // If the target frame is not loaded yet, search for the closest loaded frame
      if (!img || !img.complete || !img.naturalWidth) {
        let fallbackImg = null;
        // Search backwards first
        for (let i = targetFrame - 1; i >= 1; i--) {
          const checkImg = imagesRef.current[i];
          if (checkImg && checkImg.complete && checkImg.naturalWidth) {
            fallbackImg = checkImg;
            break;
          }
        }
        // If not found, search forwards
        if (!fallbackImg) {
          for (let i = targetFrame + 1; i <= TOTAL_FRAMES; i++) {
            const checkImg = imagesRef.current[i];
            if (checkImg && checkImg.complete && checkImg.naturalWidth) {
              fallbackImg = checkImg;
              break;
            }
          }
        }
        img = fallbackImg || img;
      }

      if (img && img.complete && img.naturalWidth) {
        const vw = img.naturalWidth;
        const vh = img.naturalHeight;
        const scale = Math.max(w / vw, h / vh);
        const dw = vw * scale;
        const dh = vh * scale;
        const dx = (w - dw) / 2;
        const dy = (h - dh) / 2;
        ctx.globalAlpha = 0.75;
        ctx.drawImage(img, dx, dy, dw, dh);
        ctx.globalAlpha = 1;
      }

      // --- Dark cinematic vignette ---
      const vignetteGrad = ctx.createRadialGradient(
        w / 2, h / 2, h * 0.15,
        w / 2, h / 2, h * 0.9
      );
      vignetteGrad.addColorStop(0, "rgba(3,2,7,0)");
      vignetteGrad.addColorStop(0.5, "rgba(3,2,7,0.3)");
      vignetteGrad.addColorStop(1, "rgba(3,2,7,0.85)");
      ctx.fillStyle = vignetteGrad;
      ctx.fillRect(0, 0, w, h);

      // --- Blood-red tinted edge vignette ---
      const bloodGrad = ctx.createRadialGradient(
        w / 2, h / 2, h * 0.3,
        w / 2, h / 2, h * 1.1
      );
      bloodGrad.addColorStop(0, "rgba(220,38,38,0)");
      bloodGrad.addColorStop(0.7, "rgba(220,38,38,0)");
      bloodGrad.addColorStop(1, "rgba(120,20,20,0.15)");
      ctx.fillStyle = bloodGrad;
      ctx.fillRect(0, 0, w, h);

      // --- Fog/smoke layer ---
      if (!reduce) {
        const time = Date.now() * 0.0001;
        const fogGrad = ctx.createLinearGradient(0, h * 0.6, 0, h);
        fogGrad.addColorStop(0, "rgba(3,2,7,0)");
        fogGrad.addColorStop(0.5, `rgba(15,10,12,${0.15 + Math.sin(time * 3) * 0.05})`);
        fogGrad.addColorStop(1, `rgba(3,2,7,${0.4 + Math.sin(time * 2) * 0.1})`);
        ctx.fillStyle = fogGrad;
        ctx.fillRect(0, 0, w, h);
      }

      // --- Embers ---
      if (!reduce) {
        for (let i = 0; i < embersRef.current.length; i++) {
          const e = embersRef.current[i];
          e.x += e.vx;
          e.y += e.vy;
          e.vx += (Math.random() - 0.5) * 0.04;
          e.life++;

          const lifeProgress = e.life / e.maxLife;
          const alpha = lifeProgress < 0.1
            ? e.opacity * (lifeProgress / 0.1)
            : lifeProgress > 0.8
            ? e.opacity * (1 - (lifeProgress - 0.8) / 0.2)
            : e.opacity;

          if (e.life >= e.maxLife || e.y < -20) {
            embersRef.current[i] = createEmber();
            continue;
          }

          const size = e.size * (1 - lifeProgress * 0.5);

          // Glow
          ctx.beginPath();
          ctx.arc(e.x, e.y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${e.hue}, 90%, 50%, ${alpha * 0.15})`;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(e.x, e.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${e.hue}, 95%, 60%, ${alpha})`;
          ctx.fill();
        }
      }

      // --- Bottom gradient fade (ensures sections blend) ---
      const bottomFade = ctx.createLinearGradient(0, h - 100, 0, h);
      bottomFade.addColorStop(0, "rgba(3,2,7,0)");
      bottomFade.addColorStop(1, "rgba(3,2,7,0.6)");
      ctx.fillStyle = bottomFade;
      ctx.fillRect(0, 0, w, h);

      // --- Subtle noise overlay ---
      ctx.globalAlpha = 0.03;
      for (let i = 0; i < 80; i++) {
        const nx = Math.random() * w;
        const ny = Math.random() * h;
        ctx.fillStyle = "#fff";
        ctx.fillRect(nx, ny, 1, 1);
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      scrollTrigger.kill();
      window.removeEventListener("resize", resize);
    };
  }, [createEmber]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
}
