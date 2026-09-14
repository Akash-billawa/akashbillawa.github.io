"use client";

import Link from "next/link";
import {
  NovaCalcMockup,
  SentinelScanMockup,
  JarvisAIMockup,
  IntrusionDetectionMockup,
} from "./InteractiveMockup";

interface WorkItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  metrics: string;
  telemetry: string;
  description: string;
  tech: string[];
  mockup: "nova" | "sentinel" | "jarvis" | "nid";
  github?: string;
  link: string;
}

const works: WorkItem[] = [
  {
    id: "nova-calc",
    slug: "nova-calc",
    number: "05.01",
    title: "Nova Calc",
    category: "Cross-Platform Mobile Application",
    metrics: "60 FPS Fluidity · 200+ Unit Conversions · Offline First",
    telemetry: "RUNTIME: FLUTTER IMPELLER · 120 FPS ARM · 0 MEMORY LEAKS",
    description:
      "A mathematically rigorous calculator and graphing engine engineered for mobile. Leverages Flutter's Skia/Impeller pipeline for butter-smooth scientific animations, offline-first Hive caching, and clean Riverpod state architecture.",
    tech: ["Flutter", "Dart", "Riverpod", "Hive", "iOS / Android"],
    mockup: "nova",
    github: "https://github.com/akashbillawa/nova-calc",
    link: "/projects/nova-calc",
  },
  {
    id: "sentinelscan-ai",
    slug: "sentinelscan-ai",
    number: "05.02",
    title: "SentinelScan AI",
    category: "Autonomous Threat & Vulnerability Engine",
    metrics: "Real-time Zero-Day Pattern Detection · OWASP Top 10",
    telemetry: "CVE DB: 2024 · SCAN ENGINE: HYBRID ML · OWASP VERIFIED",
    description:
      "An intelligent vulnerability scanner bridging traditional CVE databases with machine learning anomaly classifiers. Analyzes web applications, REST endpoints, and network configurations for misconfigurations and zero-day risks.",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker", "OWASP ZAP"],
    mockup: "sentinel",
    github: "https://github.com/akashbillawa/sentinelscan-ai",
    link: "/projects/sentinelscan-ai",
  },
  {
    id: "jarvis-ai",
    slug: "jarvis-ai",
    number: "05.03",
    title: "Jarvis AI",
    category: "Autonomous Systems Intelligence Assistant",
    metrics: "14ms Sub-agent Execution Latency · Natural Language CLI",
    telemetry: "LATENCY: 14MS · ARCH: SUB-AGENT DAG · ASYNCIO DISPATCH",
    description:
      "A modular AI copilot engineered for system administration and security auditing. Implements natural language tool orchestration, dynamic CLI script synthesis, and context-aware vulnerability discovery.",
    tech: ["Python", "LangChain", "OpenAI", "FastAPI", "AsyncIO"],
    mockup: "jarvis",
    github: "https://github.com/akashbillawa/jarvis-ai",
    link: "/projects/jarvis-ai",
  },
  {
    id: "nid-research",
    slug: "network-intrusion-detection",
    number: "05.04",
    title: "Deep Learning NID",
    category: "Academic Research & Transformer Model",
    metrics: "98.7% Detection Accuracy on 2.8M Network Flows",
    telemetry: "DATASET: CICIDS2017 · 2.83M FLOWS · ACCURACY: 98.7%",
    description:
      "MSc research evaluating Transformer and CNN-LSTM hybrid architectures on 2.8 million flow records from the CICIDS2017 benchmark dataset, achieving 98.7% detection with ultra-low false-positive rates.",
    tech: ["PyTorch", "Python", "CICIDS2017", "Scikit-Learn", "Pandas"],
    mockup: "nid",
    link: "/projects/network-intrusion-detection",
  },
];

export default function HavuWorks() {
  return (
    <section
      id="work"
      data-reveal="true"
      data-reveal-stagger="75"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">06 — Selected Works</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>Real systems engineered for production and research.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            A portfolio of production mobile applications, AI security tooling, and deep learning network defense architectures.
          </p>
        </div>

        {/* Works List with Hairline Dividers */}
        <div className="border-t border-[var(--hv-hairline)] divide-y divide-[var(--hv-hairline)]">
          {works.map((work) => (
            <div
              key={work.id}
              className="hv-up py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[var(--hv-muted)]">
                    {work.number}
                  </span>
                  <span className="h-px w-8 bg-[var(--hv-hairline)]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--hv-muted)]">
                    {work.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded bg-[var(--hv-ink-12)] text-[var(--hv-ink)] tracking-wider block w-fit">
                    {work.telemetry}
                  </span>
                  <h3 className="hv-display-jp text-3xl sm:text-4xl font-black text-[var(--hv-ink)]">
                    {work.title}
                  </h3>
                </div>

                <p className="font-mono text-xs text-[var(--hv-ink-70)] font-medium">
                  {work.metrics}
                </p>

                <p className="text-sm sm:text-base text-[var(--hv-ink-70)] leading-relaxed max-w-xl">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-[var(--hv-hairline)] text-[var(--hv-ink-70)] hover:border-[var(--hv-ink)] hover:text-[var(--hv-ink)] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Link
                    href={work.link}
                    data-cursor="link"
                    className="px-5 py-2.5 rounded-full bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-xs font-bold uppercase tracking-wider hover:opacity-85 transition-opacity inline-flex items-center"
                  >
                    <span className="hv-swap">
                      <span>View Details &rarr;</span>
                      <span aria-hidden="true">View Details &rarr;</span>
                    </span>
                  </Link>

                  {work.github && (
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="hv-underline font-mono text-xs text-[var(--hv-muted)] hover:text-[var(--hv-ink)] transition-colors"
                    >
                      Source Code ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Mockup Showcase */}
              <div
                data-cursor="view"
                data-cursor-label="PREVIEW"
                className="lg:col-span-6 flex justify-center p-4 rounded-2xl bg-[var(--hv-ink-12)] border border-[var(--hv-hairline)] transition-transform duration-500 hover:scale-[1.01]"
              >
                {work.mockup === "nova" && <NovaCalcMockup />}
                {work.mockup === "sentinel" && <SentinelScanMockup />}
                {work.mockup === "jarvis" && <JarvisAIMockup />}
                {work.mockup === "nid" && <IntrusionDetectionMockup />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
