import { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const CAPABILITIES = [
  { number: "01", title: "Digital platforms", body: "Composable products that bring your customers, teams, and data into one intelligent operating layer.", icon: "↗" },
  { number: "02", title: "Cloud-native engineering", body: "Resilient architectures designed for scale, speed, and the freedom to evolve with your business.", icon: "⌁" },
  { number: "03", title: "Data & AI systems", body: "Turn fragmented information into decisions with practical intelligence embedded into daily workflows.", icon: "◌" },
  { number: "04", title: "Modernisation", body: "Unlock legacy investments through thoughtful migration, APIs, and incremental transformation.", icon: "↻" },
];

const STEPS = [
  ["01", "Align", "A sharp point of view on the problem, the opportunity, and the outcomes worth pursuing."],
  ["02", "Architect", "A durable technical foundation that keeps product ambition and operational reality in step."],
  ["03", "Accelerate", "Small, senior teams shipping measurable value in weeks, with learning built into every release."],
];

const SERVICE_PROFILES = {
  "/software-development": {
    label: "SOFTWARE DEVELOPMENT",
    eyebrow: "Build what",
    accent: "moves business.",
    lede: "We engineer digital products and platforms for organisations ready to turn complex challenges into a competitive advantage.",
    brief: "Technology should make the hard things feel simple.",
    briefBody: "From first principle to final pixel, we bring product strategy, design, and engineering into the same room. The result is software that does more than launch. It earns its place in how your business works.",
    status: "SYSTEMS THAT SCALE",
    photo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    photoAlt: "Code editor showing colourful programming syntax on a dark screen",
    capabilities: CAPABILITIES,
  },
  "/mobile-app-development": {
    label: "MOBILE APP DEVELOPMENT",
    eyebrow: "Put your product",
    accent: "in every hand.",
    lede: "We design and build fast, intuitive mobile experiences that people return to, from first tap to lasting habit.",
    brief: "A great app disappears into the way people live.",
    briefBody: "We connect product thinking, thoughtful interaction design, and dependable mobile engineering to create experiences that feel effortless on every screen.",
    status: "EXPERIENCES IN MOTION",
    photo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    photoAlt: "Person using a mobile app on a smartphone",
    capabilities: [
      { number: "01", title: "iOS & Android", body: "Native-quality experiences built for the platforms your customers already use every day.", icon: "⌁" },
      { number: "02", title: "Product design", body: "Clear journeys and tactile interactions that make complex tasks feel natural on a small screen.", icon: "◌" },
      { number: "03", title: "Connected apps", body: "Secure mobile products connected to the systems, data, and workflows behind your business.", icon: "↗" },
      { number: "04", title: "App operations", body: "Release pipelines, analytics, and ongoing improvements that keep your app useful after launch.", icon: "↻" },
    ],
  },
  "/ecommerce-solutions": {
    label: "ECOMMERCE SOLUTIONS",
    eyebrow: "Make every",
    accent: "click count.",
    lede: "We create commerce systems that turn browsing into buying and connect every order to the operation behind it.",
    brief: "Commerce works best when the experience and the operation agree.",
    briefBody: "From storefront to fulfilment, we bring customer experience, inventory, payments, and insight together so your team can grow with confidence.",
    status: "COMMERCE IN SYNC",
    photo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    photoAlt: "Customer shopping online with a card beside a laptop",
    capabilities: [
      { number: "01", title: "Digital storefronts", body: "High-converting shopping journeys shaped around your brand, catalogue, and customers.", icon: "↗" },
      { number: "02", title: "Checkout systems", body: "Fast, secure payment experiences that remove friction from the moment of intent.", icon: "◇" },
      { number: "03", title: "Inventory intelligence", body: "A clearer view of stock, fulfilment, and demand across every channel you sell through.", icon: "◌" },
      { number: "04", title: "Growth platforms", body: "Flexible commerce foundations ready for new markets, products, and opportunities.", icon: "↻" },
    ],
  },
  "/automation": {
    label: "AUTOMATION",
    eyebrow: "Give your team",
    accent: "time back.",
    lede: "We find the manual work hiding in your operation and replace repetition with intelligent systems that keep moving.",
    brief: "The best automation feels like more room to think.",
    briefBody: "We map the work behind the work, then build dependable automations that connect your tools, reduce errors, and help people focus on decisions that matter.",
    status: "WORKFLOWS, UNBLOCKED",
    photo: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    photoAlt: "Team collaborating around a table in a modern office",
    capabilities: [
      { number: "01", title: "Workflow automation", body: "Turn repetitive hand-offs into reliable flows that run quietly in the background.", icon: "↻" },
      { number: "02", title: "System integration", body: "Connect the tools your team depends on so information moves without manual chasing.", icon: "⌁" },
      { number: "03", title: "Intelligent operations", body: "Use practical AI and rules to surface signals, route work, and support better decisions.", icon: "◌" },
      { number: "04", title: "Control & insight", body: "Track every workflow with clear ownership, auditability, and measurable business impact.", icon: "↗" },
    ],
  },
};

/* ── Hooks ── */
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

function useParallaxTilt(strength = 10) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    setTilt({ x: ((e.clientY - cy) / (r.height / 2)) * strength, y: -((e.clientX - cx) / (r.width / 2)) * strength });
  }, [strength]);
  const onLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);
  return [ref, tilt, onMove, onLeave];
}

function Arrow() {
  return <span aria-hidden="true" className="sd-arrow">↗</span>;
}

/* ── Animated capability card ── */
function CapabilityCard({ item, index, sectionVisible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className="sd-capability anim-card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`,
      }}
    >
      <div className="sd-capability-top"><span>{item.number}</span><b style={{ color: hovered ? "#74e0c2" : undefined, transition: "color 0.2s" }}>{item.icon}</b></div>
      <h3 style={{ color: hovered ? "#35bdf2" : undefined, transition: "color 0.25s" }}>{item.title}</h3>
      <p>{item.body}</p>
      <a href="#contact" aria-label={`Learn more about ${item.title}`}><Arrow /></a>
    </article>
  );
}

export default function SoftwareDevelopment() {
  const { isDark } = useTheme();
  const [activeStep, setActiveStep] = useState(null);
  const profile = SERVICE_PROFILES[window.location.pathname.replace(/\/$/, "")] || SERVICE_PROFILES["/software-development"];

  /* Scroll reveals */
  const [heroRef, heroVisible] = useInView(0.05);
  const [introRef, introVisible] = useInView(0.1);
  const [capsRef, capsVisible] = useInView(0.05);
  const [processRef, processVisible] = useInView(0.1);
  const [ctaRef, ctaVisible] = useInView(0.2);

  /* Photo parallax tilt */
  const [photoRef, tilt, onTiltMove, onTiltLeave] = useParallaxTilt(8);

  /* Word-stagger hero copy */
  const [wordsReady, setWordsReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setWordsReady(true), 100); return () => clearTimeout(t); }, []);

  const eyebrowWords = profile.eyebrow.split(" ");
  const accentWords = profile.accent.split(" ");

  return (
    <div className={`sd-page ${isDark ? "sd-dark" : "sd-light"}`}>
      <Navbar forceSolid />
      <main>

        {/* ── HERO ── */}
        <section className="sd-hero" ref={heroRef}>
          <div className="sd-grid" aria-hidden="true" />
          {/* Animated orbit rings */}
          <div className="sd-orbit sd-orbit-one anim-float" style={{ animationDuration: "8s" }} aria-hidden="true" />
          <div className="sd-orbit sd-orbit-two anim-float" style={{ animationDuration: "11s", animationDelay: "-3s" }} aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <div className="sd-hero-inner">
              <div className="sd-hero-copy">
                {/* Kicker with pulse ring */}
                <p className="sd-kicker" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s ease 0.1s" }}>
                  <span className="anim-ring-pulse" />  {profile.label} / 01
                </p>

                {/* Staggered word headline */}
                <h1 style={{ opacity: wordsReady ? 1 : 0 }}>
                  <span className="block">
                    {eyebrowWords.map((w, i) => (
                      <span key={i} className="anim-word" style={{ animationDelay: `${0.2 + i * 0.08}s` }}>{w}{"\u00a0"}</span>
                    ))}
                  </span>
                  <em>
                    {accentWords.map((w, i) => (
                      <span key={i} className="anim-word" style={{ animationDelay: `${0.35 + i * 0.08}s` }}>{w}{i < accentWords.length - 1 ? "\u00a0" : ""}</span>
                    ))}
                  </em>
                </h1>

                <p className="sd-lede" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.55s" }}>
                  {profile.lede}
                </p>
                <div className="sd-actions" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.7s" }}>
                  <a href="#contact" className="sd-button sd-button-primary anim-shimmer">Start a conversation <Arrow /></a>
                  <a href="#capabilities" className="sd-text-link">Explore capabilities <span>↓</span></a>
                </div>
              </div>

              {/* Photo with parallax tilt */}
              <figure
                ref={photoRef}
                className="sd-hero-photo"
                onMouseMove={onTiltMove}
                onMouseLeave={onTiltLeave}
                style={{
                  transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotate(1.5deg)`,
                  transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s ease" : "transform 0.1s ease",
                }}
              >
                <img src={profile.photo} alt={profile.photoAlt} />
                <span className="sd-photo-corner sd-photo-corner-one" aria-hidden="true" />
                <span className="sd-photo-corner sd-photo-corner-two" aria-hidden="true" />
              </figure>
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="sd-intro" ref={introRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 sd-intro-grid">
            <p className={`sd-section-label anim-reveal ${introVisible ? "is-visible" : ""}`}>{/* The brief */}The brief</p>
            <div className={`anim-reveal anim-delay-1 ${introVisible ? "is-visible" : ""}`}>
              <h2>{profile.brief}</h2>
              <p className="sd-muted">{profile.briefBody}</p>
            </div>
            <div className={`sd-stat-grid anim-reveal-right anim-delay-2 ${introVisible ? "is-visible" : ""}`}>
              <div>
                <strong className="anim-gradient-text">3×</strong>
                <span>faster decisions<br />with one team</span>
              </div>
              <div>
                <strong className="anim-gradient-text">∞</strong>
                <span>room to scale<br />without rewrites</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section id="capabilities" className="sd-capabilities" ref={capsRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className={`sd-section-head anim-reveal ${capsVisible ? "is-visible" : ""}`}>
              <p className="sd-section-label">What we do</p>
              <p className="sd-index">CAPABILITIES / 04</p>
            </div>
            <div className="sd-capability-grid">
              {profile.capabilities.map((item, i) => (
                <CapabilityCard key={item.number} item={item} index={i} sectionVisible={capsVisible} />
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="sd-process" ref={processRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 sd-process-grid">
            <div className={`anim-reveal ${processVisible ? "is-visible" : ""}`}>
              <p className="sd-section-label">How we work</p>
              <h2>Clarity is<br /><span>an advantage.</span></h2>
              <p className="sd-muted">Senior thinking from the first workshop to the last deployment. No black boxes. No hand-offs into the unknown.</p>
              {/* Animated bar */}
              <div className="mt-8">
                <div style={{ height: 2, background: "rgba(116,224,194,0.15)", position: "relative", overflow: "hidden" }}>
                  <div
                    className="anim-bar"
                    style={{ "--bar-width": "80%", background: "#74e0c2" }}
                    ref={useRef(null)}
                  />
                </div>
              </div>
            </div>
            <div className="sd-steps" aria-label="Our process">
              {STEPS.map(([number, title, body], index) => (
                <button
                  type="button"
                  className={`sd-step ${activeStep === index ? "is-active" : ""} anim-reveal anim-delay-${index + 1}`}
                  style={processVisible ? { opacity: 1, transform: "translateX(0)" } : { opacity: 0, transform: "translateX(30px)" }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  onFocus={() => setActiveStep(index)}
                  onBlur={() => setActiveStep(null)}
                  key={number}
                >
                  <span>{number}</span><strong>{title}</strong><p>{body}</p><i />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="sd-cta" ref={ctaRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className={`sd-kicker anim-reveal ${ctaVisible ? "is-visible" : ""}`}><span className="anim-ring-pulse" /> READY WHEN YOU ARE</p>
            <h2 className={`anim-reveal anim-delay-1 ${ctaVisible ? "is-visible" : ""}`}>Have a complex idea?<br /><em>Let's make it real.</em></h2>
            <a href="mailto:hello@sumantcloud.com" className={`sd-button sd-button-light anim-shimmer anim-reveal anim-delay-2 ${ctaVisible ? "is-visible" : ""}`}>Talk to our team <Arrow /></a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}