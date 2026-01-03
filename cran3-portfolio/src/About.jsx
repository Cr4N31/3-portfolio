import Img from './assets/file_0000000010f8620aa60d0a29c4fa0915.png';
import { useEffect, useRef } from 'react';
function About() {

const sectionRef = useRef(null);
const verticalLineRef = useRef(null);

  useEffect(() => {
    const verticalLine = verticalLineRef.current;
    const sectionEl = sectionRef.current;
    if (!verticalLine || !sectionEl) return;

    let animationId;

    function update() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const sectionTop = sectionEl.offsetTop;
      const sectionHeight = sectionEl.offsetHeight;

      // Start when section top reaches bottom of viewport, end when section bottom passes top
      const start = sectionTop - window.innerHeight;
      const end = sectionTop + sectionHeight;

      let progress = (scrollTop - start) / (end - start);
      progress = Math.min(Math.max(progress, 0), 1);

      // Directly map progress to clip-path so it moves in sync with scroll
      verticalLine.style.clipPath = `inset(0 0 ${100 - progress * 100}% 0)`;

      animationId = requestAnimationFrame(update);
    }

    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);

    // initialize once
    update();

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      cancelAnimationFrame(animationId);
    };
  }, []);

    return(
    <section ref={sectionRef} className="mb-24 px-4 md:px-12 lg:px-12" id="about" data-aos="fade-up">
        <h1 className="headline text-center text-[#ffed00] text-4xl font-bold uppercase mb-8">About</h1>
        <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="about font-normal text-center lg:text-left max-w-xl">
            <p className="text-lg md:text-xl black leading-relaxed md:pl-8 pl-0 space-y-6">
                <span>I'm a <span className="text-[#ffed00]">frontend developer</span> with a focus on building
                <span className="text-[#ffed00]"> responsive and user-friendly</span> websites using
                <span className="text-[#ffed00]"> HTML, CSS3, React.js, Next.js, TypeScript, Tailwind CSS,</span> and more.</span>
                <span> I've worked on projects ranging from <span className="text-[#ffed00]">crypto landing pages to
                    e-commerce sites</span>, always aiming for <span className="text-[#ffed00]">smooth design and
                    performance</span>.</span>
                <span> I'm passionate about learning new tools, improving my craft, and
                <span className="text-[#ffed00]"> turning ideas into well-built digital experiences</span>.</span>
            </p>
            </div>
            <div
                ref={verticalLineRef}
                className="hidden md:block w-[2px] bg-[#ffed00] self-stretch relative"
                style={{ clipPath: 'inset(0 0 100% 0)' }}
                aria-hidden="true"
            />
            <div className="image-section w-full max-w-md">
            <img className="w-full h-auto" src={Img} alt="About Me Image"/>
            </div>
        </div>
    </section>
    )
}

export default About