"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="section-label text-text-secondary mb-2 block">
          What&apos;s your name?
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          required
          className="w-full bg-transparent border-b border-white/10 py-3 text-[1rem] leading-[1.4] focus:border-text outline-none transition-colors placeholder:text-white/30"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="section-label text-text-secondary mb-2 block">
          Your email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className="w-full bg-transparent border-b border-white/10 py-3 text-[1rem] leading-[1.4] focus:border-text outline-none transition-colors placeholder:text-white/30"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="section-label text-text-secondary mb-2 block">
          Your message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Goals, timeline, budget — whatever you've got"
          rows={4}
          required
          className="w-full bg-transparent border-b border-white/10 py-3 text-[1rem] leading-[1.4] focus:border-text outline-none transition-colors resize-none placeholder:text-white/30"
        />
      </div>
      <button type="submit" className="btn-pill-filled" disabled={status === "sending"}>
        <span>
          {status === "sent"
            ? "Message sent!"
            : status === "sending"
              ? "Sending..."
              : "Send Message"}
        </span>
      </button>
    </form>
  );
}
