import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const FEATURES = [
  { number: "01", icon: "⌁", title: "Work Order Management", body: "Automates scheduling, tracking, and completion of maintenance tasks — from request raised to job closed, fully accountable." },
  { number: "02", icon: "◈", title: "Asset & Equipment Tracking", body: "Monitors equipment performance, lifecycle, and maintenance history so nothing falls through the cracks." },
  { number: "03", icon: "↻", title: "Preventive & Predictive Maintenance", body: "Reduces downtime by scheduling regular maintenance before failure happens — not after." },
  { number: "04", icon: "↗", title: "Real-Time Reporting & Analytics", body: "Provides deep insights into asset performance, maintenance costs, downtime trends, and schedule compliance." },
  { number: "05", icon: "◌", title: "Inventory & Spare Parts", body: "Ensures spare parts availability and stock optimisation with vendor mapping and asset-spare linking." },
  { number: "06", icon: "⊕", title: "Mobile Access & Cloud", body: "Enables remote access for on-site maintenance teams — work from anywhere your assets are." },
];

const STANDARD_PLAN = [
  "Factory Management (Add/Manage)",
  "User Management (Add/Manage)",
  "Asset Management (Add/Manage)",
  "UOM Management (Add/Manage)",
  "Checklist Management (Add/Manage)",
  "Spare Part Management (Add/Manage)",
  "Role Management (Add/Manage)",
  "Spares Vendor Mapping",
  "Add Repair Job",
  "Downtime Trend Report",
  "Meantime Failure Report",
  "Meantime Repair Report",
];

const PROFESSIONAL_PLAN = [
  "Everything in Standard, plus:",
  "Checklist Group Management",
  "Maintenance Management",
  "Breakdown Reason Management",
  "Spares Asset Mapping",
  "Checklist Group Mapping",
  "Menu Role Mapping",
  "Transfer Asset & Approve Transfers",
  "Add Schedule Job by Date & Running Hours",
  "Job Management",
  "Schedule Compliance Report",
  "Planned VS Actual Time Report",
  "Asset Expenditure Trend",
  "Location History Report",
];

const STEPS = [
  ["01", "Set Up Assets", "Add your factory, assets, spare parts, vendors, and users into a single centralised register in minutes."],
  ["02", "Schedule & Automate", "Define maintenance schedules, checklists, and work order rules. The system handles the rest automatically."],
  ["03", "Track & Report", "Monitor every job in real time. Generate compliance, downtime, and cost reports on demand."],
];

function Arrow() {
  return <span aria-hidden="true" className="sd-arrow">{"↗"}</span>;
}

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="cmms-check-icon">
      <circle cx="7" cy="7" r="7" fill="rgba(116,224,194,0.15)" />
      <path d="M4 7l2 2 4-4" stroke="#74e0c2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CMMS() {
  const { isDark } = useTheme();
  const [activeStep, setActiveStep] = useState(null);
  const [featuresRef, featuresInView] = useInView(0.05);
  const [pricingRef, pricingInView] = useInView(0.08);
  const [stepsRef, stepsInView] = useInView();

  return (
    <div className={`sd-page cmms-page ${isDark ? "sd-dark" : "sd-light"}`}>
      <Navbar forceSolid />
      <main>

        {/* ── HERO ── */}
        <section className="sd-hero cmms-hero">
          <div className="sd-grid" aria-hidden="true" />
          <div className="sd-orbit sd-orbit-one" aria-hidden="true" />
          <div className="sd-orbit sd-orbit-two" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <div className="sd-hero-inner">
              <div className="sd-hero-copy">
                <p className="sd-kicker"><span /> PRODUCT / CMMS</p>
                <h1>Smarter<br /><em>Maintenance.</em><br />Zero Downtime.</h1>
                <p className="sd-lede">
                  A digital solution that helps businesses plan, track, and optimize maintenance operations — centralising asset management, work orders, and inventory for maximum uptime and reduced costs.
                </p>
                <div className="sd-actions">
                  <a href="#pricing" className="sd-button sd-button-primary">View Pricing <Arrow /></a>
                  <a href="#features" className="sd-text-link">See features <span>{"↓"}</span></a>
                </div>
                <div className="cmms-trust-row">
                  <span className="cmms-trust-pill"><i className="cmms-dot" />Manufacturing</span>
                  <span className="cmms-trust-pill"><i className="cmms-dot" />Healthcare</span>
                  <span className="cmms-trust-pill"><i className="cmms-dot" />Fleet Management</span>
                </div>
              </div>
              <figure className="sd-hero-photo">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
                  alt="Software analytics dashboard showing maintenance data and KPIs on a laptop screen"
                />
                <span className="sd-photo-corner sd-photo-corner-one" aria-hidden="true" />
                <span className="sd-photo-corner sd-photo-corner-two" aria-hidden="true" />
                <div className="cmms-photo-badge">
                  <i className="sd-pulse" />
                  <span>LIVE ASSET MONITORING</span>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* ── WHAT IS CMMS ── */}
        <section className="sd-intro">
          <div className="max-w-7xl mx-auto px-6 md:px-10 sd-intro-grid">
            <p className="sd-section-label">Overview</p>
            <div>
              <h2>Streamline Maintenance<br /><span>&amp; Asset Management</span></h2>
              <p className="sd-muted">
                Our CMMS is a digital solution that helps businesses plan, track, and optimise maintenance operations. It centralises asset management, work orders, and inventory — ensuring maximum uptime, reduced costs, and improved efficiency in facility and equipment maintenance. Designed for scalability, flexibility, and ease of use across manufacturing plants, healthcare facilities, and fleets.
              </p>
            </div>
            <div className="sd-stat-grid">
              <div><strong>↑</strong><span>Maximum<br />Uptime</span></div>
              <div><strong>↓</strong><span>Reduced<br />Costs</span></div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" className="cmms-features">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="sd-section-head">
              <p className="sd-section-label">Key Features</p>
              <p className="sd-index">FEATURES / 06</p>
            </div>
            <div className={`cmms-features-grid${featuresInView ? " cmms-in" : ""}`} ref={featuresRef}>
              {FEATURES.map((f, i) => (
                <article className="cmms-feature" key={f.number} style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="cmms-feature-top">
                    <span className="cmms-feature-num">{f.number}</span>
                    <b className="cmms-feature-icon">{f.icon}</b>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                  <a href="#contact" aria-label={`Learn more about ${f.title}`}><Arrow /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="sd-process">
          <div className="max-w-7xl mx-auto px-6 md:px-10 sd-process-grid">
            <div>
              <p className="sd-section-label">How it works</p>
              <h2>Up and running<br /><span>in days, not months.</span></h2>
              <p className="sd-muted">No long implementation cycles. A structured, guided setup gets your team in control from day one.</p>
            </div>
            <div className="sd-steps" ref={stepsRef} aria-label="Setup steps">
              {STEPS.map(([number, title, body], index) => (
                <button
                  type="button"
                  className={`sd-step${activeStep === index ? " is-active" : ""}`}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  onFocus={() => setActiveStep(index)}
                  onBlur={() => setActiveStep(null)}
                  key={number}
                >
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                  <i />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE ── */}
        <section className="cmms-why">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="sd-section-head">
              <p className="sd-section-label">Why choose us</p>
            </div>
            <div className="cmms-why-inner">
              <div className="cmms-why-text">
                <h2>Built for your<br /><span>operation, not ours.</span></h2>
                <p className="sd-muted">
                  At Sumant Cloud, our CMMS solution is designed for scalability, flexibility, and ease of use. Whether you manage a manufacturing plant, healthcare facility, or a fleet — our system helps you optimise maintenance, reduce costs, and enhance operational efficiency.
                </p>
                <div className="cmms-why-tags">
                  {["Manufacturing Plants", "Healthcare Facilities", "Fleet Management", "Facility Operations"].map(t => (
                    <span key={t} className="cmms-integration-pill">{t}</span>
                  ))}
                </div>
              </div>
              <div className="cmms-why-stats">
                <div className="cmms-why-stat"><span className="cmms-why-num">∞</span><span className="cmms-why-label">Assets tracked<br />without limits</span></div>
                <div className="cmms-why-stat"><span className="cmms-why-num">100%</span><span className="cmms-why-label">Audit-ready<br />operations</span></div>
                <div className="cmms-why-stat"><span className="cmms-why-num">24/7</span><span className="cmms-why-label">Real-time asset<br />health visibility</span></div>
                <div className="cmms-why-stat"><span className="cmms-why-num">5+</span><span className="cmms-why-label">Industry verticals<br />supported</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className={`cmms-pricing${pricingInView ? " cmms-in" : ""}`} ref={pricingRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="sd-section-head">
              <p className="sd-section-label">Pricing</p>
              <p className="sd-index">PLANS / 02</p>
            </div>
            <div className="cmms-pricing-grid">

              {/* Standard */}
              <div className="cmms-plan" style={{ animationDelay: "0s" }}>
                <div className="cmms-plan-header">
                  <p className="cmms-plan-badge">STANDARD PLAN</p>
                  <div className="cmms-plan-price">
                    <span className="cmms-plan-amount">Rs. 9,999</span>
                    <span className="cmms-plan-period">/ 5 users</span>
                  </div>
                  <p className="cmms-plan-extra">Additional user — Rs. 999/-</p>
                </div>
                <ul className="cmms-plan-list">
                  {STANDARD_PLAN.map(item => (
                    <li key={item}><CheckIcon />{item}</li>
                  ))}
                </ul>
                <a href="mailto:contact@sumantcloud.com" className="sd-button sd-button-primary cmms-plan-cta">Get Started <Arrow /></a>
              </div>

              {/* Professional */}
              <div className="cmms-plan cmms-plan-pro" style={{ animationDelay: "0.12s" }}>
                <div className="cmms-plan-popular">MOST POPULAR</div>
                <div className="cmms-plan-header">
                  <p className="cmms-plan-badge">PROFESSIONAL PLAN</p>
                  <div className="cmms-plan-price">
                    <span className="cmms-plan-amount">Rs. 14,500</span>
                    <span className="cmms-plan-period">/ 5 users</span>
                  </div>
                  <p className="cmms-plan-extra">Additional user — Rs. 999/-</p>
                </div>
                <ul className="cmms-plan-list">
                  {PROFESSIONAL_PLAN.map(item => (
                    <li key={item}><CheckIcon />{item}</li>
                  ))}
                </ul>
                <a href="mailto:contact@sumantcloud.com" className="sd-button sd-button-primary cmms-plan-cta">Get Started <Arrow /></a>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="sd-cta">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="sd-kicker"><span /> READY TO GET STARTED</p>
            <h2>Zero downtime starts<br /><em>with one conversation.</em></h2>
            <p className="cmms-cta-sub">Contact our team to see how Sumant Cloud CMMS fits your operation.</p>
            <div className="cmms-cta-actions">
              <a href="mailto:contact@sumantcloud.com" className="sd-button sd-button-light">Contact Us <Arrow /></a>
              <a href="tel:+917028510950" className="cmms-cta-link">+91 70285 10950 {"↗"}</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
