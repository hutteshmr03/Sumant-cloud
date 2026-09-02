import { useTheme } from "../context/ThemeContext";
import heroSoftwareImage from "../assets/software-hero-bg.jpg";

const HERO_IMAGE = heroSoftwareImage;

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section id="top" className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "620px" }}>
      {/* Full-bleed background image with smooth ambient scale */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_top_20%] transition-transform duration-1000 scale-100 animate-ken-burns"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Balanced natural gradient scrim for clarity and depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/70 via-transparent to-black/15 pointer-events-none" />
      <div className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${isDark ? "bg-slate-950/25" : "bg-transparent"}`} />

      {/* Subtle animated ambient glow orbs */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="pointer-events-none absolute bottom-1/3 left-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />

      {/* Ink content card — bottom-left */}
      <div className="absolute bottom-0 sm:bottom-8 left-0 w-full sm:w-[54%] xl:w-[48%] z-10">
        <div
          className="hero-card premium-hero-card relative overflow-hidden px-6 sm:px-8 md:px-12 pt-7 sm:pt-9 pb-8 sm:pb-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
        >
          <div className="relative z-10">
            <h1 className="font-display text-2xl sm:text-3xl md:text-[2.45rem] font-bold text-white leading-[1.12] tracking-[-0.04em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] animate-hero-headline">
              Turning Ideas into Solution
            </h1>
            <p className="mt-3.5 text-xs sm:text-sm text-white/90 leading-relaxed max-w-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] animate-hero-subline">
              Every great innovation begins with an idea. At Sumant Cloud, we engineer concept into robust, scalable, and high-impact digital solutions.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mt-7 animate-hero-cta">
              <a
                href="/contact/"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-gradient-to-r from-[#0070ad] to-[#0284c7] px-6 sm:px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:from-[#00659c] hover:to-[#0275b1] hover:shadow-[0_4px_14px_rgba(0,0,0,0.3)] active:translate-y-0"
              >
                <span>Contact Us</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:text-[#0070ad]">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="12" x2="12" y2="4" />
                    <polyline points="5 4 12 4 12 11" />
                  </svg>
                </span>
              </a>
              <a
                href="#products"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09] hover:text-white hover:shadow-[0_4px_14px_rgba(0,0,0,0.25)] active:translate-y-0"
              >
                <span>See Our Products</span>
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
      </div>
    </section>
  );
}
