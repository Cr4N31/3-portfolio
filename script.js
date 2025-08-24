// script.js

// Init AOS (once for better perf)
AOS.init({
  once: false,
  duration: 700,
  easing: 'ease-out'
});

// Typewriter on subheadline
const twEl = document.getElementById('typewriter');
if (twEl && window.Typewriter) {
  const tw = new Typewriter(twEl, { loop: true, delay: 35, deleteSpeed: 20 });
  tw
    .typeString("Frontend Developer")
    .pauseFor(1000)
    .deleteAll()
    .typeString("UI Engineer")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Animation Lover")
    .pauseFor(1000)
    .start();
}

// Particles.js configuration
particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    shape: { type: "circle" },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true, distance: 150 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
  },
});

 const line = document.querySelector('.line');
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;

    let targetPercent = 0;
    let currentPercent = 0;

    // recalc when resizing
    window.addEventListener('resize', () => {
      docHeight = document.documentElement.scrollHeight - window.innerHeight;
    });

    // smooth animation loop
    function animate() {
      currentPercent += (targetPercent - currentPercent) * 0.1; // easing
      line.style.clipPath = `inset(0 0 ${100 - currentPercent * 100}% 0)`;
      requestAnimationFrame(animate);
    }

    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY;
      targetPercent = scrollTop / docHeight;
    });

    animate(); // start loop