import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import useScrollReveal from "../hooks/useScrollReveal";
import lmsHeroBg from "../assets/software-hero-bg.jpg";

const LMS_KEY_FEATURES = [
  {
    num: "01",
    title: "Employee Training Management",
    text: "Centralized administration to assign, track, and monitor individual and team learning paths across all pharmaceutical facilities.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "SOP & Compliance Training",
    text: "Ensure staff are strictly trained, tested, and certified on updated Standard Operating Procedures and GxP guidelines.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Course & Learning Module Management",
    text: "Structured curriculum authoring with multimedia lessons, document attachments, interactive slides, and micro-learning modules.",
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
    num: "04",
    title: "Role-Based Training Assignment",
    text: "Automated training matrix assigning specific courses and certifications based on department, designation, and plant location.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Online Assessments & Quizzes",
    text: "Configurable post-training knowledge checks, passing score criteria, randomized question pools, and automated grading.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Training Calendar & Scheduling",
    text: "Interactive visual calendar for scheduling classroom sessions, instructor-led training, and annual re-certification programs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Automated Training & Due-Date Notifications",
    text: "Proactive email and dashboard alerts reminding employees and supervisors of approaching due dates and training deadlines.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Employee Progress Tracking",
    text: "Live monitoring of training status, course progress percentages, time invested, assessment attempts, and completion stages.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    num: "09",
    title: "Training Completion Records",
    text: "Tamper-evident digital completion logs with learner electronic signatures, verifiable timestamps, and trainer sign-offs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    num: "10",
    title: "Certificates & Competency Tracking",
    text: "Automated issuance of course completion certificates and ongoing tracking of employee job competency qualifications.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    num: "11",
    title: "Centralized Training Reports",
    text: "Real-time compliance analytics, departmental progress matrices, and executive management oversight dashboards.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
  {
    num: "12",
    title: "Complete Training History & Audit Trail",
    text: "Immutable time-stamped history of every training attempt, revision update, and electronic signature ready for audits.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function LMS() {
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
              src={lmsHeroBg}
              alt="Learning Management System"
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
                  Product / LMS
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
                Learning Management System{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">
                  (LMS)
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
                Empower Your Pharmaceutical Workforce
              </p>

              <p
                className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200 max-w-3xl"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s",
                }}
              >
                Empower your pharmaceutical workforce with a centralized <strong>Learning Management System (LMS)</strong> designed to manage employee training, compliance, and competency development.
              </p>

              <p
                className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300 max-w-3xl"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.62s",
                }}
              >
                Create and assign training programs, SOP training, assessments, and learning modules while tracking employee progress and completion in real time.
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

        {/* ── KEY FEATURES SECTION (12 FEATURES) ── */}
        <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="Core Capabilities"
            title="Key Features of LMS"
            subtitle="Built to deliver structured SOP certifications, automated role assignments, and seamless training compliance."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LMS_KEY_FEATURES.map((feat, idx) => (
              <div
                key={feat.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/60 hover:shadow-[0_20px_40px_rgba(0,112,173,0.12)]"
                style={{ animationDelay: `${idx * 50}ms` }}
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

        {/* ── WORKFORCE TRAINING VALUE PROPOSITION ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Card: Value Headline */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
              <div>
                <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Workforce Training Compliance
                </span>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                  Right Training. Right Person. Right Time.
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                  Ensure your employees receive the right training at the right time while maintaining <strong>complete visibility, accountability, and training compliance</strong> across your pharmaceutical organization.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {[
                    "100% Training Visibility",
                    "Audit-Ready Competency Records",
                    "Automated SOP Re-Training",
                    "Zero Overdue Lapses",
                    "Multi-Plant Governance",
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
                  Complete Visibility
                </h4>
                <p className="mt-2 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                  Live dashboards tracking workforce training milestones, completions, and pending actions.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-lg mb-4">
                  02
                </div>
                <h4 className="font-display text-base font-bold text-[var(--color-text-ink)]">
                  Audit Readiness
                </h4>
                <p className="mt-2 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                  Instant generation of training histories and competency transcripts during audits.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-lg mb-4">
                  03
                </div>
                <h4 className="font-display text-base font-bold text-[var(--color-text-ink)]">
                  Automated Assignment
                </h4>
                <p className="mt-2 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                  Dynamic course enrollment triggered instantly upon employee onboarding or role changes.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg mb-4">
                  04
                </div>
                <h4 className="font-display text-base font-bold text-[var(--color-text-ink)]">
                  Competency Verified
                </h4>
                <p className="mt-2 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                  Strict assessment criteria ensuring only qualified personnel operate on critical lines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA BANNER: READY TO BUILD ── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="group relative overflow-hidden rounded-3xl sm:rounded-[36px] border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center backdrop-blur-md">
            <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[var(--color-brand)]/15 blur-3xl z-[1]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-sky-400/15 blur-3xl z-[1]" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                Ready to Build a More Compliant and Skilled Workforce?
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                Streamline employee training, track compliance, and manage your entire learning process from one platform.
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

