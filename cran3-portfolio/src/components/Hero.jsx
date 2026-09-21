import { useEffect, useRef } from "react";
import GrainDigit from "../shared/GrainDigit";

const BLOB_SIZE = 420; // px diameter, also drives the clip-path radius

// Shared layout for both the white base text and the black "revealed
// inside the blob" text, so they stay pixel-identical. Both render the
// same flex row (text + a box the size of the grain mark) — only the
// base layer actually draws the mark; the overlay gets an empty
// placeholder the same size so the flex spacing distributes identically
// and the text doesn't drift between the two layers.
function HeroContent({ textColorClass, showMark }) {
  return (
    <div className="w-full px-6 md:px-10 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-8">
      <div
        className={`w-full lg:max-w-2xl text-center lg:text-left ${textColorClass}`}
      >
        <p className="text-xs md:text-sm font-medium tracking-[0.3em] opacity-60 mb-5">
          HI THERE, I'M
        </p>
        <h1
          className="font-black leading-[0.82] tracking-tight select-none"
          style={{ fontSize: "clamp(4.5rem, 15vw, 12.5rem)" }}
        >
          CRAN3
        </h1>
      </div>

      <div className="shrink-0 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px]">
        {showMark && <GrainDigit char="3" color="#ffed00" />}
      </div>
    </div>
  );
}

function Hero() {
  const sectionRef = useRef(null);
  const blobRef = useRef(null);
  const maskLayerRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const blobPos = useRef({ x: 0, y: 0 });
  const hasPosition = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const blob = blobRef.current;
    const maskLayer = maskLayerRef.current;
    if (!section || !blob || !maskLayer) return;

    let rafId;

    function handleMouseMove(e) {
      const rect = section.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      if (!hasPosition.current) {
        blobPos.current = { ...mouse.current };
        hasPosition.current = true;
      }
    }

    function handleMouseEnter() {
      blob.style.opacity = "1";
      maskLayer.style.opacity = "1";
    }

    function handleMouseLeave() {
      blob.style.opacity = "0";
      maskLayer.style.opacity = "0";
      hasPosition.current = false;
    }

    function animate() {
      const ease = 0.15;
      blobPos.current.x += (mouse.current.x - blobPos.current.x) * ease;
      blobPos.current.y += (mouse.current.y - blobPos.current.y) * ease;

      const { x, y } = blobPos.current;

      blob.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

      // Same center + radius as the blob itself, applied on the element
      // that shares the blob's coordinate origin (see HeroContent note
      // above) — that's what keeps the reveal registered to the blob.
      maskLayer.style.clipPath = `circle(${BLOB_SIZE / 2}px at ${x}px ${y}px)`;

      rafId = requestAnimationFrame(animate);
    }

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black flex items-center"
      data-aos="fade-up"
    >
      {/* Ambient glow behind the mark — purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[520px] md:h-[520px] rounded-full bg-[#ffed00]/10 blur-[110px]"
      />

      {/* Base layer: always-visible white text + the actual grain mark. */}
      <div className="absolute inset-0 flex items-center">
        <HeroContent textColorClass="text-white" showMark />
      </div>

      {/* The blob itself: a plain, crisp #ffed00 circle. */}
      <div
        ref={blobRef}
        aria-hidden="true"
        className="hidden md:block pointer-events-none absolute top-0 left-0 rounded-full opacity-0 transition-opacity duration-500 ease-out z-10"
        style={{
          width: BLOB_SIZE,
          height: BLOB_SIZE,
          background: "#ffed00",
        }}
      />

      {/* Overlay layer: black text, only ever visible inside the blob's
          circle. Same absolute inset-0 box as the base layer, which is
          what keeps its coordinate space aligned with the blob's. */}
      <div
        ref={maskLayerRef}
        aria-hidden="true"
        className="hidden md:flex items-center absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 ease-out z-20"
        style={{ clipPath: `circle(0px at 0px 0px)` }}
      >
        <HeroContent textColorClass="text-black" showMark={false} />
      </div>
    </section>
  );
}

export default Hero;
