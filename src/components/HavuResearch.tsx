"use client";

import { useState } from "react";

interface Paper {
  id: string;
  num: string;
  title: string;
  type: string;
  year: string;
  abstract: string;
  methodology: string;
  keyFinding: string;
  tags: string[];
}

const papers: Paper[] = [
  {
    id: "p1",
    num: "06.01",
    title: "Network Intrusion Detection Using Deep Learning & Transformer Architectures",
    type: "MSc Research Paper",
    year: "2024",
    abstract:
      "Evaluates contemporary deep learning models (CNN, LSTM, and Transformer attention networks) against high-throughput network intrusion traffic. Demonstrates superior detection of zero-day DDoS and port scans with negligible false positives.",
    methodology:
      "Benchmarked across 2.8 million flow records from the CICIDS2017 intrusion dataset with SMOTE class balancing, feature selection using mutual information, and quantized inference.",
    keyFinding: "98.7% overall accuracy with 99.1% precision on high-velocity attack vectors.",
    tags: ["Machine Learning", "Transformers", "Intrusion Detection", "CICIDS2017"],
  },
  {
    id: "p2",
    num: "06.02",
    title: "Automated Web Application Security Assessment Framework",
    type: "Security Report",
    year: "2024",
    abstract:
      "A comprehensive analysis of hybrid static and dynamic analysis (DAST/SAST) pipelines for discovering logic flaws, broken object-level authorization (BOLA), and SSRF in modern microservice architectures.",
    methodology:
      "Deployed automated fuzzing agents alongside custom Burp Suite extensions to evaluate 15 real-world open-source API gateways.",
    keyFinding: "Identified 4 previously undocumented permission escalation vulnerabilities.",
    tags: ["OWASP Top 10", "DAST / SAST", "API Security", "Burp Suite"],
  },
  {
    id: "p3",
    num: "06.03",
    title: "Digital Forensics & Incident Response in Ephemeral Cloud Workloads",
    type: "Literature Review & Case Study",
    year: "2023",
    abstract:
      "Investigates forensic acquisition methodologies for containerized Kubernetes workloads and serverless environments where volatile memory and container state vanish upon pod termination.",
    methodology:
      "Designed eBPF-based kernel telemetry probes to stream process lineage, socket creation, and file execution directly to immutable off-site object stores.",
    keyFinding: "Preserved 100% of memory execution artifacts with sub-2% CPU overhead on container hosts.",
    tags: ["Digital Forensics", "eBPF", "Kubernetes", "Incident Response"],
  },
];

export default function HavuResearch() {
  const [openPaper, setOpenPaper] = useState<string | null>("p1");

  return (
    <section
      id="research"
      data-reveal="true"
      data-reveal-stagger="65"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">09 — Research &amp; Academia</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>Formal research &amp; credentials.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            Grounding technical execution in peer-reviewed scientific inquiry, machine learning evaluation, and postgraduate study.
          </p>
        </div>

        {/* Papers Accordion */}
        <div className="border-t border-[var(--hv-hairline)] divide-y divide-[var(--hv-hairline)]">
          {papers.map((paper) => {
            const isOpen = openPaper === paper.id;
            return (
              <div key={paper.id} className="hv-up py-8">
                <button
                  onClick={() => setOpenPaper(isOpen ? null : paper.id)}
                  data-cursor="link"
                  className="w-full text-left flex items-start justify-between gap-6 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 font-mono text-xs text-[var(--hv-muted)]">
                      <span>{paper.num}</span>
                      <span>·</span>
                      <span>{paper.type}</span>
                      <span>·</span>
                      <span>{paper.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--hv-ink)] group-hover:opacity-65 transition-opacity">
                      {paper.title}
                    </h3>
                  </div>

                  <span
                    className={`font-mono text-2xl text-[var(--hv-ink)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-6 mt-6 border-t border-[var(--hv-hairline)] space-y-6 max-w-4xl animate-in fade-in duration-300">
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--hv-muted)] block mb-1">
                        Abstract
                      </span>
                      <p className="text-sm sm:text-base text-[var(--hv-ink-70)] leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-[var(--hv-ink-12)] border border-[var(--hv-hairline)]">
                      <div>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--hv-muted)] block mb-1">
                          Methodology
                        </span>
                        <p className="text-xs text-[var(--hv-ink-70)] leading-relaxed">
                          {paper.methodology}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--hv-muted)] block mb-1">
                          Key Empirical Result
                        </span>
                        <p className="text-xs text-[var(--hv-ink)] font-mono leading-relaxed font-bold">
                          {paper.keyFinding}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[var(--hv-ink-12)] text-[var(--hv-muted)]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Education Credentials Banner */}
        <div className="pt-8 border-t border-[var(--hv-hairline)] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hv-up p-8 border border-[var(--hv-hairline)] space-y-2 transition-colors hover:bg-[var(--hv-ink)]/[0.02]">
            <span className="font-mono text-xs text-[var(--hv-muted)] block">
              POSTGRADUATE CREDENTIAL
            </span>
            <h4 className="text-xl font-bold text-[var(--hv-ink)]">
              Master of Science in Cyber Security
            </h4>
            <p className="text-xs text-[var(--hv-ink-70)]">
              Specializing in Network Security, Threat Hunting, and Cryptographic Protocols.
            </p>
          </div>

          <div className="hv-up p-8 border border-[var(--hv-hairline)] space-y-2 transition-colors hover:bg-[var(--hv-ink)]/[0.02]">
            <span className="font-mono text-xs text-[var(--hv-muted)] block">
              UNDERGRADUATE DEGREE
            </span>
            <h4 className="text-xl font-bold text-[var(--hv-ink)]">
              Bachelor of Science in Information Technology
            </h4>
            <p className="text-xs text-[var(--hv-ink-70)]">
              First Class Honors · Software Engineering, Operating Systems, &amp; Networking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
