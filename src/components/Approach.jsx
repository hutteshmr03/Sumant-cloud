import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "We sit with the people who'll actually use the system, not just the ones who'll sign off on it.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80",
  },
  {
    n: "02",
    title: "Design",
    body: "Wireframes and flows you can react to early, before a single line of production code is written.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80",
  },
  {
    n: "03",
    title: "Build",
    body: "Short cycles, visible progress, and a staging link you can poke at from week one.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=700&q=80",
  },
  {
    n: "04",
    title: "Support",
    body: "Launch is a milestone, not an exit. We stay on for fixes, updates, and the next version.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function StepCard({ step, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.5s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms`,
      }}
    >
      {/* ── Image ── */}
      <div className="relative overflow-hidden" style={{ height: "180px" }}>
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
      </div>

      {/* ── White label panel (Capgemini style) ── */}
      <div
        className="px-5 py-4 border-b-2 transition-colors duration-200"
        style={{
          background: "var(--color-foam-panel)",
          borderColor: hovered ? "var(--color-brand)" : "transparent",
        }}
      >
        {/* Title — gray default, brand blue on hover */}
        <h3
          className="font-display text-base font-semibold transition-colors duration-200"
          style={{ color: hovered ? "var(--color-brand)" : "var(--color-text-ink)" }}
        >
          {step.title}
        </h3>

        {/* Description — always visible below title */}
        <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--color-text-mist-2)" }}>
          {step.body}
        </p>
      </div>
    </div>
  );
}

export default function Approach() {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView(0.1);

  return (
    <section id="approach" className="py-16 md:py-20 lg:py-28" style={{ background: "var(--color-foam-panel)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2
            className="font-display text-2xl md:text-3xl font-semibold mb-10"
            style={{ color: "#0070ad" }}
          >
            Our approach
          </h2>
        </div>

        {/* Cards grid — 4 columns on lg, 2 on sm */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS.map((s, i) => (
            <StepCard key={s.n} step={s} index={i} visible={gridVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
