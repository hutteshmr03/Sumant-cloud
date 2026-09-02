import { useEffect, useRef, useState } from "react";
import motionStreaksBg from "../assets/motion-light-streaks.jpg";
import { useTheme } from "../context/ThemeContext";

const PROCESS_STEPS = [
  {
    phase: "PHASE 01",
    code: "01",
    title: "Discover",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    points: [
      "Understand your business challenges and project goals.",
      "Conduct in-depth research to identify automation opportunities.",
      "Define project scope, objectives, and expected outcomes.",
    ],
  },
  {
    phase: "PHASE 02",
    code: "02",
    title: "Define",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    points: [
      "Structure a detailed project roadmap and milestones.",
      "Identify the right technology stack and architecture.",
      "Establish clear expectations and success metrics.",
    ],
  },
  {
    phase: "PHASE 03",
    code: "03",
    title: "Design",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    points: [
      "Develop user-friendly UI/UX designs that align with business needs.",
      "Wireframe and prototype the solution before development.",
      "Ensure responsive, intuitive, and visually appealing interfaces.",
    ],
  },
  {
    phase: "PHASE 04",
    code: "04",
    title: "Develop",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    points: [
      "Build robust, scalable software with clean code standards.",
      "Implement modern frameworks for high performance and security.",
      "Conduct continuous code reviews and sprint iterations.",
    ],
  },
  {
    phase: "PHASE 05",
    code: "05",
    title: "Deploy",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
    points: [
      "Execute seamless deployment to cloud and production environments.",
      "Configure automated CI/CD pipelines for smooth releases.",
      "Run comprehensive testing and security audits.",
    ],
  },
  {
    phase: "PHASE 06",
    code: "06",
    title: "Deliver",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    points: [
      "Monitor real-time performance and system health post-launch.",
      "Provide continuous optimization, feature enhancements, and support.",
      "Scale architecture seamlessly as business demands grow.",
    ],
  },
];

export default function Approach() {
  const { isDark } = useTheme();
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll mechanism
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      const el = carouselRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section id="approach" className="relative overflow-hidden py-24 md:py-32 scroll-mt-20 border-t border-b border-white/10">
      {/* ── Dynamic Motion Light Streaks Background Image (Vibrant & Prominent) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={motionStreaksBg}
          alt="Motion Light Streaks Background"
          className="h-full w-full object-cover object-center filter brightness-100 contrast-115 saturate-135"
        />
        {/* Soft Vignette Scrim for Contrast & Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/65" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-black/40 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-sky-300 shadow-lg backdrop-blur-md">
              Methodology
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Our 6-D Process
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-slate-100 font-medium md:text-right drop-shadow-md">
            A structured engineering path that ensures agility, transparency, and reliable execution from day one.
          </p>
        </div>

        {/* Carousel Wrapper with Floating Navigation Buttons */}
        <div
          className="relative group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous step"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/75 text-white shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-sky-400 hover:bg-[#0070ad] hover:text-white cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next step"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/75 text-white shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-sky-400 hover:bg-[#0070ad] hover:text-white cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Cards Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth no-scrollbar select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.code}
                className="group/card relative flex-none w-[300px] sm:w-[340px] md:w-[360px] rounded-3xl border border-white/20 bg-white/95 dark:bg-[#0c121e]/90 p-7 sm:p-8 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/80 hover:shadow-[0_25px_60px_rgba(0,112,173,0.4)]"
              >
                {/* Top: Icon & Phase Tag */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/30 bg-sky-500/10 text-[#0070ad] dark:text-sky-400 shadow-[0_4px_16px_rgba(0,112,173,0.18)] transition-all duration-500 group-hover/card:scale-110 group-hover/card:bg-sky-500/20 group-hover/card:text-sky-400">
                    {step.icon}
                  </div>

                  <span className="rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {step.code}
                  </span>
                </div>

                {/* Title & Phase Sub-label */}
                <div className="mt-6 flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover/card:text-[#0070ad] dark:group-hover/card:text-sky-300">
                    {step.title}
                  </h3>
                  <span className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {step.phase}
                  </span>
                </div>

                {/* Bullet Points */}
                <div className="mt-6 border-t border-slate-200/80 dark:border-white/10 pt-5">
                  <ul className="space-y-3 text-xs sm:text-sm">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0070ad] dark:bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                        <span className="leading-relaxed font-normal">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Indicator Pill */}
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md shadow-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Auto-flowing • Hover to pause</span>
          </span>
        </div>
      </div>
    </section>
  );
}
