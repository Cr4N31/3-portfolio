import Balls from './assets/img/balls.png';
import Crofam from './assets/img/Crofam.png';
import dashboard from './assets/img/Dashboard.jpeg';
import Eric from './assets/img/Eric.png';
import Pris from './assets/img/prisltd.png';
import smartClinic from './assets/img/smartClinic.jpeg';
import { useState } from 'react';
function Portfolio() {
    const portfolio = [
        {
            id: 'balls',
            title: '$BALLS Web Platform',
            desc: 'A marketing platform for the $BALLS token community with Web3 integrations.',
            img: Balls,
            link: 'https://www.myballs.me/',
            techStack: ['React', 'Next.js', 'Tailwind CSS', 'Web3.js', 'Framer Motion'],
            whyTechStack: 'Next.js for server-side rendering and SEO optimization, React for building reusable UI components, Tailwind CSS for rapid and consistent styling, Web3.js for seamless blockchain interactions, and Framer Motion for smooth animations to enhance user engagement.',
            problems: 'Engaging a dispersed crypto community, integrating complex Web3 features like wallet connections, and ensuring the platform is accessible and responsive across devices.',
            solutions: 'Developed an interactive UI with engaging animations, implemented secure wallet integrations, and optimized the design for mobile and desktop to improve user retention and community interaction.'
        },
        {
            id: 'smartclinic',
            title: 'Smart Clinic',
            desc: 'A web application that collects the medical data and tracks weekly vitals of users. Demo site auth system uses random values to permit access to the dashboard. loginInfo is user@gmail.com and pass1234 ',
            img: smartClinic,
            link: 'https://smart-clinic-rho.vercel.app/',
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
            whyTechStack: 'React for a dynamic and responsive frontend, Node.js and Express for scalable backend API, MongoDB for flexible data storage, and Chart.js for visualizing health data trends.',
            problems: 'Managing sensitive medical data securely, providing real-time tracking of vitals, and ensuring user-friendly data visualization for both patients and healthcare providers.',
            solutions: 'Implemented secure authentication and data encryption, built real-time data collection and storage, and integrated interactive charts for easy monitoring of health metrics.'
        },
        {
            id: 'Dashboard',
            title: 'Dashboard UI',
            desc: 'This project is a React-based dashboard application focused on building a solid authentication flow and laying the foundation for a full dashboard system. loginInfo is user@gmail.com and pass1234',
            img: dashboard,
            link: 'https://dashboard-authentication-six.vercel.app/',
            techStack: ['React', 'Firebase', 'Tailwind CSS', 'React Router'],
            whyTechStack: 'React for component-based architecture, Firebase for easy authentication and real-time database, Tailwind CSS for quick styling, and React Router for navigation.',
            problems: 'Creating a secure and user-friendly authentication system, designing an intuitive dashboard layout, and ensuring scalability for future features.',
            solutions: 'Developed a robust auth flow with Firebase, designed a clean and responsive dashboard UI, and structured the code for easy expansion of dashboard functionalities.'
        },
        {
            id: 'eric',
            title: '$ERIC Token Promo',
            desc: 'Bold animated crypto promo site built for traction and brand identity.',
            img: Eric,
            link: 'https://erictoken.app/',
            techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Three.js'],
            whyTechStack: 'HTML and CSS for structure and styling, JavaScript for interactivity, GSAP for advanced animations, and Three.js for 3D elements to create an immersive experience.',
            problems: 'Capturing attention in a crowded crypto space, conveying brand identity through visuals, and ensuring fast load times despite heavy animations.',
            solutions: 'Created bold, eye-catching animations and 3D visuals, optimized assets for performance, and designed a cohesive brand aesthetic to stand out and drive user engagement.'
        },
                {
            id: 'pris',
            title: 'PRIS LTD',
            desc: 'Functional Website built for a real estate/ construction firm',
            img: Pris,
            link: 'https://prisltd.netlify.app/',
            techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
            whyTechStack: 'Next.js for SEO and performance in a business website, React for modular components, Tailwind CSS for professional styling, and Framer Motion for subtle animations.',
            problems: 'Showcasing real estate and construction services effectively, ensuring professional appearance, and providing easy navigation for potential clients.',
            solutions: 'Built a clean, professional layout with service highlights, integrated contact forms and project galleries, and ensured mobile responsiveness for better accessibility.'
        },

    ]

    const jobPositions = [
        {
            company: 'Felamok IT Services',
            role: 'Frontend Developer & Cybersecurity Intern',
            duration: '4th July 2025 - 4th October 2025',
            desc: `
                Worked as a Junior IT staff, My main task were to shadow the senior staffs in their daily. 
                I also worked in setting up their data privacy and compliance department which is under the NDPR law and best practices to secure personal data and stay compliant, 
                I set up their bulk sms and email disributor, collected data on chartered accountants, lawyers, bankers and even institutions registered under different financial institues such as ANAN, CBN, NIBBS, ITF etc. 
                these datas included company names, company email addresses, phone numbers, company addresses. I also worked on the email templates making sure the write ups weren't generic and fully captured the true aim of the company. 
                I was also assigned the task of creating the website. It contained a simple online tool called The Data Breach Cost Calculator, A tool which helps companies estimate the potential financial impact of a data breach by first selecting their industry(banking, accounting, IT, etc)
                and then calculating the potential finanacial breach costs based on various factors such as the size of the breach, basic data volume (eg number of customers & type of data processed), and location. The tool is meant to help corporations, industries and firms stay compliant and avoid sanctions from the NDPR & NDPA.
            `,
        }
    ]

    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <section id="portfolio" className="" data-aos="fade-up">
            <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-12 lg:px-12 py-16 gap-12">
                <h2 className="text-center text-[#ffed00] font-sora text-4xl font-bold uppercase mb-8">Portfolio</h2>
               <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300 z-0 bg-[#ffed00]/10"></div>
                   {portfolio.map((p) => (
                       <div key={p.id} className="bg-zinc-900 text-zinc-100 rounded-2xl p-4 shadow-md hover:shadow-[0_0_30px_#ffed00] z-10 relative">
                           <img src={p.img} alt={p.title} className='w-full h-40 object-cover rounded-xl mb-4' />
                           <h3 className='text-xl font-semibold text-[#ffed00] mb-4'>{p.title}</h3>
                           <p>{p.desc}</p>
                           <a
                                href={p.link ? p.link : '#'}
                                className={p.link ? 'text-[#ffed00] hover:text-yellow-600' : 'text-gray-400 cursor-not-allowed'}
                                >
                                {p.link ? 'View Project' : 'Live preview unavailable'}
                            </a>
                            <button
                                onClick={() => { setSelectedProject(p); setIsModalOpen(true); }}
                                className="block mt-2 text-[#ffed00] hover:text-yellow-600"
                            >
                                See More
                            </button>

                       </div>
                   ))}
               </div>
            </div>

            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
                    <div className="bg-zinc-900 bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-[#ffed00] text-3xl hover:text-yellow-600 transition-colors"
                        >
                            &times;
                        </button>
                        <h3 className="text-3xl font-bold text-[#ffed00] mb-4 pr-8">{selectedProject.title}</h3>
                        <p className="text-zinc-100 mb-6 leading-relaxed">{selectedProject.desc}</p>
                        <h4 className="text-xl font-semibold text-[#ffed00] mb-2">Tech Stack</h4>
                        <p className="text-zinc-300 mb-4">{selectedProject.techStack.join(', ')}</p>
                        <h4 className="text-xl font-semibold text-[#ffed00] mb-2">Why This Tech Stack?</h4>
                        <p className="text-zinc-300 mb-4 leading-relaxed">{selectedProject.whyTechStack}</p>
                        <h4 className="text-xl font-semibold text-[#ffed00] mb-2">Problems Solved</h4>
                        <p className="text-zinc-300 mb-4 leading-relaxed">{selectedProject.problems}</p>
                        <h4 className="text-xl font-semibold text-[#ffed00] mb-2">Solutions</h4>
                        <p className="text-zinc-300 leading-relaxed">{selectedProject.solutions}</p>
                    </div>
                </div>
            )}

            <div className="max-w-6xl mx-auto mt-12" data-aos="fade-up">
                <h2 className="text-3xl font-semibold mb-4 text-[#ffed00] text-left uppercase mt-8">Job Positions Held</h2>
                <div>
                    {jobPositions.map((job, index) => (
                        <div key={`job-${index}`}>
                            <h3 className="text-xl font-semibold text-[#ffed00] mb-2">{job.role} at {job.company}</h3>
                            <p className="bg-[#ffed00] font-bold text-black inline-block p-2">{job.duration}</p>
                            <p className='text-lg mt-2'>{job.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
