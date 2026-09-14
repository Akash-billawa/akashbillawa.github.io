"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Can we talk to you before the problem or requirements are settled?",
    a: "Yes — in fact we prefer it. We start by analyzing where your system is today, what attack surfaces are exposed, what users are struggling with, and we agree on the highest-leverage theme worth tackling together.",
  },
  {
    q: "At what stage can we bring you in?",
    a: "At any stage: stress-testing a raw architecture concept, conducting pre-launch penetration testing, rebuilding a laggy Flutter client for 60fps performance, or auditing production APIs and infrastructure.",
  },
  {
    q: "Can we engage you for security audits only, or Flutter mobile engineering only?",
    a: "Yes. We will first confirm the system goals, existing code, and dependencies either side of our scope so that our work delivers lasting value — then we agree on the exact boundaries.",
  },
  {
    q: "How do you handle confidential codebases and security disclosures?",
    a: "We operate under strict bilateral NDA standards, end-to-end encrypted communication, zero persistent storage of sensitive customer data on unauthorized devices, and coordinated responsible disclosure.",
  },
  {
    q: "Can you work alongside our in-house development team?",
    a: "Yes. Rather than working as an isolated outside vendor, we embed directly into your GitHub/GitLab repositories, conduct transparent PR reviews, and pair-program on critical security boundaries.",
  },
  {
    q: "How long does a typical project or audit take?",
    a: "A focused web application or API penetration test typically takes 1 to 2 weeks. Building or optimizing a core cross-platform Flutter application or ML pipeline typically runs 3 to 8 weeks depending on scope.",
  },
  {
    q: "How is pricing structured?",
    a: "We offer clear, milestone-driven fixed contracts for defined deliverables (e.g. comprehensive security audit or mobile app launch), or dedicated sprint engagements for ongoing architecture and threat monitoring.",
  },
  {
    q: "What should we prepare for a first conversation?",
    a: "Nothing formal is required. A high-level overview of your tech stack, current pain points (whether performance bottlenecks or upcoming security audits), and your timeline is all that's needed to begin.",
  },
];

export default function HavuFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      data-reveal="true"
      data-reveal-stagger="55"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">11 — FAQ</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>Questions asked most often before we begin.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            Get in touch even if your requirements aren&apos;t fully settled yet.
          </p>
        </div>

        {/* 8 Accordion Questions (HAVU style) */}
        <div className="border-t border-[var(--hv-hairline)] divide-y divide-[var(--hv-hairline)] max-w-5xl">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="hv-up py-8">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  data-cursor="link"
                  className="w-full text-left flex items-start justify-between gap-6 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-[var(--hv-muted)]">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--hv-ink)] group-hover:opacity-65 transition-opacity">
                      {faq.q}
                    </h3>
                  </div>

                  <span
                    className={`font-mono text-2xl text-[var(--hv-ink)] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity,padding] duration-400 ease-[var(--hv-ease)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pt-4" : "grid-rows-[0fr] opacity-0 pt-0"
                  }`}
                >
                  <div className="overflow-hidden pl-8 sm:pl-10 text-sm sm:text-base text-[var(--hv-ink-70)] leading-relaxed max-w-3xl">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
