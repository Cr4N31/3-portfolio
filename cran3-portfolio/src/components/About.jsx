import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.25, 1, 0.25]);

  return (
    <section className="px-9 py-20 sm:px-0 md:px-8 md:py-32" ref={ref}>
      <motion.div
        style={{ opacity }}
        data-aos="fade-up"
        className="relative text-left mt-14 md:mt-20"
      >
        <div className="font-serif leading-[1.2]">
          <p className="max-w-4xl text-2xl text-[#111111] md:text-4xl lg:text-5xl">
            A self-taught engineer based in Abuja, working under{" "}
            <span className="text-[#ffed00]">CRAN3</span> mostly React, Node,
            and Postgres, with the occasional dip into Web3 when a project calls
            for it. I've handled web revamps, NFT collection sites, a
            Cronos-based launchpad, and an AI-assisted study tool for
            distance-learning students, usually from first conversation through
            to what's actually shipped. Lately I've been spending more time with
            data, extending rather than replacing what I already do. I keep
            things fairly quiet, steady work, structure over noise, and a
            long-term plan to build{" "}
            <span className="text-[#ffed00]">closer to home</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
