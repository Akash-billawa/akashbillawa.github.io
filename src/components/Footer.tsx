import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 pb-bottom-bar">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="section-label text-text-secondary block mb-3">
              [ Brand ]
            </span>
            <p className="text-sm text-text/80">Akash</p>
            <p className="text-xs text-text-secondary/50 mt-1">
              Cyber Security Engineer &amp; Flutter Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="section-label text-text-secondary block mb-3">
              [ Navigation ]
            </span>
            <div className="flex flex-col gap-1.5">
              {[
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#research", label: "Research" },
                { href: "#blog", label: "Blog" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  className="text-xs text-text-secondary/50 hover:text-text transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="section-label text-text-secondary block mb-3">
              [ Connect ]
            </span>
            <div className="flex flex-col gap-1.5">
              {[
                { href: "https://github.com/akash", label: "GitHub" },
                { href: "https://linkedin.com/in/akash", label: "LinkedIn" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-secondary/50 hover:text-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="section-label text-text-secondary/40">
            &copy; {new Date().getFullYear()} Akash
          </span>
          <Link
            href="/#contact"
            className="section-label text-text-secondary/40 hover:text-text transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
