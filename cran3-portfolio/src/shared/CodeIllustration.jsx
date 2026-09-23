import { motion } from "framer-motion";

// Small helper: a "ribbon" outline — a rectangle with a triangular notch
// cut into its left edge, matching the floating code-banner shapes in the
// reference illustration.
function ribbonPath(x, y, w, h, notch = 14) {
  return `M ${x + notch} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${
    x + notch
  } ${y + h} L ${x} ${y + h / 2} Z`;
}

// Deterministic short "code line" rows inside a panel — varied lengths so
// it reads as text rather than a rigid grid, but stable across reloads.
function codeLines(
  x,
  yStart,
  count,
  { minW = 18, maxW = 65, gap = 11, seed = 1 } = {},
) {
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  return Array.from({ length: count }, (_, i) => ({
    y: yStart + i * gap,
    x1: x,
    x2: x + minW + rand() * (maxW - minW),
  }));
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.018, delayChildren: 0.1 },
  },
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

const STROKE = {
  stroke: "#000000",
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function CodeIllustration({ className = "" }) {
  // Panels
  const panelA = codeLines(160, 46, 8, { seed: 11 }); // top-right big code panel
  const panelC = codeLines(52, 182, 10, { seed: 22, maxW: 90 }); // left tall code panel
  const monitorLines = codeLines(115, 320, 8, { seed: 33, maxW: 60 });

  return (
    <svg
      viewBox="0 0 380 520"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <motion.g
        variants={container}
        initial="hidden"
        animate="visible"
        strokeWidth={1.5}
      >
        {/* Backdrop panel */}
        <motion.rect
          variants={draw}
          x={30}
          y={16}
          width={300}
          height={470}
          rx={16}
          strokeWidth={1.2}
          opacity={0.5}
          {...STROKE}
        />

        {/* Top-right code banner */}
        <motion.path
          variants={draw}
          d={ribbonPath(150, 30, 210, 130)}
          strokeWidth={2}
          {...STROKE}
        />
        {panelA.map((l, i) => (
          <motion.line
            key={`a-${i}`}
            variants={draw}
            x1={l.x1}
            y1={l.y}
            x2={l.x2}
            y2={l.y}
            strokeWidth={2.5}
            {...STROKE}
          />
        ))}

        {/* Small ribbon, upper-left */}
        <motion.path
          variants={draw}
          d={ribbonPath(38, 108, 110, 42)}
          strokeWidth={2}
          {...STROKE}
        />

        {/* Left tall code panel */}
        <motion.path
          variants={draw}
          d={ribbonPath(38, 165, 150, 150)}
          strokeWidth={2}
          {...STROKE}
        />
        {panelC.map((l, i) => (
          <motion.line
            key={`c-${i}`}
            variants={draw}
            x1={l.x1}
            y1={l.y}
            x2={l.x2}
            y2={l.y}
            strokeWidth={2.5}
            {...STROKE}
          />
        ))}

        {/* Mid ribbon banner */}
        <motion.path
          variants={draw}
          d={ribbonPath(190, 195, 170, 60)}
          strokeWidth={2}
          {...STROKE}
        />

        {/* Small accent tag */}
        <motion.path
          variants={draw}
          d={ribbonPath(14, 248, 80, 30)}
          strokeWidth={1.8}
          {...STROKE}
        />

        {/* Monitor */}
        <motion.rect
          variants={draw}
          x={45}
          y={300}
          width={170}
          height={130}
          rx={8}
          strokeWidth={2}
          {...STROKE}
        />
        <motion.rect
          variants={draw}
          x={58}
          y={315}
          width={45}
          height={100}
          rx={3}
          strokeWidth={2}
          {...STROKE}
        />
        {monitorLines.map((l, i) => (
          <motion.line
            key={`m-${i}`}
            variants={draw}
            x1={l.x1}
            y1={l.y}
            x2={l.x2}
            y2={l.y}
            strokeWidth={2.2}
            {...STROKE}
          />
        ))}

        {/* Monitor stand */}
        <motion.path
          variants={draw}
          d="M 110 430 L 150 430 L 142 452 L 118 452 Z"
          strokeWidth={2}
          {...STROKE}
        />
        <motion.line
          variants={draw}
          x1={95}
          y1={462}
          x2={165}
          y2={462}
          strokeWidth={2}
          {...STROKE}
        />

        {/* Bottom ribbon (keyboard tray) */}
        <motion.path
          variants={draw}
          d={ribbonPath(38, 398, 195, 52)}
          strokeWidth={2}
          {...STROKE}
        />

        {/* Person: curly hair */}
        <motion.path
          variants={draw}
          d="M 218 270
             C 210 250, 222 232, 244 228
             C 252 214, 274 212, 286 224
             C 302 220, 316 234, 312 250
             C 326 258, 324 278, 308 284
             C 306 300, 286 306, 274 296
             C 262 306, 244 302, 240 288
             C 224 290, 214 282, 218 270 Z"
          strokeWidth={2}
          {...STROKE}
        />

        {/* Head/jaw + shoulder + back, sweeping to the chair */}
        <motion.path
          variants={draw}
          d="M 240 288
             C 236 300, 238 312, 248 320
             C 232 332, 208 348, 202 378
             C 196 412, 200 452, 208 490"
          strokeWidth={2}
          {...STROKE}
        />
        <motion.path
          variants={draw}
          d="M 274 296
             C 292 310, 316 322, 326 346
             C 336 372, 332 420, 322 490"
          strokeWidth={2}
          {...STROKE}
        />

        {/* Chair back, behind the person */}
        <motion.path
          variants={draw}
          d="M 330 330
             C 350 350, 352 420, 340 490"
          strokeWidth={1.6}
          opacity={0.6}
          {...STROKE}
        />

        {/* Mic boom + mic head */}
        <motion.path
          variants={draw}
          d="M 252 300 C 220 320, 190 340, 172 366"
          strokeWidth={1.8}
          {...STROKE}
        />
        <motion.circle
          variants={draw}
          cx={168}
          cy={374}
          r={7}
          strokeWidth={1.8}
          {...STROKE}
        />
      </motion.g>
    </svg>
  );
}

export default CodeIllustration;
