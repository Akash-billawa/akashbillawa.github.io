import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import HavuHeader from "@/components/HavuHeader";
import HavuFooter from "@/components/HavuFooter";
import SkipLink from "@/components/SkipLink";
import { HavuCursor } from "@/components/HavuCursor";
import { HavuRevealObserver } from "@/components/HavuRevealObserver";

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

export const metadata: Metadata = {
  title: "Akash ｜ Cyber Security Engineer & Flutter Developer",
  description:
    "Cyber Security Engineer & Flutter Developer. Engineering defensive security architectures, penetration testing, threat models, and high-performance cross-platform applications.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Akash ｜ Cyber Security Engineer & Flutter Developer",
    description:
      "Engineering secure systems & crafting high-performance mobile applications.",
    type: "website",
    locale: "en_US",
    siteName: "Akash Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash ｜ Cyber Security Engineer & Flutter Developer",
    description:
      "Engineering secure systems & crafting high-performance mobile applications.",
  },
  metadataBase: new URL("https://akashbillawa.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--hv-paper)] text-[var(--hv-ink)] antialiased transition-colors duration-400" suppressHydrationWarning>
        {/* Early Theme Switcher Script inside body to prevent extension head injection collision */}
        <script
          id="hv-theme-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k="hv-theme";var s=localStorage.getItem(k);var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var e=document.documentElement;e.classList.toggle("dark",d);e.style.colorScheme=d?"dark":"light";}catch(e){}})();`,
          }}
        />
        {/* Schema.org Person metadata script */}
        <script
          id="schema-person-jsonld"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akash",
              jobTitle: "Cyber Security Engineer & Flutter Developer",
              url: "https://akashbillawa.github.io",
              sameAs: [
                "https://github.com/akashbillawa",
                "https://linkedin.com/in/akashbillawa",
              ],
            }),
          }}
        />
        <SkipLink />
        <HavuCursor />
        <HavuRevealObserver />
        <HavuHeader />
        <main id="main-content" className="flex-1 w-full pt-20">
          {children}
        </main>
        <HavuFooter />
      </body>
    </html>
  );
}
