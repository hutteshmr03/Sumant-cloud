import { useRef, useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import ciplaLogo from "../assets/cipla.webp";
import globalToLocalLogo from "../assets/global-to-local.webp";
import perfectSolutionLogo from "../assets/the-perfect-solution.jpg";
import marksansLogo from "../assets/marksans.jpg";
import hlplLogo from "../assets/hlpl.jpg";
import akLogoLight from "../assets/ak-logo-light.png";
import akLogoDark from "../assets/ak-logo-dark.png";

const TRUSTED_COMPANIES = [
  {
    name: "Cipla",
    mark: "cipla",
    logo: ciplaLogo,
    label: "Healthcare & Pharma",
  },
  {
    name: "Marksans Pharma Ltd",
    mark: "marksans",
    logo: marksansLogo,
    label: "Pharmaceuticals",
  },
  {
    name: "The Perfect Solution",
    mark: "perfect-solution",
    logo: perfectSolutionLogo,
    label: "Enterprise Solutions",
  },
  {
    name: "HLPL (Hyderabad Laboratories Pvt. Ltd.)",
    mark: "hlpl",
    logo: hlplLogo,
    label: "Pharma & Research Labs",
  },
  {
    name: "Global to Local",
    mark: "global-to-local",
    logo: globalToLocalLogo,
    label: "Travel & Tours — Goa",
  },
  {
    name: "A.K Construction",
    mark: "ak-construction",
    logo: akLogoLight,
    label: "Infrastructure & Build",
  },
  {
    name: "Sustainable Green Company",
    mark: "sustainable-green",
    label: "Clean Energy & Eco",
  },
  {
    name: "Bookmyspa",
    mark: "bookmyspa",
    label: "Wellness & Hospitality",
  },
];

// Repeat 3 times to allow infinite continuous loop and dragging
const loopedCompanies = [
  ...TRUSTED_COMPANIES,
  ...TRUSTED_COMPANIES,
  ...TRUSTED_COMPANIES,
];

export default function TrustedBy() {
  const [headerRef, headerVisible] = useScrollReveal();
  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll loop with smooth continuous marquee
  useEffect(() => {
    let animId;
    const el = trackRef.current;

    const tick = () => {
      if (!isDraggingRef.current && el) {
        // Glides continuously; gently slows down on hover for readability
        const currentSpeed = isHovered ? 0.5 : 1.2;
        el.scrollLeft += currentSpeed;

        const oneThird = el.scrollWidth / 3;
        if (el.scrollLeft >= oneThird * 2) {
          el.scrollLeft -= oneThird;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += oneThird;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  // Set initial scroll position to middle set
  useEffect(() => {
    const el = trackRef.current;
    if (el && el.scrollWidth > 0) {
      el.scrollLeft = el.scrollWidth / 3;
    }
  }, []);

  // Mouse / touch drag handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    const clientX = e.pageX ?? e.touches?.[0]?.pageX ?? 0;
    startXRef.current = clientX - (trackRef.current?.offsetLeft || 0);
    scrollLeftRef.current = trackRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const clientX = e.pageX ?? e.touches?.[0]?.pageX ?? 0;
    const x = clientX - (trackRef.current.offsetLeft || 0);
    const walk = (x - startXRef.current) * 1.5;
    let newScrollLeft = scrollLeftRef.current - walk;

    const oneThird = trackRef.current.scrollWidth / 3;
    if (newScrollLeft >= oneThird * 2) {
      newScrollLeft -= oneThird;
      scrollLeftRef.current -= oneThird;
    } else if (newScrollLeft <= 0) {
      newScrollLeft += oneThird;
      scrollLeftRef.current += oneThird;
    }
    trackRef.current.scrollLeft = newScrollLeft;
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <section className="trust-section relative overflow-hidden my-8 py-10 md:my-12 md:py-12">
      {/* Subtle ambient light glow behind marquee */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-gradient-to-r from-transparent via-[var(--color-brand)]/8 dark:via-sky-400/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 relative z-10">
        <div
          ref={headerRef}
          className={`text-center transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-brand)]">
            Trusted by the best
          </p>
        </div>

        <div
          className="relative mt-6 md:mt-8 overflow-hidden py-4 select-none"
          style={{
            maskImage: "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            stopDragging();
          }}
        >
          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={stopDragging}
            className={`flex items-center gap-6 overflow-x-auto no-scrollbar py-3 px-4 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {loopedCompanies.map((company, index) => (
              <BrandPill key={`${company.name}-${index}`} company={company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandPill({ company }) {
  return (
    <div
      className="brand-pill group relative flex shrink-0 items-center gap-4 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-[#1a1d21] px-5 py-3 sm:px-6 sm:py-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#0070ad] dark:hover:border-sky-400 hover:shadow-[0_12px_28px_rgba(0,112,173,0.18)]"
    >
      <div className="brand-mark relative flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-[#151c26] p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
        {company.mark === "cipla" && (
          <img
            src={company.logo}
            alt="Cipla"
            className="h-auto max-h-10 sm:max-h-11 max-w-full object-contain filter contrast-125"
          />
        )}

        {company.mark === "marksans" && (
          <img
            src={company.logo || marksansLogo}
            alt={company.name}
            className="h-auto max-h-10 sm:max-h-11 max-w-full object-contain filter contrast-125"
          />
        )}

        {(company.mark === "perfect-solution" || company.mark === "all-point") && (
          <img
            src={company.logo || perfectSolutionLogo}
            alt={company.name}
            className="h-auto max-h-10 sm:max-h-11 max-w-full object-contain filter contrast-125"
          />
        )}

        {company.mark === "hlpl" && (
          <img
            src={company.logo || hlplLogo}
            alt={company.name}
            className="h-auto max-h-10 sm:max-h-11 max-w-full object-contain filter contrast-125"
          />
        )}

        {company.mark === "ak-construction" && (
          <div className="relative flex items-center justify-center h-full w-full px-1">
            <img
              src={akLogoLight}
              alt="A.K Construction"
              className="h-auto max-h-9 sm:max-h-10 max-w-full object-contain filter contrast-125 dark:hidden"
            />
            <img
              src={akLogoDark}
              alt="A.K Construction"
              className="h-auto max-h-9 sm:max-h-10 max-w-full object-contain filter contrast-125 hidden dark:block"
            />
          </div>
        )}

        {company.mark === "global-to-local" && (
          <img
            src={company.logo}
            alt="Global to Local"
            className="h-auto max-h-11 sm:max-h-12 max-w-full rounded-full object-contain filter"
          />
        )}

        {company.mark === "sustainable-green" && (
          <div className="relative flex items-center justify-center h-full w-full">
            <svg viewBox="0 0 90 80" className="h-10 w-auto max-w-full drop-shadow-sm" fill="none">
              <defs>
                <linearGradient id="sgcLoopGrad1" x1="0%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#84cc16" />
                  <stop offset="50%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <linearGradient id="sgcLoopGrad2" x1="50%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="60%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
                <linearGradient id="sgcLoopGrad3" x1="100%" y1="100%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="60%" stopColor="#16a34a" />
                  <stop offset="100%" stopColor="#84cc16" />
                </linearGradient>
              </defs>
              <path
                d="M45 6 C49 6 53 12 78 56 C83 65 79 72 70 72 L20 72 C11 72 7 65 12 56 L37 12 C41 6 45 6 45 6 Z"
                stroke="url(#sgcLoopGrad1)"
                strokeWidth="11"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M45 16 L22 58 C20 62 23 66 28 66 L62 66 C67 66 70 62 68 58 L45 16 Z"
                stroke="url(#sgcLoopGrad2)"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              <path
                d="M45 22 L60 52 C62 56 59 60 54 60 L36 60 C31 60 28 56 30 52 Z"
                fill="url(#sgcLoopGrad3)"
              />
            </svg>
          </div>
        )}

        {company.mark === "bookmyspa" && (
          <div className="relative flex items-center justify-center h-full w-full">
            <svg viewBox="0 0 56 76" className="h-10 w-auto max-w-full drop-shadow-sm" fill="none">
              <defs>
                <linearGradient id="bmsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9ee03a" />
                  <stop offset="60%" stopColor="#8ac23c" />
                  <stop offset="100%" stopColor="#72a829" />
                </linearGradient>
              </defs>
              <path
                d="M 2 17 C 12 15, 20 2, 33 2 C 45 2, 48 14, 40 25 C 33 32, 24 35, 17 36 C 24 29, 23 21, 2 17 Z"
                fill="url(#bmsGrad)"
              />
              <path
                d="M 2 58 C 12 60, 20 73, 33 73 C 45 73, 48 61, 40 50 C 33 43, 24 40, 17 39 C 24 46, 23 54, 2 58 Z"
                fill="url(#bmsGrad)"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="text-left">
        <div className="brand-name font-display text-[0.98rem] sm:text-[1.05rem] font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
          {company.name}
        </div>
      </div>
    </div>
  );
}
