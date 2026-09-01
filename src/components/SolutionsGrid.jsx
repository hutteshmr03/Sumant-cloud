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
    accentLight: "rgba(2, 132, 199, 0.12)",
    accentBorder: "rgba(2, 132, 199, 0.28)",
    accentGlow: "rgba(2, 132, 199, 0.22)",
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
    accent: "#0284c7",
    accentLight: "rgba(2, 132, 199, 0.12)",
    accentBorder: "rgba(2, 132, 199, 0.28)",
    accentGlow: "rgba(2, 132, 199, 0.22)",
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
    accentLight: "rgba(2, 132, 199, 0.12)",
    accentBorder: "rgba(2, 132, 199, 0.28)",
    accentGlow: "rgba(2, 132, 199, 0.22)",
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
    accent: "#0284c7",
    accentLight: "rgba(2, 132, 199, 0.12)",
    accentBorder: "rgba(2, 132, 199, 0.28)",
    accentGlow: "rgba(2, 132, 199, 0.22)",
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
    <section id="services" className="relative overflow-hidden bg-[var(--color-foam)] py-14 md:py-20 lg:py-24 scroll-mt-20">
      {/* Subtle background ambient blur blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-brand)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-10 h-96 w-96 rounded-full bg-[var(--color-tide)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        <div
          ref={headerRef}
          className={`text-center ${headerVisible ? "animate-reveal-up" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.05em] text-[var(--color-text-ink)] md:text-[3.2rem] lg:text-[3.5rem]">
            Explore Our Services
          </h2>
          <p className="mx-auto mt-3.5 max-w-2xl text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
            End-to-end technology solutions crafted to accelerate digital growth, optimize operations, and empower modern enterprises.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-7">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution, delay }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--color-ink-line)]/60 bg-[var(--color-foam-panel)] p-7 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-12px_rgba(15,23,42,0.12)] ${
        visible ? "animate-reveal-up" : "opacity-0 translate-y-6"
      }`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div>
        {/* Card Header: Icon & Category Tag */}
        <div className="flex items-center justify-between gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
            style={{
              background: solution.accentLight,
              borderColor: solution.accentBorder,
              color: solution.accent,
              boxShadow: `0 8px 16px -4px ${solution.accentGlow}`,
            }}
          >
            {solution.icon}
          </div>

          <span
            className="rounded-full px-3 py-1 text-[0.68rem] font-medium tracking-wide"
            style={{
              background: solution.accentLight,
              color: solution.accent,
            }}
          >
            {solution.tag}
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="mt-6 font-display text-[1.65rem] font-semibold tracking-[-0.04em] text-[var(--color-text-ink)] transition-colors duration-300 group-hover:text-[var(--color-brand)] sm:text-[1.85rem]">
          {solution.title}
        </h3>

        <p className="mt-2.5 text-[0.92rem] leading-relaxed text-[var(--color-text-mist-2)] sm:text-[0.96rem]">
          {solution.summary}
        </p>

        {/* Feature List with Perfect Baseline Alignment */}
        <div className="mt-6 border-t border-[var(--color-ink-line)]/50 pt-5">
          <ul className="space-y-2.5 text-[0.88rem] sm:text-[0.92rem]">
            {solution.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[var(--color-text-ink)]">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: solution.accentLight,
                    color: solution.accent,
                  }}
                >
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                  </svg>
                </span>
                <span className="font-medium leading-snug text-[var(--color-text-ink)]/90">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8 pt-2">
        <a
          href={solution.href}
          className="group/btn inline-flex items-center justify-between gap-3 rounded-xl border px-5 py-2.5 text-[0.78rem] font-semibold tracking-wider uppercase transition-all duration-300"
          style={{
            borderColor: "var(--color-ink-line)",
            background: "var(--color-foam)",
            color: "var(--color-text-ink)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = solution.accent;
            e.currentTarget.style.background = solution.accent;
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-ink-line)";
            e.currentTarget.style.background = "var(--color-foam)";
            e.currentTarget.style.color = "var(--color-text-ink)";
          }}
        >
          <span>Explore Solution</span>
          <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="8" x2="13" y2="8" />
            <polyline points="9 4 13 8 9 12" />
          </svg>
        </a>
      </div>
    </div>
  );
}
