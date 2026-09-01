import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import wmsHeroBg from "../assets/wms-hero-bg.jpg";

const WMS_FEATURES = [
  {
    id: "inventory-tracking",
    badge: "01 / REAL-TIME",
    title: "Inventory Tracking",
    text: "Real-time tracking of stock levels, movement, and storage locations.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    highlight: "Multi-Bin Stock Levels & Instant Spatial Location",
  },
  {
    id: "order-management",
    badge: "02 / FULFILLMENT",
    title: "Order Management",
    text: "Streamlined order processing, picking, packing, and shipping automation.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    highlight: "Pick-Pack-Ship Automation & Wave Allocation",
  },
  {
    id: "barcode-rfid",
    badge: "03 / SCANNING",
    title: "Barcode & RFID Integration",
    text: "Ensures accurate stock identification and reduces human errors.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5v14M8 5v14M12 5v14M17 5v14M21 5v14" />
      </svg>
    ),
    highlight: "High-Speed Handheld & Fixed Scanner Integration",
  },
  {
    id: "reporting-analytics",
    badge: "04 / INTELLIGENCE",
    title: "Real-Time Analytics & Reporting",
    text: "Provides insights into warehouse performance and inventory turnover.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    highlight: "Throughput Rates, Space Utilization & Turnover Velocity",
  },
  {
    id: "automated-replenishment",
    badge: "05 / RE-ORDER",
    title: "Automated Replenishment",
    text: "Alerts and auto-reorders to prevent stock shortages.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 4v6h-6" />
        <path d="M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    highlight: "Min/Max Threshold Alerts & Automatic Purchase Triggers",
  },
  {
    id: "multi-warehouse",
    badge: "06 / MULTI-SITE",
    title: "Multi-Warehouse Management",
    text: "Centralized control over multiple warehouse locations.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    highlight: "Cross-Docking, Inter-Facility Transfers & Global Visibility",
  },
  {
    id: "erp-integration",
    badge: "07 / CONNECTIVITY",
    title: "Seamless ERP & E-commerce Integration",
    text: "Connects with existing business systems for smooth operations.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    highlight: "Direct API Connectors for ERPs, Marketplaces & Stores",
  },
];

export default function WMS() {
  const { isDark } = useTheme();
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const selectedFeature = WMS_FEATURES[activeFeatureIndex];

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={wmsHeroBg}
              alt="Warehouse Management System"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d223a]/55 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                Product / WMS
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                WMS
              </h1>
              <p className="mt-4 text-xl font-semibold text-sky-200 sm:text-2xl">
                Warehouse Management System (WMS) – Optimize Your Inventory &amp; Operations
              </p>
              <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">What is a Warehouse Management System?</p>
                <p className="mt-2 text-base leading-relaxed text-slate-200 sm:text-lg">
                  A <strong>Warehouse Management System (WMS)</strong> is a digital solution designed to optimize and automate warehouse operations, ensuring efficient inventory management, order fulfillment, and supply chain coordination. It enhances accuracy, reduces costs, and improves overall warehouse efficiency.
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
              Key Features of Our WMS
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              Engineered to bring total inventory precision, automated picking and packing, and seamless multi-facility control.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            {/* 7 Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {WMS_FEATURES.map((feature, idx) => {
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
                  <span className="font-semibold text-[var(--color-text-mist-2)]">Operational Velocity</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    High-Speed Automated
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-[var(--color-ink-line)]/40 pt-2.5">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">Inventory Precision</span>
                  <span className="font-bold text-[var(--color-text-ink)]">Barcode &amp; RFID Verified</span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-[var(--color-ink-line)]/40 pt-2.5">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">Ecosystem Sync</span>
                  <span className="font-bold text-[var(--color-text-ink)]">ERP &amp; E-commerce Ready</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact/"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand)] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[var(--color-brand)]/90 hover:shadow-lg"
                >
                  <span>Inquire About WMS ↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA SECTION ── */}
        <section className="border-t border-[var(--color-ink-line)]/60 bg-[var(--color-foam-panel)] py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Optimize Your Warehouse Operations Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              Connect inventory tracking, automated fulfillment, and ERP integrations across all your locations.
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
