import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Oswald, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import MouseTrail from "@/components/MouseTrail";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import NoiseOverlay from "@/components/NoiseOverlay";
import CommandPalette from "@/components/CommandPalette";
import SkipLink from "@/components/SkipLink";
import PageLoader from "@/components/PageLoader";
import SectionDots from "@/components/SectionDots";
import EasterEgg from "@/components/EasterEgg";
import CursorFollower from "@/components/CursorFollower";
import ParticleCanvas from "@/components/ParticleCanvas";
import AmbientOrbs from "@/components/AmbientOrbs";
import FloatingProfile from "@/components/FloatingProfile";
import ThreeScene from "@/components/ThreeScene";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akash | Cyber Security Engineer & Flutter Developer",
  description:
    "Personal portfolio of Akash - Cyber Security Engineer and Flutter Developer specializing in network security, web security, and mobile app development.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Akash | Cyber Security Engineer & Flutter Developer",
    description:
      "Personal portfolio of Akash - Cyber Security Engineer and Flutter Developer specializing in network security, web security, and mobile app development.",
    type: "website",
    locale: "en_US",
    siteName: "Akash Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash | Cyber Security Engineer & Flutter Developer",
    description:
      "Personal portfolio of Akash - Cyber Security Engineer and Flutter Developer specializing in network security, web security, and mobile app development.",
  },
  metadataBase: new URL("https://akash.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${oswald.variable} ${dmSerif.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akash",
              url: "https://akash.dev",
              jobTitle: "Cyber Security Engineer & Flutter Developer",
              sameAs: [
                "https://github.com/akash",
                "https://linkedin.com/in/akash",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}.hero-animate{opacity:1 !important}`}</style>
        </noscript>
        <SkipLink />
        <PageLoader />
        <ScrollProgress />
        <NoiseOverlay />
        <ParticleCanvas />
        <ThreeScene />
        <AmbientOrbs />
        <FloatingProfile />
        <MouseTrail />
        <CursorFollower />
        <ScrollReveal />
        <CommandPalette />
        <EasterEgg />
        <SectionDots />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <BottomBar />
        <Footer />
      </body>
    </html>
  );
}
