import Header from "./shared/Header";
import StackedHero from "./shared/StackedHero";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./shared/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false, // animation runs only once
    });
  }, []);

  return (
    <div className="bg-black text-white scroll-smooth">
      <Header />
      <StackedHero>
        <Hero />
      </StackedHero>
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
