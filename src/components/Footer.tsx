export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <a href="#" className="text-lg font-bold tracking-tight">
            Spin<span className="text-accent-light">UX</span>
          </a>
          <p className="mt-1 text-sm text-muted">
            User Experience Design Studio
          </p>
        </div>

        <div className="flex gap-8">
          <a
            href="#services"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#process"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Process
          </a>
          <a
            href="#contact"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Spin UX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
