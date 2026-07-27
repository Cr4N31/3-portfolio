import Img from '../assets/file_0000000010f8620aa60d0a29c4fa0915.png';
import { useEffect, useRef, useState } from 'react';

const blocks = [
  {
    label: 'Who I am',
    body: "I'm Bitrus, a frontend and full-stack developer based in Abuja, working under the name CRAN3. I got into this because I like watching an idea turn into something people can actually use in a browser, and I've kept at it because that part never gets old. Long term, I want to build a company that puts these skills to work for my own community, not just clients abroad.",
  },
  {
    label: 'What I offer',
    body: 'I work directly with clients from first conversation to shipped product, handling scope, design, and code myself rather than passing pieces down a pipeline. That means fewer handoffs, faster iteration, and someone who takes ownership when something needs fixing after launch, not just before.',
  },
  {
    label: 'What I can do',
    body: "I build with React, Vite, Tailwind, Node, and Express, and I've shipped a wide range of things with that stack: NFT collection sites and a Web3 launchpad on Cronos, a Nigerian dropshipping storefront wired into WhatsApp sales, and full web revamps for existing businesses. Most recently I've been building an AI powered study tool for NOUN students using the Claude API, which pulled me deeper into product thinking beyond just the frontend.",
  },
];

function About() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const blockRefs = useRef([]);
  const [fillPercent, setFillPercent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const sectionEl = sectionRef.current;
    if (!track || !sectionEl) return;

    let ticking = false;

    function update() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const trackTop = track.getBoundingClientRect().top + scrollTop;
      const trackHeight = track.offsetHeight;

      const start = trackTop - window.innerHeight * 0.6;
      const end = trackTop + trackHeight - window.innerHeight * 0.4;

      let progress = (scrollTop - start) / (end - start);
      progress = Math.min(Math.max(progress, 0), 1);

      setFillPercent(progress * 100);
      setActiveIndex(Math.min(blocks.length - 1, Math.floor(progress * blocks.length)));

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
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
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="flex gap-8 max-w-xl w-full">
          <div
            ref={trackRef}
            className="hidden md:block w-[2px] flex-shrink-0 bg-black/10 self-stretch relative rounded-full"
            aria-hidden="true"
          >
            <div
              className="absolute top-0 left-0 w-full bg-[#ffed00] rounded-full"
              style={{ height: `${fillPercent}%` }}
            />
          </div>

          <div className="about font-normal flex flex-col gap-10">
            {blocks.map((block, i) => (
              <div
                key={block.label}
                ref={(el) => (blockRefs.current[i] = el)}
                className="transition-opacity duration-300"
                style={{ opacity: activeIndex === i ? 1 : 0.55 }}
              >
                <p className="text-[#ffed00] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  {block.label}
                </p>
                <p className="text-lg md:text-xl black leading-relaxed">
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