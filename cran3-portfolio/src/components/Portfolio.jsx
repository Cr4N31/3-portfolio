import { useState } from 'react';
import Balls from '../assets/img/balls.png';
import Crofam from '../assets/img/Crofam.png';
import dashboard from '../assets/img/Dashboard.jpeg';
import Eric from '../assets/img/Eric.png';
import Pris from '../assets/img/pris.png';
import smartClinic from '../assets/img/smartClinic.jpeg';
import forfoxsake from '../assets/img/forfoxsake.png';

const projectImgs = import.meta.glob('../assets/img/projects/**/*.{png,jpg,jpeg}', { eager: true });

const getGallery = (folder) =>
    Object.entries(projectImgs)
        .filter(([path]) => path.includes(`/projects/${folder}/`))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, mod]) => mod.default);

function ProjectRow({ p }) {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const gallery = getGallery(p.folder);

    return (
        <div className="border-t border-[#ffed00]/10 py-8 last:border-b last:border-[#ffed00]/10">

            {/* Meta row */}
            <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                    <h3 className="font-serif text-2xl font-medium text-[#ffed00] mb-1">{p.title}</h3>
                    <p className="text-sm text-zinc-400">{p.desc}</p>

                    {/* Stack pills */}
                    {p.stacks?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {p.stacks.map((s) => (
                                <span
                                    key={s}
                                    className="text-[11px] px-3 py-1 rounded-full border border-[#ffed00]/20 text-[#ffed00]/60 bg-[#ffed00]/5 tracking-wide"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                    <a
                        href={p.link || '#'}
                        className={`text-sm border rounded-full px-4 py-1.5 transition-colors duration-200 ${
                            p.link
                                ? 'border-[#ffed00]/30 text-[#ffed00] hover:bg-[#ffed00]/10'
                                : 'border-white/5 text-zinc-600 pointer-events-none'
                        }`}
                    >
                        {p.link ? 'View Project →' : 'Live preview unavailable'}
                    </a>

                    {gallery.length > 0 && (
                        <button
                            onClick={() => setGalleryOpen(!galleryOpen)}
                            className="text-sm border border-[#ffed00]/20 text-[#ffed00]/50 rounded-full px-4 py-1.5 hover:bg-[#ffed00]/5 transition-colors duration-200"
                        >
                            {galleryOpen ? 'Hide Gallery ↑' : `Gallery (${gallery.length}) ↓`}
                        </button>
                    )}
                </div>
            </div>

            {/* Cover image */}
            {p.img && (
                <img
                    src={p.img}
                    alt={`${p.title} screenshot`}
                    className="w-full h-56 object-cover rounded-xl border border-[#ffed00]/10"
                />
            )}

            {/* Gallery grid */}
            {gallery.length > 0 && galleryOpen && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {gallery.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`${p.title} gallery ${idx + 1}`}
                            className="w-full h-40 object-cover rounded-xl border border-[#ffed00]/10"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function Portfolio() {
    const portfolio = [
        {
            id: 'balls',
            folder: 'balls',
            title: '$BALLS Web Platform',
            desc: 'A marketing platform for the $BALLS token community with Web3 integrations.',
            stacks: ['React', 'Web3.js', 'TailwindCSS', 'Vercel'],
            img: Balls,
            link: 'https://www.myballs.me/'
        },
        {
            id: 'smartclinic',
            folder: 'smartclinic',
            title: 'Smart Clinic',
            desc: 'A web application that collects the medical data and tracks weekly vitals of users. Demo auth: user@gmail.com / pass1234',
            stacks: ['React', 'Node.js', 'Express', 'MongoDB'],
            img: smartClinic,
            link: 'https://smart-clinic-rho.vercel.app/'
        },
        {
            id: 'Dashboard',
            folder: 'dashboard',
            title: 'Dashboard UI',
            desc: 'React-based dashboard with authentication flow and full dashboard system foundation. Demo auth: user@gmail.com / pass1234',
            stacks: ['React', 'TailwindCSS', 'Vercel'],
            img: dashboard,
            link: 'https://dashboard-authentication-six.vercel.app/'
        },
        {
            id: 'eric',
            folder: 'eric',
            title: '$ERIC Token Promo',
            desc: 'Bold animated crypto promo site built for traction and brand identity.',
            stacks: ['React', 'GSAP', 'TailwindCSS'],
            img: Eric,
            link: 'https://erictoken.app/'
        },
        {
            id: 'pris',
            folder: 'pris',
            title: 'PRIS LTD',
            desc: 'Functional website built for a real estate and construction firm.',
            stacks: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
            img: Pris,
            link: 'https://prisltd.netlify.app/'
        },
        {
            id: 'ffs',
            folder: 'ffs',
            title: 'For Fox Sake Dapp',
            desc: 'Fullstack dApp built for the FFS (For Fox Sake) token on the Cronos network.',
            stacks: ['PERN', 'Reown', 'TailwindCSS', 'Vercel', 'Render', 'Supabase'],
            img: forfoxsake,
            link: 'https://forfoxsakecro.de/'
        }
    ];

    const jobPositions = [
        {
            company: 'Felamok IT Services',
            role: 'Frontend Developer & Cybersecurity Intern',
            duration: '4th July 2025 - 4th October 2025',
            desc: `Worked as a Junior IT staff, shadowing senior staff in their daily operations. 
                I also worked in setting up their data privacy and compliance department under the NDPR law and best practices to secure personal data and stay compliant. 
                I set up their bulk SMS and email distributor, collected data on chartered accountants, lawyers, bankers and institutions registered under financial bodies such as ANAN, CBN, NIBBS, ITF etc. 
                I also worked on email templates, making sure the write-ups fully captured the company's true aim. 
                I was assigned to build their website, which included a Data Breach Cost Calculator — a tool that helps companies estimate the potential financial impact of a data breach based on industry, breach size, data volume, and location, helping firms stay compliant with the NDPR & NDPA.`,
        }
    ];

    return (
        <section id="portfolio" data-aos="fade-up">
            <div className="max-w-6xl mx-auto px-4 md:px-12 py-16">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block text-[11px] tracking-widest uppercase text-zinc-400 border border-[#ffed00]/20 rounded-full px-4 py-1 mb-5">
                        Selected Work
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#ffed00] leading-tight">
                        Projects that <em>ship</em>
                    </h2>
                </div>

                {/* Project rows */}
                <div data-aos="fade-up">
                    {portfolio.map((p) => (
                        <ProjectRow key={p.id} p={p} />
                    ))}
                </div>
            </div>

            {/* Job Positions */}
            <div className="max-w-6xl mx-auto mt-12 px-4 md:px-12" data-aos="fade-up">
                <h2 className="text-3xl font-semibold mb-8 text-[#ffed00] text-left uppercase mt-8">Job Positions Held</h2>
                <div>
                    {jobPositions.map((job, index) => (
                        <div key={`job-${index}`} className="border-t border-[#ffed00]/10 py-8">
                            <h3 className="text-xl font-semibold text-[#ffed00] mb-2">{job.role} at {job.company}</h3>
                            <p className="bg-[#ffed00] font-bold text-black inline-block p-2 mb-3">{job.duration}</p>
                            <p className="text-zinc-300 text-base leading-relaxed mt-2">{job.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;