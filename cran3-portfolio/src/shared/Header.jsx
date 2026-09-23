import { useEffect, useState } from "react";
import HeaderImg from "../assets/file_0000000010f8620aa60d0a29c4fa0915.png";

function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initial = window.location.hash.replace("#", "") || "home";
      setActive(initial);
    }

    const onHashChange = () =>
      setActive(window.location.hash.replace("#", "") || "home");
    window.addEventListener("hashchange", onHashChange);

    const ids = ["home", "about", "services", "portfolio", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px", // triggers when section hits ~40% from top
        threshold: 0,
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className="hidden md:block fixed z-100 top-0 left-0 right-0 transition-all duration-500">
        <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <img
            className="w-16 animate-pulse"
            src={HeaderImg}
            alt="header-logo"
          />
          <ul className="flex text-sm gap-8">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setActive(id)}
                  aria-current={active === id ? "page" : undefined}
                  className={`transition-all duration-200 ${
                    active === id
                      ? "text-[#111111] border-b border-[#111111] pb-0.5"
                      : "text-zinc-600 hover:text-[#111111]"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
