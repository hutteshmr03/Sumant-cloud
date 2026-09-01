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

      {/* Cinematic dark gradient scrim for contrast and depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/90 via-[#031326]/40 to-black/25 pointer-events-none" />
      <div className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${isDark ? "bg-black/30" : "bg-transparent"}`} />

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
            <h1 className="font-display text-2xl sm:text-3xl md:text-[2.45rem] font-bold text-white leading-[1.12] tracking-[-0.04em] animate-hero-headline">
              Turning Ideas into Solution
            </h1>
            <p className="mt-3.5 text-xs sm:text-sm text-white/85 leading-relaxed max-w-md animate-hero-subline">
              Every great innovation begins with an idea. At Sumant Cloud, we engineer concept into robust, scalable, and high-impact digital solutions.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-7 animate-hero-cta">
              <a
                href="/contact/"
                className="hero-cta-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.12em] shadow-[0_8px_20px_rgba(2,132,199,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(2,132,199,0.5)]"
                style={{
                  background: isDark ? "var(--color-brand)" : "#ffffff",
                  color: "var(--color-ink)",
                }}
              >
                <span>Contact Us</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
              </a>
              <a
                href="#products"
                className="hero-cta-secondary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/35 bg-white/5 text-white text-xs font-semibold uppercase tracking-[0.12em] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
              >
                <span>See Our Products</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
