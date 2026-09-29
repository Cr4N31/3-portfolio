import { motion } from "framer-motion";
import CursorWarpField from "../context/CursorWarpField";
import cygnetsquare from "../assets/img/cygnetsquare.png";
import forfoxsake from "../assets/img/forfoxsake.png";
import NewWolfOrder from "../assets/img/NewWolfOrder.png";
import ApexHuntress from "../assets/img/ApexHuntress.png";
import Maxify from "../assets/img/maxify.png";
import OneclickTutors from "../assets/img/OneclickTutors.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Grid card: cover image gets the cursor-warp hover distortion.
// Clicking opens whatever URL is saved under `link` in a new tab.
// If a project has no link, the card renders as a plain, non-clickable block.
function ProjectCard({ p }) {
  const hasLink = Boolean(p.link);

  const Wrapper = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? {
        href: p.link,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Open ${p.title}`,
      }
    : {};

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="group"
    >
      <Wrapper {...wrapperProps} className="block">
        <CursorWarpField intensity={26} className="block">
          <div className="block w-full relative aspect-[3/2] overflow-hidden rounded-2xl bg-black/5">
            <img
              src={p.img}
              alt={`${p.title} screenshot`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </CursorWarpField>

        <div className="mt-5">
          {p.stacks?.length > 0 && (
            <span className="block text-black/40 text-[11px] uppercase tracking-widest">
              {p.stacks.join(" • ")}
            </span>
          )}

          <div className="flex items-center mt-2">
            {hasLink && (
              <span className="inline-block overflow-hidden w-0 group-hover:w-7 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <span className="text-black text-2xl md:text-3xl pr-2">›</span>
              </span>
            )}
            <span className="text-black text-2xl md:text-3xl">{p.title}</span>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

function Portfolio() {
  const portfolio = [
    {
      id: "cyg",
      title: "Cygnet Square",
      desc: "A platform built to empower women through networking programs, skills development and access to essential resources and empowering independent financially secure lives.",
      stacks: ["ReactJs", "TailwindCSS", "Javascript"],
      img: cygnetsquare,
      link: "https://forfoxsakecro.de/",
    },
    {
      id: "ffs",
      title: "For Fox Sake Dapp",
      desc: "Fullstack dApp built for the FFS (For Fox Sake) token on the Cronos network.",
      stacks: ["PERN", "Reown", "TailwindCSS", "Vercel", "Render", "Supabase"],
      img: forfoxsake,
      link: "https://forfoxsakecro.de/",
    },
    {
      id: "nwo",
      title: "New Wolf Order",
      desc: "A Web3 launchpad on the Cronos network with a full component library and dark-first design system.",
      stacks: ["React", "Web3.js", "TailwindCSS", "Vercel"],
      img: NewWolfOrder,
      link: "https://new-wolf-order.vercel.app/",
    },
    {
      id: "apex-huntress",
      title: "Apex Huntress",
      desc: "A 369-piece NFT collection site built on the Cronos network.",
      stacks: ["React", "Vite", "TailwindCSS", "Vercel"],
      img: ApexHuntress,
      link: "https://www.apexhuntress.com/",
    },
    {
      id: "maxify",
      title: "Maxify.ng",
      desc: "A Nigerian dropshipping storefront that bridges product discovery straight into WhatsApp sales.",
      stacks: ["React", "TailwindCSS"],
      img: Maxify,
      link: "https://www.maxify.ng/",
    },
    {
      id: "oneclick-tutors",
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
            <ProjectCard key={p.id} p={p} />
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
    </section>
  );
}

export default Portfolio;
