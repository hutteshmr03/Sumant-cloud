import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function CTA() {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Backgrounds per mode
  const sectionBg = isDark
    ? "linear-gradient(135deg, #061922 0%, #0f2036 50%, #0a1628 100%)"
    : "linear-gradient(135deg, #f0f4ff 0%, #e8f4fa 50%, #f4f7f6 100%)";

  const orbColor1 = isDark ? "#0070ad" : "#0070ad";
  const orbColor2 = isDark ? "#17b8a6" : "#17b8a6";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: sectionBg }}
    >
      {/* ── Animated gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${orbColor1}, transparent)`,
            opacity: isDark ? 0.12 : 0.08,
            top: "-5%", left: "-5%",
            animation: "float-orb 8s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full"
          style={{
            background: `radial-gradient(circle, ${orbColor2}, transparent)`,
            opacity: isDark ? 0.12 : 0.08,
            bottom: "-5%", right: "-5%",
            animation: "float-orb 10s ease-in-out infinite alternate-reverse",
          }}
        />
        {/* Small accent circles */}
        {[
          { w: 60, h: 60, top: "15%", left: "20%", delay: "0s" },
          { w: 40, h: 40, top: "65%", left: "35%", delay: "1s" },
          { w: 50, h: 50, top: "30%", right: "25%", delay: "2s" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.w, height: p.h,
              top: p.top, left: p.left, right: p.right,
              background: `radial-gradient(circle, #0070ad, transparent)`,
              opacity: isDark ? 0.08 : 0.06,
              animation: `float-orb ${3 + i}s ease-in-out infinite alternate`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10">

          {/* Left: text */}
          <div
            className="max-w-xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#0070ad" }}
            >
              Get in touch
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl md:text-[2.6rem] font-bold leading-tight"
              style={{ color: isDark ? "#edf6ff" : "#15011d" }}
            >
              Would you like to{" "}
              <span style={{ color: "#0070ad" }}>start a project</span>{" "}
              with us?
            </h2>
            <p
              className="mt-4 leading-relaxed text-sm md:text-base max-w-lg"
              style={{ color: isDark ? "#8ea6b8" : "#6b7280" }}
            >
              Our expertise lies in{" "}
              <strong style={{ color: isDark ? "#edf6ff" : "#15011d" }}>
                custom software development, automation, and mobile app development
              </strong>
              , empowering businesses with{" "}
              <strong style={{ color: isDark ? "#edf6ff" : "#15011d" }}>
                innovative, scalable, and future-ready
              </strong>{" "}
              technology.
            </p>
          </div>

          {/* Right: buttons */}
          <div
            className="flex flex-col gap-4 shrink-0 w-full md:w-auto"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            {/* Primary CTA */}
            <a
              href="/contact/"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "#0070ad", boxShadow: "0 4px 20px rgba(0,112,173,0.35)" }}
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@sumantcloud.com"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-200 break-all"
              style={{
                border: `2px solid ${isDark ? "rgba(0,112,173,0.4)" : "rgba(0,112,173,0.3)"}`,
                color: "#0070ad",
                background: isDark ? "rgba(0,112,173,0.08)" : "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,112,173,0.1)"; e.currentTarget.style.borderColor = "#0070ad"; }}
              onMouseLeave={e => { e.currentTarget.style.background = isDark ? "rgba(0,112,173,0.08)" : "transparent"; e.currentTarget.style.borderColor = isDark ? "rgba(0,112,173,0.4)" : "rgba(0,112,173,0.3)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="break-all">contact@sumantcloud.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+917028510950"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-200"
              style={{
                border: `2px solid ${isDark ? "rgba(0,112,173,0.4)" : "rgba(0,112,173,0.3)"}`,
                color: "#0070ad",
                background: isDark ? "rgba(0,112,173,0.08)" : "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,112,173,0.1)"; e.currentTarget.style.borderColor = "#0070ad"; }}
              onMouseLeave={e => { e.currentTarget.style.background = isDark ? "rgba(0,112,173,0.08)" : "transparent"; e.currentTarget.style.borderColor = isDark ? "rgba(0,112,173,0.4)" : "rgba(0,112,173,0.3)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              +91 70285 10950
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float-orb {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(25px, 15px) scale(1.08); }
        }
      `}</style>
    </section>
  );
}
