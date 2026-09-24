import { useState } from "react";
import emailjs from "@emailjs/browser";

const initialForm = {
  name: "",
  email: "",
  project: "",
  context: "",
};

function ContactSection({ onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setSubmitted(false);
    setError("");

    try {
      await emailjs.send(
        "service_5bd1732",
        "template_qvdf42w",
        {
          name: form.name,
          email: form.email,
          project: form.project,
          context: form.context,
        },
        "Z0kwV0vRdbvJqqVZ0",
      );

      onSubmit?.(form);
      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      console.error("Email failed:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-black/10 bg-[#f5f2eb] px-4 py-24 sm:px-6 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-20 md:grid-cols-[1fr_0.8fr] md:gap-24 lg:gap-32">
        {/* Closing statement */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-black/40">
              End of the story — for now
            </p>

            <h2
              id="contact-heading"
              className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              If you made it this far,
              <br />
              <span className="text-[#ffed00]">let's build something.</span>
            </h2>

            <p className="mt-10 max-w-xl text-base leading-relaxed text-black/55 md:text-lg">
              Have a project in mind, an idea you're trying to bring to life, or
              just something interesting you'd like to discuss? Tell me about it
              and I'll get back to you.
            </p>
          </div>

          {/* Social links */}
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="https://github.com/Cr4N31"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/cran3.dev"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-black"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-9">
          <div className="grid gap-9 sm:grid-cols-2">
            <label className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.16em] text-black/45">
              Name
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="border-b border-black/20 bg-transparent pb-3 text-base normal-case tracking-normal text-black outline-none transition-colors placeholder:text-black/25 focus:border-black"
              />
            </label>

            <label className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.16em] text-black/45">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="border-b border-black/20 bg-transparent pb-3 text-base normal-case tracking-normal text-black outline-none transition-colors placeholder:text-black/25 focus:border-black"
              />
            </label>
          </div>

          <label className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.16em] text-black/45">
            Project
            <input
              name="project"
              value={form.project}
              onChange={handleChange}
              placeholder="What are you building?"
              className="border-b border-black/20 bg-transparent pb-3 text-base normal-case tracking-normal text-black outline-none transition-colors placeholder:text-black/25 focus:border-black"
            />
          </label>

          <label className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.16em] text-black/45">
            A little context
            <textarea
              required
              name="context"
              value={form.context}
              onChange={handleChange}
              rows={5}
              placeholder="Timeline, budget, what you have so far — whatever's useful."
              className="resize-none border-b border-black/20 bg-transparent pb-3 text-base normal-case tracking-normal text-black outline-none transition-colors placeholder:text-black/25 focus:border-black"
            />
          </label>

          <div className="flex flex-col items-start gap-5 pt-2">
            <button
              type="submit"
              disabled={sending}
              className="group flex items-center gap-6 border border-black/40 px-5 py-3 text-xs uppercase tracking-[0.16em] text-black transition-all duration-300 hover:border-[#ffed00] hover:bg-[#ffed00] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? "Sending..." : "Start a project"}

              {!sending && (
                <span className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}
            </button>

            {submitted && (
              <p className="text-sm text-black/55" role="status">
                Thanks — I'll get back to you soon.
              </p>
            )}

            {error && (
              <p className="text-sm text-red-500" role="alert">
                {error}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
