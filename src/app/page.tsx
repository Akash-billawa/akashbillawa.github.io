"use client";

import Link from "next/link";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Stats from "@/components/Stats";
import NowSection from "@/components/NowSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Changelog from "@/components/Changelog";
import { getAllPosts } from "@/lib/blog-data";
import GlitchText from "@/components/GlitchText";
import WordReveal from "@/components/WordReveal";
import MagneticHover from "@/components/MagneticHover";
import ScrollParallax from "@/components/ScrollParallax";
import CaseItem from "@/components/CaseItem";
import { getAllProjects } from "@/lib/project-data";

const projects = getAllProjects();

const researchPapers = [
  {
    title: "Network Intrusion Detection Using Machine Learning",
    type: "Research Paper",
    year: "2024",
  },
  {
    title: "Web Application Security Assessment Framework",
    type: "Security Report",
    year: "2024",
  },
  {
    title: "Digital Forensics in Cloud Environments",
    type: "Literature Review",
    year: "2023",
  },
];

function ResearchItem({
  paper,
  index,
}: {
  paper: (typeof researchPapers)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="case-item group">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left"
        aria-expanded={open}
        aria-controls={`research-panel-${index}`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 min-w-0 flex-1">
            <h3 className="text-base font-medium truncate group-hover:text-white/80 transition-colors">
              {paper.title}
            </h3>
            <span className="section-label text-text-secondary flex-shrink-0 hidden sm:block">
              {paper.type}
            </span>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="section-label text-text-secondary">
              {paper.year}
            </span>
            <span
              className={`btn-plus section-label text-xl transition-transform duration-300 ${
                open ? "rotate-45" : ""
              }`}
              aria-hidden="true"
            >
              <span>+</span>
            </span>
          </div>
        </div>
      </button>
      <div
        id={`research-panel-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-text-secondary leading-relaxed pt-3 pb-1 max-w-2xl">
          {paper.type} &middot; {paper.year}. Full text available on request —
          reach out via the contact form below.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="pb-bottom-bar">
      {/* ==================== HERO (sticky, Lamalama pattern) ==================== */}
      <section className="sticky top-0 h-screen flex flex-col justify-end px-6 pb-16 overflow-hidden z-0">
        {/* Background - immersive atmospheric effect */}
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute inset-0 hero-gradient-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,130,140,0.18)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(200,255,0,0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(100,120,140,0.12)_0%,transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-secondary" />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-end gap-10 min-h-[calc(100vh-6rem)]">
          {/* Hero content - label on left, heading + description on right */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            {/* Left: Label + Heading */}
            <div className="flex flex-col items-start lg:items-start gap-6 flex-1 min-w-0">
              <span className="section-label text-text-secondary hero-animate">
                [ Cyber Security & Flutter ]
              </span>
              <h1 className="heading-xl text-balance hero-animate hero-animate-delay-1">
                <GlitchText text="Building secure systems & beautiful apps." />
              </h1>
            </div>

            {/* Right: Description */}
            <div className="lg:w-[320px] lg:pb-3 flex-shrink-0">
              <p className="text-[15px] text-text-secondary leading-relaxed hero-animate hero-animate-delay-2">
                I craft secure, performant applications that protect users and push the boundaries of mobile development. With heart, with craft, and with relentless curiosity.
              </p>
            </div>
          </div>

          {/* Bottom actions - in normal flow so they never overlap the heading */}
          <div className="flex items-center gap-6 hero-animate hero-animate-delay-3">
            <div className="flex items-center gap-3">
              <MagneticHover>
                <a href="#projects" className="btn-pill-filled" aria-label="View selected projects">
                  <span>Selected projects</span>
                </a>
              </MagneticHover>
              <MagneticHover>
                <a href="#contact" className="btn-pill" aria-label="Get in touch">
                  <span>Get in touch</span>
                </a>
              </MagneticHover>
            </div>
          </div>
        </div>
      </section>

      {/* Content wrapper - opaque, covers sticky hero on scroll */}
      <div className="relative z-10 bg-bg-secondary">
        {/* ==================== STATS ==================== */}
        <Stats />

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="py-20 px-6" data-reveal suppressHydrationWarning>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div>
              <span className="section-label text-text-secondary block mb-4">
                [ About me ]
              </span>
              <h2 className="heading-lg mb-8">
                <WordReveal delay={100}>Cyber security engineer</WordReveal>
                <br />
                <WordReveal delay={400}>&amp; flutter developer.</WordReveal>
              </h2>
            </div>
            <div className="space-y-5 text-sm text-text-secondary leading-relaxed lg:pt-2">
              <WordReveal delay={200}>
                <p>
                  I&apos;m a Cyber Security Engineer and Flutter Developer
                  passionate about creating secure, performant applications. My
                  work spans from penetration testing to building cross-platform
                  mobile experiences.
                </p>
              </WordReveal>
              <WordReveal delay={400}>
                <p>
                  Currently pursuing MSc in Cyber Security, focusing on network
                  security, web application security, and threat hunting.
                </p>
              </WordReveal>
              <div className="pt-2">
                <MagneticHover strength={0.2}>
                  <a href="#contact" className="btn-pill-sm">
                    <span>Download Resume</span>
                  </a>
                </MagneticHover>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NOW ==================== */}
      <NowSection />

      {/* ==================== SKILLS ==================== */}
      <section id="skills" className="py-20 px-6" data-reveal suppressHydrationWarning>
        <div className="max-w-7xl mx-auto">
          <span className="section-label text-text-secondary block mb-4">
            [ Tech stack ]
          </span>
          <h2 className="heading-md mb-12">What I work with.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="section-label text-text mb-4">Security</h3>
              <div className="flex flex-wrap gap-2">
                {["Network Security", "Web Security", "IDS", "Digital Forensics", "Threat Hunting"].map(
                  (skill) => (
                    <span key={skill} className="tag-pill">{skill}</span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="section-label text-text mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Rust", "Dart", "JavaScript", "PHP", "Bash"].map(
                  (skill) => (
                    <span key={skill} className="tag-pill">{skill}</span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="section-label text-text mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Flask", "FastAPI"].map((skill) => (
                  <span key={skill} className="tag-pill">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="section-label text-text mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "Docker", "Git"].map(
                  (skill) => (
                    <span key={skill} className="tag-pill">{skill}</span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS (Case Items) ==================== */}
      <section id="projects" className="py-20 px-6" data-reveal suppressHydrationWarning>
        <div className="max-w-7xl mx-auto">
          <ScrollParallax speed={0.05}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start mb-12">
              <div>
                <span className="section-label text-text-secondary block mb-4">
                  [ Featured projects ]
                </span>
                <h2 className="heading-md">
                  <WordReveal>Selected work.</WordReveal>
                </h2>
              </div>
              <div className="lg:pt-2">
                <p className="text-sm text-text-secondary leading-relaxed">
                  A curated collection of projects spanning cyber security
                  research, mobile development, and AI-powered tools.
                </p>
              </div>
            </div>
          </ScrollParallax>

          {/* Case study rows */}
          <div className="space-y-1">
            {projects.map((project, i) => (
              <CaseItem
                key={project.slug}
                name={project.name}
                description={project.description}
                longDescription={project.longDescription}
                tags={project.tags}
                features={project.features}
                techStack={project.techStack}
                status={project.status}
                slug={project.slug}
                index={i}
                images={project.images}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== RESEARCH ==================== */}
      <section id="research" className="py-20 px-6" data-reveal suppressHydrationWarning>
        <div className="max-w-7xl mx-auto">
          <span className="section-label text-text-secondary block mb-4">
            [ Research ]
          </span>
          <h2 className="heading-md mb-12">
            <WordReveal>Publications & Papers.</WordReveal>
          </h2>

          <div>
            {researchPapers.map((paper, i) => (
              <ResearchItem key={paper.title} paper={paper} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EDUCATION ==================== */}
      <section id="education" className="py-20 px-6" data-reveal suppressHydrationWarning>
        <div className="max-w-7xl mx-auto">
          <span className="section-label text-text-secondary block mb-4">
            [ Education &amp; timeline ]
          </span>
          <h2 className="heading-md mb-12">
            <WordReveal>My journey.</WordReveal>
          </h2>

          <div>
            {[
              {
                period: "2023 - Present",
                title: "MSc Cyber Security",
                institution: "University",
              },
              {
                period: "2020 - 2023",
                title: "BSc Computer Science",
                institution: "University",
              },
              {
                period: "2020",
                title: "Higher Secondary",
                institution: "College",
              },
              {
                period: "2018",
                title: "Secondary School",
                institution: "School",
              },
            ].map((item) => (
              <div key={item.title} className="case-item">
                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 items-center">
                  <span className="section-label text-text-secondary">
                    {item.period}
                  </span>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-medium">{item.title}</h3>
                      <span className="section-label text-text-secondary">
                        {item.institution}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ACHIEVEMENTS ==================== */}
      <section id="achievements" className="py-20 px-6" data-reveal suppressHydrationWarning>
        <div className="max-w-7xl mx-auto">
          <span className="section-label text-text-secondary block mb-4">
            [ Achievements ]
          </span>
          <h2 className="heading-md mb-12">Certifications &amp; Awards.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "CompTIA Security+", issuer: "CompTIA" },
              { name: "Certified Ethical Hacker", issuer: "EC-Council" },
              { name: "AWS Cloud Practitioner", issuer: "Amazon" },
              { name: "Google Cybersecurity Certificate", issuer: "Google" },
              { name: "Hackathon Winner", issuer: "University" },
              { name: "Dean's List", issuer: "University" },
            ].map((cert) => (
              <div
                key={cert.name}
                className="p-5 rounded bg-bg-secondary/50 border border-white/[0.06] hover:border-white/10 transition-colors"
              >
                <h3 className="text-sm font-medium mb-2">{cert.name}</h3>
                <span className="section-label text-text-secondary">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BLOG ==================== */}
      <section id="blog" className="py-20 px-6" data-reveal suppressHydrationWarning>
        <div className="max-w-7xl mx-auto">
          <span className="section-label text-text-secondary block mb-4">
            [ Blog ]
          </span>
          <h2 className="heading-md mb-12">Write-ups &amp; Notes.</h2>

          <div>
            {getAllPosts().map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="case-item group block"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <h3 className="text-base font-medium truncate group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h3>
                    <span className="tag-pill text-[10px] h-6 flex-shrink-0 hidden sm:inline-flex">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="section-label text-text-secondary">
                      {post.date.split("-")[0]}
                    </span>
                    <span className="btn-plus">
                      <span>+</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section id="gallery" className="py-20 px-6" data-reveal suppressHydrationWarning>
        <div className="max-w-7xl mx-auto">
          <span className="section-label text-text-secondary block mb-4">
            [ Gallery ]
          </span>
          <h2 className="heading-md mb-12">Moments &amp; milestones.</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Hackathon 2024", src: "/gallery/hackathon-2024.svg" },
              { label: "Security+ Cert", src: "/gallery/security-plus.svg" },
              { label: "CEH Badge", src: "/gallery/ceh-badge.svg" },
              { label: "AWS Certified", src: "/gallery/aws-certified.svg" },
              { label: "Flutter Project", src: "/gallery/flutter-project.svg" },
              { label: "Research Paper", src: "/gallery/research-paper.svg" },
              { label: "Dean's List", src: "/gallery/deans-list.svg" },
              { label: "Team Event", src: "/gallery/team-event.svg" },
            ].map((item) => (
              <div
                key={item.label}
                className="gallery-item group relative aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-xs text-text/80">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <FAQ />

      {/* ==================== TESTIMONIALS ==================== */}
      <Testimonials />

      {/* ==================== CHANGELOG ==================== */}
      <Changelog />

{/* ==================== BOLD STATEMENT CTA ==================== */}
      <section className="py-28 px-6" data-reveal suppressHydrationWarning>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif italic text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight font-normal text-white">
            <WordReveal delay={100}>I build secure systems</WordReveal>
            <br />
            <WordReveal delay={300}>& beautiful apps that</WordReveal>
            <br />
            <WordReveal delay={500}>just get it. No shortcuts.</WordReveal>
          </h2>
          <div className="mt-10">
            <MagneticHover>
              <a href="#contact" className="btn-pill-filled" aria-label="Get in touch">
                <span>Start a conversation</span>
              </a>
            </MagneticHover>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-20 px-6" data-reveal suppressHydrationWarning>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div>
              <span className="section-label text-text-secondary block mb-4">
                [ Get in touch ]
              </span>
              <h2 className="heading-lg mb-8">
                <WordReveal delay={100}>Let&apos;s work</WordReveal>
                <br />
                <WordReveal delay={300}>together.</WordReveal>
              </h2>
              <p className="text-sm text-text-secondary mb-10 max-w-md">
                Feel free to reach out for collaborations or just a friendly
                hello.
              </p>

              <div className="space-y-3">
                <MagneticHover strength={0.15} block>
                  <a
                    href="mailto:poojaryakash55@gmail.com"
                    className="block text-sm text-text-secondary/60 hover:text-text transition-colors"
                  >
                    poojaryakash55@gmail.com
                  </a>
                </MagneticHover>
                <MagneticHover strength={0.15} block>
                  <a
                    href="https://github.com/akash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-text-secondary/60 hover:text-text transition-colors"
                  >
                    github.com/akash
                  </a>
                </MagneticHover>
                <MagneticHover strength={0.15} block>
                  <a
                    href="https://linkedin.com/in/akash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-text-secondary/60 hover:text-text transition-colors"
                  >
                    linkedin.com/in/akash
                  </a>
                </MagneticHover>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
