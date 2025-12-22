import { useEffect, useState } from "react";

function Hero() {
    const words = ["FullStack Developer", "React Developer", "UI/UX Enthusiast", "Animation Lover"];
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
      let timer;
      const current = words[wordIndex % words.length];
      const speed = isDeleting ? 50 : 100;

      if (!isDeleting && text === current) {
        timer = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 500);
      } else {
        timer = setTimeout(() => {
          setText((prev) =>
            isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
          );
        }, speed);
      }

      return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex]);




    return(
        <section id="home" className="min-h-screen flex items-center justify-center lg:justify-start relative" data-aos="fade-up"> 
            <div id="particles-js" className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
            <div className="w-full px-6 md:px-10 lg:px-20 py-16">
                <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
                    <h1 className="headline text text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        HI THERE!, I'M CRAN<span className="text-[#ffed00]">3</span>
                    </h1>
                    <h2 id="typewriter" aria-live="polite" className="pt-4 text-2xl md:text-3xl lg:text-4xl text-[#ffed00]">{text}<span className="ml-1 text-[#ffed00] animate-pulse">|</span></h2>
                    <a href="#portfolio"
                       className="border border-2 p-2 inline-block mt-8 hover:p-3 transition-all duration-300">
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero