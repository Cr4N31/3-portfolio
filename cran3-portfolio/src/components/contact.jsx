function Contact() {
    return(
        <section id="contact" className="bg-black text-zinc-100 py-16 px-4">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="headline text-center text-[#ffed00] text-4xl font-bold uppercase mb-4">Contact Me</h2>
                <p className="text-zinc-400 mb-8 text-sm">Reach out or connect with me on any of the platforms below.</p>

                <div className="flex justify-center gap-6 mb-6">
                <a href="https://github.com/Cr4N31" target="_blank" className="group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="1.5"
                    className="w-8 h-8 transition transform group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#ffed00]"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16 22v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.09-3.83s-1.18-.35-3.87 1.48a13.38 13.38 0 0 0-7 0C6.35.59 5.18.94 5.18.94A5.07 5.07 0 0 0 5.09 4.77 5.44 5.44 0 0 0 3 9.52c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.6V22">
                    </path>
                    </svg>
                </a>

                <a href="https://www.tiktok.com/@crane.js?_t=ZS-8yJw90THcal&_r=1" target="_blank" className="group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
                    className="w-8 h-8 fill-white transition transform group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#ffed00]">
                    <path
                        d="M224,80.25v29.5a8,8,0,0,1-16,0V92.64a63.85,63.85,0,0,1-40-12.1v72.46A56.07,56.07,0,1,1,88,104a8,8,0,0,1,0,16,40,40,0,1,0,40,40V32a8,8,0,0,1,8-8h24a8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,224,80.25Z" />
                    </svg>
                </a>

                <a href="https://www.instagram.com/_cran3.js?igsh=MTFyMDRhbWxuNmd5aQ==" target="_blank" className="group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="1.5"
                    className="w-8 h-8 transition transform group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#ffed00]"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm4.5-.5h.01">
                    </path>
                    </svg>
                </a>
                </div>

                <p className="text-sm text-zinc-400">
                <span className="font-medium text-[#ffed00]">Email:</span>
                <a href="mailto:cran3.js.dev@gmail.com"
                    className="hover:underline hover:text-[#ffed00] ml-1">cran3.js.dev@gmail.com</a>
                </p>
            </div>
        </section>
    )
}

export default Contact