import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function CTA() {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #05141f 0%, #0a1f33 50%, #061524 100%)"
          : "linear-gradient(135deg, #f3f8fc 0%, #eaf3f9 50%, #f4f8fb 100%)",
      }}
    >
      {/* ── Ambient Background Glow & Micro Grid ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle geometric grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? "#00d4ff" : "#0070ad"} 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Dynamic ambient color orbs */}
        <div
          className="absolute -top-24 -left-24 w-[450px] h-[450px] rounded-full blur-[110px] pointer-events-none animate-pulse"
          style={{
            background: isDark ? "rgba(0, 112, 173, 0.2)" : "rgba(0, 112, 173, 0.12)",
            animationDuration: "7s",
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none animate-pulse"
          style={{
            background: isDark ? "rgba(23, 184, 166, 0.18)" : "rgba(23, 184, 166, 0.1)",
            animationDuration: "9s",
          }}
        />
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-14">

          {/* Left Column: Heading and copy with smooth slow stagger reveal */}
          <div className="max-w-2xl">
            {/* Eyebrow badge - clean and official */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                filter: visible ? "blur(0)" : "blur(3px)",
                transition: "all 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
              }}
            >
              <span className="inline-flex items-center rounded-full border border-[#0070ad]/25 bg-[#0070ad]/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#0070ad] dark:text-[#4ab7ff]">
                Get In Touch
              </span>
            </div>

            {/* Headline with glowing animated gradient on keyword */}
            <h2
              className="mt-5 font-display text-3xl sm:text-4xl md:text-[2.85rem] font-bold leading-[1.14] tracking-[-0.03em]"
              style={{
                color: isDark ? "#edf6ff" : "#101e2e",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                filter: visible ? "blur(0)" : "blur(6px)",
                transition: "all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
              }}
            >
              Would you like to{" "}
              <span className="cta-gradient-shimmer inline-block">start a project</span>{" "}
              with us?
            </h2>

            {/* Subline */}
            <p
              className="mt-5 leading-relaxed text-sm sm:text-base md:text-[1.05rem] max-w-xl"
              style={{
                color: isDark ? "#9bb2c4" : "#4b5563",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                filter: visible ? "blur(0)" : "blur(4px)",
                transition: "all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.55s",
              }}
            >
              Our expertise lies in{" "}
              <strong className="font-semibold" style={{ color: isDark ? "#edf6ff" : "#15011d" }}>
                custom software development, automation, and mobile app development
              </strong>
              , empowering businesses with{" "}
              <strong className="font-semibold" style={{ color: isDark ? "#edf6ff" : "#15011d" }}>
                innovative, scalable, and future-ready
              </strong>{" "}
              technology.
            </p>
          </div>

          {/* Right Column: Interactive Contact Action Capsule Cards */}
          <div
            className="flex flex-col gap-3.5 shrink-0 w-full sm:w-auto min-w-[280px] sm:min-w-[320px]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              filter: visible ? "blur(0)" : "blur(6px)",
              transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
            }}
          >
            {/* Primary Action Button */}
            <a
              href="/contact/"
              className="group relative inline-flex items-center justify-between gap-4 overflow-hidden rounded-2xl px-7 py-4 font-semibold text-white shadow-[0_8px_24px_rgba(0,112,173,0.32)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,112,173,0.45)] active:scale-98"
              style={{
                background: "linear-gradient(135deg, #0070ad 0%, #0088d4 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <span className="text-sm font-bold tracking-wide">Contact Us</span>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/25">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Email Capsule */}
            <a
              href="mailto:contact@sumantcloud.com"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)]/90 px-6 py-3.5 text-xs sm:text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0070ad] hover:shadow-md active:scale-98 backdrop-blur-sm"
              style={{
                color: isDark ? "#c8dff0" : "#1a365d",
              }}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0070ad]/10 text-[#0070ad] transition-colors group-hover:bg-[#0070ad] group-hover:text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span className="truncate">contact@sumantcloud.com</span>
              </div>
              <span className="text-xs text-[var(--color-brand)] opacity-0 transition-opacity group-hover:opacity-100">↗</span>
            </a>

            {/* Phone Capsule */}
            <a
              href="tel:+917028510950"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)]/90 px-6 py-3.5 text-xs sm:text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0070ad] hover:shadow-md active:scale-98 backdrop-blur-sm"
              style={{
                color: isDark ? "#c8dff0" : "#1a365d",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0070ad]/10 text-[#0070ad] transition-colors group-hover:bg-[#0070ad] group-hover:text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                </span>
                <span>+91 70285 10950</span>
              </div>
              <span className="text-xs text-[var(--color-brand)] opacity-0 transition-opacity group-hover:opacity-100">↗</span>
            </a>
          </div>

        </div>
      </div>

      <style>{`
        .cta-gradient-shimmer {
          background: linear-gradient(135deg, #0070ad 0%, #00b4d8 50%, #17b8a6 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: cta-text-shimmer 4s ease-in-out infinite alternate;
        }
        @keyframes cta-text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
