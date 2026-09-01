import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import pemHeroBg from "../assets/pem-hero-bg.jpg";

const PEM_FEATURES = [
  {
    id: "expense-tracking",
    badge: "01 / REAL-TIME",
    title: "Expense Tracking",
    text: "Record and categorize project expenses in real-time.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    highlight: "Live Categorization & Cost Code Allocation",
  },
  {
    id: "budget-management",
    badge: "02 / VARIANCE CONTROL",
    title: "Budget Management",
    text: "Set budgets and track variances against actual expenses.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
    highlight: "Real-time Budget vs. Actual Monitoring",
  },
  {
    id: "invoice-receipt",
    badge: "03 / DIGITAL AUDIT",
    title: "Invoice & Receipt Management",
    text: "Upload and manage receipts for easy verification.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    highlight: "Instant Digital Receipts & Reconciliation",
  },
  {
    id: "approval-workflow",
    badge: "04 / MULTI-LEVEL",
    title: "Approval Workflow",
    text: "Customizable multi-level approvals for expense requests.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    highlight: "Automated Multi-Stage Governance Routing",
  },
  {
    id: "reporting-analytics",
    badge: "05 / INTELLIGENCE",
    title: "Reporting & Analytics",
    text: "Generate real-time reports on expense trends and budget utilization.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    highlight: "Dynamic Trend Curves & Utilization Forecasts",
  },
  {
    id: "mobile-access",
    badge: "06 / ON-THE-GO",
    title: "Mobile Access",
    text: "Submit and approve expenses on the go via mobile.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    highlight: "Instant Mobile Submission & Approval",
  },
];

export default function PEM() {
  const { isDark } = useTheme();
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const selectedFeature = PEM_FEATURES[activeFeatureIndex];

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={pemHeroBg}
              alt="Project Expense Management"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d223a]/55 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                Product / PEM
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                PEM
              </h1>
              <p className="mt-4 text-xl font-semibold text-sky-200 sm:text-2xl">
                Project Expense Management
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
                Project Expense Management (PEM) software helps businesses track, control, and optimize expenses related to specific projects. It ensures budget adherence, improves financial transparency, and streamlines approval processes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,112,173,0.35)]"
                >
                  <span>Explore Key Features</span>
                  <span>↓</span>
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/20"
                >
                  <span>Request Demo</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE VALUE HIGHLIGHT STRIP ── */}
        <section className="border-b border-[var(--color-ink-line)]/50 bg-[var(--color-foam-panel)] py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[var(--color-text-ink)]">Budget Adherence</h2>
                  <p className="text-xs text-[var(--color-text-mist-2)] mt-0.5">Control variances against actuals</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] font-bold text-lg">
                  ✦
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[var(--color-text-ink)]">Financial Transparency</h2>
                  <p className="text-xs text-[var(--color-text-mist-2)] mt-0.5">Full real-time audit visibility</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] font-bold text-lg">
                  ⚡
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[var(--color-text-ink)]">Streamlined Approvals</h2>
                  <p className="text-xs text-[var(--color-text-mist-2)] mt-0.5">Multi-level customizable workflows</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ADVANCED INTERACTIVE FEATURES HUB ── */}
        <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Core Capabilities
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Key Features of Project Expense Management Software
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              Explore how PEM centralizes financial governance, streamlines expense approvals, and enforces project budget discipline.
            </p>
          </div>

          {/* Interactive Feature Grid / Inspector */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            {/* Left: 6 Sleek Interactive Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {PEM_FEATURES.map((feature, idx) => {
                const isActive = activeFeatureIndex === idx;
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveFeatureIndex(idx)}
                    className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                      isActive
                        ? "border-[var(--color-brand)] bg-[var(--color-foam-panel)] shadow-md ring-2 ring-[var(--color-brand)]/20"
                        : "border-[var(--color-ink-line)]/70 bg-[var(--color-foam-panel)] hover:border-[var(--color-brand)]/50 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                          isActive
                            ? "bg-[var(--color-brand)] text-white"
                            : "bg-[var(--color-brand)]/10 text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--color-text-mist-2)]">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-base font-bold text-[var(--color-text-ink)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-mist-2)] sm:text-sm">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right: Live Feature Inspector & Detail Canvas */}
            <div className="sticky top-28 rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-8 shadow-sm">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Feature Focus
              </span>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white shadow-md">
                  {selectedFeature.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-text-ink)]">
                    {selectedFeature.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--color-brand)]">
                    {selectedFeature.highlight}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-[var(--color-text-ink)] border-t border-[var(--color-ink-line)]/50 pt-5">
                {selectedFeature.text}
              </p>

              {/* Status Simulation Pills */}
              <div className="mt-6 space-y-3 rounded-2xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">Module Status</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active &amp; Configurable
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-[var(--color-ink-line)]/40 pt-2.5">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">Platform Readiness</span>
                  <span className="font-bold text-[var(--color-text-ink)]">Enterprise Cloud / Mobile</span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-[var(--color-ink-line)]/40 pt-2.5">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">Audit Trail</span>
                  <span className="font-bold text-[var(--color-text-ink)]">100% Real-Time Timestamped</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact/"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand)] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[var(--color-brand)]/90 hover:shadow-lg"
                >
                  <span>Inquire About PEM ↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA SECTION ── */}
        <section className="border-t border-[var(--color-ink-line)]/60 bg-[var(--color-foam-panel)] py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Take Control of Project Expenses
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              Empower your project managers and finance teams with real-time expense tracking, budget adherence, and mobile approvals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span>Contact Us</span>
                <span>↗</span>
              </a>
              <a
                href="tel:+917028510950"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                <span>+91 70285 10950</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
