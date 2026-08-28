import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const FEATURES = [
  ["Simple scheduling", "See the day at a glance, book appointments, and keep every provider in sync."],
  ["Patient records", "Keep histories, notes, prescriptions, and follow-ups together and easy to find."],
  ["Clear billing", "Create invoices, record payments, and give your front desk less paperwork."],
  ["Useful insights", "Understand visits, revenue, and clinic performance with reports made for humans."],
];

export default function CMS() {
  const { isDark } = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className={`cms-page ${isDark ? "cms-dark" : "cms-light"}`}>
      <Navbar forceSolid />
      <main>
        <section className="cms-hero">
          <div className="cms-grid" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 cms-hero-grid">
            <div className="cms-hero-copy">
              <p className="cms-kicker"><span /> PRODUCT / CMS</p>
              <h1>Your clinic,<br /><em>in good hands.</em></h1>
              <p className="cms-lede">A calm, connected clinic management system that helps your team spend less time coordinating and more time caring for people.</p>
              <div className="cms-actions"><a className="cms-button cms-button-primary" href="#contact">See CMS in action <b>↗</b></a><a className="cms-link" href="#features">Explore the essentials <span>↓</span></a></div>
              <div className="cms-proof"><strong>1 view</strong><span>for appointments,<br />records, and payments</span><i /></div>
            </div>
            <figure className="cms-hero-photo"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85" alt="Healthcare professional using a tablet in a bright clinic" /><div className="cms-photo-overlay" /></figure>
          </div>
        </section>

        <section className="cms-intro"><div className="max-w-7xl mx-auto px-6 md:px-10 cms-intro-grid"><p className="cms-label">The everyday layer</p><div><h2>Less admin.<br /><span>More attention.</span></h2><p>CMS brings the moving parts of a clinic into one friendly workspace. Your reception team sees the schedule, clinicians see the context, and patients get a smoother experience from booking to follow-up.</p></div><div className="cms-note"><b>Made for real clinics.</b><span>Clear enough for a busy front desk. Flexible enough for growing care teams.</span></div></div></section>

        <section id="features" className="cms-features"><div className="max-w-7xl mx-auto px-6 md:px-10"><div className="cms-section-head"><div><p className="cms-label">What CMS brings together</p><h2>Everything your<br /><em>day needs.</em></h2></div><p className="cms-counter">ESSENTIALS / 04</p></div><div className="cms-feature-layout"><div>{FEATURES.map(([title, body], index) => <button type="button" className={`cms-feature ${activeFeature === index ? "is-active" : ""}`} onMouseEnter={() => setActiveFeature(index)} onFocus={() => setActiveFeature(index)} key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{body}</p></div><i>↗</i></button>)}</div><div className="cms-feature-art"><div className="cms-art-circle cms-circle-one" /><div className="cms-art-circle cms-circle-two" /><div className="cms-care-card"><small>TODAY AT HARBOR HEALTH</small><strong>{activeFeature === 0 ? "18 appointments" : activeFeature === 1 ? "42 records ready" : activeFeature === 2 ? "$6,840 collected" : "98% on schedule"}</strong><div className="cms-mini-bars"><i /><i /><i /><i /><i /></div><span>Harbor Health / Tuesday</span></div></div></div></div></section>

        <section id="contact" className="cms-cta"><div className="max-w-7xl mx-auto px-6 md:px-10"><p className="cms-kicker"><span /> BETTER DAYS START HERE</p><h2>Make room for<br /><em>better care.</em></h2><a className="cms-button cms-button-light" href="mailto:hello@sumantcloud.com">Request a CMS walkthrough <b>↗</b></a></div></section>
      </main>
      <Footer />
    </div>
  );
}
