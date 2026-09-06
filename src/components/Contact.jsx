import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import contactHeroBg from "../assets/contact-hero-bg.webp";

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Netherlands",
  "United Arab Emirates",
  "Canada",
  "Australia",
  "Switzerland",
  "Singapore",
  "Other",
];

function SuccessModal({ isOpen, onClose, name }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Frosted Glass Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Premium Minimal Pop-up Card */}
      <div className="relative w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#0c1322] p-7 sm:p-9 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 animate-modalPop z-10">
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Close Button (✖) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Refined Checkmark Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <svg viewBox="0 0 24 24" className="h-7 w-7 animate-checkmark" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Headline */}
        <h3 className="mt-5 font-display text-xl sm:text-[1.35rem] font-bold tracking-tight text-white leading-snug">
          Our team will get in touch with you <span className="text-sky-400">within 24 hours</span>.
        </h3>

        {/* Subtext */}
        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
          Thank you{name ? `, ${name}` : ""}! We have received your inquiry and our team will review your requirements promptly.
        </p>

        {/* Single Action Button */}
        <div className="mt-7">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full bg-gradient-to-r from-[#0070ad] to-sky-600 py-3 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_16px_rgba(0,112,173,0.3)] transition-all duration-300 hover:bg-sky-500 hover:shadow-[0_8px_24px_rgba(0,112,173,0.45)] hover:-translate-y-0.5 active:scale-98 cursor-pointer"
          >
            Okay, Got It
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const { isDark, setTheme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Default Contact page to dark mode
    setTheme("dark");

    return () => {
      // Revert back to light mode when navigating away from Contact page
      setTheme("light");
    };
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmittedName(formData.firstName ? `${formData.firstName} ${formData.lastName}`.trim() : "");
      setShowModal(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    }, 600);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)]">
        {/* Hero Section with Contextual Background */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={contactHeroBg}
              alt="Reach Us"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#090e16]/65 backdrop-blur-[1px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
                Reach Us
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
                Let&apos;s Build Something Great Together.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
                Would you like to start a project with us? Share your technical requirements and business goals, and our engineering leads will get back to you promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Ultra-Premium, Unboxed 2-Column Split */}
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50 pt-12">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 items-start">
            {/* Left: The Form (Sleek, Minimalist, Luxury Underline Fields) */}
            <div>
              <div className="border-b border-[var(--color-ink-line)]/40 pb-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  Inquiry Form
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-3xl">
                  Tell us about your project
                </h2>
                <p className="mt-1.5 text-xs text-[var(--color-text-mist-2)]">
                  Fill in your details below and our solution architects will connect with you promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-9">
                {/* First Name & Last Name */}
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="group relative">
                    <label htmlFor="firstName" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                      className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium placeholder-slate-400/60 dark:placeholder-slate-400/40 transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none"
                    />
                  </div>

                  <div className="group relative">
                    <label htmlFor="lastName" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                      Last Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                      className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium placeholder-slate-400/60 dark:placeholder-slate-400/40 transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="group relative">
                    <label htmlFor="email" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                      className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium placeholder-slate-400/60 dark:placeholder-slate-400/40 transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none"
                    />
                  </div>

                  <div className="group relative">
                    <label htmlFor="phone" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                      Phone Number (incl. country code)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                      className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium placeholder-slate-400/60 dark:placeholder-slate-400/40 transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Country/Region */}
                <div className="group relative">
                  <label htmlFor="country" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                    Country / Region <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                      className="mt-2 w-full appearance-none border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 pr-8 text-base font-medium transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none cursor-pointer"
                    >
                      <option value="" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                        Select your country
                      </option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-2 bottom-3 text-slate-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* How can we help you? */}
                <div className="group relative">
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text-mist-2)] transition-colors group-focus-within:text-[#0070ad] dark:group-focus-within:text-sky-400">
                      How can we help you? <span className="text-rose-500">*</span>
                    </label>
                    <span className="font-mono text-[0.68rem] font-medium text-[var(--color-text-mist-2)]">
                      {5000 - formData.message.length} chars left
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                    placeholder="Describe your project, timeline, tech stack, or operational challenges..."
                    className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium placeholder-slate-400/60 dark:placeholder-slate-400/40 transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0070ad] to-[#0284c7] px-9 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_25px_rgba(0,112,173,0.3)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,112,173,0.45)] hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    <span>{loading ? "Submitting..." : "Submit Inquiry"}</span>
                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Direct Reach & Location (Clean, Editorial, Completely Box-Free) */}
            <div className="space-y-8 lg:pl-4">
              <div className="border-b border-[var(--color-ink-line)]/40 pb-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  Contact Channels
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-ink)] sm:text-3xl">
                  Get in touch directly
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-text-mist-2)]">
                  Reach out through our direct channels or visit our engineering headquarters in Goa.
                </p>
              </div>

              {/* Direct Info List without heavy boxes */}
              <div className="space-y-6">
                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                    Email Inquiries
                  </p>
                  <a
                    href="mailto:contact@sumantcloud.com"
                    className="mt-1 inline-block text-lg font-semibold text-[var(--color-text-ink)] hover:text-[var(--color-brand)] transition-colors"
                  >
                    contact@sumantcloud.com
                  </a>
                </div>

                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                    Direct Phone Line
                  </p>
                  <a
                    href="tel:+917028510950"
                    className="mt-1 inline-block text-lg font-semibold text-[var(--color-text-ink)] hover:text-[var(--color-brand)] transition-colors"
                  >
                    +91 70285 10950
                  </a>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-[0.72rem] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                      Office Headquarters
                    </p>
                    <a
                      href="https://maps.google.com/?q=Block+5+Surekha+Complex+Vaddem+Vasco+Goa"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[var(--color-brand)] hover:underline"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-[var(--color-text-ink)]">
                    Block 5, Surekha Complex, Vaddem, next to Vaddem Lake, Vasco da Gama, Goa, India
                  </p>
                </div>
              </div>

              {/* Clean Map Frame */}
              <div className="overflow-hidden rounded-2xl border border-[var(--color-ink-line)]/50 h-52 w-full shadow-sm">
                <iframe
                  title="Sumant Cloud Location Map"
                  src="https://maps.google.com/maps?q=Vaddem+Lake+Vasco+Goa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0 grayscale-[20%]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SuccessModal isOpen={showModal} onClose={handleCloseModal} name={submittedName} />
    </div>
  );
}
