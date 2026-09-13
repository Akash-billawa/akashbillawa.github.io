export interface ProjectDetail {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  techStack: string[];
  status: string;
  link?: string;
  github?: string;
  images: string[];
}

const projects: ProjectDetail[] = [
  {
    slug: "nova-calc",
    name: "Nova Calc",
    description: "Advanced calculator application built with Flutter",
    longDescription:
      "A feature-rich calculator app built with Flutter, offering scientific, graphing, and unit conversion modes. Designed with a clean UI and smooth animations for an intuitive user experience across iOS and Android.",
    tags: ["Flutter", "Dart"],
    features: [
      "Scientific and graphing calculator modes",
      "Unit conversion with 200+ categories",
      "History and saved calculations",
      "Offline-first with cloud sync",
      "Customizable themes and layouts",
    ],
    techStack: ["Flutter", "Dart", "Riverpod", "Hive"],
    status: "Active",
    images: ["/images/projects/nova-calc-1.svg", "/images/projects/nova-calc-2.svg", "/images/projects/nova-calc-3.svg"],
  },
  {
    slug: "sentinelscan-ai",
    name: "SentinelScan AI",
    description: "AI-powered security scanning and vulnerability detection tool",
    longDescription:
      "An AI-driven vulnerability scanner that combines traditional CVE databases with machine learning to detect zero-day patterns in web applications and network infrastructure.",
    tags: ["Python", "AI", "Security"],
    features: [
      "Automated OWASP Top 10 scanning",
      "ML-based anomaly detection",
      "Real-time threat intelligence feeds",
      "Detailed remediation reports",
      "REST API for CI/CD integration",
    ],
    techStack: ["Python", "TensorFlow", "FastAPI", "Docker"],
    status: "Active",
    images: ["/images/projects/sentinelscan-1.svg", "/images/projects/sentinelscan-2.svg", "/images/projects/sentinelscan-3.svg"],
  },
  {
    slug: "jarvis-ai",
    name: "Jarvis AI",
    description: "Personal AI assistant with natural language processing",
    longDescription:
      "A personal AI assistant leveraging large language models for task automation, information retrieval, and conversational interaction. Built with a modular plugin architecture for easy extensibility.",
    tags: ["Python", "AI"],
    features: [
      "Natural language task execution",
      "Calendar and email integration",
      "Custom plugin system",
      "Voice command support",
      "Context-aware conversations",
    ],
    techStack: ["Python", "LangChain", "OpenAI", "FastAPI"],
    status: "Beta",
    images: ["/images/projects/jarvis-ai-1.svg", "/images/projects/jarvis-ai-2.svg", "/images/projects/jarvis-ai-3.svg"],
  },
  {
    slug: "network-intrusion-detection",
    name: "Network Intrusion Detection",
    description: "Research on ML-based intrusion detection systems",
    longDescription:
      "Academic research project exploring deep learning approaches for network intrusion detection, comparing CNN, LSTM, and transformer architectures on the CICIDS2017 dataset.",
    tags: ["Security", "Research", "ML"],
    features: [
      "Comparative analysis of 5 ML models",
      "98.7% detection accuracy achieved",
      "Real-time packet classification",
      "Published in university proceedings",
    ],
    techStack: ["Python", "PyTorch", "Scikit-learn", "Pandas"],
    status: "Published",
    images: ["/images/projects/nid-1.svg", "/images/projects/nid-2.svg", "/images/projects/nid-3.svg"],
  },
];

export function getAllProjects(): ProjectDetail[] {
  return projects;
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
