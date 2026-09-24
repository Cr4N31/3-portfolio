import github from "/icons/github-svgrepo-com.svg";

function Footer() {
  return (
    <footer className="bg-[#f5f2eb] text-zinc-700 px-6 md:px-12 pt-24 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Bottom */}
        <div className="mt-24 pt-6 border-t border-zinc-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={github} alt="GitHub" className="w-5 h-5 opacity-60" />

            <a
              href="https://github.com/Cr4N31"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-500 hover:text-black transition-colors"
            >
              github.com/Cr4N31
            </a>
          </div>

          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} CRAN3. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
