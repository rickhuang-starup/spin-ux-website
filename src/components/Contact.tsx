"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      _honey: (form.elements.namedItem("_honey") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 429) {
        setStatus("error");
        setErrorMsg("Too many submissions. Please try again later.");
        return;
      }

      if (!res.ok) {
        const body = await res.json();
        setStatus("error");
        setErrorMsg(body.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMsg("Failed to send. Please try again.");
    }
  }

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
                <p className="mt-1 text-lg">Toronto, Canada</p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-5">
            {status === "sent" ? (
              <div className="flex h-full items-center">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Message sent!
                  </h3>
                  <p className="text-lg text-gray-600">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

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
                      name="name"
                      type="text"
                      required
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
                      name="email"
                      type="email"
                      required
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
                    name="company"
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
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project, timeline, and goals..."
                    className="w-full resize-none border-0 border-b border-border bg-transparent py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-2 text-gray-900 underline underline-offset-4 transition-colors hover:text-gray-600 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
