import useScrollReveal from "../hooks/useScrollReveal";
import ciplaLogo from "../assets/cipla.png";
import globalToLocalLogo from "../assets/global-to-local.png";

const TRUSTED_COMPANIES = [
  {
    name: "Cipla",
    mark: "cipla",
    logo: ciplaLogo,
    label: "Healthcare & Pharma",
  },
  {
    name: "The Perfect Solution",
    mark: "perfect-solution",
    label: "Enterprise Solutions",
  },
  {
    name: "A.K Construction",
    mark: "ak-construction",
    label: "Infrastructure & Build",
  },
  {
    name: "Global to Local",
    mark: "global-to-local",
    logo: globalToLocalLogo,
    label: "Travel & Tours — Goa",
  },
];

// Repeat 3 times per group to ensure dense, continuous ribbon on wide screens
const marqueeCompanies = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

export default function TrustedBy() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="trust-section relative overflow-hidden mt-10 py-8 md:mt-14 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <div
          ref={headerRef}
          className={`text-center ${headerVisible ? "animate-reveal-up" : "opacity-0 translate-y-6"}`}
        >
          <p className="trust-eyebrow text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)] sm:text-xs">
            Trusted by the best
          </p>
        </div>

        <div className="marquee-shell mt-5 md:mt-6">
          <div className="marquee-track" aria-label="Trusted by brands">
            <div className="marquee-group">
              {marqueeCompanies.map((company, index) => (
                <BrandPill key={`g1-${company.name}-${index}`} company={company} />
              ))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {marqueeCompanies.map((company, index) => (
                <BrandPill key={`g2-${company.name}-${index}`} company={company} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandPill({ company }) {
  return (
    <div
      className="brand-pill group relative flex shrink-0 items-center gap-3.5 rounded-[1.5rem] border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] px-4 py-3 md:px-5 md:py-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] min-w-[220px] md:min-w-[245px]"
    >
      <div className="brand-mark relative flex h-10 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-1">
        {company.mark === "cipla" && (
          <img
            src={company.logo}
            alt="Cipla"
            className="h-auto max-h-7 max-w-full object-contain filter dark:brightness-125"
          />
        )}

        {company.mark === "perfect-solution" && (
          <div className="relative flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-[var(--color-brand)]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="rgba(0,112,173,0.18)" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
        )}

        {company.mark === "ak-construction" && (
          <div className="relative flex items-end justify-center gap-1">
            <span className="h-7 w-2 rounded-t-sm bg-[var(--color-brand)]" />
            <span className="h-9 w-2.5 rounded-t-sm bg-[var(--color-laterite)]" />
            <span className="h-5 w-2 rounded-t-sm bg-[var(--color-tide)]" />
          </div>
        )}

        {company.mark === "global-to-local" && (
          <img
            src={company.logo}
            alt="Global to Local"
            className="h-auto max-h-8 max-w-full rounded-full object-contain filter"
          />
        )}
      </div>

      <div className="text-left">
        <div className="font-display text-[1.02rem] font-semibold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-base">
          {company.name}
        </div>
        <div className="mt-0.5 text-[0.54rem] font-medium uppercase tracking-[0.16em] text-[var(--color-text-mist-2)] transition-colors duration-300 group-hover:text-[var(--color-brand)]">
          {company.label}
        </div>
      </div>
    </div>
  );
}
