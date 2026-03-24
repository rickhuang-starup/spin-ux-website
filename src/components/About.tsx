const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Experience" },
  { value: "30+", label: "Team Members" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-light">
              About Us
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Design with purpose.
              <br />
              Build with precision.
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted">
              Spin UX is a team of researchers, designers, and strategists who
              believe great products start with deep empathy for the people who
              use them. We partner closely with product teams to turn complex
              problems into elegant, intuitive solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              From early-stage startups to enterprise platforms, we bring a
              rigorous, human-centered approach to every engagement — ensuring
              that design decisions are grounded in evidence and aligned with
              real business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-8 text-center"
              >
                <p className="mb-1 text-4xl font-bold text-accent-light">
                  {stat.value}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
