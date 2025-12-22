import reactIcon from './assets/icons/reactjs.svg';
import javascriptIcon from './assets/icons/javascript.svg';
import nextIcon from './assets/icons/nextjs.svg';
import typescriptIcon from './assets/icons/typescript.svg';
import tailwindIcon from './assets/icons/tailwindcss.svg';
import nodeIcon from './assets/icons/nodejs.svg';
import expressIcon from './assets/icons/expressjs.svg';
import graphqlIcon from './assets/icons/graphql.svg';
import mongodbIcon from './assets/icons/mongodb.svg';
import mysqlIcon from './assets/icons/mysql.svg';
import dockerIcon from './assets/icons/docker.svg';
import awsIcon from './assets/icons/aws.svg';
import vercelIcon from './assets/icons/vercel.svg';
import githubActionsIcon from './assets/icons/github-actions.svg';
import placeholderIcon from './assets/file_0000000010f8620aa60d0a29c4fa0915.png';

function Service({ stacks: propStacks }) {
    const defaultStacks = {
        frontend: [
            { name: 'ReactJS', src: reactIcon },
            { name: 'JavaScript', src: javascriptIcon },
            { name: 'NextJS', src: nextIcon },
            { name: 'TailwindCss', src: tailwindIcon },
            { name: 'TypeScript', src: typescriptIcon },
        ],
        backend: [
            { name: 'NodeJS', src: nodeIcon },
            { name: 'Express', src: expressIcon },
            { name: 'GraphQL', src: graphqlIcon },
            { name: 'NextJS', src: nextIcon },
        ],
        databases: [
            { name: 'MongoDB', src: mongodbIcon },
            { name: 'MySQL', src: mysqlIcon },
            { name: 'Postgres', src: placeholderIcon },
            { name: 'Redis', src: placeholderIcon },
        ],
        infra: [
            { name: 'Docker', src: dockerIcon },
            { name: 'AWS', src: awsIcon },
            { name: 'Vercel', src: vercelIcon },
            { name: 'GitHub Actions', src: githubActionsIcon },
        ],
    };

    // Merge provided props with defaults so user can override any category
    const stacks = {
        ...defaultStacks,
        ...(propStacks || {}),
    };

    return (
        <section id="services" className="px-4 md:px-12 lg:px-12 py-16" data-aos="fade-up">
            <div className="">
                <h2 className="text-center text-[#ffed00] font-sora text-4xl font-bold uppercase mb-8">SERVICES</h2>
                <div className='flex text-center flex-col md:flex-row gap-6 justify-center'>

                <div className="relative p-12" data-aos="fade-up">
                <div className="absolute inset-0 border border-[#ffed00] rounded-lg animate-border-glow pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="font-semibold font-sora mb-2 text-[#ffed00]">
                        Landing Page Development
                        </h3>
                        <p>Responsive, animated and conversion-optimized landing pages</p>
                    </div>
                </div>

                <div className="relative p-12" data-aos="fade-up">
                <div className="absolute inset-0 border border-[#ffed00] rounded-lg animate-border-glow pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="font-semibold mb-2 text-[#ffed00]">
                        Speed Optimization
                        </h3>
                        <p>Boost your site's performance and load times.</p>
                    </div>
                </div>

                <div className="relative p-12" data-aos="fade-up">
                <div className="absolute inset-0 border border-[#ffed00] rounded-lg animate-border-glow pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="font-semibold mb-2 text-[#ffed00]">
                        Web Templates
                        </h3>
                        <p>Custom HTML & Tailwind CSS templates for fast creation.</p>
                    </div>
                </div>

                <div className="relative p-12" data-aos="fade-up">
                <div className="absolute inset-0 border border-[#ffed00] rounded-lg animate-border-glow pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="font-semibold mb-2 text-[#ffed00]">
                        Portfolio Websites
                        </h3>
                        <p>Modern personal websites for developers & freelancers.</p>
                    </div>
                </div>

                </div>
                <div className="mt-8" data-aos="fade-up">
                    <h2 className="text-3xl font-semibold mb-4 text-[#ffed00] text-center uppercase mt-8">Tech Stack</h2>
                    <div>
                        <h4 className='text-2xl text-[#ffed00] uppercase mb-4'>Frontend Engineering</h4>
                        <div className="stacks grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10mb-12 py-12" data-aos="fade-right">
                            {(stacks.frontend || []).map((s) => (
                                <div key={`frontend-${s.name}`} className="flex flex-col items-center">
                                    <img className='w-20' src={s.src || placeholderIcon} alt={s.name}/>
                                    <p className='text-[#ffed00]' >{s.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl text-[#ffed00] uppercase mb-4'>Backend Engineering</h4>
                        <div className="stacks grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-12 py-12" data-aos="fade-right">
                            {(stacks.backend || []).map((s) => (
                                <div key={`backend-${s.name}`} className="flex flex-col items-center">
                                    <img className='w-20' src={s.src || placeholderIcon} alt={s.name} />
                                    <p className='text-[#ffed00]'>{s.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl text-[#ffed00] uppercase mb-4'>Databases</h4>
                        <div className="stacks grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-12 py-12" data-aos="fade-right">
                            {(stacks.databases || []).map((s) => (
                                <div key={`databases-${s.name}`} className="flex flex-col items-center">
                                    <img className='w-20' src={s.src || placeholderIcon} alt={s.name} />
                                    <p className='text-[#ffed00]'>{s.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl text-[#ffed00] uppercase mb-4'>Cloud, DevOps & Infrastructure</h4>
                        <div className="stacks grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-12 py-12" data-aos="fade-right">
                            {(stacks.infra || []).map((s) => (
                                <div key={`infra-${s.name}`} className="flex flex-col items-center">
                                    <img className='w-20' src={s.src || placeholderIcon} alt={s.name} />
                                    <p className='text-[#ffed00]'>{s.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Service;