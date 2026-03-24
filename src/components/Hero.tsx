export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-accent-light/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-block rounded-full border border-border px-4 py-1.5 text-sm text-muted">
          User Experience Design Studio
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          We design experiences
          <br />
          <span className="text-accent-light">people love.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Spin UX partners with ambitious companies to craft intuitive,
          beautiful digital products that drive engagement and growth.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-light"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="rounded-lg border border-border px-8 py-3.5 text-sm font-medium text-muted transition-colors hover:border-muted hover:text-foreground"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
