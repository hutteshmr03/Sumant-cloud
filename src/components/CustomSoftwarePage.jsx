import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import customSoftwareHeroBg from "../assets/custom-software-hero-bg.jpg";

const SERVICES = [
  {
    num: "01",
    title: "Web Application Development",
    desc: "We build responsive, secure, and scalable web applications designed around your business needs.",
  },
  {
    num: "02",
    title: "Enterprise Software Solutions",
    desc: "Develop powerful systems that streamline business processes, improve efficiency, and support organisational growth.",
  },
  {
    num: "03",
    title: "Business Process Automation",
    desc: "Automate repetitive tasks and workflows to improve productivity and reduce manual effort.",
  },
  {
    num: "04",
    title: "Software Modernisation",
    desc: "Upgrade and improve existing applications with modern technologies, better performance, and scalable architecture.",
  },
  {
    num: "05",
    title: "API & System Integration",
    desc: "Connect your software with third-party platforms, tools, and services to create a seamless digital ecosystem.",
  },
  {
    num: "06",
    title: "Maintenance & Support",
    desc: "We provide ongoing technical support, enhancements, and maintenance to keep your software secure and performing efficiently.",
  },
];

export default function CustomSoftwarePage() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* Hero Section with Contextual Background */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={customSoftwareHeroBg}
              alt="Custom Software Development"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d223a]/55 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                Custom Software Development
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                Software Built Around Your Business
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
                We design and develop custom software solutions tailored to your unique business requirements. From concept and strategy to development, deployment, and ongoing support, we build secure, scalable, and high-performing applications that help businesses streamline operations and achieve their goals.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                Whether you need a web application, enterprise platform, internal business system, automation solution, or a completely new digital product, our development team works closely with you to transform your ideas into reliable software.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-500"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-white/20 hover:border-white/50"
                >
                  Talk to Our Experts
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Custom Development Services */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Our Capabilities
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-4xl">
                Our Custom Development Services
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[var(--color-text-mist-2)]">
              Full-lifecycle engineering tailored specifically around your business model and operational needs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-2xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/50 hover:shadow-md"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[var(--color-brand)]">
                    {service.num}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-[-0.02em] text-[var(--color-text-ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[var(--color-text-mist-2)]">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Custom Software Development & Let's Build Your Solution */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Why Choose Custom Software Development */}
            <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  The Custom Advantage
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)]">
                  Why Choose Custom Software Development?
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
                  Off-the-shelf software doesn&apos;t always fit the way your business operates. Custom software is built specifically around your processes, challenges, and future goals—giving you greater flexibility, scalability, and control.
                </p>
              </div>
            </div>

            {/* Let's Build Your Solution */}
            <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-ink-line)]/80 bg-[var(--color-foam-panel)] p-8 sm:p-10 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Collaborative Engineering
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)]">
                  Let&apos;s Build Your Solution
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-mist-2)] sm:text-base">
                  Have an idea or a business challenge that technology can solve? Our team can help you transform it into a powerful, scalable, and future-ready software solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Build Software That Moves Your Business Forward? (CTA) */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Start Your Project With Us Today
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text-ink)] sm:text-4xl">
              Ready to Build Software That Moves Your Business Forward?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-mist-2)]">
              Your business deserves more than a one-size-fits-all solution. Whether you have a new idea, an existing system that needs improvement, or a complex business challenge to solve, our team is ready to help.
            </p>
            <p className="mt-3 text-sm font-semibold text-[var(--color-text-ink)]">
              Have a project in mind? Let&apos;s talk.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book a Free Consultation
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-ink)] transition-colors duration-300 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                Talk to Our Experts
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
