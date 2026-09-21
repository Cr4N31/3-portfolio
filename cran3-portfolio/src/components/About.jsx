import Img from "../assets/file_0000000010f8620aa60d0a29c4fa0915.png";
import { useEffect, useRef, useState } from "react";

const blocks = [
  {
    label: "Who I am",
    body: "I'm Bitrus, a frontend and full-stack developer based in Abuja, working under the name CRAN3. I got into this because I like watching an idea turn into something people can actually use in a browser, and I've kept at it because that part never gets old. Long term, I want to build a company that puts these skills to work for my own community, not just clients abroad.",
  },
  {
    label: "What I offer",
    body: "I work directly with clients from first conversation to shipped product, handling scope, design, and code myself rather than passing pieces down a pipeline. That means fewer handoffs, faster iteration, and someone who takes ownership when something needs fixing after launch, not just before.",
  },
  {
    label: "What I can do",
    body: "I build with React, Vite, Tailwind, Node, and Express, and I've shipped a wide range of things with that stack: NFT collection sites and a Web3 launchpad on Cronos, a Nigerian dropshipping storefront wired into WhatsApp sales, and full web revamps for existing businesses. Most recently I've been building an AI powered study tool for NOUN students using the Claude API, which pulled me deeper into product thinking beyond just the frontend.",
  },
  {
    label: "Where I'm expanding",
    body: "I'm also working in data engineering, with a solid grip on SQL and PostgreSQL from using them daily in production, and I'm now adding Python to round that out. The fundamentals, data modeling, storage, pipelines, aren't new territory for me; it's a direction I'm building toward deliberately, not just picking up as a side interest.",
  },
];

function About() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  // Measures the actual text block, decoupled from the visual bar's own
  // (often tiny, on mobile) size. This is what fixes the mobile bug.
  const contentRef = useRef(null);
  const blockRefs = useRef([]);
  const [fillPercent, setFillPercent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const content = contentRef.current;
    const sectionEl = sectionRef.current;
    if (!content || !sectionEl) return;

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewportMode = () => setIsMobile(mediaQuery.matches);

    let ticking = false;

    function update() {
      // Re-measure on every frame instead of caching scrollY + a stored
      // top offset. This makes it immune to mobile browsers resizing the
      // viewport mid-scroll (address bar collapsing, etc), which was the
      // other source of the mobile jank.
      const viewportHeight =
        window.visualViewport?.height ||
        window.innerHeight ||
        document.documentElement.clientHeight;

      const rect = content.getBoundingClientRect();
      const contentHeight = rect.height;

      // Progress = 0 when the content's top is 70% down the viewport
      // (about to enter). Progress = 1 when the content's bottom has
      // scrolled up to 35% down the viewport. This only drives the fill
      // line, not which block is active.
      const startLine = viewportHeight * 0.7;
      const endLine = viewportHeight * 0.35;

      const span = startLine - endLine + contentHeight;
      let progress = span > 0 ? (startLine - rect.top) / span : 0;
      progress = Math.min(Math.max(progress, 0), 1);

      setFillPercent(progress * 100);

      // Active block = whichever block's own center is closest to a fixed
      // focus line in the viewport. This is measured per-block instead of
      // splitting overall progress into equal 1/blocks.length chunks, so
      // it stays correct however many blocks there are and however long
      // each one's text runs.
      const focusLine = viewportHeight * 0.45;
      let closestIndex = 0;
      let closestDistance = Infinity;

      blockRefs.current.forEach((el, i) => {
        if (!el) return;
        const blockRect = el.getBoundingClientRect();
        const blockCenter = blockRect.top + blockRect.height / 2;
        const distance = Math.abs(blockCenter - focusLine);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    updateViewportMode();
    mediaQuery.addEventListener("change", updateViewportMode);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.visualViewport?.addEventListener("resize", onScroll, {
      passive: true,
    });
    window.visualViewport?.addEventListener("scroll", onScroll, {
      passive: true,
    });

    // Content height can change after images/fonts load, which shifts the
    // scroll math — keep progress accurate when that happens.
    const resizeObserver = new ResizeObserver(onScroll);
    resizeObserver.observe(content);

    update();

    return () => {
      mediaQuery.removeEventListener("change", updateViewportMode);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.visualViewport?.removeEventListener("resize", onScroll);
      window.visualViewport?.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mb-24 px-4 md:px-12 lg:px-12"
      id="about"
      data-aos="fade-up"
    >
      <h1 className="headline text-center text-[#ffed00] text-4xl font-bold uppercase mb-8">
        About
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        <div className="w-full max-w-xl">
          <div
            ref={trackRef}
            className="relative mb-8 h-1 w-full overflow-hidden rounded-full bg-black/10 md:mb-0 md:h-auto md:w-[2px] md:flex-shrink-0 md:self-stretch"
            aria-hidden="true"
          >
            <div
              className="absolute left-0 top-0 rounded-full bg-[#ffed00] transition-[width,height] duration-100 ease-out"
              style={
                isMobile
                  ? { width: `${fillPercent}%`, height: "100%" }
                  : { width: "100%", height: `${fillPercent}%` }
              }
            />
          </div>

          <div
            ref={contentRef}
            className="about font-normal flex flex-col gap-10"
          >
            {blocks.map((block, i) => (
              <div
                key={block.label}
                ref={(el) => (blockRefs.current[i] = el)}
                className="transition-opacity duration-300"
                style={{ opacity: activeIndex === i ? 1 : 0.55 }}
              >
                <p className="text-[#ffed00] text-xs font-semibold uppercase tracking-widest mb-3">
                  {block.label}
                </p>
                <p className="text-lg md:text-xl black leading-[1.60]">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="image-section w-full max-w-md">
          <img className="w-full h-auto" src={Img} alt="About Me Image" />
        </div>
      </div>
    </section>
  );
}

export default About;
