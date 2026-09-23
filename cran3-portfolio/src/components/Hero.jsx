import CodeIllustration from "../shared/CodeIllustration";

function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="relative min-h-screen overflow-hidden bg-[#f5f2eb] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#111111] leading-tight flex flex-wrap items-center gap-x-3">
            Hi, I'm
            <span className="inline-flex w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#ffed00] text-black items-center justify-center text-lg md:text-2xl font-bold">
              Y
            </span>
            Yacham!
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-1">
            <span className="text-[#111111]/40 font-normal">I'm a</span>{" "}
            <span className="text-[#111111]">Fullstack Engineer</span>
          </h2>
        </div>

        {/* Line-art illustration — draws itself in on mount. */}
        <div className="shrink-0 w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px] aspect-[380/520]">
          <CodeIllustration className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
