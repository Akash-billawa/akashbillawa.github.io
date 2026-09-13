export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    slug: "getting-started-with-burp-suite",
    title: "Getting Started with Burp Suite",
    category: "Cyber Security",
    date: "2024-11-15",
    readTime: "8 min",
    excerpt:
      "A beginner-friendly guide to setting up and using Burp Suite for web application security testing.",
    content: `Burp Suite is one of the most popular tools for web application security testing. In this guide, we'll walk through the initial setup, configuration of the proxy, and basic usage patterns for intercepting and modifying HTTP requests.

## Installation

Download the Community Edition from PortSwigger's website. The free version includes most features needed for learning web security.

## Proxy Configuration

Configure your browser to route traffic through Burp's proxy listener on 127.0.0.1:8080. Install the CA certificate to intercept HTTPS traffic.

## Your First Intercept

Navigate to a test application and observe how Burp captures each request. Modify parameters, replay requests, and analyze responses to understand how the application processes input.

## Tips for Beginners

- Always use the built-in browser (Chromium) for the smoothest experience
- Start with the Proxy tab before moving to Scanner or Intruder
- Use Repeater to manually test individual requests`,
    tags: ["Burp Suite", "Web Security", "Tools"],
  },
  {
    slug: "building-cross-platform-apps-with-flutter",
    title: "Building Cross-Platform Apps with Flutter",
    category: "Programming",
    date: "2024-09-20",
    readTime: "12 min",
    excerpt:
      "How Flutter enables rapid development of beautiful, natively compiled applications for mobile, web, and desktop.",
    content: `Flutter has revolutionized cross-platform development by offering a single codebase that compiles to native ARM code. Let's explore why it's become my framework of choice.

## Why Flutter?

Unlike React Native or other cross-platform frameworks, Flutter renders its own widgets rather than wrapping native components. This gives pixel-perfect control over the UI.

## Architecture

Flutter uses a widget-tree architecture where everything is a widget. The framework provides Material Design and Cupertino widgets out of the box.

## State Management

From setState to Provider, Riverpod, and Bloc — Flutter offers multiple approaches to state management. Choose based on your project's complexity.

## Real-World Performance

In my experience building Nova Calc and other apps, Flutter delivers near-native performance with smooth 60fps animations, even on mid-range devices.`,
    tags: ["Flutter", "Dart", "Mobile"],
  },
  {
    slug: "rust-for-systems-programming",
    title: "Rust for Systems Programming",
    category: "Rust",
    date: "2024-07-10",
    readTime: "10 min",
    excerpt:
      "Why Rust's ownership model and zero-cost abstractions make it ideal for systems-level security tooling.",
    content: `Rust combines low-level performance with high-level ergonomics, making it perfect for building security tools that need both speed and safety.

## The Ownership Model

Rust's ownership system eliminates entire classes of bugs at compile time — no null pointers, no buffer overflows, no data races.

## Zero-Cost Abstractions

Iterators, pattern matching, and generics compile down to the same machine code you'd write by hand. You get expressiveness without sacrificing performance.

## Building Security Tools

I've used Rust to build network scanners and packet analyzers that perform at C-level speeds while being memory-safe by default.

## The Ecosystem

Cargo, crates.io, and the vibrant community make Rust development a joy. Libraries like tokio for async I/O and serde for serialization are best-in-class.`,
    tags: ["Rust", "Systems", "Performance"],
  },
  {
    slug: "network-security-fundamentals",
    title: "Network Security Fundamentals",
    category: "Cyber Security",
    date: "2023-12-05",
    readTime: "15 min",
    excerpt:
      "Core concepts every security professional should know about network architecture, protocols, and defense strategies.",
    content: `Understanding network security is foundational for any cyber security professional. This covers the essential concepts and practices.

## The CIA Triad

Confidentiality, Integrity, and Availability — the three pillars that guide all security decisions.

## Network Protocols and Vulnerabilities

TCP/IP, DNS, HTTP/HTTPS, DHCP — each protocol has known attack vectors. Understanding these is key to both offense and defense.

## Defense in Depth

Firewalls, IDS/IPS, network segmentation, and monitoring form layered defenses that make unauthorized access progressively harder.

## Practical Lab Setup

Building a home lab with virtual machines, Kali Linux, and vulnerable targets like DVWA or Metasploitable is the best way to learn hands-on.`,
    tags: ["Network Security", "Fundamentals", "Defense"],
  },
];

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
