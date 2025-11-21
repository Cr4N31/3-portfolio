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
    Math.max((viewportHeight - sectionRect.top) / viewportHeight, 0), 1
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


const projects = {
    balls: {
      title: "$BALLS Web Platform",
      imageUrl: "/3-portfolio/img/balls.png",
      description: `A marketing platform for the $BALLS token community with Web3 integrations.
                    The $BALLS community is on a new path. Originally a Cronos meme token, $BALLS is now focused on bringing the catchy and funny $BALLS meme to new chains where HYPE and excitement exist. 
                    We're always hunting for exciting new ways to win in the crypto space. Our goal is simple - FOLLOW THE HYPE, have fun and make money together as a community. 
                    That's all $BALLS has ever been about. 
                  `,
      client: "@defibeannation(X)",
      linkUrl: "https://www.myballs.me/",
    },
    pris: {
      title: "PRIS LTD",
      imageUrl: "/3-portfolio/img/prisltd.png",
      description: `A static website built for a real estate/construction firm, with responsive maps and UI design. 
                    The technoloies involved were HTML as the markup language, Tailwindcss for styling and 
                    Javascript for responsiveness and the fetching of the api from google maps.
                    It features only one page with a home, gallery, profile, about, statistics & service and contact section.
                    PRESHUX RESOURCES AND INTEGRATED SERVICES LIMITED (PRIS) with RC. 7290545 is a registered business name with corporate affairs commission of the Federal Republic of Nigeria in accordance with 
                    "companies and allied matters act 1990", pursuant to section 659. 
                    Registered and certified for the general nature of the above mentioned business.
                  `,
      client: "@pris_nig(IG)", 
      linkUrl: "https://prisltd.netlify.app/",
    },
    crofam: {
      title: "Crofam Token Landing",
      imageUrl: "/3-portfolio/img/Crofam.png",
      description: "A fun token landing page with crypto branding and smooth UI/UX experience.",
      linkUrl: "",
    },
    boots: {
      title: "BulletinBoots Token",
      imageUrl: "/3-portfolio/img/bulletinb.png",
      description: "A bold, energetic meme token site powered by Cronos, built with animations and UI polish.",
      linkUrl: "https://www.bulletinboots.com/",
    },
    eric: {
      title: "$ERIC Token Promo",
      imageUrl: "/3-portfolio/img/Eric.png",
      description: "An eye-catching animated promo page crafted to boost traction for the $ERIC token.",
      linkUrl: "",
    },
  };

  const modal = document.getElementById('modal');
  const modalBox = document.getElementById('modalBox');
  const modalContent = document.getElementById('modalContent');
  const closeModal = document.getElementById('closeModal');

  document.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-project');
      const project = projects[key];
      if( project.linkUrl.trim() === "" ){
        modalBox.style.backgroundImage = `url('${project.imageUrl}')`;
        modalContent.innerHTML = `
          <h2 class="text-2xl text-[#ffed00] font-bold mb-2">${project.title}</h2>
          <p class="text-sm leading-relaxed">${project.description}</p>
          <p class="text-sm font-semibold text-[#ffed00] mt-2">Client:&nbsp:${project.client}</p>
          <p class="text-grey-200 italic mt-4 text-sm">Live preview not available</p>
        `;
      } else{
        modalBox.style.backgroundImage = `url('${project.imageUrl}')`;
        modalContent.innerHTML = `
          <h2 class="text-2xl text-[#ffed00] font-bold mb-2">${project.title}</h2>
          <p class="text-sm leading-relaxed">${project.description}</p>
           <p class="text-sm font-semibold mt-2 mb-6 text-[#ffed00]">Client:&nbsp:${project.client}</p>
          <a href=${project.linkUrl} class="text-[#ffed00] hover:text-yellow-600 transition-all ease mt-4 text-sm">Live preview</a>
        `;
      }

      modal.classList.remove('opacity-0', 'pointer-events-none');
    });
  });


  closeModal.addEventListener('click', () => {
    modal.classList.add('opacity-0', 'pointer-events-none');
  });


