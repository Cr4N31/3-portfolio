import reactIcon from './assets/icons/reactjs.svg';
import javascriptIcon from './assets/icons/javascript.svg';
import css3Icon from './assets/icons/css3.svg'
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
import htmlIcon from './assets/icons/html5.svg';

function Service({ stacks: propStacks }) {
    const defaultStacks = {
        frontend: [
            { name: 'ReactJS', src: reactIcon },
            { name: 'HTML5', src: htmlIcon},
            { name: 'CSS3', src: css3Icon},
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
        <div>
            <h2 className="text-center text-[#ffed00] font-sora text-4xl font-bold uppercase mb-8">SERVICES</h2>
            <div className='flex text-center flex-col md:flex-row gap-6 justify-center'>
                {[
                    { title: 'Landing Page Development', desc: 'Responsive, animated and conversion-optimized landing pages' },
                    { title: 'Speed Optimization', desc: "Boost your site's performance and load times." },
                    { title: 'Web Templates', desc: 'Custom HTML & Tailwind CSS templates for fast creation.' },
                    { title: 'Portfolio Websites', desc: 'Modern personal websites for developers & freelancers.' },
                ].map((service) => (
                    <div
                        key={service.title}
                        className="group relative p-12 rounded-lg transition-all duration-300"
                        data-aos="fade-up"
                        style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            backdropFilter: 'blur(16px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                            border: '1px solid rgba(255, 237, 0, 0.15)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
                        }}
                    >
                        {/* Hover glow */}
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse at top, rgba(255,237,0,0.07), transparent 70%)' }}
                        />
                        {/* Specular highlight */}
                        <div className="absolute top-0 left-4 right-4 h-px rounded-full pointer-events-none"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
                        />
                        <div className="relative z-10">
                            <h3 className="font-semibold font-sora mb-2 text-[#ffed00]">{service.title}</h3>
                            <p className="text-zinc-300">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8" data-aos="fade-up">
                <h2 className="text-3xl font-semibold mb-4 text-[#ffed00] text-center uppercase mt-8">Tech Stack</h2>

                {[
                    { label: 'Frontend Engineering', key: 'frontend', dir: 'fade-right' },
                    { label: 'Backend Engineering', key: 'backend', dir: 'fade-right' },
                    { label: 'Databases', key: 'databases', dir: 'fade-right' },
                    { label: 'Cloud, DevOps & Infrastructure', key: 'infra', dir: 'fade-right' },
                ].map(({ label, key, dir }) => (
                    <div key={key}>
                        <h4 className='text-2xl text-[#ffed00] uppercase mb-4'>{label}</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-12 py-12" data-aos={dir}>
                            {(stacks[key] || []).map((s) => (
                                <div
                                    key={`${key}-${s.name}`}
                                    className="group flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                                    }}
                                >
                                    <img className='w-20 transition-transform duration-300 group-hover:scale-110' src={s.src || placeholderIcon} alt={s.name}/>
                                    <p className='text-[#ffed00] text-sm'>{s.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}

export default Service;
