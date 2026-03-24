const services = [
  {
    number: "[0.1]",
    title: "Customized AI Systems",
    description:
      "Bespoke artificial intelligence solutions designed and built around your unique business challenges — from computer vision to natural language processing and beyond.",
  },
  {
    number: "[0.2]",
    title: "Archaive",
    tag: "Manufacturing Platform",
    description:
      "An intelligent platform purpose-built for manufacturing — streamlining production workflows, quality control, and operational efficiency with AI-driven insights.",
  },
  {
    number: "[0.3]",
    title: "SENDAI",
    tag: "Retail & Stock Management",
    description:
      "A smart retail platform that optimizes inventory management, demand forecasting, and stock operations — helping retailers reduce waste and maximize availability.",
  },
  {
    number: "[0.4]",
    title: "FLOWeRIUM",
    tag: "All-in-One AI Platform",
    description:
      "A comprehensive platform combining AI agent deployment and ontology management — giving organizations a unified environment to build, manage, and scale intelligent systems.",
  },
  {
    number: "[0.5]",
    title: "R&D",
    tag: "Advanced AI Research",
    description:
      "Tailored research and development on advanced AI systems — exploring cutting-edge techniques and architectures to solve your most complex technical challenges.",
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
              From custom AI systems to full-scale platforms, we build
              intelligent solutions that transform how businesses operate.
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
              <h3 className="mb-1 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              {"tag" in service && service.tag && (
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent-blue">
                  {service.tag}
                </p>
              )}
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
