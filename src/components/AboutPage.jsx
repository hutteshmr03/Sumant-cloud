import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import motionStreaksBg from "../assets/motion-light-streaks.jpg";

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
    phase: "PHASE 01",
    title: "Discover",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    points: [
      "Understand your business challenges and project goals.",
      "Conduct in-depth research to identify automation opportunities.",
      "Define project scope, objectives, and expected outcomes.",
    ],
  },
  {
    num: "02",
    phase: "PHASE 02",
    title: "Define",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    num: "03",
    phase: "PHASE 03",
    title: "Design",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    num: "04",
    phase: "PHASE 04",
    title: "Develop",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    points: [
      "Build scalable and secure software using industry best practices.",
      "Implement automation tools to enhance operational efficiency.",
      "Conduct unit testing to ensure a bug-free development process.",
    ],
  },
  {
    num: "05",
    phase: "PHASE 05",
    title: "Deploy",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
        <path d="M15 9v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
      </svg>
    ),
    points: [
      "Perform rigorous QA testing & security checks before launch.",
      "Deploy in a live environment with seamless integration.",
      "Ensure minimal downtime and maximum efficiency.",
    ],
  },
  {
    num: "06",
    phase: "PHASE 06",
    title: "Deliver & Support",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    points: [
      "Provide comprehensive training & documentation for adoption.",
      "Offer ongoing maintenance, updates, and customer support.",
      "Optimize software performance for long-term success.",
    ],
  },
];

function ProcessSlider({ steps }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  // Silky smooth auto-scroll from right to left
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId;

    const autoScroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += 0.75;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(autoScroll);
    };

    animId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  // Duplicate steps for seamless continuous loop
  const loopedSteps = [...steps, ...steps];

  return (
    <div
      className="relative group -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Floating Left Switch Arrow Button ── */}
      <button
        onClick={scrollLeft}
        type="button"
        aria-label="Previous step"
        className="absolute left-2 sm:left-4 top-[48%] -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/75 backdrop-blur-xl text-white shadow-[0_8px_25px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-110 hover:border-sky-400 hover:bg-[#0070ad] hover:text-white active:scale-95 cursor-pointer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ── Floating Right Switch Arrow Button ── */}
      <button
        onClick={scrollRight}
        type="button"
        aria-label="Next step"
        className="absolute right-2 sm:right-4 top-[48%] -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/75 backdrop-blur-xl text-white shadow-[0_8px_25px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-110 hover:border-sky-400 hover:bg-[#0070ad] hover:text-white active:scale-95 cursor-pointer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── Scrollable Track ── */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-6 px-4 sm:px-8 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {loopedSteps.map((step, idx) => (
          <div
            key={`${step.num}-${idx}`}
            className="w-[300px] sm:w-[340px] md:w-[360px] shrink-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-white/95 dark:bg-[#0c121e]/90 p-7 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/80 hover:shadow-[0_25px_60px_rgba(0,112,173,0.4)]"
          >
            <div>
              {/* Header: Icon + Number badge */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/30 bg-sky-500/10 text-[#0070ad] dark:text-sky-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500/20 shadow-sm">
                  {step.icon}
                </div>

                <span className="font-mono text-xs font-bold rounded-full px-3 py-1 bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-slate-200">
                  {step.num}
                </span>
              </div>

              {/* Title & Phase */}
              <div className="mt-6 flex items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-[#0070ad] dark:group-hover:text-sky-300">
                  {step.title}
                </h3>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {step.phase}
                </span>
              </div>

              {/* Points List */}
              <ul className="mt-4 space-y-2.5 border-t border-slate-200/80 dark:border-white/10 pt-4">
                {step.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#0070ad] dark:bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* ── Status Indicator Bar ── */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-200 bg-black/40 border border-white/20 rounded-full px-4 py-1.5 shadow-md backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{isPaused ? "Paused on hover" : "Auto-flowing • Hover to pause"}</span>
        </span>
      </div>
    </div>
  );
}

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

function KyndrylWaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const setSize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio || window.innerWidth;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio || 500;
    };
    setSize();

    const handleResize = () => {
      setSize();
    };
    window.addEventListener("resize", handleResize);

    let t = 0;
    const lineCount = 32;

    const render = () => {
      t += 0.007;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Deep dark tech background
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#020f17");
      bgGrad.addColorStop(0.4, "#041924");
      bgGrad.addColorStop(0.8, "#062232");
      bgGrad.addColorStop(1, "#020e16");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Ambient radial glow behind the wave stream
      const radialGlow = ctx.createRadialGradient(
        width * 0.7,
        height * 0.5,
        width * 0.05,
        width * 0.7,
        height * 0.5,
        width * 0.65
      );
      radialGlow.addColorStop(0, "rgba(0, 229, 255, 0.22)");
      radialGlow.addColorStop(0.45, "rgba(23, 184, 166, 0.14)");
      radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw flowing 3D ribbon waves
      for (let i = 0; i < lineCount; i++) {
        const progress = i / lineCount;
        ctx.beginPath();

        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, "rgba(0, 229, 255, 0.0)");
        grad.addColorStop(0.2, `rgba(0, 229, 255, ${0.12 + 0.38 * Math.sin(progress * Math.PI)})`);
        grad.addColorStop(0.65, `rgba(23, 184, 166, ${0.28 + 0.52 * Math.sin(progress * Math.PI)})`);
        grad.addColorStop(0.9, `rgba(0, 112, 173, ${0.15 + 0.35 * Math.sin(progress * Math.PI)})`);
        grad.addColorStop(1, "rgba(0, 229, 255, 0.0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = (1.5 + progress * 1.2) * (window.devicePixelRatio || 1);

        const startY = height * 0.42 + (i - lineCount / 2) * (11 * (window.devicePixelRatio || 1));

        for (let x = 0; x <= width; x += 16 * (window.devicePixelRatio || 1)) {
          const normX = x / width;
          const wave1 = Math.sin(normX * 3.4 - t + progress * 2.4) * (height * 0.2);
          const wave2 = Math.cos(normX * 5.2 + t * 0.9 - progress * 1.6) * (height * 0.09);
          const wave3 = Math.sin(normX * 1.6 + t * 0.6) * (height * 0.12);

          const envelope = Math.sin(normX * Math.PI);
          const y = startY + (wave1 + wave2 + wave3) * envelope;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full object-cover pointer-events-none"
    />
  );
}

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* Main About Us Hero with Kyndryl-style Cybernetic Wave Animation */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 text-white">
          <KyndrylWaveCanvas />

          {/* Deep dark gradient overlay on the left for maximum text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020e17]/92 via-[#03141f]/75 to-transparent pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md">
                About Us
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.6rem] leading-[1.12] drop-shadow-md">
                Software development &amp; automation engineered for growth.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg max-w-3xl drop-shadow-sm">
                Sumant Cloud is a leading <strong className="font-semibold text-white">software development and automation</strong> company, dedicated to delivering <strong className="font-semibold text-white">cutting-edge digital solutions</strong> that enhance efficiency, streamline operations, and drive business growth. Our expertise lies in <strong className="font-semibold text-white">custom software development, automation, and mobile app development</strong>, empowering businesses with <strong className="font-semibold text-white">innovative, scalable, and future-ready</strong> technology.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href="/contact/"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#0070ad] via-[#0284c7] to-[#0096e6] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_4px_16px_rgba(0,112,173,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,112,173,0.4)] active:translate-y-0"
                >
                  <span>Reach Us</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:text-[#0070ad]">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="12" x2="12" y2="4" />
                      <polyline points="5 4 12 4 12 11" />
                    </svg>
                  </span>
                </a>
                <a
                  href="/#solutions"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white active:translate-y-0"
                >
                  <span>Our Solutions</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:translate-y-0.5 group-hover:bg-white/20">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="3" x2="8" y2="13" />
                      <polyline points="4 9 8 13 12 9" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are & Our Mission */}
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

        {/* Our 6-D Process - With Motion Light Streaks Background Image */}
        <section className="relative overflow-hidden py-20 md:py-28 border-t border-b border-white/10 my-8">
          {/* ── Motion Light Streaks Background Image ── */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={motionStreaksBg}
              alt="Motion Light Streaks Background"
              className="h-full w-full object-cover object-center filter brightness-100 contrast-115 saturate-135"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/65" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/65" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-black/40 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-300 shadow-md backdrop-blur-md">
                  Methodology
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  Our 6-D Process
                </h2>
              </div>
              <p className="max-w-md text-sm sm:text-base text-slate-100 font-medium md:text-right drop-shadow-md">
                A structured engineering path that ensures agility, transparency, and reliable execution from day one.
              </p>
            </div>

            <ProcessSlider steps={PROCESS_STEPS} />
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
