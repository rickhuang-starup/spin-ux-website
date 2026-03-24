export default function About() {
  return (
    <section id="about" className="bg-section-alt px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-8">
          {/* Left column */}
          <div className="lg:col-span-3">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
              About
            </p>
            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Design with
              <br />
              <span className="gradient-text">purpose.</span>
            </h2>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5">
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Spin UX is a team of researchers, designers, and strategists who
              believe great products start with deep empathy for the people who
              use them. We partner closely with product teams to turn complex
              problems into elegant, intuitive solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              From early-stage startups to enterprise platforms, we bring a
              rigorous, human-centered approach to every engagement — ensuring
              design decisions are grounded in evidence and aligned with real
              business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
