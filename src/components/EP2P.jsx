import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useCountUp(end, duration = 1400, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, end, duration]);
  return value;
}

const FEATURES = [
  ["Guided requisitions", "Turn an idea into a structured request with the right approvals from the start."],
  ["Vendor workspace", "Keep supplier profiles, documents, and performance signals together."],
  ["Three-way matching", "Match purchase orders, receipts, and invoices before payment is released."],
  ["Payment readiness", "Give finance a clean queue of verified invoices ready for the next run."],
];

const WORKFLOW_STATUS = ["Request received", "Vendor verified", "Invoice matched", "Ready to pay"];

export default function EP2P() {
  const { isDark } = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);
  const [wordsReady, setWordsReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setWordsReady(true), 80); return () => clearTimeout(t); }, []);

  const [heroRef, heroVisible] = useInView(0.05);
  const [introRef, introVisible] = useInView(0.1);
  const [featuresRef, featuresVisible] = useInView(0.1);
  const [ctaRef, ctaVisible] = useInView(0.2);

  const proofCount = useCountUp(31, 1200, heroVisible);

  const h1Words1 = ["From", "request"];
  const h1Words2 = ["to", "paid."];

  return (
    <div className={`ep2p-page ${isDark ? "ep2p-dark" : "ep2p-light"}`}>
      <Navbar forceSolid />
      <main>

        {/* HERO */}
        <section className="ep2p-hero" ref={heroRef}>
          <div className="ep2p-grid" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 ep2p-hero-grid">
            <div className="ep2p-hero-copy">
              <p className="ep2p-kicker" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(14px)", transition: "all 0.5s ease 0.1s" }}>
                <span className="anim-ring-pulse" /> PRODUCT / EP2P
              </p>
              <h1 style={{ opacity: wordsReady ? 1 : 0 }}>
                <span className="block">
                  {h1Words1.map((w, i) => (
                    <span key={i} className="anim-word" style={{ animationDelay: `${0.18 + i * 0.09}s` }}>{w}&nbsp;</span>
                  ))}
                </span>
                <em>
                  {h1Words2.map((w, i) => (
                    <span key={i} className="anim-word" style={{ animationDelay: `${0.36 + i * 0.09}s` }}>{w}{i < h1Words2.length - 1 ? "\u00a0" : ""}</span>
                  ))}
                </em>
              </h1>
              <p className="ep2p-lede" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(18px)", transition: "all 0.6s ease 0.55s" }}>
                A connected purchase-to-pay system that keeps every requisition, supplier, invoice, and payment moving in the same direction.
              </p>
              <div className="ep2p-actions" style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.6s ease 0.7s" }}>
                <a className="ep2p-button ep2p-button-primary anim-shimmer" href="#contact">See EP2P in action <b>↗</b></a>
                <a className="ep2p-link" href="#features">Explore the workflow <span>↓</span></a>
              </div>
              <div className="ep2p-proof" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(16px)", transition: "all 0.6s ease 0.85s" }}>
                <strong className="anim-gradient-text">{heroVisible ? proofCount : 0}%</strong>
                <span>less time spent<br />on invoice exceptions</span>
                <i />
              </div>
            </div>
            <figure className="ep2p-hero-photo" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(30px) scale(0.97)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85" alt="Finance professional reviewing invoices and payment documents" />
              <div className="ep2p-photo-overlay" />
            </figure>
          </div>
        </section>

        {/* INTRO */}
        <section className="ep2p-intro" ref={introRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 ep2p-intro-grid">
            <p className={`ep2p-label anim-reveal ${introVisible ? "is-visible" : ""}`}>The connected flow</p>
            <div className={`anim-reveal anim-delay-1 ${introVisible ? "is-visible" : ""}`}>
              <h2>Procurement without<br /><span>the paper trail.</span></h2>
              <p>EP2P brings purchasing and accounts payable into one operating rhythm. Everyone sees what was requested, what arrived, and what is ready to be paid.</p>
            </div>
            <div className={`ep2p-note anim-reveal-right anim-delay-2 ${introVisible ? "is-visible" : ""}`}>
              <b>One chain of truth.</b>
              <span>Every hand-off is visible, from the first request to the final remittance.</span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="ep2p-features" ref={featuresRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className={`ep2p-section-head anim-reveal ${featuresVisible ? "is-visible" : ""}`}>
              <div>
                <p className="ep2p-label">The workflow</p>
                <h2>Move spend<br /><em>forward.</em></h2>
              </div>
              <p className="ep2p-counter">CAPABILITIES / 04</p>
            </div>
            <div className="ep2p-feature-layout">
              <div>
                {FEATURES.map(([title, body], index) => (
                  <button
                    type="button"
                    className={`ep2p-feature ${activeFeature === index ? "is-active" : ""} anim-reveal anim-delay-${index + 1}`}
                    style={featuresVisible ? {} : { opacity: 0, transform: "translateX(-20px)" }}
                    onMouseEnter={() => setActiveFeature(index)}
                    onFocus={() => setActiveFeature(index)}
                    key={title}
                  >
                    <span>0{index + 1}</span>
                    <div><strong>{title}</strong><p>{body}</p></div>
                    <i>↗</i>
                  </button>
                ))}
              </div>
              <div className={`ep2p-feature-art anim-reveal-right anim-delay-2 ${featuresVisible ? "is-visible" : ""}`}>
                <div className="ep2p-art-line ep2p-line-one" />
                <div className="ep2p-art-line ep2p-line-two" />
                <div className="ep2p-workflow-card anim-float">
                  <small>WORKFLOW STATUS</small>
                  <strong style={{ transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
                    {WORKFLOW_STATUS[activeFeature]}
                  </strong>
                  <div><i /><i /><i /><i /></div>
                  <span>Northstar Works / Q3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="ep2p-cta" ref={ctaRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className={`ep2p-kicker anim-reveal ${ctaVisible ? "is-visible" : ""}`}><span className="anim-ring-pulse" /> MAKE EVERY HAND-OFF COUNT</p>
            <h2 className={`anim-reveal anim-delay-1 ${ctaVisible ? "is-visible" : ""}`}>Ready to connect<br /><em>the whole flow?</em></h2>
            <a className={`ep2p-button ep2p-button-light anim-shimmer anim-reveal anim-delay-2 ${ctaVisible ? "is-visible" : ""}`} href="mailto:hello@sumantcloud.com">Request an EP2P walkthrough <b>↗</b></a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
