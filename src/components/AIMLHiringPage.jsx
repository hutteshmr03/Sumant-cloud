import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import aimlHiringHeroBg from "../assets/aiml-hiring-hero-bg.jpg";

const CORE_SERVICES = [
  {
    title: "Node.js Backend Development",
    subtitle: "High-Performance APIs & Scalable Backends",
    points: [
      "REST API development",
      "Business logic & integrations",
      "Scalable backend services",
      "Third-party API integrations",
    ],
  },
  {
    title: "React Frontend Development",
    subtitle: "Modern, Reactive & Responsive Web Apps",
    points: [
      "Single Page Applications (SPA)",
      "Dashboards & admin panels",
      "Responsive UI development",
      "Performance optimization",
    ],
  },
  {
    title: "Web Development (PHP)",
    subtitle: "Robust Enterprise Portals & CMS",
    points: [
      "PHP-based applications",
      "CMS & portals",
      "Maintenance & enhancements",
    ],
  },
  {
    title: "Quality Assurance & Testing",
    subtitle: "Continuous Validation & Bug-Free Releases",
    points: [
      "Manual testing",
      "Functional & regression testing",
      "Test case documentation",
      "Pre-release validation",
    ],
  },
];

const ENGAGEMENT_MODELS = [
  {
    num: "1",
    title: "Dedicated Developers / Testers",
    tagline: "Dedicated resources assigned exclusively to your product.",
    points: [
      "Full-time monthly contracts",
      "Work only on your project",
    ],
  },
  {
    num: "2",
    title: "Daily Rate Contracts",
    tagline: "On-demand capacity for short-term and urgent needs.",
    points: [
      "Short-term or urgent needs",
      "Ideal for agencies & SaaS teams",
    ],
  },
  {
    num: "3",
    title: "Fixed Scope Delivery",
    tagline: "Clearly defined roadmap with milestone-based execution.",
    points: [
      "Clearly defined features",
      "Fixed price & timeline",
    ],
  },
];

const PRICING = [
  {
    role: "Node.js / React Devs",
    rate: "€250–€300",
    unit: "day",
    desc: "Senior fullstack & frontend specialists for modern web applications.",
  },
  {
    role: "PHP Devs",
    rate: "€200–€230",
    unit: "day",
    desc: "Experienced engineers for custom portals, CMS, and backend integrations.",
  },
  {
    role: "QA Testers",
    rate: "€120–€150",
    unit: "day",
    desc: "Rigorous manual and functional regression testing specialists.",
  },
];

const WHY_EU_CLIENTS = [
  "30–50% cost savings vs EU hiring",
  "Dedicated resources (not shared)",
  "Clear communication & reporting",
  "NDA & IP protection",
  "EU working-hour overlap",
];

const WHY_WORK_WITH_US = [
  "Cost-effective alternative to local hiring",
  "Flexible contracts (no long lock-in)",
  "Transparent pricing",
  "EU time-zone overlap",
  "Reliable delivery & communication",
];

const GETTING_STARTED_STEPS = [
  {
    step: "01",
    title: "15-Minute Discovery Call",
    desc: "Discuss your technical requirements, stack, and project goals.",
  },
  {
    step: "02",
    title: "1–2 Week Paid Trial",
    desc: "Test our developers hands-on with zero long-term commitment.",
  },
  {
    step: "03",
    title: "Monthly or Daily Engagement",
    desc: "Scale flexibly with transparent contracts and dedicated support.",
  },
];

export default function AIMLHiringPage() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* Hero Section with Contextual Background */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={aimlHiringHeroBg}
              alt="Hire AI/ML Developers"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d223a]/55 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                Tech Talent &amp; Dedicated Hiring
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                Hire AI/ML Developers
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
                Scale your development capacity with dedicated senior Node.js, React, PHP developers, and QA testing specialists. Transparent daily rates, seamless EU working-hour overlap, and flexible engagement terms.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-500"
                >
                  Book a 15-Minute Discovery Call
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-white/20 hover:border-white/50"
                >
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Services */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Our Capabilities
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
                Our Core Services
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[var(--color-text-mist-2)]">
              Senior engineering specialists ready to deploy directly into your agile workflows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {CORE_SERVICES.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/50 hover:shadow-md"
              >
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-[var(--color-text-ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-text-mist-2)]">
                    {service.subtitle}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-[var(--color-text-ink)]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Models */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Flexible &amp; Transparent
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
                Engagement Models
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[var(--color-text-mist-2)]">
              Select the contract structure that perfectly aligns with your team&apos;s velocity and roadmap.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.title}
                className="flex flex-col justify-between rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/50 hover:shadow-md"
              >
                <div>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-brand)]/10 text-xs font-bold text-[var(--color-brand)]">
                    {model.num}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.02em] text-[var(--color-text-ink)]">
                    {model.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                    {model.tagline}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-[var(--color-ink-line)]/50 pt-4">
                    {model.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-xs font-medium text-[var(--color-text-ink)]">
                        <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                          <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Snapshot */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Daily Rates
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
                Pricing Snapshot
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[var(--color-brand)] font-semibold">
              Custom team pricing available.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRICING.map((item) => (
              <div
                key={item.role}
                className="flex flex-col justify-between rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 transition-all duration-300 hover:border-[var(--color-brand)]/50 hover:shadow-md"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-text-ink)]">
                    {item.role}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-bold text-[var(--color-brand)]">
                      {item.rate}
                    </span>
                    <span className="text-xs text-[var(--color-text-mist-2)] font-medium">/ {item.unit}</span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-mist-2)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why European Clients Choose Us & Why Work With Us */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Why European Clients Choose Us */}
            <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-9 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  European Advantage
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)]">
                  Why European Clients Choose Us
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {WHY_EU_CLIENTS.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[var(--color-text-ink)]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why Work With Us */}
            <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-9 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Partner With Us
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)]">
                  Why Work With Us
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {WHY_WORK_WITH_US.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[var(--color-text-ink)]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Call to Action
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Getting Started
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {GETTING_STARTED_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-6 sm:p-7 transition-all duration-300 hover:border-[var(--color-brand)]/50 hover:shadow-md"
              >
                <span className="font-mono text-sm font-bold text-[var(--color-brand)]">
                  {step.step}.
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-[var(--color-text-ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-mist-2)]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Contact
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text-ink)] sm:text-4xl">
              Looking for reliable Node.js, React or QA support?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-mist-2)]">
              Book a 15-minute discovery call today to discuss your developer requirements and launch your paid trial.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book a 15-Minute Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
