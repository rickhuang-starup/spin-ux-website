"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-section-alt px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-8">
          {/* Left column */}
          <div className="lg:col-span-3">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
              Contact
            </p>
            <h2 className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl">
              Let&apos;s
              <br />
              <span className="gradient-text">collaborate.</span>
            </h2>
            <div className="space-y-6 text-gray-600">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Email
                </p>
                <p className="mt-1 text-lg">hello@spin-ux.com</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Location
                </p>
                <p className="mt-1 text-lg">Tokyo, Japan</p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-5">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full border-0 border-b border-border bg-transparent py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full border-0 border-b border-border bg-transparent py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full border-0 border-b border-border bg-transparent py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="w-full resize-none border-0 border-b border-border bg-transparent py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 text-gray-900 underline underline-offset-4 transition-colors hover:text-gray-600"
              >
                Send message
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
