"use client";

import HavuHero from "@/components/HavuHero";
import HavuMarquee from "@/components/HavuMarquee";
import HavuIssue from "@/components/HavuIssue";
import HavuApproach from "@/components/HavuApproach";
import HavuBlueprint from "@/components/HavuBlueprint";
import HavuValue from "@/components/HavuValue";
import HavuCapabilities from "@/components/HavuCapabilities";
import HavuWorks from "@/components/HavuWorks";
import HavuProcess from "@/components/HavuProcess";
import HavuPhilosophy from "@/components/HavuPhilosophy";
import HavuResearch from "@/components/HavuResearch";
import HavuTeam from "@/components/HavuTeam";
import HavuFAQ from "@/components/HavuFAQ";
import HavuBlog from "@/components/HavuBlog";
import HavuContact from "@/components/HavuContact";

export default function Home() {
  return (
    <div className="w-full bg-[var(--hv-paper)] text-[var(--hv-ink)] min-h-screen">
      {/* 00 — Hero / Main Visual */}
      <HavuHero />

      {/* Technical Axiom Editorial Ticker Marquee */}
      <HavuMarquee />

      {/* 01 — The Issue (6 Core Challenges) */}
      <HavuIssue />

      {/* 02 — Our Approach (Integrated Model) */}
      <HavuApproach />

      {/* 03 — System Blueprint Loop Diagram */}
      <HavuBlueprint />

      {/* 04 — Core Value & Deliverables */}
      <HavuValue />

      {/* 05 — Capabilities & Tech Stack */}
      <HavuCapabilities />

      {/* 06 — Selected Works & Interactive Prototypes */}
      <HavuWorks />

      {/* 07 — The 5-Step Process */}
      <HavuProcess />

      {/* 08 — Engineering Philosophy */}
      <HavuPhilosophy />

      {/* 09 — Academic Research & Publications */}
      <HavuResearch />

      {/* 10 — Practitioner & Ecosystem Team */}
      <HavuTeam />

      {/* 11 — Frequently Asked Questions */}
      <HavuFAQ />

      {/* 12 — Technical Writing & Log */}
      <HavuBlog />

      {/* 13 — Direct Contact & Transmission */}
      <HavuContact />
    </div>
  );
}
