import { useEffect, useRef } from "react";

function GrainDigit({
  char = "3",
  color = "#ffed00",
  seed = 1337,
  // Hard cap in px, both width and height. This is what stops the canvas
  // from filling the whole viewport if whatever wraps it doesn't give it
  // an explicit size (the mobile bug) — it will still shrink smaller for
  // a tighter parent, it just can never grow past this.
  maxSize = 280,
  className = "",
}) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let rafId;
    let widthCss = 0;
    let heightCss = 0;

    // Builds the particle list for the current canvas size: which dots
    // exist, their base position, size, and their own drift phase/speed.
    // Does not draw anything itself.
    function layout() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      widthCss = rect.width;
      heightCss = rect.height;
      if (widthCss === 0 || heightCss === 0) return;

      canvas.width = widthCss * dpr;
      canvas.height = heightCss * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Rasterize the glyph offscreen at the same size, purely to read
      // back which pixels are "inside" the character.
      const sample = document.createElement("canvas");
      sample.width = widthCss;
      sample.height = heightCss;
      const sctx = sample.getContext("2d");
      sctx.fillStyle = "#ffed00";
      sctx.font = `900 ${heightCss * 0.95}px Arial, sans-serif`;
      sctx.textAlign = "center";
      sctx.textBaseline = "middle";
      sctx.fillText(char, widthCss / 2, heightCss / 2 + heightCss * 0.02);
      const glyph = sctx.getImageData(0, 0, widthCss, heightCss).data;

      // Simple seeded PRNG (Park-Miller) so the base layout is
      // deterministic rather than different on every render.
      let s = seed;
      const rand = () => {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
      };

      const step = Math.max(4, Math.round(widthCss / 85));
      const particles = [];

      for (let y = 0; y < heightCss; y += step) {
        for (let x = 0; x < widthCss; x += step) {
          const idx = (Math.floor(y) * widthCss + Math.floor(x)) * 4;
          const alpha = glyph[idx + 3];
          if (alpha < 90) continue; // outside the glyph shape

          if (rand() < 0.18) continue; // uneven density, not a rigid grid

          const jitterX = (rand() - 0.5) * step * 0.9;
          const jitterY = (rand() - 0.5) * step * 0.9;

          particles.push({
            baseX: x + jitterX,
            baseY: y + jitterY,
            radius: 1 + rand() * 2.6,
            alphaBase: 0.55 + rand() * 0.45,
            // Own drift: small amplitude so the "3" stays readable, own
            // phase/speed so dots don't all move in lockstep.
            ampX: 0.6 + rand() * 1.8,
            ampY: 0.6 + rand() * 1.8,
            phase: rand() * Math.PI * 2,
            speed: 0.00035 + rand() * 0.00055,
            flickerPhase: rand() * Math.PI * 2,
            flickerSpeed: 0.0006 + rand() * 0.0009,
          });
        }
      }

      particlesRef.current = particles;
    }

    function renderFrame(time) {
      if (widthCss && heightCss) {
        ctx.clearRect(0, 0, widthCss, heightCss);
        ctx.fillStyle = color;

        for (const p of particlesRef.current) {
          const dx = Math.sin(time * p.speed + p.phase) * p.ampX;
          const dy = Math.cos(time * p.speed * 0.8 + p.phase) * p.ampY;
          const flicker =
            0.85 + 0.15 * Math.sin(time * p.flickerSpeed + p.flickerPhase);

          ctx.globalAlpha = p.alphaBase * flicker;
          ctx.beginPath();
          ctx.arc(p.baseX + dx, p.baseY + dy, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
      rafId = requestAnimationFrame(renderFrame);
    }

    layout();
    rafId = requestAnimationFrame(renderFrame);

    function handleResize() {
      layout();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, [char, color, seed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`block w-full h-full aspect-square mx-auto ${className}`}
      style={{ maxWidth: maxSize, maxHeight: maxSize }}
    />
  );
}

export default GrainDigit;
