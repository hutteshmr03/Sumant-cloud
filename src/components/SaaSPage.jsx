import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import saasHeroBg from "../assets/saas-hero-bg.jpg";

const SERVICES = [
  {
    title: "SaaS Product Development",
    text: "Build cloud-based software products designed for multiple users, businesses, and use cases.",
  },
  {
    title: "SaaS Platform Modernisation",
    text: "Upgrade existing software into a modern, cloud-based SaaS platform.",
  },
  {
    title: "Subscription & Payment Integration",
    text: "Implement subscription plans, billing, payments, trials, and customer management.",
  },
  {
    title: "Cloud Deployment & Scaling",
    text: "Deploy and optimise your SaaS platform for reliability, performance, and future growth.",
  },
];

const PRICING_PLANS = [
  {
    name: "Starter",
    monthly: 799,
    yearly: 7990,
    description: "For early-stage SaaS launches and MVPs.",
    features: [
      "Product discovery & roadmap",
      "MVP feature build",
      "Core integrations & billing setup",
      "Basic user analytics",
    ],
    featured: false,
  },
  {
    name: "Growth",
    monthly: 1499,
    yearly: 14990,
    description: "For scaling teams that need performance and reliability.",
    features: [
      "Advanced multi-tenant architecture",
      "Custom dashboards & analytics",
      "Subscription & payment engine",
      "Cloud deployment & scaling optimization",
    ],
    featured: true,
  },
  {
    name: "Scale",
    monthly: 2499,
    yearly: 24990,
    description: "For mature SaaS products requiring enterprise-grade delivery.",
    features: [
      "Enterprise multi-tenant platform",
      "Automated business workflows",
      "Security, compliance & SLA guarantees",
      "Priority 24/7 dedicated support",
    ],
    featured: false,
  },
];

export default function SaaSPage() {
  const { isDark } = useTheme();
  const [billing, setBilling] = useState("month");

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* Hero Section with Contextual Background */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={saasHeroBg}
              alt="SaaS Solutions"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d223a]/55 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                SaaS Solutions
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                Build, Launch &amp; Scale Your SaaS Product
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
                We help businesses transform ideas into powerful, scalable SaaS products. From product strategy and UI/UX to development, cloud deployment, and ongoing support, we provide end-to-end SaaS development tailored to your business model.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                Whether you are launching a new SaaS product or transforming an existing application into a subscription-based platform, our team helps you build technology that is secure, flexible, and ready to scale.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-500"
                >
                  Build Your SaaS With Us
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-white/20 hover:border-white/50"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Sleek purposeful cards */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)]">
              Our SaaS Services
            </h2>
            <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-brand)]">
              End-to-End Capabilities
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, idx) => (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/50 hover:shadow-lg"
              >
                <div>
                  <span className="text-xs font-bold text-[var(--color-brand)]">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.02em] text-[var(--color-text-ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[var(--color-text-mist-2)]">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose & Pricing Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Why Choose Our SaaS Development Services?
              </span>
              <h2 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-2xl leading-relaxed">
                We combine product thinking, modern technology, and scalable architecture to help you build SaaS products that are ready for real-world customers and long-term growth.
              </h2>
            </div>

            <div className="inline-flex rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-1 shrink-0">
              <button
                type="button"
                onClick={() => setBilling("month")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  billing === "month"
                    ? "bg-[var(--color-brand)] text-white shadow-sm"
                    : "text-[var(--color-text-mist-2)]"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling("year")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  billing === "year"
                    ? "bg-[var(--color-brand)] text-white shadow-sm"
                    : "text-[var(--color-text-mist-2)]"
                }`}
              >
                Yearly (-15%)
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {PRICING_PLANS.map((plan) => {
              const displayPrice = billing === "month" ? `$${plan.monthly}` : `$${plan.yearly}`;

              return (
                <div
                  key={plan.name}
                  className={`flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 ${
                    plan.featured
                      ? "border-[var(--color-brand)] bg-[var(--color-foam-panel)] shadow-xl ring-1 ring-[var(--color-brand)]/30"
                      : "border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-ink)]">
                        {plan.name}
                      </h3>
                      {plan.featured && (
                        <span className="rounded-full bg-[var(--color-brand)] px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-mist-2)]">{plan.description}</p>

                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text-ink)]">
                        {displayPrice}
                      </span>
                      <span className="text-xs font-medium text-[var(--color-text-mist-2)]">
                        {billing === "month" ? "/ month" : "/ year"}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3 border-t border-[var(--color-ink-line)]/50 pt-5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-xs text-[var(--color-text-ink)]">
                          <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                            </svg>
                          </span>
                          <span className="leading-snug text-[var(--color-text-mist-2)]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/contact/"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                      plan.featured
                        ? "bg-[var(--color-brand)] text-white shadow-md hover:opacity-90"
                        : "border border-[var(--color-ink-line)] bg-[var(--color-foam)] text-[var(--color-text-ink)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                    }`}
                  >
                    {plan.featured ? "Get Started" : "Choose Plan"}
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA - Open, modern, unboxed */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Have a SaaS Idea?
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text-ink)] sm:text-4xl">
              Turn your idea into a scalable SaaS product.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-mist-2)]">
              From your first concept to your first customer—and beyond—we can help you build, launch, and scale.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Build Your SaaS With Us
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-ink)] transition-colors duration-300 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
