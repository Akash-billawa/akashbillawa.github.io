"use client";

import { useState, FormEvent } from "react";

export default function HavuContact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("akash.security.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      data-reveal="true"
      data-reveal-stagger="60"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">13 — Contact &amp; Transmission</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>Start a conversation.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            Available for select penetration testing, infrastructure audits, threat modeling, and senior cross-platform Flutter architecture.
          </p>
        </div>

        {/* Form and Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[var(--hv-hairline)] pt-12">
          {/* Left: Direct Contacts */}
          <div className="hv-up lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--hv-muted)]">
                DIRECT ENDPOINT
              </span>
              <p className="text-2xl font-bold tracking-tight text-[var(--hv-ink)]">
                akash.security.dev@gmail.com
              </p>
              <button
                onClick={copyEmail}
                data-cursor="link"
                className="px-5 py-2.5 rounded-full border border-[var(--hv-ink)] text-xs font-bold uppercase tracking-wider text-[var(--hv-ink)] hover:bg-[var(--hv-ink)] hover:text-[var(--hv-on-ink)] transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span className="hv-swap">
                  <span>{copied ? "✓ Copied to clipboard" : "Copy email address"}</span>
                  <span aria-hidden="true">{copied ? "✓ Copied to clipboard" : "Copy email address"}</span>
                </span>
              </button>
            </div>

            <div className="space-y-4 pt-4 border-t border-[var(--hv-hairline)]">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--hv-muted)] block">
                LOCATIONS &amp; PROFILES
              </span>
              <div className="space-y-2 text-sm font-mono">
                <p className="text-[var(--hv-ink-70)]">
                  Primary Location: <span className="text-[var(--hv-ink)] font-bold">Bangalore, India</span>
                </p>
                <p className="text-[var(--hv-ink-70)]">
                  Response Window: <span className="text-[var(--hv-ink)] font-bold">&lt; 24 Hours</span>
                </p>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/akashbillawa"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="hv-underline font-mono text-xs text-[var(--hv-ink)] hover:opacity-65 transition-opacity"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/akashbillawa"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="hv-underline font-mono text-xs text-[var(--hv-ink)] hover:opacity-65 transition-opacity"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="hv-up lg:col-span-7">
            {submitted ? (
              <div className="p-8 border border-[var(--hv-hairline)] text-center space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--hv-muted)]">
                  STATUS: TRANSMITTED
                </span>
                <h3 className="text-2xl font-bold text-[var(--hv-ink)]">
                  Message Delivered
                </h3>
                <p className="text-sm text-[var(--hv-ink-70)] max-w-md mx-auto">
                  Your parameters have been logged. I will inspect your inquiry and dispatch a response shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  data-cursor="link"
                  className="px-6 py-2.5 rounded-full border border-[var(--hv-ink)] text-xs font-bold uppercase tracking-wider text-[var(--hv-ink)] hover:bg-[var(--hv-ink)] hover:text-[var(--hv-on-ink)] transition-colors cursor-pointer"
                >
                  Send another transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-[var(--hv-muted)] block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Chen"
                      className="w-full bg-transparent border-b border-[var(--hv-hairline)] focus:border-[var(--hv-ink)] py-2 text-sm text-[var(--hv-ink)] placeholder:text-[var(--hv-muted)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-[var(--hv-muted)] block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@organization.com"
                      className="w-full bg-transparent border-b border-[var(--hv-hairline)] focus:border-[var(--hv-ink)] py-2 text-sm text-[var(--hv-ink)] placeholder:text-[var(--hv-muted)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-[var(--hv-muted)] block">
                    Domain / Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Vulnerability Audit / Flutter Mobile App / Consultation"
                    className="w-full bg-transparent border-b border-[var(--hv-hairline)] focus:border-[var(--hv-ink)] py-2 text-sm text-[var(--hv-ink)] placeholder:text-[var(--hv-muted)] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-[var(--hv-muted)] block">
                    Scope Specification
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding target architecture, timelines, or security scope..."
                    className="w-full bg-transparent border-b border-[var(--hv-hairline)] focus:border-[var(--hv-ink)] py-2 text-sm text-[var(--hv-ink)] placeholder:text-[var(--hv-muted)] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="link"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-xs font-bold uppercase tracking-wider hover:opacity-85 transition-opacity cursor-pointer inline-flex items-center justify-center"
                >
                  <span className="hv-swap">
                    <span>Send Transmission &rarr;</span>
                    <span aria-hidden="true">Send Transmission &rarr;</span>
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
