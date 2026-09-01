import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import edimsHeroBg from "../assets/edims-hero-bg.jpg";

export default function EDIMS() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)] min-h-screen">
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={edimsHeroBg}
              alt="E-DIMS Electronic Document and Information Management System"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d223a]/65 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                Product / E-DIMS
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                E-DIMS
              </h1>
              <p className="mt-4 text-xl font-semibold text-sky-200 sm:text-2xl">
                Electronic Document &amp; Information Management System
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
                Centralized enterprise document management, digital compliance records, and information lifecycle management built for modern organizations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,112,173,0.35)]"
                >
                  <span>Inquire About E-DIMS</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW / COMING SOON CARD ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-8 sm:p-12 text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
              Product Suite
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              E-DIMS Architecture &amp; Specifications
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              Detailed module specifications, workflow configurations, and feature documentation will be published here soon. Contact our team for early access and customized demos.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] px-8 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                <span>Connect With Product Engineering ↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
