import useScrollReveal from "../hooks/useScrollReveal";

const SERVICES = [
  {
    title: "Software Development",
    body: "Custom backends, internal tools, and platforms built to your workflow — not the other way round.",
    icon: <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" />,
  },
  {
    title: "Mobile App Development",
    body: "Native and cross-platform apps for iOS and Android, from first wireframe to app-store release.",
    icon: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    title: "Ecommerce Solutions",
    body: "Storefronts, checkout, and inventory wired together so a sale on the site is a sale in the warehouse.",
    icon: (
      <>
        <path d="M4 6h2l1.5 10.5A2 2 0 0 0 9.5 18h7a2 2 0 0 0 2-1.6L20 8H7" />
        <circle cx="10" cy="21" r="1" />
        <circle cx="17" cy="21" r="1" />
      </>
    ),
  },
  {
    title: "Automation",
    body: "We find the manual step your team repeats every day and replace it with a system that doesn't forget.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </>
    ),
  },
  {
    title: "UI & UX Design",
    body: "Interfaces designed around what your users are actually trying to get done, then tested until they do.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 4v5" />
      </>
    ),
  },
  {
    title: "Website Design",
    body: "Marketing sites and web presences that load fast, read clearly, and hold up on a phone in daylight.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9z" />
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
            Six disciplines, one accountable team.
          </h2>
          <p className="mt-5 text-text-mist-2 leading-relaxed">
            We don't hand your project between vendors. The people who design
            it are the people who build it, and the people who build it are
            the people who answer when something breaks.
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
