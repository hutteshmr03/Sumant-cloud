import { useTheme } from "../context/ThemeContext";
import useScrollReveal from "../hooks/useScrollReveal";

const SOLUTIONS = [
  {
    id: "consulting",
    tag: "Advisory & Architecture",
    title: "IT Consulting",
    summary: "Strategy-led technology guidance for growth teams, enterprise operations, and digital transformation goals.",
    points: [
      "Business Process Automation",
      "Cloud Modernization & Migration",
      "Data & Analytics Enablement",
    ],
    accent: "#0284c7",
    accentLight: "rgba(2, 132, 199, 0.1)",
    accentBorder: "rgba(2, 132, 199, 0.28)",
    accentGlow: "rgba(2, 132, 199, 0.25)",
    href: "/it-consulting",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "ai-hiring",
    tag: "Specialized Talent",
    title: "AI/ML Hiring",
    summary: "Hire vetted AI and ML specialists for intelligent product builds, inference systems, and high-velocity delivery teams.",
    points: [
      "Machine Learning Engineers",
      "AI Product & Solution Leads",
      "Data Science & Analytics Talent",
    ],
    accent: "#0070ad",
    accentLight: "rgba(0, 112, 173, 0.1)",
    accentBorder: "rgba(0, 112, 173, 0.28)",
    accentGlow: "rgba(0, 112, 173, 0.25)",
    href: "/ai-ml-hiring",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.5 2.1-1.2 2.8l3.4 3.4a4 4 0 1 1-1.4 1.4l-3.4-3.4A4 4 0 1 1 12 2z" />
        <path d="M12 14v8" />
        <path d="M8 18h8" />
        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "saas",
    tag: "Cloud Platforms",
    title: "SaaS Products",
    summary: "Launch reliable, cloud-first software experiences that simplify complex operations and scale effortlessly.",
    points: [
      "Operations & Resource Suites",
      "Real-Time Workflow Platforms",
      "Unified Customer Experience Apps",
    ],
    accent: "#0284c7",
    accentLight: "rgba(2, 132, 199, 0.1)",
    accentBorder: "rgba(2, 132, 199, 0.28)",
    accentGlow: "rgba(2, 132, 199, 0.25)",
    href: "/saas",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8h10" />
        <path d="M7 12h5" />
      </svg>
    ),
  },
  {
    id: "software",
    tag: "Bespoke Engineering",
    title: "Custom Software",
    summary: "Tailor-made digital products and modern internal infrastructure engineered around your unique workflows.",
    points: [
      "Scalable Web & Mobile Platforms",
      "Enterprise Customer Portals",
      "Automated Integration Pipelines",
    ],
    accent: "#0070ad",
    accentLight: "rgba(0, 112, 173, 0.1)",
    accentBorder: "rgba(0, 112, 173, 0.28)",
    accentGlow: "rgba(0, 112, 173, 0.25)",
    href: "/custom-software",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
];

export default function SolutionsGrid() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="services" className="relative overflow-hidden bg-[var(--color-foam)] py-20 md:py-28 scroll-mt-20 border-t border-[var(--color-ink-line)]/50">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--color-brand)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-10 h-[500px] w-[500px] rounded-full bg-[#0284c7]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto ${headerVisible ? "animate-reveal-up" : "opacity-0 translate-y-6"}`}
        >
          <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Explore Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-tight">
            Architecting solutions for high-growth enterprises.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
            End-to-end technology guidance, custom software development, cloud SaaS platforms, and specialized AI/ML engineering.
          </p>
        </div>

        {/* 2x2 Balanced Luxury Grid */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:gap-8">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution, delay }) {
  const { isDark } = useTheme();
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col justify-between rounded-[2.25rem] transition-all duration-500 hover:-translate-y-2 ${
        visible ? "animate-reveal-up" : "opacity-0 translate-y-6"
      }`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {/* 1. Soft Dim Blue-Violet Ambient Aura */}
      <div
        className="pointer-events-none absolute -inset-2.5 sm:-inset-3 rounded-[2.6rem] blur-2xl opacity-45 transition-all duration-500 group-hover:opacity-70 group-hover:-inset-3.5"
        style={{
          background: isDark
            ? "linear-gradient(135deg, rgba(0, 212, 255, 0.35) 0%, rgba(99, 102, 241, 0.3) 50%, rgba(192, 132, 252, 0.35) 100%)"
            : "linear-gradient(135deg, rgba(56, 189, 248, 0.45) 0%, rgba(129, 140, 248, 0.35) 50%, rgba(192, 132, 252, 0.4) 100%)",
        }}
      />

      {/* 2. Secondary Subtle Diffused Bloom */}
      <div
        className="pointer-events-none absolute -inset-5 sm:-inset-6 rounded-[3rem] blur-3xl opacity-25 transition-all duration-500 group-hover:opacity-45"
        style={{
          background: isDark
            ? "linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(168, 85, 247, 0.25) 100%)"
            : "linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)",
        }}
      />

      {/* Main Card Surface with Refined Border & Soft Dim Shadow */}
      <div
        className="relative z-10 flex flex-col justify-between h-full overflow-hidden rounded-[2.2rem] border border-[var(--color-ink-line)]/60 bg-[var(--color-foam-panel)] p-7 sm:p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-sky-400/40"
        style={{
          boxShadow: isDark
            ? "0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 212, 255, 0.12)"
            : "0 12px 32px rgba(15, 23, 42, 0.04), 0 0 20px rgba(56, 189, 248, 0.14)",
        }}
      >
        <div>
          {/* Card Top: Icon & Category Tag */}
          <div className="flex items-center justify-between gap-4">
            <div
              className="flex h-13 w-13 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              style={{
                background: solution.accentLight,
                borderColor: solution.accentBorder,
                color: solution.accent,
                boxShadow: `0 8px 18px -4px ${solution.accentGlow}`,
              }}
            >
              {solution.icon}
            </div>

            <span
              className="rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider"
              style={{
                background: solution.accentLight,
                color: solution.accent,
              }}
            >
              {solution.tag}
            </span>
          </div>

          {/* Title & Summary */}
          <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] transition-colors duration-300 group-hover:text-[var(--color-brand)]">
            {solution.title}
          </h3>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--color-text-mist-2)]">
            {solution.summary}
          </p>

          {/* Feature Points */}
          <div className="mt-6 border-t border-[var(--color-ink-line)]/50 pt-5">
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {solution.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[var(--color-text-ink)]">
                  <span
                    className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: solution.accentLight,
                      color: solution.accent,
                    }}
                  >
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                    </svg>
                  </span>
                  <span className="font-medium text-[var(--color-text-ink)]/90">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-start pt-2">
          <a
            href={solution.href}
            className="group/btn inline-flex items-center gap-2.5 rounded-xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text-ink)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white hover:shadow-md"
          >
            <span>Explore Solution</span>
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="8" x2="13" y2="8" />
              <polyline points="9 4 13 8 9 12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
