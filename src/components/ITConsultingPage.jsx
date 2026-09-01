import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import itConsultingHeroBg from "../assets/it-consulting-hero-bg.jpg";

const CONSULTING_SERVICES = [
  {
    num: "01",
    title: "Technology Strategy & Planning",
    desc: "We analyse your business requirements and help you create a technology roadmap aligned with your goals.",
  },
  {
    num: "02",
    title: "Software & Solution Consulting",
    desc: "Get expert guidance on selecting the right architecture, technologies, platforms, and development approach for your software projects.",
  },
  {
    num: "03",
    title: "Digital Transformation",
    desc: "We help businesses modernise processes, systems, and operations through innovative digital technologies and automation.",
  },
  {
    num: "04",
    title: "Cloud & Infrastructure Consulting",
    desc: "We help businesses plan, optimise, and scale their cloud infrastructure for better performance, flexibility, and security.",
  },
  {
    num: "05",
    title: "Technology Assessment & Optimisation",
    desc: "Evaluate your existing IT systems, identify gaps and inefficiencies, and receive recommendations for improvement.",
  },
];

const REASONS = [
  "Business-focused technology solutions",
  "Experienced technical guidance",
  "Scalable and future-ready strategies",
  "Practical recommendations tailored to your needs",
  "Support from strategy to implementation",
];

export default function ITConsultingPage() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* Hero Section with Contextual Background */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={itConsultingHeroBg}
              alt="IT Consulting Services"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d223a]/55 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                IT Consulting Services
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                Transform Your Business with the Right Technology
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
                We help businesses make smarter technology decisions and build reliable, scalable digital solutions. Our IT consulting services are designed to understand your business challenges, identify the right technologies, and create a clear strategy for growth and digital transformation.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                Whether you are planning a new software product, modernising existing systems, adopting cloud technologies, or integrating AI into your business, our team provides strategic and technical guidance at every stage.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-500"
                >
                  Talk to our technology experts
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-white/20 hover:border-white/50"
                >
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our IT Consulting Services Include */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Our Capabilities
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
                Our IT Consulting Services Include
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[var(--color-text-mist-2)]">
              Comprehensive technical and architectural guidance tailored to your operational roadmap.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CONSULTING_SERVICES.map((service, idx) => (
              <div
                key={service.title}
                className={`flex flex-col justify-between rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/50 hover:shadow-md ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[var(--color-brand)]">
                    {service.num}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-[-0.02em] text-[var(--color-text-ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-mist-2)]">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Our IT Consulting Services? */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                The Sumant Cloud Advantage
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-3xl">
                Why Choose Our IT Consulting Services?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-mist-2)]">
                We bridge high-level technical vision with practical, day-to-day engineering execution, helping enterprises de-risk tech decisions and accelerate time-to-market.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-9 shadow-sm">
              <ul className="space-y-4">
                {REASONS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[var(--color-text-ink)]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Let's Build the Right Technology Strategy (CTA) */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Let&apos;s Build the Right Technology Strategy
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text-ink)] sm:text-4xl">
              Turn your business challenges into effective digital solutions.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-mist-2)]">
              Whether you have an idea, a technical challenge, or an existing system that needs improvement, we can help you identify the right path forward.
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--color-text-ink)]">
              Talk to our technology experts and turn your business challenges into effective digital solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Talk to Our Technology Experts
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
