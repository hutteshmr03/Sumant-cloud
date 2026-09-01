import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import ep2pHeroBg from "../assets/ep2p-hero-bg.jpg";

const EP2P_FEATURES = [
  {
    id: "purchase-requisition",
    badge: "01 / AUTOMATION",
    title: "Automated Purchase Requisition & Approval",
    text: "Digitally initiates and approves purchase requests based on predefined workflows.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    highlight: "Predefined Rule Routing & Instant Approvals",
  },
  {
    id: "vendor-management",
    badge: "02 / SUPPLIERS",
    title: "Vendor Management",
    text: "Centralized vendor database for seamless onboarding and compliance tracking.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    highlight: "Onboarding, Verification & Performance Signals",
  },
  {
    id: "e-procurement",
    badge: "03 / BUYING",
    title: "E-Procurement",
    text: "Digital RFQs (Request for Quotations) and purchase orders for a streamlined buying process.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    highlight: "Digital RFQs, Direct POs & Catalogs",
  },
  {
    id: "invoice-matching",
    badge: "04 / ACCURACY",
    title: "Invoice Matching & Processing",
    text: "Auto-matches invoices with purchase orders and delivery receipts to eliminate discrepancies.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    highlight: "3-Way Automated PO, Delivery & Invoice Matching",
  },
  {
    id: "payment-automation",
    badge: "05 / DISBURSEMENTS",
    title: "Payment Automation",
    text: "Ensures timely and accurate payments, improving supplier relationships.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    highlight: "Automated Disbursement Queues & Timely Reconciliation",
  },
  {
    id: "reporting-analytics",
    badge: "06 / INSIGHTS",
    title: "Real-time Analytics & Reporting",
    text: "Provides insights into spending patterns, supplier performance, and cost optimization.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    highlight: "Spending Pattern Diagnostics & Cost Optimization",
  },
];

export default function EP2P() {
  const { isDark } = useTheme();
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const selectedFeature = EP2P_FEATURES[activeFeatureIndex];

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={ep2pHeroBg}
              alt="Electronic Purchase to Pay"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d223a]/55 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                Product / EP2P
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                EP2P
              </h1>
              <p className="mt-4 text-xl font-semibold text-sky-200 sm:text-2xl">
                Electronic Purchase to Pay (EP2P) – Streamlining Procurement and Payments
              </p>
              <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">What is EP2P?</p>
                <p className="mt-2 text-base leading-relaxed text-slate-200 sm:text-lg">
                  Electronic Purchase to Pay (EP2P) is an end-to-end digital procurement process that automates purchasing, invoicing, and payment workflows. It ensures seamless integration between procurement and accounts payable, reducing manual efforts and enhancing financial control.
                </p>
              </div>

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

        {/* ── KEY FEATURES SECTION ── */}
        <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Core Capabilities
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Key Features of EP2P
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              End-to-end digital procurement that automates purchasing, simplifies invoicing, and accelerates reconciliation.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            {/* 6 Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {EP2P_FEATURES.map((feature, idx) => {
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

            {/* Interactive Inspector Canvas */}
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

              <div className="mt-6 space-y-3 rounded-2xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">Procurement Workflow</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Automated &amp; Connected
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-[var(--color-ink-line)]/40 pt-2.5">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">AP Integration</span>
                  <span className="font-bold text-[var(--color-text-ink)]">3-Way Discrepancy Matching</span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-[var(--color-ink-line)]/40 pt-2.5">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">Disbursement Cycle</span>
                  <span className="font-bold text-[var(--color-text-ink)]">Instant &amp; Verified</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact/"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand)] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[var(--color-brand)]/90 hover:shadow-lg"
                >
                  <span>Inquire About EP2P ↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA SECTION ── */}
        <section className="border-t border-[var(--color-ink-line)]/60 bg-[var(--color-foam-panel)] py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Transform Your Procurement to Pay Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              Connect procurement, vendors, and accounts payable into one seamless digital workflow.
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
