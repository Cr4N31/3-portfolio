import Header from './Header'
import Hero from './Hero'
import About from './About' 
import Service from './service'
import Portfolio from './Portfolio'
import Contact from './contact'
import Footer from './footer'
import { useEffect } from 'react';
import AOS from 'aos';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false, // animation runs only once
    });
  }, []);

  return (
    <div className='bg-black text-white scroll-smooth'>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
