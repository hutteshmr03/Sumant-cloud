import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import cmmsHeroBg from "../assets/cmms-hero-bg.webp";
import cmmsCtaBg from "../assets/cmms-cta-bg.webp";
import useScrollReveal from "../hooks/useScrollReveal";

const KEY_FEATURES = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Work Order Management",
    text: "Automates scheduling, tracking, and completion of maintenance tasks across shifts and facilities.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Asset & Equipment Tracking",
    text: "Monitors equipment performance, full asset lifecycle, running hours, and historical maintenance logs.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
    title: "Preventive & Predictive Maintenance",
    text: "Reduces unexpected downtime by scheduling proactive maintenance by calendar date or run hours.",
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Real-Time Reporting & Analytics",
    text: "Provides deep insights into asset health, downtime trends, MTBF, MTTR, and maintenance expenditures.",
  },
  {
    num: "05",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Inventory & Spare Parts Management",
    text: "Ensures critical spare parts availability, vendor mapping, and automated low-stock visibility.",
  },
  {
    num: "06",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile Access & Cloud Integration",
    text: "Enables instant on-site access for floor technicians, supervisors, and multi-location managers.",
  },
];

const STANDARD_MODULES = {
  master: [
    "Factory Management (Add/Manage)",
    "User Management (Add/Manage)",
    "Asset Management (Add/Manage)",
    "UOM Management (Add/Manage)",
    "Checklist Management (Add/Manage)",
    "Spare Part Management (Add/Manage)",
    "Role Management (Add/Manage)",
  ],
  mapping: [
    "Add Spares Vendor Mapping",
    "Spares Vendor Map Management",
  ],
  actions: [
    "Add Repair Job",
  ],
  reports: [
    "Downtime Trend",
    "Meantime Failure Report (MTBF)",
    "Meantime Repair Report (MTTR)",
  ],
};

const PROFESSIONAL_MODULES = {
  master: [
    "Factory Management (Add/Manage)",
    "User Management (Add/Manage)",
    "Asset Management (Add/Manage)",
    "UOM Management (Add/Manage)",
    "Checklist Management (Add/Manage)",
    "Checklist Group Management (Add/Manage)",
    "Maintenance Management (Add/Manage)",
    "Breakdown Reason Management (Add/Manage)",
    "Spare Part Management (Add/Manage)",
    "Role Management (Add/Manage)",
  ],
  mapping: [
    "Add Spares Vendor Mapping",
    "Spares Vendor Map Management",
    "Add Spares Asset Mapping",
    "Spares Asset Map Management",
    "Add Checklist Group Mapping",
    "Checklist Group Map Management",
    "Add Menu Role Mapping",
    "Menu Role Map Management",
  ],
  actions: [
    "Transfer Asset",
    "Approve Transfers",
    "Transfer Approval Status",
    "Add Repair Job",
    "Add Schedule Job by Date",
    "Add Schedule Job by Running Hours",
    "Job Management",
  ],
  reports: [
    "Current Location of Assets",
    "Location History Report",
    "Downtime Trend",
    "Schedule Compliance Report",
    "Meantime Failure Report (MTBF)",
    "Meantime Repair Report (MTTR)",
    "Planned VS Actual Time",
    "Asset Expenditure Trend",
  ],
};

export default function CMMS() {
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
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={cmmsHeroBg}
              alt="Computerized Maintenance Management System"
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
                <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md shadow-sm">
                  Product / CMMS
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className="mt-5 font-display text-3xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-[-0.04em] text-white leading-[1.12] drop-shadow-md"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
                }}
              >
                Computerized Maintenance Management System{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">
                  (CMMS)
                </span>
              </h1>

              {/* Subheading */}
              <p
                className="mt-4 text-lg sm:text-2xl font-semibold text-sky-200"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
                }}
              >
                Streamline Maintenance &amp; Asset Management
              </p>

              {/* Paragraph */}
              <p
                className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s",
                }}
              >
                A <strong>Computerized Maintenance Management System (CMMS)</strong> is a digital solution that helps businesses <strong>plan, track, and optimize maintenance operations</strong>. It centralizes asset management, work orders, and inventory, ensuring <strong>maximum uptime, reduced costs, and improved efficiency</strong> in facility and equipment maintenance.
              </p>

              {/* Action Buttons */}
              <div
                className="mt-8 flex flex-wrap gap-4"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
                }}
              >
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_14px_rgba(0,112,173,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-500 hover:shadow-[0_6px_18px_rgba(0,112,173,0.3)]"
                >
                  <span>View Pricing Plans</span>
                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-200 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/25 hover:text-white hover:-translate-y-0.5"
                >
                  <span>Request Demo</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY FEATURES SECTION ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="Core Capabilities"
            title="Key Features of Our CMMS"
            subtitle="Engineered to eliminate unplanned downtime, standardize maintenance protocols, and give operational leaders full visibility."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KEY_FEATURES.map((feat, idx) => (
              <div
                key={feat.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/60 hover:shadow-[0_20px_40px_rgba(0,112,173,0.12)]"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/10 text-[var(--color-brand)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-brand)] group-hover:text-white shadow-sm">
                      {feat.icon}
                    </div>

                    <span className="font-mono text-xs font-bold rounded-full px-3 py-1 bg-[var(--color-foam)] border border-[var(--color-ink-line)] text-[var(--color-brand)]">
                      {feat.num}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] transition-colors duration-300 group-hover:text-[var(--color-brand)]">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--color-text-mist-2)]">
                    {feat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY CHOOSE OUR CMMS ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
              <div>
                <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Enterprise Value
                </span>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                  Why Choose Our CMMS?
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                  At <strong>Sumant Cloud</strong>, our <strong>CMMS solution</strong> is designed for <strong>scalability, flexibility, and ease of use</strong>. Whether you manage a <strong>manufacturing plant, healthcare facility, or a fleet</strong>, our system helps you <strong>optimize maintenance, reduce costs, and enhance operational efficiency</strong>.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {["Manufacturing Plants", "Healthcare Facilities", "Fleet Operations", "Facilities & Infrastructure", "Energy & Utilities"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] px-4 py-1.5 text-xs font-semibold text-[var(--color-text-ink)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--color-ink-line)]/50">
                  <a
                    href="/contact/"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-sky-500"
                  >
                    <span>Talk to Our Solutions Team</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Stats / Value Indicators */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="group relative flex flex-col justify-center rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--color-brand)]">Zero</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-mist-2)]">Unplanned Downtime</p>
              </div>
              <div className="group relative flex flex-col justify-center rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--color-brand)]">100%</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-mist-2)]">Audit Compliance</p>
              </div>
              <div className="group relative flex flex-col justify-center rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--color-brand)]">24/7</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-mist-2)]">Cloud Telemetry</p>
              </div>
              <div className="group relative flex flex-col justify-center rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--color-brand)]">Multi</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-mist-2)]">Facility Scale</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING SECTION ── */}
        <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="Pricing Plans"
            title="Transparent, Scalable CMMS Pricing"
            subtitle="Choose the package that fits your operational scale. All plans include continuous cloud updates and dedicated onboarding support."
          />

          {/* Pricing Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10 items-stretch">
            {/* Standard Plan */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between border-b border-[var(--color-ink-line)]/50 pb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[var(--color-text-ink)]">
                      Standard Plan
                    </h3>
                    <p className="mt-1 text-xs text-[var(--color-text-mist-2)]">Essential maintenance &amp; repair tracking</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl sm:text-4xl font-black text-[var(--color-brand)]">Rs. 9,999/-</p>
                    <p className="text-xs font-semibold text-[var(--color-text-mist-2)]">(5 users included)</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--color-text-mist-2)]">Need extra seats?</span>
                  <span className="text-xs font-bold text-[var(--color-text-ink)]">
                    Additional user: <span className="text-[var(--color-brand)]">Rs. 999/-</span>
                  </span>
                </div>

                {/* Module Details */}
                <div className="mt-6 space-y-6 border-t border-[var(--color-ink-line)]/50 pt-6">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                      Master Modules
                    </span>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {STANDARD_MODULES.master.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs text-[var(--color-text-ink)]">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                            <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                      Mapping &amp; Actions
                    </span>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {[...STANDARD_MODULES.mapping, ...STANDARD_MODULES.actions].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs text-[var(--color-text-ink)]">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                            <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                      Reports
                    </span>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {STANDARD_MODULES.reports.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs text-[var(--color-text-ink)]">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                            <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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

              <div className="mt-8 pt-6 border-t border-[var(--color-ink-line)]/50">
                <a
                  href="/contact/"
                  className="flex w-full items-center justify-center rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-ink)] transition-all duration-300 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] hover:shadow-md hover:-translate-y-0.5"
                >
                  Choose Standard Plan ↗
                </a>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="group relative flex flex-col justify-between rounded-3xl border-2 border-[var(--color-brand)] bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-[0_20px_45px_rgba(0,112,173,0.15)] ring-1 ring-[var(--color-brand)]/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2">
              <span className="absolute -top-3.5 right-8 rounded-full bg-[var(--color-brand)] px-4 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-white shadow-md">
                Most Popular
              </span>

              <div>
                <div className="flex items-center justify-between border-b border-[var(--color-ink-line)]/50 pb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[var(--color-text-ink)]">
                      Professional Plan
                    </h3>
                    <p className="mt-1 text-xs text-[var(--color-text-mist-2)]">Full enterprise telemetry &amp; job management</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl sm:text-4xl font-black text-[var(--color-brand)]">Rs. 14,500/-</p>
                    <p className="text-xs font-semibold text-[var(--color-text-mist-2)]">(5 users included)</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--color-text-mist-2)]">Need extra seats?</span>
                  <span className="text-xs font-bold text-[var(--color-text-ink)]">
                    Additional user: <span className="text-[var(--color-brand)]">Rs. 999/-</span>
                  </span>
                </div>

                {/* Module Details */}
                <div className="mt-6 space-y-6 border-t border-[var(--color-ink-line)]/50 pt-6">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                      Master Modules
                    </span>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {PROFESSIONAL_MODULES.master.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs text-[var(--color-text-ink)]">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                            <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                      Mapping &amp; Advanced Actions
                    </span>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {[...PROFESSIONAL_MODULES.mapping, ...PROFESSIONAL_MODULES.actions].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs text-[var(--color-text-ink)]">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                            <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                      Advanced Analytics &amp; Reports
                    </span>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {PROFESSIONAL_MODULES.reports.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs text-[var(--color-text-ink)]">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                            <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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

              <div className="mt-8 pt-6 border-t border-[var(--color-ink-line)]/50">
                <a
                  href="/contact/"
                  className="flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all duration-300 hover:bg-sky-500 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Choose Professional Plan ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="group relative overflow-hidden rounded-3xl sm:rounded-[36px] border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.06)] text-center backdrop-blur-md">
            {/* Background Image with Blur Effect & Ambient Tint */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={cmmsCtaBg}
                alt="Operations Scale"
                className="h-full w-full object-cover object-center scale-105 blur-[4px] brightness-90 dark:brightness-[0.35] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/85 backdrop-blur-[3px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/10" />
            </div>

            <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[var(--color-brand)]/20 blur-3xl z-[1]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl z-[1]" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-[-0.03em] text-slate-900 dark:text-white leading-snug drop-shadow-sm">
                Zero Downtime Starts With One Conversation.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium max-w-2xl mx-auto">
                Schedule a personalized walkthrough of the Sumant Cloud CMMS with our systems engineering team today.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-sky-500"
                >
                  <span>Contact Us</span>
                  <span>↗</span>
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 dark:border-white/20 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-900 dark:text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] hover:shadow-md"
                >
                  <span>Talk to Our Expert</span>
                  <span>↗</span>
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
