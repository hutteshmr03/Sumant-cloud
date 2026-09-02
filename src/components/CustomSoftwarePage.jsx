import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import customSoftwareHeroBg from "../assets/custom-software-hero-bg.jpg";
import useScrollReveal from "../hooks/useScrollReveal";

const SERVICES = [
  {
    num: "01",
    title: "Web Application Development",
    desc: "We build responsive, secure, and scalable web applications designed around your business needs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Enterprise Software Solutions",
    desc: "Develop powerful systems that streamline business processes, improve efficiency, and support organisational growth.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Business Process Automation",
    desc: "Automate repetitive tasks and workflows to improve productivity and reduce manual effort.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Software Modernisation",
    desc: "Upgrade and improve existing applications with modern technologies, better performance, and scalable architecture.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "API & System Integration",
    desc: "Connect your software with third-party platforms, tools, and services to create a seamless digital ecosystem.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Maintenance & Support",
    desc: "We provide ongoing technical support, enhancements, and maintenance to keep your software secure and performing efficiently.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function CustomSoftwarePage() {
  const { isDark } = useTheme();
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)] overflow-hidden">
        {/* ── Hero Section with Luxury Glassmorphism & Staggered Reveal ── */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={customSoftwareHeroBg}
              alt="Custom Software Development"
              className="h-full w-full object-cover object-center scale-105 transition-transform duration-1000"
            />
            {/* Multi-layered scrim overlay with dimmed subtle blue tint */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080d14]/90 via-[#0b141f]/75 to-[#080d14]/65 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,112,173,0.12),transparent_65%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Eyebrow Badge */}
              <div
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                }}
              >
                <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
                  Custom Software Development
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className="mt-5 font-display text-3xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-[-0.04em] text-white leading-[1.12] drop-shadow-md"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
                }}
              >
                Software Built Around <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">Your Business</span>
              </h1>

              {/* Paragraph 1 */}
              <p
                className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
                }}
              >
                We design and develop custom software solutions tailored to your unique business requirements. From concept and strategy to development, deployment, and ongoing support, we build secure, scalable, and high-performing applications that help businesses streamline operations and achieve their goals.
              </p>

              {/* Paragraph 2 */}
              <p
                className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300/90"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s",
                }}
              >
                Whether you need a web application, enterprise platform, internal business system, automation solution, or a completely new digital product, our development team works closely with you to transform your ideas into reliable software.
              </p>

              {/* Action Buttons */}
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
                  <span>Book a Free Consultation</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">›</span>
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-200 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/25 hover:text-white hover:-translate-y-0.5"
                >
                  Talk to Our Experts
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Custom Development Services: 6 Interactive Glassmorphism Cards ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <SectionHeader
            badge="Our Capabilities"
            title="Our Custom Development Services"
            subtitle="Full-lifecycle engineering tailored specifically around your business model and operational needs."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, idx) => (
              <ServiceCard key={service.title} service={service} delay={idx * 80} />
            ))}
          </div>
        </section>

        {/* ── Two Strategic Pillars: Why Custom Software & Let's Build Your Solution ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Why Choose Custom Software Development */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
              <div>
                <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  The Custom Advantage
                </span>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                  Why Choose Custom Software Development?
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                  Off-the-shelf software doesn&apos;t always fit the way your business operates. Custom software is built specifically around your processes, challenges, and future goals—giving you greater flexibility, scalability, and control.
                </p>
              </div>
            </div>

            {/* Let's Build Your Solution */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/50 hover:shadow-xl">
              <div>
                <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Collaborative Engineering
                </span>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                  Let&apos;s Build Your Solution
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                  Have an idea or a business challenge that technology can solve? Our team can help you transform it into a powerful, scalable, and future-ready software solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Ready to Build Software That Moves Your Business Forward? (CTA) ── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center backdrop-blur-md">
            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[var(--color-brand)]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Start Your Project With Us Today
              </span>
              <h2 className="mt-5 font-display text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-[-0.03em] text-[var(--color-text-ink)] leading-snug">
                Ready to Build Software That Moves Your Business Forward?
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--color-text-mist-2)]">
                Your business deserves more than a one-size-fits-all solution. Whether you have a new idea, an existing system that needs improvement, or a complex business challenge to solve, our team is ready to help.
              </p>
              <p className="mt-3 text-sm font-bold text-[var(--color-brand)]">
                Have a project in mind? Let&apos;s talk.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-sky-500"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] hover:shadow-md"
                >
                  Talk to Our Experts
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
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
          {badge}
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
          {title}
        </h2>
      </div>
      <p className="max-w-md text-xs sm:text-sm text-[var(--color-text-mist-2)] leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

function ServiceCard({ service, delay }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/60 hover:shadow-[0_20px_40px_rgba(0,112,173,0.12)] ${
        visible ? "animate-reveal-up" : "opacity-0 translate-y-6"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div>
        {/* Top: Icon & Number Badge */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/10 text-[var(--color-brand)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-brand)] group-hover:text-white shadow-sm">
            {service.icon}
          </div>

          <span className="font-mono text-xs font-bold rounded-full px-3 py-1 bg-[var(--color-foam)] border border-[var(--color-ink-line)] text-[var(--color-brand)]">
            {service.num}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] transition-colors duration-300 group-hover:text-[var(--color-brand)]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--color-text-mist-2)]">
          {service.desc}
        </p>
      </div>
    </div>
  );
}
