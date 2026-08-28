import useScrollReveal from "../hooks/useScrollReveal";
import Logo from "./Logo";

export default function About() {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section id="about" className="bg-foam-panel py-16 md:py-20 lg:py-28 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-20 items-start">
        <div ref={leftRef} className={leftVisible ? "animate-reveal-up" : "opacity-0 translate-y-6"}>
          <div className="mb-8">
            <Logo variant="on-light" className="h-20 w-auto opacity-90" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-4">About</p>
          <p className="text-base md:text-lg leading-relaxed text-text-ink">
            Sumant Cloud is a leading <strong>software development and automation</strong> company, dedicated to delivering <strong>cutting-edge digital solutions</strong> that enhance efficiency, streamline operations, and drive business growth. Our expertise lies in <strong>custom software development, automation, and mobile app development</strong>, empowering businesses with <strong>innovative, scalable, and future-ready</strong> technology.
          </p>
        </div>
        <div
          ref={rightRef}
          className={`text-text-mist-2 leading-relaxed ${
            rightVisible ? "animate-reveal-up [animation-delay:120ms]" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-brand">
            Why Choose Us?
          </h2>
          <ul className="mt-6 list-disc space-y-1.5 pl-5 text-sm md:text-base">
            <li><strong className="text-text-ink">Expertise in Business Automation</strong> - We transform manual workflows into digital solutions.</li>
            <li><strong className="text-text-ink">Scalable &amp; Secure Technology</strong> - Future-proof your business with reliable software.</li>
            <li><strong className="text-text-ink">Industry-Focused Approach</strong> - Customized solutions for various business domains.</li>
            <li><strong className="text-text-ink">End-to-End Development</strong> - From ideation to deployment and ongoing support.</li>
          </ul>
          <div className="mt-8 bg-foam px-6 py-6 md:px-8">
            <ul className="grid gap-3 text-sm md:grid-cols-2">
              <li className="flex items-center gap-3"><span className="text-brand">&#9745;</span>Best Quality Designs</li>
              <li className="flex items-center gap-3"><span className="text-brand">&#9745;</span>24x7 Live Support</li>
              <li className="flex items-center gap-3"><span className="text-brand">&#9745;</span>Result Oriented Projects</li>
              <li className="flex items-center gap-3"><span className="text-brand">&#9745;</span>Award Winning Support Team</li>
              <li className="flex items-center gap-3"><span className="text-brand">&#9745;</span>Best ROI Techniques</li>
              <li className="flex items-center gap-3"><span className="text-brand">&#9745;</span>Experienced Professionals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
