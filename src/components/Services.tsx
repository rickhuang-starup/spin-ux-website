const services = [
  {
    number: "[0.1]",
    title: "UX Research",
    description:
      "Deep user research, usability testing, and data-driven analysis to uncover the insights that shape smarter product decisions.",
  },
  {
    number: "[0.2]",
    title: "UI Design",
    description:
      "Pixel-perfect interface design that balances aesthetics with functionality — creating visual systems that scale with your product.",
  },
  {
    number: "[0.3]",
    title: "Interaction Design",
    description:
      "Thoughtful micro-interactions, animations, and flows that make products feel alive and effortless to use.",
  },
  {
    number: "[0.4]",
    title: "Product Strategy",
    description:
      "Strategic guidance from concept to launch — aligning user needs with business goals to build products that matter.",
  },
  {
    number: "[0.5]",
    title: "Design Systems",
    description:
      "Scalable component libraries and design tokens that keep your product consistent as your team and codebase grow.",
  },
  {
    number: "[0.6]",
    title: "Prototyping",
    description:
      "High-fidelity interactive prototypes that bring ideas to life — enabling fast validation and confident stakeholder alignment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        {/* Section header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-8">
          <div className="lg:col-span-3">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
              Services
            </p>
            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
              What we
              <br />
              <span className="gradient-text">deliver.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-5">
            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              From research to launch, we provide end-to-end UX and design
              services tailored to your product and your users.
            </p>
          </div>
        </div>

        {/* Service grid */}
        <div className="grid gap-px overflow-hidden rounded-lg border border-border-light bg-border-light sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-white p-8 transition-colors hover:bg-card-bg lg:p-10"
            >
              <span className="mb-4 block font-mono text-sm text-muted-light">
                {service.number}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <div className="mb-4 h-px w-12 bg-border transition-all group-hover:w-20 group-hover:bg-accent-blue" />
              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
