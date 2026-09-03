import { useTheme } from "../context/ThemeContext";
import useScrollReveal from "../hooks/useScrollReveal";

const INDUSTRIES = [
  {
    name: "Pharmaceutical",
    desc: "Regulatory-compliant DMS, validation workflows, batch records, and quality audit trails.",
    bgImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=85",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    desc: "Clinic management systems, patient records, appointment scheduling, and EHR integration.",
    bgImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "Construction",
    desc: "Project cost tracking, vendor management, equipment maintenance, and procurement workflows.",
    bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="m5 20 2-13h10l2 13" />
        <path d="M10 7v13" />
        <path d="M14 7v13" />
        <path d="m8 7 4-5 4 5" />
      </svg>
    ),
  },
  {
    name: "Hospitality",
    desc: "Operations management, guest services scheduling, expense tracking, and facility maintenance.",
    bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
        <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },
  {
    name: "Manufacturing",
    desc: "Plant asset CMMS, warehouse management (WMS), automated maintenance, and supply chain control.",
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20h12" />
        <path d="M6 4h12" />
        <path d="M6 12h12" />
        <rect x="2" y="2" width="20" height="20" rx="3" />
      </svg>
    ),
  },
  {
    name: "Education",
    desc: "Enterprise LMS, compliance training portals, student assessment engines, and competency tracking.",
    bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    name: "Entertainment",
    desc: "Digital media management, event operations, licensing workflows, and content scheduling portals.",
    bgImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
  },
  {
    name: "E-commerce",
    desc: "Order processing, inventory sync, warehouse logistics, multi-channel payment, and billing automation.",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    name: "Human Resources",
    desc: "Talent training systems, employee onboarding, competency matrices, and performance management.",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Industries() {
  const { isDark } = useTheme();
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-[var(--color-foam)] border-t border-[var(--color-ink-line)]/50 overflow-hidden">
      {/* Background ambient lighting glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0070ad] dark:text-sky-400 backdrop-blur-md shadow-sm">
            Industry Expertise
          </span>

          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-ink)] leading-[1.15]">
            Industries We Serve
          </h2>

          <p className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-[var(--color-text-mist-2)] max-w-3xl mx-auto">
            With 9+ years of industry experience, we deliver innovative and reliable software solutions designed to address diverse business needs. Our expertise enables organizations to streamline processes, improve operational efficiency, strengthen compliance, and embrace digital transformation with scalable, industry-focused technology.
          </p>
        </div>

        {/* 9 Premium Industry Showcase Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={ind.name}
              className="group relative flex min-h-[310px] sm:min-h-[330px] flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-ink-line)]/80 bg-slate-900 p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2.5 hover:border-sky-400/80 hover:shadow-[0_24px_50px_rgba(0,112,173,0.25)]"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              {/* High-Definition Clear Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src={ind.bgImage}
                  alt={ind.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center filter contrast-[1.06] brightness-[0.88] opacity-85 group-hover:opacity-100 group-hover:scale-108 transition-all duration-700"
                />
                {/* Cinematic Bottom Dark Scrim for High-Contrast Readable Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Top: Floating Frosted Glass Icon Badge */}
              <div className="relative z-10 flex items-center justify-start">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-white/25 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md text-[#0070ad] dark:text-sky-300 shadow-[0_8px_20px_rgba(0,0,0,0.14)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0070ad] group-hover:text-white group-hover:border-sky-300">
                  {ind.icon}
                </div>
              </div>

              {/* Bottom: Clean Typography on Dark Scrim */}
              <div className="relative z-10 mt-12">
                <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-sky-300 drop-shadow-md">
                  {ind.name}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-200/90 font-medium drop-shadow-sm max-w-sm">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


