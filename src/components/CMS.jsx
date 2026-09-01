import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import cmsHeroBg from "../assets/cms-hero-bg.jpg";

const CMS_FEATURES = [
  {
    id: "appointment-scheduling",
    badge: "01 / CALENDAR",
    title: "Appointment Scheduling",
    text: "Online booking, automated reminders, and doctor availability tracking.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    highlight: "Online Booking, SMS Reminders & Slot Allocation",
  },
  {
    id: "emr",
    badge: "02 / CLINICAL",
    title: "Electronic Medical Records (EMR)",
    text: "Secure storage of patient history, prescriptions, and treatment notes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    highlight: "Encrypted Histories, Digital RX & Treatment Timelines",
  },
  {
    id: "billing-payments",
    badge: "03 / FINANCIAL",
    title: "Billing & Payments",
    text: "Automated invoice generation, insurance processing, and digital payments.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    highlight: "Automated Invoices, Insurance Claims & Digital Pay",
  },
  {
    id: "reporting-analytics",
    badge: "04 / INTELLIGENCE",
    title: "Reporting & Analytics",
    text: "Generates insights on patient trends, revenue, and operational efficiency.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    highlight: "Patient Trends, Revenue Insights & Clinic Efficiency",
  },
];

export default function CMS() {
  const { isDark } = useTheme();
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const selectedFeature = CMS_FEATURES[activeFeatureIndex];

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={cmsHeroBg}
              alt="Clinic Management Software"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d223a]/55 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                Product / CMS
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                CMS
              </h1>
              <p className="mt-4 text-xl font-semibold text-sky-200 sm:text-2xl">
                Clinic Management Software – Streamlining Healthcare Operations
              </p>
              <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">What is Clinic Management Software?</p>
                <p className="mt-2 text-base leading-relaxed text-slate-200 sm:text-lg">
                  Clinic Management Software (CMS) is a comprehensive digital solution designed to automate and streamline the day-to-day operations of medical clinics. It enhances efficiency, improves patient care, and ensures seamless management of administrative, financial, and clinical workflows.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,112,173,0.35)]"
                >
                  <span>Explore Key Features</span>
                  <span>↓</span>
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/20"
                >
                  <span>Request Demo</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY FEATURES SECTION ── */}
        <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Core Capabilities
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Key Features of Our CMS
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              Designed to connect clinical workflows, medical documentation, billing, and scheduling seamlessly.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            {/* 4 Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {CMS_FEATURES.map((feature, idx) => {
                const isActive = activeFeatureIndex === idx;
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveFeatureIndex(idx)}
                    className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                      isActive
                        ? "border-[var(--color-brand)] bg-[var(--color-foam-panel)] shadow-md ring-2 ring-[var(--color-brand)]/20"
                        : "border-[var(--color-ink-line)]/70 bg-[var(--color-foam-panel)] hover:border-[var(--color-brand)]/50 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                          isActive
                            ? "bg-[var(--color-brand)] text-white"
                            : "bg-[var(--color-brand)]/10 text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--color-text-mist-2)]">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-base font-bold text-[var(--color-text-ink)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-mist-2)] sm:text-sm">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Interactive Inspector Canvas */}
            <div className="sticky top-28 rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-8 shadow-sm">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Feature Focus
              </span>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white shadow-md">
                  {selectedFeature.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-text-ink)]">
                    {selectedFeature.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--color-brand)]">
                    {selectedFeature.highlight}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-[var(--color-text-ink)] border-t border-[var(--color-ink-line)]/50 pt-5">
                {selectedFeature.text}
              </p>

              <div className="mt-6 space-y-3 rounded-2xl border border-[var(--color-ink-line)]/60 bg-[var(--color-foam)] p-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">Clinical Compliance</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    HIPAA &amp; EMR Ready
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-[var(--color-ink-line)]/40 pt-2.5">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">User Experience</span>
                  <span className="font-bold text-[var(--color-text-ink)]">Doctors, Staff &amp; Patients</span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-[var(--color-ink-line)]/40 pt-2.5">
                  <span className="font-semibold text-[var(--color-text-mist-2)]">System Architecture</span>
                  <span className="font-bold text-[var(--color-text-ink)]">Scalable &amp; Customizable</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact/"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand)] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[var(--color-brand)]/90 hover:shadow-lg"
                >
                  <span>Inquire About CMS ↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE OUR CMS ── */}
        <section className="border-t border-[var(--color-ink-line)]/50 bg-[var(--color-foam-panel)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Why Choose Our CMS?
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
                Designed for Clinics, Hospitals &amp; Healthcare Providers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-text-mist-2)]">
                At <strong>Sumant Cloud</strong>, our Clinic Management Software is designed to meet the unique needs of clinics, hospitals, and healthcare providers. Our solution is <strong>user-friendly, scalable, and fully customizable</strong>, ensuring a seamless experience for doctors, staff, and patients.
              </p>
              <div className="mt-6">
                <span className="inline-block rounded-full bg-[var(--color-brand)]/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand)]">
                  Digitize Your Clinic Operations Today!
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA SECTION ── */}
        <section className="border-t border-[var(--color-ink-line)]/60 bg-[var(--color-foam-panel)] py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
              Digitize Your Clinic Operations Today!
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
              Connect your clinic's administrative, financial, and clinical workflows in one unified platform.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span>Contact Us</span>
                <span>↗</span>
              </a>
              <a
                href="tel:+917028510950"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                <span>+91 70285 10950</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
