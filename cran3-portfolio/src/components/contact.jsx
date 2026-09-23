import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  project: "",
  context: "",
};

function ContactSection({ onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(form);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="border-t border-black/10 bg-white px-4 py-20 sm:px-6 md:px-10 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="grid gap-16 md:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] md:gap-20 lg:gap-28">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.2em] text-white/40">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="max-w-4xl text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-black"
          >
            Got a project?{" "}
            <span className="text-[#ffed00]">Let&apos;s talk.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-black/50 md:text-lg">
            Tell me what you&apos;re building, where it needs to go, and what
            should feel different when it&apos;s done.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="flex flex-col gap-3 text-xs uppercase tracking-[0.16em] text-black/50">
              Name
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border-b border-black/25 bg-transparent pb-3 text-base normal-case tracking-normal text-white outline-none transition-colors placeholder:text-black/25 focus:border-[#ffed00]"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-3 text-xs uppercase tracking-[0.16em] text-black/50">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border-b border-black/25 bg-transparent pb-3 text-base normal-case tracking-normal text-black outline-none transition-colors placeholder:text-black/25 focus:border-[#ffed00]"
                placeholder="you@email.com"
              />
            </label>
          </div>

          <label className="flex flex-col gap-3 text-xs uppercase tracking-[0.16em] text-black/50">
            Project
            <input
              name="project"
              value={form.project}
              onChange={handleChange}
              className="border-b border-black/25 bg-transparent pb-3 text-base normal-case tracking-normal text-black outline-none transition-colors placeholder:text-black/25 focus:border-[#ffed00]"
              placeholder="What are you building?"
            />
          </label>

          <label className="flex flex-col gap-3 text-xs uppercase tracking-[0.16em] text-black/50">
            A little context
            <textarea
              required
              name="context"
              value={form.context}
              onChange={handleChange}
              rows="4"
              className="resize-y border-b border-black/25 bg-transparent pb-3 text-base normal-case tracking-normal text-black outline-none transition-colors placeholder:text-black/25 focus:border-[#ffed00]"
              placeholder="Timeline, budget, what you have so far — whatever's useful"
            />
          </label>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              type="submit"
              href="mailto:cran3.js.dev@gmail.com"
              className="group flex items-center gap-6 border border-black/40 px-5 py-3 text-xs uppercase tracking-[0.16em] text-black transition-colors hover:border-[#ffed00] hover:bg-[#ffed00] hover:text-black"
            >
              Start a project
              <span className="text-xl leading-none transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            {submitted && (
              <p className="text-sm text-black/60" role="status">
                Thanks — I&apos;ll get back to you soon.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
