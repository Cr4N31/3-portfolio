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

 // ===============================
// VERTICAL LINE (full page scroll)
// ===============================
const verticalLine = document.querySelector('.line');
let docHeight = document.documentElement.scrollHeight - window.innerHeight;

let targetPercent = 0;
let currentPercent = 0;

// recalc when resizing
window.addEventListener('resize', () => {
  docHeight = document.documentElement.scrollHeight - window.innerHeight;
});

// smooth animation loop
function animateVertical() {
  currentPercent += (targetPercent - currentPercent) * 0.1; // easing
  verticalLine.style.clipPath = `inset(0 0 ${100 - currentPercent * 100}% 0)`;
  requestAnimationFrame(animateVertical);
}

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  targetPercent = scrollTop / docHeight;
});

animateVertical(); // start loop


// ======================================
// HORIZONTAL NEON LINE (services section)
// ======================================
    const serviceBoxes = document.querySelectorAll("#servicesGrid .service-box");
    const grid = document.getElementById("servicesGrid");
    const section = document.getElementById("service");

    let lastScrollY = window.scrollY;

    function updateLine() {
      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((viewportHeight - sectionRect.top) / viewportHeight, 0),1
      );

      const lineWidth = progress * grid.offsetWidth;
      neonLine.style.width = `${lineWidth}px`;

      const boxWidth = grid.offsetWidth / serviceBoxes.length;
      const activeCount = Math.ceil(lineWidth / boxWidth);

      serviceBoxes.forEach((box, index) => {
        if (index < activeCount) {
          box.classList.add("active");
        } else {
          box.classList.remove("active");
        }
      });
    }

window.addEventListener("scroll", updateLine);
window.addEventListener("resize", updateLine);


window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("mainContent");

  // small delay so users see the loader
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
      loader.style.display = "none"; // fully remove
      content.classList.remove("hidden"); // show page
    }, 600); // match transition time
  }, 500); // adjust delay to your liking

    // Init AOS (once for better perf)
  AOS.init({
    once: false,
    duration: 700,
    easing: 'ease-out'
  });
});



