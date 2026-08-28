import useScrollReveal from "../hooks/useScrollReveal";

const PRODUCTS = [
  {
    code: "CMMS",
    name: "Computerized Maintenance Management System",
    tag: "Facilities",
    body: "Track assets, schedule preventive maintenance, and close the loop on work orders before they become downtime.",
  },
  {
    code: "PEM",
    name: "Procurement & Expense Management",
    tag: "Finance",
    body: "One system for requests, approvals, and spend — nobody's chasing a purchase order over email.",
  },
  {
    code: "EP2P",
    name: "Electronic Procure-to-Pay",
    tag: "Procurement",
    body: "Purchase orders and payments in a single audit trail, from requisition to reconciled invoice.",
  },
  {
    code: "CMS",
    name: "Content Management System",
    tag: "Content",
    body: "Publish and update your own site or app content without waiting on a developer to ship it.",
  },
  {
    code: "WMS",
    name: "Warehouse Management System",
    tag: "Logistics",
    body: "Know what's on the shelf, what's in transit, and what's about to run out — in real time.",
  },
];

export default function Products() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="products" className="bg-foam-panel py-16 md:py-20 lg:py-28 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div
          ref={headerRef}
          className={`max-w-2xl ${headerVisible ? "animate-reveal-up" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-4">Products</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-ink">
            The systems we build for ourselves, too.
          </h2>
          <p className="mt-5 text-text-mist-2 leading-relaxed">
            Alongside client work, we own five products end to end — which
            means we carry pagers for them, and design every new one with
            that same accountability in mind.
          </p>
        </div>

        <div className="mt-14 border-t border-ink-line">
          {PRODUCTS.map((p, i) => (
            <ProductRow key={p.code} product={p} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductRow({ product, delay }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group grid md:grid-cols-[7rem_1fr_auto] gap-4 md:gap-8 items-start md:items-center py-7 border-b border-ink-line hover:bg-brand-light/50 transition-all duration-300 px-2 -mx-2 ${
        visible ? "animate-reveal-up" : "opacity-0 translate-y-4"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-display text-2xl md:text-3xl font-semibold text-brand">{product.code}</span>
      <div>
        <h3 className="font-display text-base md:text-lg text-text-ink font-medium">{product.name}</h3>
        <p className="mt-1.5 text-sm text-text-mist-2 leading-relaxed max-w-xl">{product.body}</p>
      </div>
      <span className="font-mono text-xs tracking-wide uppercase text-text-mist-2 border border-ink-line rounded-full px-3 py-1.5 justify-self-start md:justify-self-end whitespace-nowrap">
        {product.tag}
      </span>
    </div>
  );
}
