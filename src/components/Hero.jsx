import { useTheme } from "../context/ThemeContext";

// Wide modern tech team — professional, bright, software company feel
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80";

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section id="top" className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "560px" }}>
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-top animate-ken-burns"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Ink content card — bottom-left */}
      <div className="absolute bottom-0 sm:bottom-8 left-0 w-full sm:w-[52%] xl:w-[46%]">
        <div
          className="bg-ink/90 px-6 sm:px-8 md:px-12 pt-7 sm:pt-9 pb-8 sm:pb-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
        >
          <h1 className="font-display text-xl sm:text-3xl md:text-[2.1rem] font-bold text-white leading-[1.2] animate-hero-text">
            Partnering with you to create impactful technology
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-white/85 leading-relaxed max-w-md animate-hero-text [animation-delay:120ms]">
            Every strong partnership starts with trust. At Sumant Cloud, we deliver ideas as real solutions.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="/contact/"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors animate-hero-text [animation-delay:220ms]"
              style={{
                background: isDark ? "var(--color-brand)" : "#ffffff",
                color: "var(--color-ink)",
              }}
            >
              Contact Us
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-white/40 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors animate-hero-text [animation-delay:320ms]"
            >
              See Our Products
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
