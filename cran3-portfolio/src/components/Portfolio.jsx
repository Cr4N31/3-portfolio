import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CursorWarpField from "../context/CursorWarpField";
import forfoxsake from "../assets/img/forfoxsake.png";
import NewWolfOrder from "../assets/img/NewWolfOrder.png";
import ApexHuntress from "../assets/img/ApexHuntress.png";
import Maxify from "../assets/img/maxify.png";
import OneclickTutors from "../assets/img/OneclickTutors.png";

const projectImgs = import.meta.glob(
  "../assets/img/projects/**/*.{png,jpg,jpeg}",
  { eager: true },
);

const getGallery = (folder) =>
  Object.entries(projectImgs)
    .filter(([path]) => path.includes(`/projects/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Grid card: cover image gets the cursor-warp hover distortion, click
// kicks off the shared layoutId zoom into the full detail overlay.
function ProjectCard({ p, onOpen }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="group"
    >
      <CursorWarpField intensity={26} className="block">
        <button
          type="button"
          onClick={() => onOpen(p)}
          className="block w-full relative aspect-[3/2] overflow-hidden rounded-2xl bg-black/5 text-left"
        >
          <motion.img
            layoutId={`project-image-${p.id}`}
            src={p.img}
            alt={`${p.title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </button>
      </CursorWarpField>

      <div className="mt-5">
        {p.stacks?.length > 0 && (
          <span className="block text-black/40 text-[11px] uppercase tracking-widest">
            {p.stacks.join(" • ")}
          </span>
        )}

        <div className="flex items-center mt-2">
          <span className="inline-block overflow-hidden w-0 group-hover:w-7 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
            <span className="text-black text-2xl md:text-3xl pr-2">›</span>
          </span>
          <span className="text-black text-2xl md:text-3xl">{p.title}</span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectOverlay({ project, onClose }) {
  const gallery = project ? getGallery(project.folder) : [];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[999] bg-white overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="fixed top-6 right-6 z-10 w-10 h-10 rounded-full border border-black/20 text-black flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            ×
          </button>

          <div className="max-w-4xl mx-auto px-6 md:px-0 py-24">
            <motion.img
              layoutId={`project-image-${project.id}`}
              src={project.img}
              alt={`${project.title} screenshot`}
              className="w-full aspect-[3/2] object-cover rounded-2xl"
            />

            <h3 className="font-serif text-3xl md:text-5xl text-black mt-8">
              {project.title}
            </h3>
            <p className="text-black/60 mt-3 max-w-2xl">{project.desc}</p>

            {project.stacks?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {project.stacks.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-3 py-1 rounded-full border border-black/15 text-black/70 bg-black/5 tracking-wide"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <a
                href={project.link || "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noreferrer" : undefined}
                className={`text-sm border rounded-full px-4 py-1.5 transition-colors duration-200 ${
                  project.link
                    ? "border-black/20 text-black hover:bg-black/10"
                    : "border-black/10 text-black/40 pointer-events-none"
                }`}
              >
                {project.link ? "View Project →" : "Live preview unavailable"}
              </a>
            </div>

            {gallery.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-10">
                {gallery.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`${project.title} gallery ${idx + 1}`}
                    className="w-full h-40 object-cover rounded-xl border border-black/10"
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const portfolio = [
    {
      id: "ffs",
      folder: "ffs",
      title: "For Fox Sake Dapp",
      desc: "Fullstack dApp built for the FFS (For Fox Sake) token on the Cronos network.",
      stacks: ["PERN", "Reown", "TailwindCSS", "Vercel", "Render", "Supabase"],
      img: forfoxsake,
      link: "https://forfoxsakecro.de/",
    },
    {
      id: "nwo",
      folder: "nwo",
      title: "New Wolf Order",
      desc: "A Web3 launchpad on the Cronos network with a full component library and dark-first design system.",
      stacks: ["React", "Web3.js", "TailwindCSS", "Vercel"],
      img: NewWolfOrder,
      link: "https://new-wolf-order.vercel.app/",
    },
    {
      id: "apex-huntress",
      folder: "apex-huntress",
      title: "Apex Huntress",
      desc: "A 369-piece NFT collection site built on the Cronos network.",
      stacks: ["React", "Vite", "TailwindCSS", "Vercel"],
      img: ApexHuntress,
      link: "https://www.apexhuntress.com/",
    },
    {
      id: "maxify",
      folder: "maxify",
      title: "Maxify.ng",
      desc: "A Nigerian dropshipping storefront that bridges product discovery straight into WhatsApp sales.",
      stacks: ["React", "TailwindCSS"],
      img: Maxify,
      link: "https://www.maxify.ng/",
    },
    {
      id: "oneclick-tutors",
      folder: "oneclick-tutors",
      title: "Oneclick Tutors",
      desc: "An AI-powered study platform for NOUN students, built with the Claude API.",
      stacks: ["React", "Claude API"],
      img: OneclickTutors,
      link: "https://oneclick-tutors.vercel.app/",
    },
  ];

  const jobPositions = [
    {
      company: "Felamok IT Services",
      role: "Frontend Developer & Cybersecurity Intern",
      duration: "4th July 2025 - 4th October 2025",
      desc: `Worked as a Junior IT staff, shadowing senior staff in their daily operations. 
                I also worked in setting up their data privacy and compliance department under the NDPR law and best practices to secure personal data and stay compliant. 
                I set up their bulk SMS and email distributor, collected data on chartered accountants, lawyers, bankers and institutions registered under financial bodies such as ANAN, CBN, NIBBS, ITF etc. 
                I also worked on email templates, making sure the write-ups fully captured the company's true aim. 
                I was assigned to build their website, which included a Data Breach Cost Calculator — a tool that helps companies estimate the potential financial impact of a data breach based on industry, breach size, data volume, and location, helping firms stay compliant with the NDPR & NDPA.`,
    },
    {
      company: "Visium Studios",
      role: "Product Designer & Developer",
      duration: "25th August 2026 - Till Date",
      desc: `Visium Studios is a visual systems studio building brands, digital experiences, and visual worlds for ambitious companies. I worked there as the Lead Developer, responsible for building and managing the studio’s web systems, as well as developing and maintaining web systems for clients they onboarded.
              I worked closely with the branding and motion teams to translate creative concepts into high-quality digital products, ensuring each project met both the studio’s standards and client expectations.
              `,
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-[#f5f2eb] text-black py-24 md:py-32"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <h2 className="font-serif tracking-tighter uppercase text-7xl md:text-9xl text-center leading-tight mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
          {portfolio.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={setActiveProject} />
          ))}
        </div>
      </div>

      {/* Job Positions */}
      <div className="max-w-6xl mx-auto mt-24 px-4 md:px-12" data-aos="fade-up">
        <h2 className="text-3xl tracking-tighter font-semibold mb-8 text-black text-left uppercase">
          Job Positions Held
        </h2>
        <div>
          {jobPositions.map((job, index) => (
            <div key={`job-${index}`} className="border-t border-white/10 py-8">
              <h3 className="text-xl font-semibold text-black mb-2">
                {job.role} at {job.company}
              </h3>
              <p className="font-bold text-black inline-block p-2 mb-3">
                {job.duration}
              </p>
              <p className="text-black/60 text-base leading-relaxed mt-2">
                {job.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ProjectOverlay
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

export default Portfolio;
