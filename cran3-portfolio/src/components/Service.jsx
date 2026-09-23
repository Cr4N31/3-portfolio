import { useRef, useState, useLayoutEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
function Services() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 40%"],
  });
  const services = [
    {
      key: 1,
      title: "Full-Stack Engineering",
      desc: "End-to-end product builds, from schema design to shipped interface.",
      align: "items-start text-left md:items-start",
      offset: "md:mr-auto",
      anchor: "right",
    },
    {
      key: 2,
      title: "Systems & Data",
      desc: "Relational databases, APIs, and a growing focus on data structure and pipelines.",
      align: "items-start text-left md:items-end md:text-right",
      offset: "md:ml-auto",
      anchor: "left",
    },
    {
      key: 3,
      title: "Problem Solving",
      desc: "Turning ambiguous requirements into systems that hold up under real use.",
      align: "items-start text-left md:items-start",
      offset: "md:mr-auto md:ml-[8%]",
      anchor: "right",
    },
    {
      key: 4,
      title: "Emerging Tech",
      desc: "Blockchain-integrated builds and Web3 tooling, built on the same fundamentals.",
      align: "items-start text-left md:items-end md:text-right",
      offset: "md:ml-auto md:mr-[6%]",
      anchor: "left",
    },
  ];

  const nodeRefs = useRef([]);

  function ServiceItem({ item, nodeRef }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 90%", "start 30%"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [48, 0]);

    return (
      <motion.li
        ref={ref}
        style={{ opacity, y }}
        className={`relative z-10 flex max-w-xl flex-col gap-2 ${item.align} ${item.offset}`}
      >
        <span className="relative inline-flex items-center justify-center">
          <span className="absolute h-10 w-10 rounded-full bg-black/5 blur-xl" />
          <span className="relative text-[0.7rem] text-[#111111]/40 tabular-nums md:text-xs">
            0{item.key}
          </span>
        </span>

        <p
          ref={nodeRef}
          data-anchor={item.anchor}
          className="max-w-[16ch] font-serif text-[2rem] leading-[0.95] tracking-[-0.04em] text-[#111111] sm:text-[2.5rem] md:max-w-xl md:text-[2.6rem] lg:text-[3.4rem]"
        >
          {item.title}
        </p>
        <p className="max-w-[22ch] text-sm leading-snug text-[#111111]/70 sm:text-base md:max-w-xl md:text-xl">
          {item.desc}
        </p>
      </motion.li>
    );
  }

  function buildSmoothPath(points) {
    if (!points.length) return "";
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
    if (points.length === 2) {
      return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
    }

    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length - 1; i += 1) {
      const current = points[i];
      const next = points[i + 1];
      const midX = (current.x + next.x) / 2;
      const midY = (current.y + next.y) / 2;
      d += ` Q ${current.x} ${current.y} ${midX} ${midY}`;
    }

    const last = points[points.length - 1];
    d += ` T ${last.x} ${last.y}`;

    return d;
  }

  function ConstellationNode({ point, progress, arriveAt }) {
    const glow = useTransform(
      progress,
      [Math.max(arriveAt - 0.06, 0), arriveAt, Math.min(arriveAt + 0.12, 1)],
      [0, 1, 0.35],
    );

    return (
      <motion.circle
        cx={point.x}
        cy={point.y}
        r="2.5"
        fill="#030303"
        style={{ opacity: glow }}
      />
    );
  }

  function ConstellationLines({ containerRef, nodeRefs, progress }) {
    const [points, setPoints] = useState([]);
    const [size, setSize] = useState({ width: 0, height: 0 });

    const measure = useCallback(() => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const next = nodeRefs.current
        .filter(Boolean)
        .map((node) => {
          const rect = node.getBoundingClientRect();
          const anchor = node.dataset.anchor === "left" ? 0.18 : 0.82;

          return {
            x: rect.left - containerRect.left + rect.width * anchor,
            y: rect.top - containerRect.top + rect.height * 0.58,
          };
        })
        .filter(
          (point) =>
            Number.isFinite(point.x) &&
            Number.isFinite(point.y) &&
            point.x >= 0,
        );

      setPoints(next);
      setSize({ width: containerRect.width, height: containerRect.height });
    }, [containerRef, nodeRefs]);

    useLayoutEffect(() => {
      const update = () => {
        if (typeof window === "undefined") return;
        requestAnimationFrame(measure);
      };

      update();

      const ro = new ResizeObserver(update);
      if (containerRef.current) ro.observe(containerRef.current);

      window.addEventListener("resize", update);

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(update);
      }

      return () => {
        ro.disconnect();
        window.removeEventListener("resize", update);
      };
    }, [measure, containerRef]);

    const path = points.length > 1 ? buildSmoothPath(points) : "";
    // Was [0, 0.3, 1] -> [0.2, 0.9, 1]: the line started 20% drawn the
    // instant progress hit 0, and was 90% done by just 30% scroll — so it
    // looked pre-drawn well before the section was actually in view.
    // Tracking progress directly keeps it at 0 until scroll starts and
    // finishing exactly when the section's scroll range ends.
    const pathProgress = useTransform(progress, [0, 1], [0, 1]);

    return (
      <svg
        className="pointer-events-none absolute inset-0 z-0 hidden md:block"
        width={size.width}
        height={size.height}
        viewBox={`0 0 ${size.width} ${size.height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {path ? (
          <motion.path
            d={path}
            fill="none"
            stroke="#0c0c0c"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength: pathProgress, opacity: 0.9 }}
          />
        ) : null}

        {points.map((point, index) => (
          <ConstellationNode
            key={`${point.x}-${point.y}-${index}`}
            point={point}
            progress={progress}
            arriveAt={Math.max(
              points.length > 1 ? index / (points.length - 1) : 0,
              0,
            )}
          />
        ))}
      </svg>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-0 py-20 sm:px-0 md:px-8 md:py-48"
    >
      <div ref={containerRef} className="relative px-4 sm:px-6 md:px-0">
        <ConstellationLines
          containerRef={containerRef}
          nodeRefs={nodeRefs}
          progress={scrollYProgress}
        />

        <ul className="relative z-10 flex flex-col gap-12 md:gap-40">
          {services.map((item, i) => (
            <ServiceItem
              className="bg-[#f5f2eb]"
              key={item.key}
              item={item}
              nodeRef={(el) => {
                nodeRefs.current[i] = el;
              }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
