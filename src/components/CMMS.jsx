import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import cmmsHeroBg from "../assets/cmms-hero-bg.jpg";

const KEY_FEATURES = [
  {
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
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
    title: "Preventive & Predictive Maintenance",
    text: "Reduces unexpected downtime by scheduling proactive maintenance by calendar date or run hours.",
  },
  {
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
  const [openTab, setOpenTab] = useState("all");

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={cmmsHeroBg}
              alt="Computerized Maintenance Management System"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d223a]/55 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                Product / CMMS
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                Computerized Maintenance Management System (CMMS)
              </h1>
              <p className="mt-4 text-xl font-semibold text-sky-200 sm:text-2xl">
                Streamline Maintenance &amp; Asset Management
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
                A <strong>Computerized Maintenance Management System (CMMS)</strong> is a digital solution that helps businesses <strong>plan, track, and optimize maintenance operations</strong>. It centralizes asset management, work orders, and inventory, ensuring <strong>maximum uptime, reduced costs, and improved efficiency</strong> in facility and equipment maintenance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,112,173,0.35)]"
                >
                  <span>View Pricing Plans</span>
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
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Core Capabilities
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Key Features of Our CMMS
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              Engineered to eliminate unplanned downtime, standardize maintenance protocols, and give operational leaders full visibility.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KEY_FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-[var(--color-ink-line)]/70 bg-[var(--color-foam-panel)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)] hover:shadow-md"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] transition-colors group-hover:bg-[var(--color-brand)] group-hover:text-white">
                    {feat.icon}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[var(--color-text-ink)]">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[var(--color-text-mist-2)] sm:text-sm">
                    {feat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY CHOOSE OUR CMMS ── */}
        <section className="border-t border-[var(--color-ink-line)]/50 bg-[var(--color-foam-panel)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Enterprise Value
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
                  Why Choose Our CMMS?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-text-mist-2)]">
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

                <div className="mt-8">
                  <a
                    href="/contact/"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <span>Talk to Our Solutions Team</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* Stats / Value Indicators */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-2xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-6 text-center">
                  <p className="font-display text-3xl font-extrabold text-[var(--color-brand)] sm:text-4xl">Zero</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-mist-2)]">Unplanned Downtime</p>
                </div>
                <div className="rounded-2xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-6 text-center">
                  <p className="font-display text-3xl font-extrabold text-[var(--color-brand)] sm:text-4xl">100%</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-mist-2)]">Audit Compliance</p>
                </div>
                <div className="rounded-2xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-6 text-center">
                  <p className="font-display text-3xl font-extrabold text-[var(--color-brand)] sm:text-4xl">24/7</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-mist-2)]">Cloud Telemetry</p>
                </div>
                <div className="rounded-2xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-6 text-center">
                  <p className="font-display text-3xl font-extrabold text-[var(--color-brand)] sm:text-4xl">Multi</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-mist-2)]">Facility Scale</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING SECTION ── */}
        <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Pricing Plans
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Transparent, Scalable CMMS Pricing
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-mist-2)]">
              Choose the package that fits your operational scale. All plans include continuous cloud updates and dedicated onboarding support.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Standard Plan */}
            <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-sm">
              <div>
                <div className="flex items-center justify-between border-b border-[var(--color-ink-line)]/50 pb-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[var(--color-text-ink)]">
                      Standard Plan
                    </h3>
                    <p className="mt-1 text-xs text-[var(--color-text-mist-2)]">Essential maintenance &amp; repair tracking</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl font-black text-[var(--color-brand)]">Rs. 9,999/-</p>
                    <p className="text-[0.7rem] font-semibold text-[var(--color-text-mist-2)]">(5 users included)</p>
                  </div>
                </div>

                <p className="mt-4 text-xs font-bold text-[var(--color-text-ink)]">
                  Additional user: <span className="text-[var(--color-brand)]">Rs. 999/-</span>
                </p>

                {/* Module Details */}
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">Master Modules</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {STANDARD_MODULES.master.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[var(--color-text-mist-2)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">Mapping &amp; Actions</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {[...STANDARD_MODULES.mapping, ...STANDARD_MODULES.actions].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[var(--color-text-mist-2)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">Reports</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {STANDARD_MODULES.reports.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[var(--color-text-mist-2)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] shrink-0" />
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
                  className="flex w-full items-center justify-center rounded-xl border border-[var(--color-ink-line)] bg-[var(--color-foam)] py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                >
                  Choose Standard Plan ↗
                </a>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-[var(--color-brand)] bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-lg shadow-[var(--color-brand)]/10">
              <span className="absolute -top-3.5 right-8 rounded-full bg-[var(--color-brand)] px-4 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-white shadow-md">
                Most Popular
              </span>

              <div>
                <div className="flex items-center justify-between border-b border-[var(--color-ink-line)]/50 pb-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[var(--color-text-ink)]">
                      Professional Plan
                    </h3>
                    <p className="mt-1 text-xs text-[var(--color-text-mist-2)]">Full enterprise telemetry &amp; job management</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl font-black text-[var(--color-brand)]">Rs. 14,500/-</p>
                    <p className="text-[0.7rem] font-semibold text-[var(--color-text-mist-2)]">(5 users included)</p>
                  </div>
                </div>

                <p className="mt-4 text-xs font-bold text-[var(--color-text-ink)]">
                  Additional user: <span className="text-[var(--color-brand)]">Rs. 999/-</span>
                </p>

                {/* Module Details */}
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">Master Modules</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {PROFESSIONAL_MODULES.master.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[var(--color-text-mist-2)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">Mapping &amp; Advanced Actions</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {[...PROFESSIONAL_MODULES.mapping, ...PROFESSIONAL_MODULES.actions].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[var(--color-text-mist-2)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">Advanced Analytics &amp; Reports</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {PROFESSIONAL_MODULES.reports.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[var(--color-text-mist-2)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] shrink-0" />
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
                  className="flex w-full items-center justify-center rounded-xl bg-[var(--color-brand)] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[var(--color-brand)]/90 hover:shadow-lg"
                >
                  Choose Professional Plan ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="border-t border-[var(--color-ink-line)]/60 bg-[var(--color-foam-panel)] py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Zero Downtime Starts With One Conversation.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              Schedule a personalized walkthrough of the Sumant Cloud CMMS with our systems engineering team today.
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
