const typewriter = new Typewriter (
    document.getElementById('typewriter'),{
        loop: true,
        delay: 75
    }
);

typewriter
.typeString("Frontend Developer")
.pauseFor("2000")
.deleteAll()
.typeString("UI/UX Designer")
.pauseFor("2000")
.deleteAll()
.typeString("Clean Code Lover")
.pauseFor("2000")
.deleteAll()
.typeString("Let's Work Together")
.pauseFor("2000")
.deleteAll()
.start();

// Initialize AOS  
AOS.init({  
  duration: 1000,  
  easing: "ease-out",  
  once: false,  
});

const toggleBtn = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const backdrop = document.getElementById('backdrop');

    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('translate-y-0');

      if (isOpen) {
        navMenu.classList.remove('translate-y-0');
        navMenu.classList.add('translate-y-[-100%]');
        backdrop.classList.add('hidden');
      } else {
        navMenu.classList.remove('translate-y-[-100%]');
        navMenu.classList.add('translate-y-0');
        backdrop.classList.remove('hidden');
      }
    });

    backdrop.addEventListener('click', () => {
      navMenu.classList.remove('translate-y-0');
      navMenu.classList.add('translate-y-[-100%]');
      backdrop.classList.add('hidden');
    });