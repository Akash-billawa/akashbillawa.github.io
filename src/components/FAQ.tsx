"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What do you specialize in?",
    answer:
      "I specialize in cyber security (penetration testing, network security, vulnerability assessment) and cross-platform mobile development using Flutter. My work bridges security engineering with polished user experiences.",
  },
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes, I'm available for select freelance projects, especially those involving security audits, Flutter app development, or research collaborations. Feel free to reach out via the contact form.",
  },
  {
    question: "What tools do you use for security testing?",
    answer:
      "My primary toolkit includes Kali Linux, Burp Suite, Nmap, Wireshark, Metasploit, and custom Python scripts. For automated scanning, I've built SentinelScan AI which leverages machine learning.",
  },
  {
    question: "Can I collaborate on research?",
    answer:
      "Absolutely. I'm actively involved in research around network intrusion detection, web application security, and digital forensics. I welcome collaboration opportunities with fellow researchers and academics.",
  },
  {
    question: "What's your experience with Flutter?",
    answer:
      "I've been building Flutter apps for 3+ years, covering everything from simple utility apps to complex cross-platform solutions with state management, animations, and native integrations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6" data-reveal suppressHydrationWarning>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          <div>
            <span className="section-label text-text-secondary block mb-4">
              [ FAQ ]
            </span>
            <h2 className="heading-md mb-8">Common questions.</h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-sm text-text-secondary leading-relaxed">
              Quick answers to frequently asked questions.
            </p>
          </div>
        </div>

        <div className="mt-8">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="case-item">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
              >
                <h3 className="text-sm font-medium">{faq.question}</h3>
                <span
                  className={`section-label text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-text-secondary leading-relaxed pt-3 pb-1">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
