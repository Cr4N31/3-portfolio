import Balls from './assets/img/balls.png';
import Crofam from './assets/img/Crofam.png';
import dashboard from './assets/img/Dashboard.jpeg';
import Eric from './assets/img/Eric.png';
import Pris from './assets/img/prisltd.png';
import smartClinic from './assets/img/smartClinic.png';
function Portfolio() {
    const portfolio = [
        {
            id: 'balls',
            title: '$BALLS Web Platform',
            desc: 'A marketing platform for the $BALLS token community with Web3 integrations.',
            img: Balls,
            link: 'https://www.myballs.me/'
        },
        {
            id: 'smartclinic',
            title: 'Smart Clinic',
            desc: 'A web application that collects the medical data and tracks weekly vitals of users. Demo site auth systrm uses random values to permit access to the dashboard.',
            img: smartClinicS,
            link: 'https://smart-clinic-rho.vercel.app/'
        },
        {
            id: 'Dashboard',
            title: 'Dashboard UI',
            desc: 'This project is a React-based dashboard application focused on building a solid authentication flow and laying the foundation for a full dashboard system.',
            img: dashboard,
            link: 'https://dashboard-authentication-six.vercel.app/'
        },
        {
            id: 'eric',
            title: '$ERIC Token Promo',
            desc: 'Bold animated crypto promo site built for traction and brand identity.',
            img: Eric,
            link: 'https://erictoken.app/'
        },
                {
            id: 'pris',
            title: 'PRIS LTD',
            desc: 'Functional Website built for a real estate/ construction firm',
            img: Pris,
            link: 'https://prisltd.netlify.app/'
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

                       </div>
                   ))}
               </div>
            </div>
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