import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import useScrollReveal from "../hooks/useScrollReveal";

const LMS_FEATURES = [
  {
    num: "01",
    title: "Interactive Course Builder",
    text: "Design modular video coursework, rich multimedia lessons, interactive quizzes, and downloadable resources with zero coding.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <polyline points="10 7 14 11 10 15" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "AI-Driven Skill Assessments",
    text: "Conduct adaptive evaluations, automated grading, personalized learner feedback, and dynamic knowledge gap identification.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Automated Certification & Badging",
    text: "Instant digital certificate generation with cryptographic verification, shareable LinkedIn badges, and compliance audit logs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Learner Analytics & Compliance",
    text: "Track completion rates, active learner engagement, department-level skill benchmarks, and enterprise regulatory compliance.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const LMS_MODULES = [
  {
    title: "Self-Paced Learning Paths",
    desc: "Personalized course sequences that automatically adapt to employee roles, experience levels, and career milestones.",
    tag: "Adaptive Learning",
  },
  {
    title: "Live Virtual Classrooms",
    desc: "Seamless integration with Zoom, Microsoft Teams, and Google Meet for interactive webinars and live mentor sessions.",
    tag: "Virtual Delivery",
  },
  {
    title: "Gamified Progress & Leaderboards",
    desc: "Boost engagement with XP points, streak counters, departmental leaderboards, and celebratory milestone awards.",
    tag: "Gamification",
  },
  {
    title: "Multi-Tenant Enterprise Portals",
    desc: "Isolated white-labeled portals for distinct subsidiaries, partner networks, or client training cohorts.",
    tag: "Multi-Tenancy",
  },
];

export default function LMS() {
  const { isDark } = useTheme();
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setHeroVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const [featRef, featVisible] = useScrollReveal();
  const [modRef, modVisible] = useScrollReveal();

  return (
    <div className="font-body text-text-ink min-h-screen flex flex-col bg-foam">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden py-16 md:py-24 border-b border-[var(--color-ink-line)]/50">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <div
                className={`transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#0070ad] dark:text-sky-400 shadow-sm">
                  Enterprise EdTech & Upskilling
                </span>
              </div>

              <h1
                className={`mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--color-text-ink)] leading-[1.12] transition-all duration-700 delay-100 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Learning Management <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070ad] via-indigo-500 to-purple-600 dark:from-sky-400 dark:to-purple-400">
                  System (LMS)
                </span>
              </h1>

              <p
                className={`mt-6 text-base sm:text-lg text-[var(--color-text-mist-2)] leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Accelerate workforce capability with an intelligent, cloud-native learning ecosystem. Create engaging multimedia courses, automate compliance certifications, and track real-time skill growth.
              </p>

              <div
                className={`mt-8 flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <a
                  href="/#contact"
                  className="rounded-xl bg-[#0070ad] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0070ad]/25 transition-all duration-300 hover:bg-[#005a8c] hover:scale-105 active:scale-95"
                >
                  Schedule an LMS Demo
                </a>
                <a
                  href="/#products"
                  className="rounded-xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text-ink)] shadow-sm transition-all duration-300 hover:border-[#0070ad] hover:text-[#0070ad]"
                >
                  Explore All Products
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Features ── */}
        <section className="py-20 md:py-28 bg-[var(--color-foam-panel)] border-b border-[var(--color-ink-line)]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            <div ref={featRef} className="max-w-2xl mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0070ad] dark:text-sky-400">
                Core Capabilities
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-ink)]">
                Engineered for enterprise training at scale.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {LMS_FEATURES.map((feat, i) => (
                <div
                  key={feat.num}
                  className={`flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)] bg-foam p-7 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#0070ad] hover:shadow-xl ${
                    featVisible ? "animate-reveal-up" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-[#0070ad] dark:text-sky-400 shadow-sm">
                        {feat.icon}
                      </div>
                      <span className="font-mono text-xs font-bold text-[var(--color-text-mist-2)]">
                        {feat.num}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-lg font-bold text-[var(--color-text-ink)]">
                      {feat.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-mist-2)] leading-relaxed">
                      {feat.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Enterprise Modules ── */}
        <section className="py-20 md:py-28 bg-foam">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            <div ref={modRef} className="max-w-2xl mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0070ad] dark:text-sky-400">
                Advanced Features
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-ink)]">
                Comprehensive tools for instructors and learners.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {LMS_MODULES.map((mod, i) => (
                <div
                  key={mod.title}
                  className={`rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#0070ad] ${
                    modVisible ? "animate-reveal-up" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: `${i * 140}ms` }}
                >
                  <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0070ad] dark:text-sky-400">
                    {mod.tag}
                  </span>
                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-[var(--color-text-ink)]">
                    {mod.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[var(--color-text-mist-2)] leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-20 bg-[var(--color-foam-panel)] border-t border-[var(--color-ink-line)]/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text-ink)]">
              Ready to transform your organizational learning?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--color-text-mist-2)] max-w-2xl mx-auto">
              Deploy Sumant Cloud LMS today to streamline training workflows and empower your workforce with verifiable skills.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/#contact"
                className="rounded-xl bg-[#0070ad] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0070ad]/25 transition-all duration-300 hover:bg-[#005a8c] hover:scale-105 active:scale-95"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
