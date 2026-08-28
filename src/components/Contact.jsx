import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const CONTACTS = [
  ["Email", "hello@sumantcloud.com", "mailto:hello@sumantcloud.com"],
  ["Call", "+91 70285 10950", "tel:+917028510950"],
  ["Visit", "Vasco, Goa, India", "#location"],
];

export default function Contact() {
  const { isDark } = useTheme();
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className={`contact-page ${isDark ? "contact-dark" : "contact-light"}`}>
      <Navbar forceSolid />
      <main>
        <section className="contact-hero">
          <div className="contact-hero-grid" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="contact-kicker"><span /> REACH US / SUMANT CLOUD</p>
            <h1>Let&apos;s make<br /><em>something useful.</em></h1>
            <p className="contact-lede">Tell us what you&apos;re trying to improve, build, or untangle. We&apos;ll bring the right people into the first conversation.</p>
          </div>
        </section>

        <section className="contact-main">
          <div className="max-w-7xl mx-auto px-6 md:px-10 contact-main-grid">
            <div className="contact-details">
              <p className="contact-label">Start here</p>
              <h2>A good project<br /><span>starts clearly.</span></h2>
              <p className="contact-copy">Whether you have a defined brief or only a problem worth solving, send us a note. We usually reply within one working day.</p>
              <div className="contact-options">{CONTACTS.map(([label, value, href]) => <a href={href} key={label}><small>{label}</small><strong>{value}</strong><i>↗</i></a>)}</div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-head"><p className="contact-label">Project enquiry</p><span>01 / 03</span></div>
              <label>Name<input required name="name" placeholder="Your name" /></label>
              <label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label>
              <label>What can we help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Software development</option><option>Product design</option><option>Website design</option><option>Business automation</option><option>One of your products</option></select></label>
              <label>Tell us a little more<textarea required name="message" rows="4" placeholder="A few lines about your goals, timeline, or challenge..." /></label>
              <button className="contact-submit" type="submit">{sent ? "Message ready to send" : "Send enquiry"}<b>↗</b></button>
              {sent && <p className="contact-success" role="status">Thanks. Your enquiry is ready for our team. We&apos;ll be in touch shortly.</p>}
            </form>
          </div>
        </section>

        <section id="location" className="contact-location"><div className="max-w-7xl mx-auto px-6 md:px-10 contact-location-grid"><div><p className="contact-label">Find us</p><h2>From Goa,<br /><span>with care.</span></h2><p className="contact-copy">Block 5, Surekha Complex,<br />Vaddem, next to Vaddem Lake,<br />Vasco, Goa</p><a className="contact-map-link" href="https://maps.google.com/?q=Vaddem+Lake+Vasco+Goa" target="_blank" rel="noreferrer">Open in Maps <b>↗</b></a></div><div className="contact-map-art" aria-label="Map illustration showing the Sumant Cloud Goa office"><span className="contact-map-road road-one" /><span className="contact-map-road road-two" /><span className="contact-map-road road-three" /><span className="contact-map-pin">SC</span><small>VADDEM LAKE</small><i>SUMANT CLOUD</i></div></div></section>

        <section className="contact-cta"><div className="max-w-7xl mx-auto px-6 md:px-10"><p className="contact-kicker"><span /> NO PERFECT BRIEF REQUIRED</p><h2>Bring the question.<br /><em>We&apos;ll find the path.</em></h2></div></section>
      </main>
      <Footer />
    </div>
  );
}
