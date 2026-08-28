import useScrollReveal from "../hooks/useScrollReveal";

const HIGHLIGHTS = [
  {
    tag: "Services",
    title: "Six disciplines, one accountable team",
    body: "Software development, mobile apps, ecommerce, automation, UI/UX, and web design — all under one roof in Goa.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    href: "#services",
  },
  {
    tag: "Products",
    title: "Systems we build and maintain ourselves",
    body: "CMMS, PEM, EP2P, CMS, and WMS — products we own end to end, so we design every new project with that same accountability.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    href: "#products",
  },
  {
    tag: "Approach",
    title: "Four stages. No surprises in between.",
    body: "Discover, design, build, support — with short cycles, visible progress, and direct access to the people writing the code.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    href: "#approach",
  },
];

function HighlightCard({ item, delay }) {
  const [ref, visible] = useScrollReveal();

  return (
    <a
      ref={ref}
      href={item.href}
      className={`group block bg-foam-panel overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        visible ? "animate-reveal-up" : "opacity-0 translate-y-8"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">{item.tag}</span>
        <h3 className="mt-3 font-display text-xl md:text-2xl font-semibold text-text-ink group-hover:text-brand transition-colors">
          {item.title}
        </h3>
        <p className="mt-3 text-sm text-text-mist-2 leading-relaxed">{item.body}</p>
        <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-brand">
          Read more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function Highlights() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="bg-foam pt-20 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2
          ref={ref}
          className={`font-display text-2xl md:text-3xl font-semibold text-text-ink mb-10 md:mb-14 ${
            visible ? "animate-reveal-up" : "opacity-0 translate-y-6"
          }`}
        >
          Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {HIGHLIGHTS.map((item, i) => (
            <HighlightCard key={item.title} item={item} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
