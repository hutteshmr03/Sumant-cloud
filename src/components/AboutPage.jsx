import Navbar from "./Navbar";
import Footer from "./Footer";
import useScrollReveal from "../hooks/useScrollReveal";

const PROCESS = [
  ["01", "Discover", "We begin by understanding your business challenges and project goals. Conduct in-depth research to identify pain points and automation opportunities. Define project scope, objectives, and expected outcomes."],
  ["02", "Define", "Structure a detailed project roadmap, timelines, and milestones. Identify the right technology stack and software architecture. Establish clear expectations and success metrics."],
  ["03", "Design", "Develop user-friendly UI/UX designs that align with business needs. Wireframe and prototype the solution before development. Ensure responsive, intuitive, and visually appealing interfaces."],
  ["04", "Develop", "Build scalable and secure software using industry-best coding practices. Implement automation tools to enhance business efficiency. Conduct unit testing to ensure a bug-free development process."],
  ["05", "Deploy", "Perform rigorous QA testing and security checks before launch. Deploy the software in a live environment with seamless integration. Ensure minimal downtime and maximum efficiency."],
  ["06", "Deliver & Support", "Provide comprehensive training and documentation for easy adoption. Offer ongoing maintenance, updates, and customer support. Optimize software performance for long-term business success."],
];

const REASONS = [
  "Expertise in Business Automation - We transform manual workflows into digital solutions.",
  "Scalable & Secure Technology - Future-proof your business with reliable software.",
  "Industry-Focused Approach - Customized solutions for various business domains.",
  "End-to-End Development - From ideation to deployment and ongoing support.",
];

const HIGHLIGHTS = [
  "Best Quality Designs",
  "24x7 Live Support",
  "Result Oriented Projects",
  "Award Winning Support Team",
  "Best ROI Techniques",
  "Experienced Professionals",
];

const STATS = [
  ["1", "Satisfied Clients"],
  ["100", "Projects Completed"],
  ["1", "Accolades Earned"],
  ["1K+", "Lines of Code"],
];

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? "animate-reveal-up" : "opacity-0 translate-y-6"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="about-page min-h-screen bg-foam font-body text-text-ink">
      <Navbar forceSolid />
      <main>
        <section className="relative overflow-hidden bg-ink px-6 pb-8 pt-28 md:px-10 md:pb-10 md:pt-48">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(74,183,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(74,183,255,0.12)_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="relative mx-auto max-w-7xl">
            <p className="animate-hero-text text-xs font-semibold uppercase tracking-wider text-brand">About Us</p>
            <div className="mt-6 grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
              <h1 className="animate-hero-text font-display text-3xl sm:text-5xl font-semibold leading-[0.98] text-white [animation-delay:100ms] md:text-7xl">Technology that moves your business forward.</h1>
              <p className="animate-hero-text max-w-md text-base leading-relaxed text-text-mist [animation-delay:200ms] md:text-lg">Sumant Cloud is a leading software development and automation company dedicated to delivering cutting-edge digital solutions that enhance efficiency, streamline operations, and drive business growth.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-ink-line bg-foam-panel px-6 py-20 md:px-10 md:py-28">
          <Reveal className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Who Are We</p>
              <h2 className="mt-5 max-w-sm font-display text-3xl font-semibold leading-tight text-text-ink md:text-4xl">Professionals who turn gaps into opportunities.</h2>
            </div>
            <div className="max-w-3xl space-y-5 text-base leading-relaxed text-text-mist-2">
              <p>We are team of professionals with diverse educational and technical expertise. In today&apos;s fast-evolving world, business need expert who can analyze processes and bridge gaps.</p>
              <p>Our specialists thoroughly examine operations, identify discrepancies, and implement industry best practices to drive success.</p>
            </div>
          </Reveal>
        </section>

        <section className="bg-foam px-6 py-20 md:px-10 md:py-28">
          <Reveal className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Our Mission</p>
              <img className="about-mission-image" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85" alt="Technology team collaborating around a table" />
            </div>
            <div>
              <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-text-ink md:text-5xl">Empower businesses with innovative, efficient, and scalable technology solutions.</h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-text-mist-2">At Sumant Cloud, our mission is to empower businesses with innovative, efficient, and scalable technology solutions. We strive to bridge the gap between ideas and execution, leveraging cutting-edge software, automation, and AI-driven insights to drive digital transformation.</p>
            </div>
          </Reveal>
        </section>

        <section className="border-y border-ink-line bg-foam-panel px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Our 6-D Process</p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-text-ink md:text-4xl">From discovery to lasting support.</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-text-mist-2">A structured path that keeps every project clear, useful, and accountable.</p>
            </Reveal>
            <div className="about-process-grid mt-12 grid sm:grid-cols-2 lg:grid-cols-3">
              {PROCESS.map(([number, title, body], index) => (
                <Reveal key={number} delay={index * 70} className="about-process-reveal">
                  <article className="about-process-card min-h-64 bg-foam-panel p-7 transition-colors hover:bg-brand-light/40 md:p-8">
                    <span className="font-mono text-xs text-brand">{number}</span>
                    <h3 className="mt-10 font-display text-xl font-semibold text-text-ink">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-mist-2">{body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foam px-6 py-20 md:px-10 md:py-28">
          <Reveal className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Why Choose Us?</p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-semibold leading-tight text-text-ink md:text-4xl">Practical expertise. Better outcomes.</h2>
              <ul className="mt-10 divide-y divide-ink-line border-y border-ink-line">
                {REASONS.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 py-4 text-sm leading-relaxed text-text-mist-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{reason}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 border-l border-t border-ink-line">
              {STATS.map(([number, label]) => (
                <div key={label} className="flex min-h-40 flex-col justify-between border-b border-r border-ink-line p-6 md:p-8"><strong className="font-display text-4xl font-semibold text-brand md:text-5xl">{number}</strong><span className="text-xs uppercase tracking-wider text-text-mist-2">{label}</span></div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="border-t border-ink-line bg-foam-panel px-6 py-16 md:px-10 md:py-20">
          <Reveal className="mx-auto max-w-7xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HIGHLIGHTS.map((highlight, index) => (
                <div key={highlight} className="flex items-center gap-3 border border-ink-line px-5 py-4 text-sm text-text-mist-2"><span className="font-mono text-xs text-brand">0{index + 1}</span>{highlight}</div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="bg-ink px-6 py-20 text-center md:px-10 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Would you like to start a project with us?</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-white md:text-5xl">Our expertise lies in custom software development, automation, and mobile app development.</h2>
          <a href="/contact/" className="mt-9 inline-flex rounded-full bg-brand px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark">Contact Us</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
