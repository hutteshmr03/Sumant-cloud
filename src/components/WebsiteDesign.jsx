import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const SERVICES = [
  ["Fast by default", "Lightweight pages that load quickly and stay responsive on every screen."],
  ["Easy to navigate", "Clear structure and thoughtful journeys that help visitors find their next step."],
  ["Built to be found", "Search-friendly foundations that give your content a stronger chance to be discovered."],
  ["Ready to grow", "Flexible systems that can evolve from a simple launch site into a larger digital presence."],
];

const STAGES = [
  ["01", "Discover", "Understand your audience, message, and the action your website needs to create."],
  ["02", "Design", "Shape a visual direction that feels unmistakably yours and works beautifully in practice."],
  ["03", "Deliver", "Build, test, launch, and leave your team with a website they can confidently own."],
];

export default function WebsiteDesign() {
  const { isDark } = useTheme();
  const [activeService, setActiveService] = useState(0);
  const [activeStage, setActiveStage] = useState(null);

  return (
    <div className={`website-page ${isDark ? "website-dark" : "website-light"}`}>
      <Navbar forceSolid />
      <main>
        <section className="website-hero">
          <div className="website-hero-grid" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 website-hero-layout">
            <div className="website-hero-copy">
              <p className="website-kicker"><span /> DESIGN / WEBSITE DESIGN</p>
              <h1>Make a first<br /><em>impression count.</em></h1>
              <p className="website-lede">We create fast, clear, and memorable websites that help good businesses look their best online.</p>
              <div className="website-actions"><a className="website-button website-button-primary" href="#contact">Start your website <b>↗</b></a><a className="website-link" href="#services">See what we build <span>↓</span></a></div>
              <div className="website-proof"><strong>3 sec</strong><span>to make the moment<br />of first impression matter</span><i /></div>
            </div>
            <figure className="website-hero-photo"><img src="https://sumantcloud.com/wp-content/uploads/2025/07/macbook-apple-imac-computer-39284-39284-1024x680.jpg" alt="Modern Apple devices arranged on a clean creative workspace" /><div className="website-photo-overlay" /><div className="website-browser-bar"><span /><span /><span /><b>sumantcloud.com</b></div><figcaption>WEB EXPERIENCE / 01</figcaption></figure>
          </div>
        </section>

        <section className="website-intro"><div className="max-w-7xl mx-auto px-6 md:px-10 website-intro-grid"><p className="website-label">The right beginning</p><div><h2>Your website is often<br /><span>the first hello.</span></h2><p>We balance visual appeal with the things that make a website genuinely useful: speed, clear content, simple navigation, and a smooth experience on every device.</p></div><div className="website-note"><b>Small screen. Big impression.</b><span>Every page is designed to feel considered on desktop, tablet, and mobile.</span></div></div></section>

        <section id="services" className="website-services"><div className="max-w-7xl mx-auto px-6 md:px-10"><div className="website-section-head"><div><p className="website-label">What your website gets</p><h2>Beautiful on the<br /><em>outside. Useful inside.</em></h2></div><p className="website-counter">FOUNDATIONS / 04</p></div><div className="website-service-layout"><div>{SERVICES.map(([title, body], index) => <button type="button" className={`website-service ${activeService === index ? "is-active" : ""}`} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{body}</p></div><i>↗</i></button>)}</div><div className="website-service-art"><div className="website-art-window"><div className="website-art-nav"><b>SC</b><span>your story / online</span><i /></div><div className="website-art-hero"><small>DISCOVER SOMETHING GOOD</small><strong>{activeService === 0 ? "Move quickly." : activeService === 1 ? "Find your way." : activeService === 2 ? "Be discovered." : "Keep growing."}</strong><span /></div><div className="website-art-cards"><i /><i /><i /></div></div></div></div></div></section>

        <section className="website-process"><div className="max-w-7xl mx-auto px-6 md:px-10 website-process-layout"><div className="website-process-heading"><p className="website-label">How we work</p><h2>From idea<br /><span>to online.</span></h2><p>Clear steps, shared decisions, and no mystery between the brief and the browser.</p></div><div className="website-process-list">{STAGES.map(([number, title, body], index) => <button type="button" className={`website-stage ${activeStage === index ? "is-active" : ""}`} onMouseEnter={() => setActiveStage(index)} onMouseLeave={() => setActiveStage(null)} onFocus={() => setActiveStage(index)} onBlur={() => setActiveStage(null)} key={number}><span>{number}</span><strong>{title}</strong><p>{body}</p><i /></button>)}</div></div></section>

        <section id="contact" className="website-cta"><div className="max-w-7xl mx-auto px-6 md:px-10"><p className="website-kicker"><span /> READY TO BE SEEN?</p><h2>Give your best work<br /><em>a better home.</em></h2><a className="website-button website-button-light" href="mailto:hello@sumantcloud.com">Talk to our web team <b>↗</b></a></div></section>
      </main>
      <Footer />
    </div>
  );
}
