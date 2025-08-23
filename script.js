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

new mojs.Shape({
  parent:       '#deltaeasing',
  shape:        'circle',
  scale:        { 0 : 1, easing: 'cubic.out' },
  fill:         { 'cyan': 'yellow', easing: 'cubic.in' },

  duration:     2000,
  repeat:       2,
})