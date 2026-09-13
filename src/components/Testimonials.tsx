export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Akash's deep understanding of network security and his ability to communicate complex concepts clearly makes him an invaluable team member.",
      name: "Dr. Sarah Chen",
      role: "Professor of Cyber Security",
      institution: "University",
    },
    {
      quote:
        "Working with Akash on our Flutter project was seamless. His code quality and attention to UX details set a high bar for the entire team.",
      name: "Rahul Patel",
      role: "Senior Developer",
      institution: "TechCorp",
    },
    {
      quote:
        "His research on intrusion detection systems was both thorough and innovative. Akash brings academic rigor to practical security challenges.",
      name: "Prof. James Wilson",
      role: "Research Supervisor",
      institution: "University",
    },
  ];

  return (
    <section className="py-24 px-6" data-reveal suppressHydrationWarning>
      <div className="max-w-7xl mx-auto">
        <span className="section-label text-text-secondary block mb-4">
          [ Testimonials ]
        </span>
        <h2 className="heading-md mb-12">What people say.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card p-6 rounded bg-bg-secondary/50 border border-white/[0.06] hover:border-white/10 transition-colors"
            >
              <div className="testimonial-quote-mark text-accent/30 text-4xl font-sans leading-none mb-4 select-none">
                &ldquo;
              </div>
              <p className="text-sm text-text/80 leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="section-label text-text-secondary mt-1">
                  {t.role}
                </p>
                <p className="section-label text-text-secondary/50">
                  {t.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
