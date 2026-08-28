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
  ["Live spend control", "See committed, approved, and paid spend in one calm view."],
  ["Smart approvals", "Route requests to the right owner with rules your team understands."],
  ["Project intelligence", "Spot variance early with clear forecasts and useful signals."],
];

export default function PEM() {
  const { isDark } = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);
  const [wordsReady, setWordsReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setWordsReady(true), 80); return () => clearTimeout(t); }, []);

  const [heroRef, heroVisible] = useInView(0.05);
  const [introRef, introVisible] = useInView(0.1);
  const [featuresRef, featuresVisible] = useInView(0.1);
  const [ctaRef, ctaVisible] = useInView(0.2);

  /* count-up proof stat */
  const proofCount = useCountUp(92, 1200, heroVisible);

  const h1Words1 = ["Every", "project."];
  const h1Words2 = ["One", "clear", "view."];

  return (
    <div className={`pem-page ${isDark ? "pem-dark" : "pem-light"}`}>
      <Navbar forceSolid />
      <main>

        {/* HERO */}
        <section className="pem-hero" ref={heroRef}>
          <div className="pem-noise" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 pem-hero-grid">
            <div className="pem-hero-copy">
              <p className="pem-kicker" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(14px)", transition: "all 0.5s ease 0.1s" }}>
                <span className="anim-ring-pulse" /> PRODUCT / PEM
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
              <p className="pem-lede" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(18px)", transition: "all 0.6s ease 0.55s" }}>
                Project expense management for teams that want to move quickly, spend wisely, and never lose the thread.
              </p>
              <div className="pem-actions" style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.6s ease 0.7s" }}>
                <a className="pem-button pem-button-primary anim-shimmer" href="#contact">Book a walkthrough <b>↗</b></a>
                <a className="pem-link" href="#features">See what PEM does <span>↓</span></a>
              </div>
              <div className="pem-proof" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(16px)", transition: "all 0.6s ease 0.85s" }}>
                <strong className="anim-gradient-text">{heroVisible ? proofCount : 0}%</strong>
                <span>of requests resolved<br />in one working day</span>
                <i />
              </div>
            </div>
            <figure className="pem-hero-photo" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(30px) scale(0.97)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" alt="Project team reviewing plans together around a table" />
              <div className="pem-photo-overlay" />
            </figure>
          </div>
        </section>

        {/* INTRO */}
        <section className="pem-intro" ref={introRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 pem-intro-grid">
            <p className={`pem-label anim-reveal ${introVisible ? "is-visible" : ""}`}>The control layer</p>
            <div className={`anim-reveal anim-delay-1 ${introVisible ? "is-visible" : ""}`}>
              <h2>Less chasing.<br /><span>More certainty.</span></h2>
              <p>PEM gives finance, project owners, and leadership the same source of truth. Requests move faster, budgets stay visible, and decisions happen with context.</p>
            </div>
            <div className={`pem-intro-note anim-reveal-right anim-delay-2 ${introVisible ? "is-visible" : ""}`}>
              <b>Built for the in-between.</b>
              <span>Where a spreadsheet stops and an ERP starts, PEM keeps the work moving.</span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="pem-features" ref={featuresRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className={`pem-section-head anim-reveal ${featuresVisible ? "is-visible" : ""}`}>
              <div>
                <p className="pem-label">Why teams use it</p>
                <h2>Spend with<br /><em>confidence.</em></h2>
              </div>
              <p className="pem-counter">FEATURES / 03</p>
            </div>
            <div className="pem-feature-layout">
              <div className="pem-feature-list">
                {FEATURES.map(([title, body], index) => (
                  <button
                    type="button"
                    className={`pem-feature ${activeFeature === index ? "is-active" : ""} anim-reveal anim-delay-${index + 1}`}
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
              <div className={`pem-feature-art anim-reveal-right anim-delay-2 ${featuresVisible ? "is-visible" : ""}`}>
                <div className="pem-ring pem-ring-one" />
                <div className="pem-ring pem-ring-two" />
                <div className="pem-art-card anim-float">
                  <small>PROJECT HEALTH</small>
                  <strong style={{ transition: "all 0.3s ease" }}>
                    {activeFeature === 0 ? "On track" : activeFeature === 1 ? "4 approvals" : "92% clear"}
                  </strong>
                  <div className="pem-mini-line"><i /><i /><i /><i /><i /></div>
                  <span>Northstar Works / Q3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="pem-cta" ref={ctaRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className={`pem-kicker anim-reveal ${ctaVisible ? "is-visible" : ""}`}><span className="anim-ring-pulse" /> READY TO SEE CLEARLY?</p>
            <h2 className={`anim-reveal anim-delay-1 ${ctaVisible ? "is-visible" : ""}`}>Your next project<br /><em>starts here.</em></h2>
            <a className={`pem-button pem-button-light anim-shimmer anim-reveal anim-delay-2 ${ctaVisible ? "is-visible" : ""}`} href="mailto:hello@sumantcloud.com">Request a PEM walkthrough <b>↗</b></a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
