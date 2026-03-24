const footerLinks = {
  services: [
    { label: "UX Research", href: "#services" },
    { label: "UI Design", href: "#services" },
    { label: "Interaction Design", href: "#services" },
    { label: "Product Strategy", href: "#services" },
    { label: "Design Systems", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-section-alt px-6 pb-10 pt-20 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        {/* CTA row */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
          <a
            href="#contact"
            className="flex items-center justify-between rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-8 py-4 font-medium text-white transition-opacity hover:opacity-90"
          >
            Start a Project
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </a>
          <a
            href="mailto:hello@spin-ux.com"
            className="flex items-center justify-between rounded-full bg-gray-800 px-8 py-4 font-medium text-white transition-colors hover:bg-gray-900"
          >
            hello@spin-ux.com
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Links grid */}
        <div className="mb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              Services
            </p>
            <div className="space-y-3">
              {footerLinks.services.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              Company
            </p>
            <div className="space-y-3">
              {footerLinks.company.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Large brand */}
        <div className="mb-12 text-center">
          <p className="text-[8rem] font-bold leading-none tracking-tighter text-gray-200 sm:text-[12rem]">
            SPIN<span className="gradient-text">UX</span>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Spin UX. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            A subsidiary of{" "}
            <a
              href="https://www.starup01.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 underline underline-offset-4 transition-colors hover:text-gray-900"
            >
              STAR UP Inc.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
