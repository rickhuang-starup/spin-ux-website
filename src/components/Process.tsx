const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We immerse ourselves in your business, users, and market through stakeholder interviews, user research, and competitive analysis.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We synthesize findings into clear problem statements, user personas, and journey maps that guide every design decision.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We explore solutions through wireframes, prototypes, and high-fidelity designs — iterating based on feedback and testing.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We hand off production-ready designs with detailed specs, and support your engineering team through implementation.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-light">
            Process
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            A proven approach to great design
          </h2>
          <p className="text-lg text-muted">
            Our structured yet flexible process ensures we deliver
            high-quality results on every project.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <p className="mb-4 font-mono text-5xl font-bold text-border">
                {step.number}
              </p>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
