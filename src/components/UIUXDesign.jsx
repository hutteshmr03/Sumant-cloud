import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const PRINCIPLES = [
  ["Make it clear", "A good interface gives people confidence before they click. We remove noise and make the next move obvious."],
  ["Make it useful", "Every detail earns its place by helping someone finish a real task faster or understand something better."],
  ["Make it memorable", "Strong visual systems turn useful products into experiences people recognise, trust, and want to return to."],
];

const PROCESS = [
  ["01", "Listen", "We learn the people, pressure, and purpose behind the brief."],
  ["02", "Shape", "We turn rough ideas into a clear product story and visual direction."],
  ["03", "Refine", "We prototype, test, and polish until the experience feels inevitable."],
];

export default function UIUXDesign() {
  const { isDark } = useTheme();
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [activeProcess, setActiveProcess] = useState(null);

  return (
    <div className={`design-page ${isDark ? "design-dark" : "design-light"}`}>
      <Navbar forceSolid />
      <main>
        <section className="design-hero">
          <div className="design-hero-lines" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 design-hero-grid">
            <div className="design-hero-copy">
              <p className="design-kicker"><span /> DESIGN / UI & UX</p>
              <h1>Make complex<br /><em>feel natural.</em></h1>
              <p className="design-lede">We design digital experiences that help people understand, decide, and get things done with less effort.</p>
              <div className="design-actions"><a className="design-button design-button-primary" href="#contact">Shape your product <b>↗</b></a><a className="design-link" href="#principles">See our approach <span>↓</span></a></div>
              <div className="design-proof"><strong>4.8/5</strong><span>average usability<br />score on demo studies</span><i /></div>
            </div>
            <div className="design-art" aria-label="Illustrative interface design composition">
              <div className="design-art-backdrop" />
              <div className="design-window design-window-back"><small>PROJECT OVERVIEW</small><div className="design-skeleton"><i /><i /><i /></div><div className="design-skeleton short"><i /><i /></div></div>
              <div className="design-window design-window-front"><div className="design-window-nav"><b>SC</b><span>Workspace</span><i /></div><div className="design-avatar">SC</div><small>WELCOME BACK</small><h2>Design with<br /><em>intention.</em></h2><div className="design-pills"><span>Strategy</span><span>Prototype</span></div><div className="design-progress"><i /></div></div>
              <div className="design-token-rail"><small>COLOR TOKENS</small><span /><span /><span /><span /></div>
              <div className="design-measure design-measure-top"><i /> 24 px</div>
              <div className="design-measure design-measure-side"><i /> 08</div>
              <div className="design-cursor design-cursor-one">↗<span>prototype</span></div>
              <div className="design-cursor design-cursor-two">↗<span>clarity</span></div>
              <span className="design-orbit design-orbit-one" /><span className="design-orbit design-orbit-two" />
            </div>
          </div>
        </section>

        <section id="principles" className="design-principles"><div className="max-w-7xl mx-auto px-6 md:px-10"><div className="design-section-head"><div><p className="design-label">The point of view</p><h2>Good design<br /><span>does the work.</span></h2></div><p className="design-counter">PRINCIPLES / 03</p></div><div className="design-principle-layout"><div>{PRINCIPLES.map(([title, body], index) => <button type="button" className={`design-principle ${activePrinciple === index ? "is-active" : ""}`} onMouseEnter={() => setActivePrinciple(index)} onFocus={() => setActivePrinciple(index)} key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{body}</p></div><i>↗</i></button>)}</div><div className="design-principle-visual"><span className="design-visual-word">useful</span><span className="design-visual-word second">beautiful</span><span className="design-visual-dot" /></div></div></div></section>

        <section className="design-intro"><div className="max-w-7xl mx-auto px-6 md:px-10 design-intro-grid"><p className="design-label">The outcome</p><div><h2>Interfaces with<br /><em>something to say.</em></h2><p>We bring research, strategy, interaction, and visual design together from the beginning. That means the final experience is not just polished. It is purposeful, inclusive, and ready for real people.</p></div><div className="design-note"><b>Designed to move.</b><span>From first impression to everyday habit, every screen has a job.</span></div></div></section>

        <section className="design-process"><div className="max-w-7xl mx-auto px-6 md:px-10"><div className="design-process-layout"><div className="design-process-heading"><p className="design-label">How we work</p><h2>From blank page<br /><span>to clear path.</span></h2><p className="design-process-note">A focused path from the first question to the final interaction.</p><p className="design-counter">PROCESS / 03</p></div><div className="design-process-list">{PROCESS.map(([number, title, body], index) => <button type="button" className={`design-process-row ${activeProcess === index ? "is-active" : ""}`} onMouseEnter={() => setActiveProcess(index)} onMouseLeave={() => setActiveProcess(null)} onFocus={() => setActiveProcess(index)} onBlur={() => setActiveProcess(null)} key={number}><span>{number}</span><strong>{title}</strong><p>{body}</p><i /></button>)}</div></div></div></section>

        <section id="contact" className="design-cta"><div className="max-w-7xl mx-auto px-6 md:px-10"><p className="design-kicker"><span /> READY TO MAKE IT CLEAR?</p><h2>Good ideas deserve<br /><em>a great experience.</em></h2><a className="design-button design-button-light" href="mailto:hello@sumantcloud.com">Talk to our design team <b>↗</b></a></div></section>
      </main>
      <Footer />
    </div>
  );
}
