import useScrollReveal from "../hooks/useScrollReveal";

const SERVICES = [
  {
    title: "SaaS",
    body: "Build scalable product experiences, subscriptions, and cloud workflows that help businesses grow faster and operate smarter.",
    icon: <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" />,
  },
  {
    title: "IT Consulting",
    body: "Turn business challenges into practical technology roadmaps, architecture decisions, and execution plans that move teams forward.",
    icon: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    title: "AI/ML Hiring",
    body: "Find the right AI and machine learning talent for your roadmap, whether you need specialists, product engineers, or cross-functional teams.",
    icon: (
      <>
        <path d="M4 6h2l1.5 10.5A2 2 0 0 0 9.5 18h7a2 2 0 0 0 2-1.6L20 8H7" />
        <circle cx="10" cy="21" r="1" />
        <circle cx="17" cy="21" r="1" />
      </>
    ),
  },
];

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="services" className="bg-foam-panel py-16 md:py-20 lg:py-28 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div
          ref={headerRef}
          className={`max-w-2xl ${headerVisible ? "animate-reveal-up" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-4">Services</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-ink">
            Three focus areas, one accountable partner.
          </h2>
          <p className="mt-5 text-text-mist-2 leading-relaxed">
            We help businesses build digital products, modernize their technology strategy,
            and bring in the right AI and machine learning talent to turn ideas into execution.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group p-6 sm:p-8 border border-ink-line hover:border-brand/30 hover:shadow-lg transition-all duration-500 ${
        visible ? "animate-reveal-up" : "opacity-0 translate-y-6"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0070ad" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {service.icon}
      </svg>
      <h3 className="mt-5 font-display text-lg font-semibold text-text-ink group-hover:text-brand transition-colors">
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm text-text-mist-2 leading-relaxed">{service.body}</p>
    </div>
  );
}
