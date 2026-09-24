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
      className="border-t border-black/10 bg-[#f5f2eb] px-4 py-20 sm:px-6 md:px-10 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="grid gap-16 md:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] md:gap-20 lg:gap-28">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.2em] text-black/40">
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
                className="border-b border-black/25 bg-transparent pb-3 text-base normal-case tracking-normal text-black outline-none transition-colors placeholder:text-black/25 focus:border-[#ffed00]"
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
            <button
              type="submit"
              disabled={sending}
              className="group flex items-center gap-6 border border-black/40 px-5 py-3 text-xs uppercase tracking-[0.16em] text-black transition-colors hover:border-[#ffed00] hover:bg-[#ffed00] hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? "Sending..." : "Start a project"}

              {!sending && (
                <span className="text-xl leading-none transition-transform group-hover:translate-x-1">
                  →
                </span>
              )}
            </button>

            {submitted && (
              <p className="text-sm text-black/60" role="status">
                Thanks — I&apos;ll get back to you soon.
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
