import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import contactHeroBg from "../assets/contact-hero-bg.webp";
import { submitWebsiteForm } from "../utils/sendEmail";

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

export default function Contact() {
  const { isDark } = useTheme();
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await submitWebsiteForm({
        formType: "Contact Us Inquiry",
        data: formData,
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
      setSubmittedName(formData.firstName ? `${formData.firstName} ${formData.lastName}`.trim() : "");
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        message: "",
      });
    }
  }

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar forceSolid />
      <main className="bg-[var(--color-foam)] text-[var(--color-text-ink)] overflow-hidden">
        {/* Hero Section with Contextual Background & Staggered Reveal Animation */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={contactHeroBg}
              alt="Reach Us"
              className="h-full w-full object-cover object-center scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080d14]/90 via-[#0b141f]/75 to-[#080d14]/65 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,112,173,0.12),transparent_65%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Eyebrow Badge */}
              <div
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                }}
              >
                <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md shadow-sm">
                  Reach Us
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-[-0.04em] text-white leading-[1.12] drop-shadow-md"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
                }}
              >
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">
                  Great Together.
                </span>
              </h1>

              {/* Paragraph */}
              <p
                className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200 max-w-3xl"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
                }}
              >
                Would you like to start a project with us? Share your technical requirements and business goals, and our engineering leads will get back to you promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Ultra-Premium, Unboxed 2-Column Split */}
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 border-t border-[var(--color-ink-line)]/50 pt-12">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 items-center">
            {/* Left: Form or On-Page Success Confirmation */}
            <div className="w-full flex flex-col justify-center">
              {isSubmitted ? (
                <div className="max-w-md mx-auto w-full rounded-2xl sm:rounded-3xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-6 sm:p-8 text-center shadow-[0_8px_30px_rgba(0,112,173,0.06)] backdrop-blur-xl transition-all duration-500 animate-fadeIn relative overflow-hidden">
                  {/* Subtle Ambient Radial Glow */}
                  <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-sky-500/10 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-2xl" />

                  {/* Refined Checkmark Icon */}
                  <div className="relative mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 shadow-xs">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 animate-checkmark" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  {/* Eyebrow Tag */}
                  <div className="mb-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand)]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
                      Inquiry Received
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--color-text-ink)] leading-snug">
                    Our team will get in touch with you <span className="text-[var(--color-brand)]">within 24 hours</span>.
                  </h3>

                  {/* Subtext */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--color-text-mist-2)]">
                    Thank you{submittedName ? `, ${submittedName}` : ""}! We have received your inquiry and our team will review your requirements promptly.
                  </p>

                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-[var(--color-ink-line)]/50 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_4px_14px_rgba(0,112,173,0.25)] transition-all duration-300 hover:bg-sky-500 hover:shadow-[0_6px_20px_rgba(0,112,173,0.4)] hover:-translate-y-0.5 active:scale-98 cursor-pointer"
                    >
                      Okay, Got It
                    </button>
                  </div>
                </div>
              ) : (
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

                    {/* Email */}
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
                          className="mt-2 w-full border-b-2 border-slate-300 dark:border-white/20 bg-transparent py-2.5 text-base font-medium transition-all duration-300 focus:border-[#0070ad] dark:focus:border-sky-400 focus:outline-none appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
                            Select your country
                          </option>
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
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
              )}
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
                  Reach out through our email channel or visit our engineering headquarters in Goa.
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
    </div>
  );
}
