import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const FEATURES = [
  ["Live inventory", "Know what is available, reserved, moving, and running low across every location."],
  ["Faster fulfilment", "Give pick, pack, and ship teams a clear next action for every order."],
  ["Scan with confidence", "Use barcode-ready workflows to keep every item and location accurate."],
  ["Replenish early", "See demand signals before a stockout becomes a customer problem."],
];

export default function WMS() {
  const { isDark } = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className={`wms-page ${isDark ? "wms-dark" : "wms-light"}`}>
      <Navbar forceSolid />
      <main>
        <section className="wms-hero">
          <div className="wms-grid" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 wms-hero-grid">
            <div className="wms-hero-copy">
              <p className="wms-kicker"><span /> PRODUCT / WMS</p>
              <h1>Know where<br /><em>everything is.</em></h1>
              <p className="wms-lede">Warehouse management that keeps stock visible, orders moving, and your whole operation ready for what comes next.</p>
              <div className="wms-actions"><a className="wms-button wms-button-primary" href="#contact">See WMS in action <b>↗</b></a><a className="wms-link" href="#features">Explore the essentials <span>↓</span></a></div>
              <div className="wms-proof"><strong>99.2%</strong><span>inventory accuracy<br />across one demo site</span><i /></div>
            </div>
            <figure className="wms-hero-photo"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85" alt="Warehouse worker organizing packages in a fulfillment center" /><div className="wms-photo-overlay" /></figure>
          </div>
        </section>

        <section className="wms-intro"><div className="max-w-7xl mx-auto px-6 md:px-10 wms-intro-grid"><p className="wms-label">The warehouse layer</p><div><h2>Less searching.<br /><span>More shipping.</span></h2><p>WMS brings inventory, locations, orders, and teams into one clear operational view. Whether you run one site or several, every movement is easier to understand.</p></div><div className="wms-note"><b>Built for momentum.</b><span>Simple enough for the floor. Powerful enough for a growing supply chain.</span></div></div></section>

        <section id="features" className="wms-features"><div className="max-w-7xl mx-auto px-6 md:px-10"><div className="wms-section-head"><div><p className="wms-label">What WMS brings together</p><h2>Make every<br /><em>move count.</em></h2></div><p className="wms-counter">OPERATIONS / 04</p></div><div className="wms-feature-layout"><div>{FEATURES.map(([title, body], index) => <button type="button" className={`wms-feature ${activeFeature === index ? "is-active" : ""}`} onMouseEnter={() => setActiveFeature(index)} onFocus={() => setActiveFeature(index)} key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{body}</p></div><i>↗</i></button>)}</div><div className="wms-feature-art"><div className="wms-art-shelf"><i /><i /><i /><i /><i /><i /></div><div className="wms-stock-card"><small>WAREHOUSE HEALTH</small><strong>{activeFeature === 0 ? "99.2% accurate" : activeFeature === 1 ? "146 orders ready" : activeFeature === 2 ? "Scan verified" : "12 alerts today"}</strong><div className="wms-mini-progress"><i /></div><span>Northstar Distribution / A1</span></div></div></div></div></section>

        <section id="contact" className="wms-cta"><div className="max-w-7xl mx-auto px-6 md:px-10"><p className="wms-kicker"><span /> READY TO MOVE FORWARD?</p><h2>Put your operation<br /><em>in motion.</em></h2><a className="wms-button wms-button-light" href="mailto:hello@sumantcloud.com">Request a WMS walkthrough <b>↗</b></a></div></section>
      </main>
      <Footer />
    </div>
  );
}
