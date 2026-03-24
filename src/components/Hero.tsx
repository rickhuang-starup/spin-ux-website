"use client";

const carouselWords = [
  "Experience",
  "Design",
  "Strategy",
  "Innovation",
  "Impact",
  "Growth",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-gray-950 px-6 pb-24 lg:px-10">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/3 left-1/4 h-[600px] w-[600px] rounded-full bg-accent-blue/15 blur-[120px]" />
        <div className="absolute -bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-accent-purple/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        {/* Desktop layout */}
        <div className="hidden items-baseline gap-4 lg:flex">
          <h1 className="text-8xl font-bold leading-none text-white">SPIN</h1>
          <span className="text-5xl font-light leading-none text-gray-400">with</span>
          <div className="h-[120px] overflow-hidden">
            <div className="word-carousel">
              {carouselWords.map((word) => (
                <span key={word} className="gradient-text block text-8xl font-bold leading-[120px]">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <h1 className="text-5xl font-bold leading-none text-white sm:text-6xl">SPIN</h1>
          <span className="mt-2 block text-2xl font-light text-gray-400">
            with
          </span>
          <div className="mt-1 h-[60px] overflow-hidden sm:h-[72px]">
            <div className="word-carousel">
              {carouselWords.map((word) => (
                <span key={word} className="gradient-text block text-5xl font-bold leading-[60px] sm:text-6xl sm:leading-[72px]">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
          A UX design studio partnering with ambitious companies to create
          intuitive, beautiful digital products that drive real results.
        </p>

        {/* Scroll prompt */}
        <div className="mt-16 flex items-center gap-3 text-sm tracking-wider text-gray-500">
          <div className="h-10 w-px bg-gray-700" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
