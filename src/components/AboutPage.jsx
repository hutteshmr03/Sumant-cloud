import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

function AnimatedCounter({ end, duration = 2200, delay = 0, prefix = "", suffix = "", padZero = false }) {
  const [count, setCount] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsRevealed(true);

          setTimeout(() => {
            let startTime = null;
            const easeOutExpo = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

            const step = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const elapsed = timestamp - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = easeOutExpo(progress);
              const current = Math.floor(eased * end);

              setCount(current);

              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(end);
              }
            };

            window.requestAnimationFrame(step);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, delay]);

  const displayCount = padZero && count < 10 ? `0${count}` : count;

  return (
    <span
      ref={ref}
      className={`inline-flex items-baseline font-mono tabular-nums transition-all duration-700 ${
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {prefix && <span className="text-xl sm:text-2xl font-sans font-medium opacity-80 mr-0.5">{prefix}</span>}
      <span className="font-display font-bold tracking-tight">{displayCount}</span>
      {suffix && <span className="text-2xl sm:text-3xl font-sans font-semibold text-[var(--color-brand)] ml-0.5 opacity-90">{suffix}</span>}
    </span>
  );
}

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    points: [
      "Understand your business challenges and project goals.",
      "Conduct in-depth research to identify automation opportunities.",
      "Define project scope, objectives, and expected outcomes.",
    ],
  },
  {
    num: "02",
    title: "Define",
    points: [
      "Structure a detailed project roadmap and milestones.",
      "Identify the right technology stack and architecture.",
      "Establish clear expectations and success metrics.",
    ],
  },
  {
    num: "03",
    title: "Design",
    points: [
      "Develop user-friendly UI/UX designs that align with business needs.",
      "Wireframe and prototype the solution before development.",
      "Ensure responsive, intuitive, and visually appealing interfaces.",
    ],
  },
  {
    num: "04",
    title: "Develop",
    points: [
      "Build scalable and secure software using industry best practices.",
      "Implement automation tools to enhance operational efficiency.",
      "Conduct unit testing to ensure a bug-free development process.",
    ],
  },
  {
    num: "05",
    title: "Deploy",
    points: [
      "Perform rigorous QA testing & security checks before launch.",
      "Deploy in a live environment with seamless integration.",
      "Ensure minimal downtime and maximum efficiency.",
    ],
  },
  {
    num: "06",
    title: "Deliver & Support",
    points: [
      "Provide comprehensive training & documentation for adoption.",
      "Offer ongoing maintenance, updates, and customer support.",
      "Optimize software performance for long-term success.",
    ],
  },
];

const REASONS = [
  {
    num: "01",
    title: "Expertise in Business Automation",
    desc: "We transform manual workflows into streamlined, digital-first operations.",
  },
  {
    num: "02",
    title: "Scalable & Secure Technology",
    desc: "Future-proof architectures built on battle-tested security frameworks.",
  },
  {
    num: "03",
    title: "Industry-Focused Approach",
    desc: "Bespoke digital systems tailored specifically around your vertical.",
  },
  {
    num: "04",
    title: "End-to-End Development",
    desc: "Comprehensive engineering from discovery to deployment and continuous support.",
  },
];

const HIGHLIGHTS = [
  "Best Quality Designs",
  "24x7 Live Support",
  "Result Oriented Projects",
  "Award Winning Support Team",
  "Best ROI Techniques",
  "Experienced Professionals",
];

const STATS = [
  { end: 87, suffix: "", label: "Satisfied Clients" },
  { end: 150, suffix: "", label: "Projects Completed" },
  { end: 28, suffix: "", label: "Accolades Earned" },
  { end: 56, suffix: "K+", label: "Lines of Code" },
];

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] pt-24 text-[var(--color-text-ink)] md:pt-32">
        {/* Main About Us Hero */}
        <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/25 bg-[var(--color-brand)]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              About Us
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-[var(--color-text-ink)] sm:text-5xl lg:text-6xl">
              Software development &amp; automation engineered for growth.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-mist-2)] sm:text-lg">
              Sumant Cloud is a leading <strong className="font-semibold text-[var(--color-text-ink)]">software development and automation</strong> company, dedicated to delivering <strong className="font-semibold text-[var(--color-text-ink)]">cutting-edge digital solutions</strong> that enhance efficiency, streamline operations, and drive business growth. Our expertise lies in <strong className="font-semibold text-[var(--color-text-ink)]">custom software development, automation, and mobile app development</strong>, empowering businesses with <strong className="font-semibold text-[var(--color-text-ink)]">innovative, scalable, and future-ready</strong> technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Reach Us
              </a>
              <a
                href="/#solutions"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-ink)] transition-colors duration-300 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                Our Solutions
              </a>
            </div>
          </div>
        </section>

        {/* Below 2 Sections: Who We Are & Our Mission */}
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50 pt-12">
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Who Are We Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-[var(--color-brand)]/40 hover:shadow-md">
              <div>
                <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3.5 py-0.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Who Are We
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-3xl">
                  Professionals who turn operational gaps into opportunities.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
                  We are a team of professionals with diverse educational and technical expertise. In today’s fast-evolving world, businesses need experts who can analyze processes and bridge gaps.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
                  Our specialists thoroughly examine operations, identify discrepancies, and implement industry best practices to drive long-term business success.
                </p>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-[var(--color-brand)]/40 hover:shadow-md">
              <div>
                <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3.5 py-0.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Our Mission
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-3xl">
                  Empowering businesses with scalable, innovative solutions.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
                  At Sumant Cloud, our mission is to empower businesses with innovative, efficient, and scalable technology solutions.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
                  We strive to bridge the gap between ideas and execution, leveraging cutting-edge software, automation, and AI-driven insights to drive digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our 6-D Process - Structured Premium Cards */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Methodology
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
                Our 6-D Process
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[var(--color-text-mist-2)]">
              A structured engineering path that ensures agility, transparency, and reliable execution from day one.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/50 hover:shadow-md"
              >
                <div>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-brand)]/10 text-xs font-bold text-[var(--color-brand)]">
                    {step.num}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-[-0.02em] text-[var(--color-text-ink)]">
                    {step.title}
                  </h3>
                  <ul className="mt-3.5 space-y-2">
                    {step.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]/60" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us & Standards - Balanced Structured Layout */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-stretch">
            {/* Left: 4 Reasons */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Why Choose Us?
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-3xl">
                  Practical expertise with dependable business outcomes.
                </h2>

                <div className="mt-8 space-y-6">
                  {REASONS.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <span className="font-mono text-xs font-bold text-[var(--color-brand)] mt-0.5">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-[var(--color-text-ink)]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs text-[var(--color-text-mist-2)] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Premium Quality Standards Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-9 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Quality Standards
                </span>
                <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)]">
                  Built to deliver maximum ROI and peace of mind.
                </h3>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {HIGHLIGHTS.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-3 text-xs font-semibold text-[var(--color-text-ink)]"
                    >
                      <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 p-4 text-xs text-[var(--color-text-brand)]">
                <span className="font-bold text-[var(--color-brand)]">24x7 Live Support:</span> Continuous monitoring, security audits, and guaranteed SLAs for your business operations.
              </div>
            </div>
          </div>
        </section>

        {/* 4 Impact Stat Cards with Count-up Animation */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mb-8 max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
              We strive to bridge the gap between ideas and execution.
            </h2>
          </div>

          <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/50 hover:shadow-md flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-brand)]">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix || ""}
                    prefix={stat.prefix || ""}
                    padZero={stat.padZero || false}
                    duration={2000}
                    delay={idx * 160}
                  />
                </div>
                <p className="mt-3 text-sm sm:text-base font-bold text-[var(--color-text-ink)] leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Open CTA Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Start Your Project
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text-ink)] sm:text-4xl">
              Would you like to start a project with us?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-mist-2)]">
              Our expertise lies in custom software development, automation, and mobile app development, empowering businesses with innovative, scalable, and future-ready technology.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Reach Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
