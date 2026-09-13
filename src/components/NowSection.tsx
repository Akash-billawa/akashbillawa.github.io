export default function NowSection() {
  const activities = [
    {
      label: "Building",
      text: "SentinelScan AI - automated vulnerability scanner with ML-powered detection",
      status: "active",
    },
    {
      label: "Learning",
      text: "Advanced Rust concurrency patterns and async runtime internals",
      status: "active",
    },
    {
      label: "Reading",
      text: "Designing Data-Intensive Applications by Martin Kleppmann",
      status: "idle",
    },
    {
      label: "Researching",
      text: "Network intrusion detection using deep reinforcement learning",
      status: "active",
    },
  ];

  return (
    <section className="py-24 px-6" data-reveal suppressHydrationWarning>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          <div>
            <span className="section-label text-text-secondary block mb-4">
              [ Now ]
            </span>
            <h2 className="heading-md mb-8">What I&apos;m up to.</h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-sm text-text-secondary leading-relaxed">
              A snapshot of what currently has my attention.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-0">
          {activities.map((activity) => (
            <div key={activity.label} className="case-item">
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-3 min-w-[100px]">
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      activity.status === "active"
                        ? "bg-accent animate-pulse"
                        : "bg-white/20"
                    }`}
                  />
                  <span className="section-label text-text-secondary">
                    {activity.label}
                  </span>
                </div>
                <p className="text-sm text-text/80 leading-relaxed">
                  {activity.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
