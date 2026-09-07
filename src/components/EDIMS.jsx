import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import edimsHeroBg from "../assets/edims-hero-bg.webp";
import useScrollReveal from "../hooks/useScrollReveal";

const EDIMS_KEY_FEATURES = [
  {
    num: "01",
    title: "Centralized Document Repository",
    text: "Single secure source of truth for all pharmaceutical documentation, standard templates, master dossiers, and quality records.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Document Inventory & Location Tracking",
    text: "Precise tracking of physical and electronic document locations across storage vaults, site archives, and department cabinets.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Version & Revision Control",
    text: "Strict lifecycle versioning with automated superseding, major/minor revision history, and zero risk of outdated document usage.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Document Review & Approval Workflow",
    text: "Configurable multi-tier review, verification, and e-signature approval workflows tailored to pharma QA/QC protocols.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Expiry, Review & Renewal Alerts",
    text: "Automated proactive alerts before document expiration, mandatory periodic review milestones, and certificate renewals.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Role-Based Access Control",
    text: "Granular access security ensuring formulation secrets, batch records, and quality documents are strictly compartmentalized.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Complete Audit Trail",
    text: "Immutable, timestamped audit logging of every creation, view, edit, print, download, review, and approval event.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Quick Search & Document Retrieval",
    text: "High-speed metadata search, full-text scanning, and multi-filter queries for instant record discovery during regulatory audits.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: "09",
    title: "Archive & Obsolete Document Management",
    text: "Compliant archival retention policies, obsolete document quarantining, and defensible document disposition logging.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
    ),
  },
  {
    num: "10",
    title: "Department-Wise Document Control",
    text: "Tailored document governance across QA, QC, R&D, Manufacturing, Regulatory Affairs, and Warehouse divisions.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

export default function EDIMS() {
  const { isDark } = useTheme();
  const [heroVisible, setHeroVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    usersCount: "5 Users (Base Package - ₹44,000)",
    modules: ["SOPs & BMR/BPR Control", "21 CFR Part 11 Audit Trail"],
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleModule = (moduleName) => {
    setFormData((prev) => {
      const exists = prev.modules.includes(moduleName);
      if (exists) {
        return { ...prev, modules: prev.modules.filter((m) => m !== moduleName) };
      } else {
        return { ...prev, modules: [...prev.modules, moduleName] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)] min-h-screen overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={edimsHeroBg}
              alt="Document Management System"
              className="h-full w-full object-cover object-center scale-105 transition-transform duration-1000"
            />
            {/* Soft Dimmed Neutral Slate Scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080d14]/90 via-[#0b141f]/75 to-[#080d14]/65 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,112,173,0.12),transparent_65%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                }}
              >
                <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md shadow-sm">
                  Product / E-DMS
                </span>
              </div>

              <h1
                className="mt-5 font-display text-3xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-[-0.04em] text-white leading-[1.12] drop-shadow-md"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
                }}
              >
                Document Management System{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">
                  (E-DMS)
                </span>
              </h1>

              <p
                className="mt-4 text-lg sm:text-2xl font-semibold text-sky-200"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
                }}
              >
                Streamline &amp; Control Pharmaceutical Documentation
              </p>

              <p
                className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200 max-w-3xl"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s",
                }}
              >
                Streamline and control your pharmaceutical documentation with our <strong>Document Management System (E-DMS)</strong>. Designed specifically for pharmaceutical organizations, the system provides a centralized platform to manage, track, store, and retrieve critical documents efficiently.
              </p>

              <div
                className="mt-8 flex flex-wrap gap-4"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
                }}
              >
                <a
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_14px_rgba(0,112,173,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-500 hover:shadow-[0_6px_18px_rgba(0,112,173,0.3)]"
                >
                  <span>Request a Demo</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/15 backdrop-blur-md px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-sky-200 transition-all duration-300 hover:bg-sky-500/25 hover:border-sky-400 hover:text-white hover:-translate-y-0.5"
                >
                  <span>View Pricing (₹44,000)</span>
                  <span>↓</span>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-200 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/25 hover:text-white hover:-translate-y-0.5"
                >
                  <span>Explore Features</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY FEATURES SECTION ── */}
        <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="Core Capabilities"
            title="Key Features of E-DMS"
            subtitle="Engineered to provide strict compliance, granular access control, and complete audit readiness across all departments."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EDIMS_KEY_FEATURES.map((feat, idx) => (
              <div
                key={feat.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/60 hover:shadow-[0_20px_40px_rgba(0,112,173,0.12)]"
                style={{ animationDelay: `${idx * 60}ms` }}
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

        {/* ── TAKE COMPLETE CONTROL & AUDIT READINESS ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Card: Value Headline */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
              <div>
                <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Pharmaceutical Control
                </span>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                  Take Complete Control of Your Pharmaceutical Documents
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                  Eliminate manual document tracking, reduce the risk of outdated records, and keep your critical documentation <strong>organized, accessible, and traceable</strong>.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                  Streamline your document management process with a solution built specifically for pharmaceutical operations.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {[
                    "100% Traceability",
                    "Audit-Ready in Seconds",
                    "Zero Outdated Records",
                    "Regulatory Integrity",
                    "Cross-Site Visibility",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] px-4 py-1.5 text-xs font-semibold text-[var(--color-text-ink)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Compliance Highlights Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-[var(--color-brand)] flex items-center justify-center font-bold text-lg mb-4">
                  01
                </div>
                <h4 className="font-display text-base font-bold text-[var(--color-text-ink)]">
                  Audit Readiness
                </h4>
                <p className="mt-2 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                  Instant retrieval of inspection-ready records during regulatory agency audits.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-lg mb-4">
                  02
                </div>
                <h4 className="font-display text-base font-bold text-[var(--color-text-ink)]">
                  Data Integrity
                </h4>
                <p className="mt-2 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                  ALCOA+ compliant data architecture with full cryptographic change logs.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-lg mb-4">
                  03
                </div>
                <h4 className="font-display text-base font-bold text-[var(--color-text-ink)]">
                  Operational Speed
                </h4>
                <p className="mt-2 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                  Accelerated review & approval cycles with automated notifications and reminders.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg mb-4">
                  04
                </div>
                <h4 className="font-display text-base font-bold text-[var(--color-text-ink)]">
                  Zero Loss of Records
                </h4>
                <p className="mt-2 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                  Secure physical barcode tracking linked seamlessly with cloud document replicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── OFFICIAL PRICING & CUSTOM DEMO / QUOTE SECTION ── */}
        <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 border-t border-[var(--color-ink-line)]/50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
              Official Pricing &amp; Custom Quote
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-3xl lg:text-4xl">
              Transparent Pricing &amp; Tailored Consultation
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-mist-2)]">
              Choose the standard base package or configure a custom quote and live walkthrough according to your pharma facility needs.
            </p>
          </div>

          {/* 2-Column Side-by-Side Grid */}
          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            {/* ── Left Box: Official Pricing Card ── */}
            <div className="lg:col-span-5 flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-7 sm:p-9 shadow-lg backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brand)]">
                    E-DMS Base Package
                  </span>
                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    21 CFR Part 11
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-[var(--color-text-ink)]">
                  Core Platform Deployment
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[var(--color-text-mist-2)]">
                  Includes <strong>5 Full Named Users</strong> with complete platform features.
                </p>

                {/* Price Display */}
                <div className="mt-6 rounded-2xl border border-[var(--color-ink-line)] bg-[var(--color-foam)] p-4 sm:p-5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-ink)]">
                      ₹44,000
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--color-text-mist-2)]">
                      (Base 5 Users)
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400">
                    + ₹2,500 each for additional users
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="mt-6 pt-5 border-t border-[var(--color-ink-line)]">
                  <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-3">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-[0.82rem] text-[var(--color-text-ink)]">
                    {[
                      "5 Full Named User Licenses Included",
                      "Master Document Vault & Vault Location Tracking",
                      "Strict Revision Lifecycle & Multi-Tier Approvals",
                      "21 CFR Part 11 Electronic Signatures & Audit Logs",
                      "Document Expiry, Renewal & Periodic Review Alerts",
                      "Role-Based Access Governance & Department Segregation",
                      "Daily Automated Backups & End-to-End SSL Security",
                      "Seamlessly add extra users at ₹2,500 / user",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <svg className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Quick Note */}
              <div className="mt-6 pt-4 border-t border-[var(--color-ink-line)]">
                <p className="text-[0.72rem] text-[var(--color-text-mist-2)]">
                  💡 Need enterprise multi-plant scale or custom integrations? Fill out the inquiry form beside to receive a comprehensive rollout plan.
                </p>
              </div>
            </div>

            {/* ── Right Box: Interactive E-DMS Inquiry & Quote Form ── */}
            <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-7 sm:p-10 shadow-lg backdrop-blur-md">
              {isSubmitted ? (
                <div className="my-auto py-10 text-center animate-fadeIn">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 shadow-sm">
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand)]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brand)]">
                    Inquiry Received
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-[var(--color-text-ink)]">
                    Thank You, {formData.fullName || "Partner"}!
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-mist-2)] max-w-md mx-auto">
                    We have received your E-DMS requirement details for <strong>{formData.company || "your organization"}</strong>. Our pharmaceutical solutions specialist will get back to you with a customized quote and demo schedule within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        company: "",
                        usersCount: "5 Users (Base Package - ₹44,000)",
                        modules: ["SOPs & BMR/BPR Control", "21 CFR Part 11 Audit Trail"],
                        requirements: "",
                      });
                    }}
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text-ink)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors cursor-pointer"
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              ) : (
                <div>
                  <div className="border-b border-[var(--color-ink-line)]/40 pb-5">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                      Inquiry Form
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-3xl">
                      Tell us about your project
                    </h3>
                    <p className="mt-1.5 text-xs text-[var(--color-text-mist-2)]">
                      Fill in your details below and our solution architects will connect with you promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-7">
                    {/* Row 1: Full Name & Email */}
                    <div className="grid gap-7 sm:grid-cols-2">
                      <div className="group relative">
                        <label htmlFor="edms-fullName" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="edms-fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                          className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium placeholder-slate-400/60 dark:placeholder-slate-400/40 transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none"
                        />
                      </div>

                      <div className="group relative">
                        <label htmlFor="edms-email" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="edms-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                          className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium placeholder-slate-400/60 dark:placeholder-slate-400/40 transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid gap-7 sm:grid-cols-2">
                      <div className="group relative">
                        <label htmlFor="edms-phone" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          id="edms-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                          className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium placeholder-slate-400/60 dark:placeholder-slate-400/40 transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none"
                        />
                      </div>

                      <div className="group relative">
                        <label htmlFor="edms-company" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                          Company / Pharma Facility Name
                        </label>
                        <input
                          type="text"
                          id="edms-company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Apex Life Sciences Ltd"
                          style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                          className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium placeholder-slate-400/60 dark:placeholder-slate-400/40 transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Row 3: Users Scale Select */}
                    <div className="group relative">
                      <label htmlFor="edms-usersCount" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                        Required User Licenses / Scale <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="edms-usersCount"
                          name="usersCount"
                          value={formData.usersCount}
                          onChange={handleInputChange}
                          style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                          className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none appearance-none cursor-pointer"
                        >
                          <option value="5 Users (Base Package - ₹44,000)" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">5 Users (Base Package - ₹44,000)</option>
                          <option value="6 - 15 Users (Base + Extra Users)" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">6 - 15 Users (Base + Extra Users at ₹2,500/user)</option>
                          <option value="16 - 30 Users (Multi-Department)" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">16 - 30 Users (Multi-Department)</option>
                          <option value="31 - 50 Users (Multi-Site Pharma)" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">31 - 50 Users (Multi-Site Pharma)</option>
                          <option value="50+ Users (Enterprise Plant Rollout)" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">50+ Users (Enterprise Plant Rollout)</option>
                        </select>
                        <div className="pointer-events-none absolute right-2 bottom-3 text-slate-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Module selection pills */}
                    <div className="group relative">
                      <label className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] mb-2">
                        Specific E-DMS Modules / Workflows of Interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "SOPs & BMR/BPR Control",
                          "21 CFR Part 11 Audit Trail",
                          "Validation & IQ/OQ/PQ",
                          "CAPA & Change Control",
                          "CoA Certificates Tracking",
                          "Multi-Site Archive Tracking",
                        ].map((mod) => {
                          const isSelected = formData.modules.includes(mod);
                          return (
                            <button
                              type="button"
                              key={mod}
                              onClick={() => toggleModule(mod)}
                              className={`rounded-full px-3 py-1 text-[0.72rem] font-semibold transition-all duration-200 cursor-pointer border ${
                                isSelected
                                  ? "bg-[var(--color-brand)] text-white border-[var(--color-brand)] shadow-sm"
                                  : "bg-[var(--color-foam)] text-[var(--color-text-mist-2)] border-[var(--color-ink-line)] hover:border-[var(--color-brand)]/50"
                              }`}
                            >
                              {isSelected ? "✓ " : "+ "}
                              {mod}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 5: How can we help you / Additional Requirements */}
                    <div className="group relative">
                      <div className="flex items-center justify-between">
                        <label htmlFor="edms-requirements" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                          How can we help you? <span className="text-rose-500">*</span>
                        </label>
                        <span className="font-mono text-[0.68rem] font-medium text-[var(--color-text-mist-2)]">
                          {5000 - formData.requirements.length} chars left
                        </span>
                      </div>
                      <textarea
                        id="edms-requirements"
                        name="requirements"
                        required
                        maxLength={5000}
                        rows={3}
                        value={formData.requirements}
                        onChange={handleInputChange}
                        style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                        placeholder="Describe your project, timeline, tech stack, or operational challenges..."
                        className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium placeholder-slate-400/60 dark:placeholder-slate-400/40 transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0070ad] to-[#0284c7] px-9 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_25px_rgba(0,112,173,0.3)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,112,173,0.45)] hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 cursor-pointer"
                      >
                        <span>{isSubmitting ? "Submitting..." : "Submit Inquiry"}</span>
                        <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA BANNER: READY TO SIMPLIFY ── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="group relative overflow-hidden rounded-3xl sm:rounded-[36px] border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center backdrop-blur-md">
            <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[var(--color-brand)]/15 blur-3xl z-[1]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-sky-400/15 blur-3xl z-[1]" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                Ready to Simplify Your Document Management?
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                Book a Free Demo Today and discover how our Document Management System (E-DMS) can help your organization improve control, visibility, and audit readiness.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-sky-500"
                >
                  <span>Request a Demo</span>
                  <span>↗</span>
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)]/90 backdrop-blur-md px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] hover:shadow-md"
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
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          {badge}
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-[var(--color-text-mist-2)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

