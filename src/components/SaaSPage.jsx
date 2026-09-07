import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import saasHeroBg from "../assets/saas-hero-bg.webp";
import useScrollReveal from "../hooks/useScrollReveal";

const SERVICES = [
  {
    num: "01",
    title: "SaaS Product Development",
    text: "Build cloud-based software products designed for multiple users, businesses, and use cases.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "SaaS Platform Modernisation",
    text: "Upgrade existing software into a modern, cloud-based SaaS platform.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Subscription & Payment Integration",
    text: "Implement subscription plans, billing, payments, trials, and customer management.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Cloud Deployment & Scaling",
    text: "Deploy and optimise your SaaS platform for reliability, performance, and future growth.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
];

const SAAS_PRODUCTS = [
  {
    id: "e-dims",
    name: "E-DMS",
    fullName: "Document Management System",
    category: "Pharma & Life Sciences",
    tagline: "Streamline & Control Pharmaceutical Documentation",
    description:
      "A centralized platform designed for pharmaceutical organizations to manage, track, store, and retrieve critical quality records and master dossiers with complete audit readiness.",
    features: [
      "Centralized Document Repository",
      "Document Inventory & Location Tracking",
      "Version & Revision Lifecycle Control",
      "Review & Approval Workflows with Audit Trails",
    ],
    buttonText: "Explore E-DMS Platform",
    href: "/e-dims",
    accentGlow: "from-emerald-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "cmms",
    name: "CMMS",
    fullName: "Computerized Maintenance Management System",
    category: "Industrial & Manufacturing",
    tagline: "Streamline Maintenance & Asset Management",
    description:
      "A digital platform that helps businesses plan, track, and optimize maintenance operations, asset tracking, and spare parts inventory for maximum equipment uptime.",
    features: [
      "Automated Work Order Management",
      "Asset Lifecycle & Equipment Tracking",
      "Preventive & Predictive Maintenance",
      "Spare Parts Inventory & MTBF/MTTR Analytics",
    ],
    buttonText: "Explore CMMS Platform",
    href: "/cmms",
    accentGlow: "from-sky-500/20 via-blue-600/10 to-transparent",
  },
];

export default function SaaSPage() {
  const { isDark } = useTheme();
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)] overflow-hidden">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={saasHeroBg}
              alt="SaaS Solutions"
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
                  SaaS Solutions
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
                Build, Launch &amp; Scale Your <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">SaaS Product</span>
              </h1>

              {/* Paragraph 1 */}
              <p
                className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
                }}
              >
                We help businesses transform ideas into powerful, scalable SaaS products. From product strategy and UI/UX to development, cloud deployment, and ongoing support, we provide end-to-end SaaS development tailored to your business model.
              </p>

              {/* Paragraph 2 */}
              <p
                className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300/90"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s",
                }}
              >
                Whether you are launching a new SaaS product or transforming an existing application into a subscription-based platform, our team helps you build technology that is secure, flexible, and ready to scale.
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
                  Build Your SaaS With Us
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-200 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/25 hover:text-white hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our SaaS Services (The 4 Cards) ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="End-to-End Capabilities"
            title="Our SaaS Services"
            subtitle="Full-lifecycle cloud engineering tailored specifically to subscription business models."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, idx) => (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/60 hover:shadow-[0_20px_40px_rgba(0,112,173,0.12)]"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/10 text-[var(--color-brand)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-brand)] group-hover:text-white shadow-sm">
                      {service.icon}
                    </div>

                    <span className="font-mono text-xs font-bold rounded-full px-3 py-1 bg-[var(--color-foam)] border border-[var(--color-ink-line)] text-[var(--color-brand)]">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-bold tracking-[-0.02em] text-[var(--color-text-ink)] transition-colors duration-300 group-hover:text-[var(--color-brand)]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[var(--color-text-mist-2)]">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Flagship SaaS Products (E-DMS & CMMS Showcase) ── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="Our SaaS Platforms"
            title="Flagship SaaS Products: E-DMS & CMMS"
            subtitle="Ready-to-deploy, scalable SaaS products engineered to solve complex operational and regulatory challenges."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            {SAAS_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-9 lg:p-10 shadow-[0_10px_36px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-[var(--color-brand)]/60 hover:shadow-[0_20px_50px_rgba(0,112,173,0.14)] hover:-translate-y-1"
              >
                {/* Ambient Radial Accent Glow */}
                <div className={`pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-to-br ${prod.accentGlow} blur-3xl opacity-60`} />

                {/* Top Section */}
                <div className="relative z-10">
                  {/* Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--color-brand)] tracking-tight">
                      {prod.name}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[var(--color-text-mist-2)]">
                      {prod.category}
                    </span>
                  </div>

                  {/* Full System Name & Tagline */}
                  <div>
                    <h3 className="mt-4 font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--color-text-ink)] leading-snug">
                      {prod.fullName}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-[var(--color-brand)]">
                      {prod.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--color-text-mist-2)]">
                    {prod.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="mt-6 border-t border-[var(--color-ink-line)]/50 pt-5">
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--color-brand)] mb-3">
                      Core Features
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {prod.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500 text-[0.65rem] font-bold">
                            ✓
                          </span>
                          <span className="text-xs font-medium text-[var(--color-text-ink)] leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-8 pt-6 border-t border-[var(--color-ink-line)]/50 flex flex-wrap items-center gap-3 relative z-10">
                  <a
                    href={prod.href}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_16px_rgba(0,112,173,0.3)] transition-all duration-300 hover:bg-sky-500 hover:shadow-[0_8px_24px_rgba(0,112,173,0.4)] hover:-translate-y-0.5"
                  >
                    <span>{prod.buttonText}</span>
                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-text-ink)] transition-all duration-300 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Ready to Deploy CTA ── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center backdrop-blur-md">
            <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[var(--color-brand)]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Have a SaaS Idea?
              </span>
              <h2 className="mt-5 font-display text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                Turn your idea into a scalable SaaS product.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                From your first concept to your first customer—and beyond—we can help you build, launch, and scale.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-sky-500"
                >
                  Build Your SaaS With Us
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] hover:shadow-md"
                >
                  Book a Free Consultation
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

