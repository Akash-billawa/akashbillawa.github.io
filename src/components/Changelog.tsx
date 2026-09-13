export default function Changelog() {
  const entries = [
    {
      date: "Jul 2026",
      title: "Portfolio website launched",
      description:
        "Personal website built with Next.js, Tailwind CSS, and TypeScript. Lama Lama-inspired minimalist design.",
    },
    {
      date: "Jun 2026",
      title: "SentinelScan AI v2 released",
      description:
        "Major update with ML-powered vulnerability detection and real-time threat intelligence integration.",
    },
    {
      date: "Mar 2026",
      title: "Research paper published",
      description:
        "Network Intrusion Detection Using Machine Learning accepted at university research symposium.",
    },
    {
      date: "Jan 2026",
      title: "CompTIA Security+ certified",
      description:
        "Earned CompTIA Security+ certification, validating foundational cybersecurity knowledge.",
    },
  ];

  return (
    <section className="py-24 px-6" data-reveal suppressHydrationWarning>
      <div className="max-w-7xl mx-auto">
        <span className="section-label text-text-secondary block mb-4">
          [ Changelog ]
        </span>
        <h2 className="heading-md mb-12">Recent updates.</h2>

        <div>
          {entries.map((entry) => (
            <div key={entry.title} className="case-item">
              <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-4 items-start">
                <span className="section-label text-text-secondary">
                  {entry.date}
                </span>
                <div>
                  <h3 className="text-sm font-medium mb-1">{entry.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
