import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import edimsHeroBg from "../assets/edims-hero-bg.jpg";
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

const PHARMA_DOCUMENT_TYPES = [
  {
    title: "SOPs",
    sub: "Standard Operating Procedures",
    desc: "Standardize production, laboratory, and sanitation protocols across facilities.",
    tag: "Quality Operations",
  },
  {
    title: "BMR & BPR",
    sub: "Batch Manufacturing & Production",
    desc: "Complete batch release documentation, formula records, and packaging logs.",
    tag: "Manufacturing",
  },
  {
    title: "Specifications",
    sub: "Raw Material & Finished Product",
    desc: "Critical quality attributes, testing methods, and analytical limit sheets.",
    tag: "Quality Control",
  },
  {
    title: "Quality Documents",
    sub: "Deviations, CAPA & Change Control",
    desc: "End-to-end quality event tracking, risk assessments, and investigation reports.",
    tag: "Quality Assurance",
  },
  {
    title: "Validation Records",
    sub: "IQ / OQ / PQ & Process Validation",
    desc: "Equipment qualification, cleaning validation, and analytical method verification.",
    tag: "Engineering & Validation",
  },
  {
    title: "Certificates (CoA)",
    sub: "Certificates of Analysis & Compliance",
    desc: "Vendor CoAs, internal analytical test results, and batch release clearance certificates.",
    tag: "Compliance",
  },
  {
    title: "Regulatory Documents",
    sub: "Dossiers, Submissions & Licenses",
    desc: "Drug master files, market authorization filings, and site master files.",
    tag: "Regulatory Affairs",
  },
  {
    title: "Training Records",
    sub: "Personnel Qualification & Sign-offs",
    desc: "SOP training matrix, electronic sign-offs, and auditor-ready personnel profiles.",
    tag: "Human Resources",
  },
];

export default function EDIMS() {
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
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)] min-h-screen overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={edimsHeroBg}
              alt="Document Inventory Management System"
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
                  Product / E-DIMS
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
                Document Inventory Management System{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">
                  (E-DIMS)
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
                Streamline and control your pharmaceutical documentation with our <strong>Document Inventory Management System (DMS)</strong>. Designed specifically for pharmaceutical organizations, the system provides a centralized platform to manage, track, store, and retrieve critical documents efficiently.
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

        {/* ── PHARMACEUTICAL DOCUMENT COVERAGE ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="Comprehensive Scope"
            title="Complete Visibility Across Every Pharma Record"
            subtitle="Manage SOPs, BMR/BPR, specifications, quality documents, validation records, certificates, regulatory documents, and more with complete visibility and control."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PHARMA_DOCUMENT_TYPES.map((doc, idx) => (
              <div
                key={doc.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/60 hover:shadow-[0_16px_36px_rgba(0,112,173,0.1)]"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div>
                  <span className="text-[0.65rem] font-mono font-bold tracking-wider uppercase text-[var(--color-brand)] bg-[var(--color-foam)] border border-[var(--color-ink-line)] px-2.5 py-0.5 rounded-full inline-block">
                    {doc.tag}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-[var(--color-text-ink)] group-hover:text-[var(--color-brand)] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {doc.sub}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-mist-2)]">
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── KEY FEATURES SECTION ── */}
        <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="Core Capabilities"
            title="Key Features of E-DIMS"
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
                Book a Free Demo Today and discover how our Document Inventory Management System can help your organization improve control, visibility, and audit readiness.
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

