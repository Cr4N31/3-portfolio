import { useEffect, useState } from "react";
import HeaderImg from "./assets/file_0000000010f8620aa60d0a29c4fa0915.png";

function Header() {
    const [active, setActive] = useState('home');

    useEffect(() => {
        // initialize from hash if present
        if (typeof window !== 'undefined') {
            const initial = window.location.hash.replace('#', '') || 'home';
            setActive(initial);
        }

        const onHashChange = () => setActive(window.location.hash.replace('#', '') || 'home');
        window.addEventListener('hashchange', onHashChange);

        // Observe sections to update active link on scroll
        const ids = ['home', 'about', 'services', 'portfolio', 'contact'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { root: null, threshold: 0.5 }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('hashchange', onHashChange);
            observer.disconnect();
        };
    }, []);

    return(
        <>
            <header className="hidden md:block fixed z-100 top-0 left-0 right-0 bg-black">
                <nav className="flex font-space-grotesk items-center justify-between p-4 max-w-7xl mx-auto"> 
                    <img className="w-16 " src={HeaderImg} alt="header-logo"/>
                    <ul className="flex gap-6">
                        <li>
                            <a
                                href="#home"
                                onClick={() => setActive('home')}
                                aria-current={active === 'home' ? 'page' : undefined}
                                className={`transition-colors duration-150 ${active === 'home' ? 'text-yellow-600' : 'text-[#ffed00] hover:text-[#e6d400]'}`}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={() => setActive('about')}
                                aria-current={active === 'about' ? 'page' : undefined}
                                className={`transition-colors duration-150 ${active === 'about' ? 'text-yellow-600' : 'text-[#ffed00] hover:text-[#e6d400]'}`}>
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                onClick={() => setActive('services')}
                                aria-current={active === 'services' ? 'page' : undefined}
                                className={`transition-colors duration-150 ${active === 'services' ? 'text-yellow-600' : 'text-[#ffed00] hover:text-[#e6d400]'}`}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                onClick={() => setActive('portfolio')}
                                aria-current={active === 'portfolio' ? 'page' : undefined}
                                className={`transition-colors duration-150 ${active === 'portfolio' ? 'text-yellow-600' : 'text-[#ffed00] hover:text-[#e6d400]'}`}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={() => setActive('contact')}
                                aria-current={active === 'contact' ? 'page' : undefined}
                                className={`transition-colors duration-150 ${active === 'contact' ? 'text-yellow-600' : 'text-[#ffed00] hover:text-[#e6d400]'}`}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header 