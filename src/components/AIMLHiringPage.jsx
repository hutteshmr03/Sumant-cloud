import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import aimlHiringHeroBg from "../assets/aiml-hiring-hero-bg.jpg";
import useScrollReveal from "../hooks/useScrollReveal";

const CORE_SERVICES = [
  {
    title: "Node.js Backend Development",
    subtitle: "High-Performance APIs & Scalable Backends",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    points: [
      "PHP-based applications",
      "CMS & portals",
      "Maintenance & enhancements",
    ],
  },
  {
    title: "Quality Assurance & Testing",
    subtitle: "Continuous Validation & Bug-Free Releases",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
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
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)] overflow-hidden">
        {/* ── Hero Section with Staggered Reveal ── */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={aimlHiringHeroBg}
              alt="Hire AI/ML Developers"
              className="h-full w-full object-cover object-center scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080d14]/90 via-[#0b141f]/75 to-[#080d14]/65 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,112,173,0.12),transparent_65%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Eyebrow Badge */}
              <div
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                }}
              >
                <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
                  Tech Talent &amp; Dedicated Hiring
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-[-0.04em] text-white leading-[1.12] drop-shadow-md"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
                }}
              >
                Hire AI/ML <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">Developers</span>
              </h1>

              {/* Paragraph */}
              <p
                className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200 max-w-3xl"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
                }}
              >
                Scale your development capacity with dedicated senior Node.js, React, PHP developers, and QA testing specialists. Transparent daily rates, seamless EU working-hour overlap, and flexible engagement terms.
              </p>

              {/* Action Buttons */}
              <div
                className="mt-8 flex flex-wrap gap-4"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
                }}
              >
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_14px_rgba(0,112,173,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-500 hover:shadow-[0_6px_18px_rgba(0,112,173,0.3)]"
                >
                  Book a 15-Minute Discovery Call
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-200 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/25 hover:text-white hover:-translate-y-0.5"
                >
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Core Services ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="Our Capabilities"
            title="Our Core Services"
            subtitle="Senior engineering specialists ready to deploy directly into your agile workflows."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CORE_SERVICES.map((service, idx) => (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/60 hover:shadow-[0_20px_40px_rgba(0,112,173,0.12)]"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/10 text-[var(--color-brand)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-brand)] group-hover:text-white shadow-sm">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-[var(--color-text-ink)]">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-[var(--color-text-mist-2)]">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5 border-t border-[var(--color-ink-line)]/50 pt-5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-xs sm:text-sm text-[var(--color-text-ink)]">
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

        {/* ── Engagement Models ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="Flexible &amp; Transparent"
            title="Engagement Models"
            subtitle="Select the contract structure that perfectly aligns with your team's velocity and roadmap."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div
                key={model.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/60 hover:shadow-[0_20px_40px_rgba(0,112,173,0.12)]"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div>
                  <span className="font-mono text-xs font-bold rounded-full px-3 py-1 bg-[var(--color-foam)] border border-[var(--color-ink-line)] text-[var(--color-brand)]">
                    Model {model.num}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.02em] text-[var(--color-text-ink)]">
                    {model.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-mist-2)] leading-relaxed">
                    {model.tagline}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-[var(--color-ink-line)]/50 pt-4">
                    {model.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[var(--color-text-ink)]">
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

        {/* ── Pricing Snapshot ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
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
                className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/60 hover:shadow-[0_20px_40px_rgba(0,112,173,0.12)]"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-text-ink)]">
                    {item.role}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-brand)]">
                      {item.rate}
                    </span>
                    <span className="text-xs text-[var(--color-text-mist-2)] font-semibold">/ {item.unit}</span>
                  </div>
                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[var(--color-text-mist-2)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why European Clients Choose Us & Why Work With Us ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Why European Clients Choose Us */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
              <div>
                <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  European Advantage
                </span>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                  Why European Clients Choose Us
                </h2>
                <ul className="mt-6 space-y-3.5 border-t border-[var(--color-ink-line)]/50 pt-5">
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
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
              <div>
                <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Partner With Us
                </span>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                  Why Work With Us
                </h2>
                <ul className="mt-6 space-y-3.5 border-t border-[var(--color-ink-line)]/50 pt-5">
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

        {/* ── Getting Started Steps ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Call to Action
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)]">
              Getting Started
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {GETTING_STARTED_STEPS.map((step) => (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/60 hover:shadow-xl"
              >
                <div>
                  <span className="font-mono text-sm font-bold text-[var(--color-brand)]">
                    {step.step}.
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-[var(--color-text-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--color-text-mist-2)]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final CTA Banner ── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center backdrop-blur-md">
            <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[var(--color-brand)]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Contact
              </span>
              <h2 className="mt-5 font-display text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                Looking for reliable Node.js, React or QA support?
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                Book a 15-minute discovery call today to discuss your developer requirements and launch your paid trial.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-sky-500"
                >
                  Book a 15-Minute Discovery Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function SectionHeader({ badge, title, subtitle }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end ${
        visible ? "animate-reveal-up" : "opacity-0 translate-y-6"
      }`}
    >
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
          {badge}
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
          {title}
        </h2>
      </div>
      <p className="max-w-md text-xs sm:text-sm text-[var(--color-text-mist-2)] leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
