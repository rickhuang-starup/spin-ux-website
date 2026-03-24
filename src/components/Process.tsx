"use client";

import { useState } from "react";

const steps = [
  {
    number: "[0.1]",
    title: "Discover",
    subtitle: "Research & Insights",
    description:
      "We immerse ourselves in your business, users, and market through stakeholder interviews, user research, and competitive analysis. This phase lays the evidence-based foundation for every design decision that follows.",
    details: [
      "Stakeholder interviews",
      "User research & testing",
      "Competitive analysis",
      "Analytics review",
    ],
  },
  {
    number: "[0.2]",
    title: "Define",
    subtitle: "Strategy & Planning",
    description:
      "We synthesize findings into clear problem statements, user personas, and journey maps. This clarity aligns the entire team around shared goals before a single pixel is placed.",
    details: [
      "User personas",
      "Journey mapping",
      "Information architecture",
      "Success metrics",
    ],
  },
  {
    number: "[0.3]",
    title: "Design",
    subtitle: "Create & Iterate",
    description:
      "We explore solutions through wireframes, prototypes, and high-fidelity designs — iterating based on feedback and testing. Every design choice is intentional and validated.",
    details: [
      "Wireframing",
      "Visual design",
      "Interactive prototypes",
      "Usability testing",
    ],
  },
  {
    number: "[0.4]",
    title: "Deliver",
    subtitle: "Ship & Support",
    description:
      "We hand off production-ready designs with detailed specs, component documentation, and developer support. Our partnership continues through implementation to ensure design fidelity.",
    details: [
      "Design specs & handoff",
      "Developer collaboration",
      "QA & review",
      "Post-launch iteration",
    ],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        {/* Section header */}
        <div className="mb-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
            Process
          </p>
          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
            How we
            <br />
            <span className="gradient-text">work.</span>
          </h2>
        </div>

        {/* Process steps */}
        <div className="grid gap-12 lg:grid-cols-8">
          {/* Left: step selector */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              {steps.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className={`flex w-full items-center gap-4 border-b border-border-light py-5 text-left transition-colors ${
                    activeStep === i
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <span
                    className={`rounded-sm px-2 py-1 font-mono text-xs ${
                      activeStep === i
                        ? "bg-gray-900 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-xl font-semibold">{step.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: step content */}
          <div className="lg:col-span-5">
            <div className="rounded-lg bg-card-bg p-8 lg:p-12">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                {steps[activeStep].subtitle}
              </p>
              <h3 className="mb-6 text-3xl font-bold">
                {steps[activeStep].title}
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                {steps[activeStep].description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {steps[activeStep].details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
