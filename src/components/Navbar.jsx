import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { useTheme } from "../context/ThemeContext";

const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/#services",
    items: [
      { label: "Custom Software", href: "/custom-software" },
      { label: "SaaS Platforms", href: "/saas" },
      { label: "AI/ML Hiring", href: "/ai-ml-hiring" },
      { label: "IT Consulting", href: "/it-consulting" },
    ],
  },
  {
    label: "Product",
    href: "/#products",
    items: [
      { label: "E-dims", href: "/e-dims" },
      { label: "CMMS", href: "/cmms" },
      { label: "LMS", href: "/lms" },
      { label: "EP2P", href: "/ep2p" },
      { label: "CMS", href: "/cms" },
      { label: "PEM", href: "/pem" },
      { label: "WMS", href: "/wms" },
    ],
  },
  { label: "About", href: "/about" },
];

function Chevron({ className = "" }) {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12"
      fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

/* Closes a dropdown when the user taps/clicks outside of it —
   fixes the "stuck open" dropdown on touch devices (tablets,
   phones in desktop-site mode) where :hover never fires a
   mouseleave. */
function useClickOutside(ref, onOutside) {
  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) onOutside();
    }
    document.addEventListener("mousedown", handle);
    document.addEventListener("touchstart", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("touchstart", handle);
    };
  }, [ref, onOutside]);
}

/* ── Sun / Moon pill toggle ── */
function SunMoonToggle({ solid, isDark }) {
  const { toggleTheme } = useTheme();

  const pillStyle = solid
    ? isDark
      ? { border: "1px solid #363c44", background: "#20242a" }
      : { border: "1px solid #d1d5db", background: "#ffffff" }
    : { border: "1px solid rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.15)" };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        ...pillStyle,
        boxShadow: solid
          ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 6px rgba(0,0,0,0.06)"
          : "inset 0 1px 0 rgba(255,255,255,0.22), 0 2px 8px rgba(0,0,0,0.12)",
      }}
      className="relative flex items-center h-8 w-16 rounded-full p-0.5 cursor-pointer shrink-0 transition-all duration-300 group"
    >
      {/* Sliding Active Indicator */}
      <span
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full transition-all duration-300 ease-out shadow-sm ${
          isDark
            ? "left-[calc(50%+1px)] bg-[#0070ad]"
            : "left-0.5 bg-[#0070ad]"
        }`}
      />

      {/* Sun Icon */}
      <span
        className={`relative z-10 flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-300 ${
          !isDark ? "text-white" : "text-gray-400 group-hover:text-white"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" />
        </svg>
      </span>

      {/* Moon Icon */}
      <span
        className={`relative z-10 flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-300 ${
          isDark ? "text-white" : "text-gray-400 group-hover:text-gray-700"
        }`}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 14.5A7.5 7.5 0 0 1 9.5 4 9.5 9.5 0 1 0 20 14.5z" />
        </svg>
      </span>
    </button>
  );
}

/* True on mice/trackpads, false on touchscreens (and on a phone
   in "desktop site" mode, which reports touch, not hover). */
function useHoverCapable() {
  const [hoverCapable, setHoverCapable] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHoverCapable(mq.matches);
    const handler = (e) => setHoverCapable(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return hoverCapable;
}

/* Desktop dropdown — opens on hover for mouse users (closes when the
   mouse leaves, like a normal desktop menu). On touch devices, where
   hover never fires a mouseleave, it falls back to tap-to-toggle with
   tap-outside-to-close so it never gets stuck open. */
function NavDropdown({ item, solid, isDark }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const hoverCapable = useHoverCapable();
  useClickOutside(ref, () => setOpen(false));

  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const textColor = !solid
    ? "rgba(255,255,255,0.9)"
    : isDark
      ? "rgba(255,255,255,0.9)"
      : "#374151";

  const hoverColor = "#0070ad";
  const linkStyle = { color: textColor };

  const linkBase = `relative text-[0.9rem] font-medium transition-all duration-200
    after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-brand
    after:transition-[width] after:duration-200 hover:after:w-full`;

  if (!item.items) {
    return (
      <a
        href={item.href}
        style={linkStyle}
        className={linkBase}
        onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
        onMouseLeave={e => (e.currentTarget.style.color = textColor)}
      >
        {item.label}
      </a>
    );
  }

  const containerHoverProps = hoverCapable
    ? { onMouseEnter: () => setOpen(true), onMouseLeave: () => setOpen(false) }
    : {};

  function handleMainLinkClick(e) {
    if (item.href.startsWith("/#") || item.href.startsWith("#")) {
      const targetId = item.href.replace(/^\/?#/, "");
      const isHomePage = window.location.pathname === "/" || window.location.pathname === "";
      if (isHomePage) {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `/#${targetId}`);
        }
        setOpen(false);
      } else {
        window.location.href = `/#${targetId}`;
      }
    }
  }

  const triggerClickProps = !hoverCapable
    ? {
        onClick: (e) => {
          handleMainLinkClick(e);
          setOpen((o) => !o);
        },
      }
    : {
        onClick: handleMainLinkClick,
      };

  return (
    <div ref={ref} className="relative" {...containerHoverProps}>
      <a
        href={item.href}
        style={linkStyle}
        className={`inline-flex items-center gap-1 ${linkBase}`}
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
        onMouseLeave={e => (e.currentTarget.style.color = textColor)}
        {...triggerClickProps}
      >
        {item.label}
        <Chevron className={`mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </a>

      <div
        className={`absolute top-full left-0 pt-2 min-w-[200px] z-50 transition-all duration-200 origin-top ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl border border-[var(--color-ink-line)] bg-[var(--color-foam-panel)] p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          {item.items.map((sub) => {
            const isActive = currentPath === sub.href;
            return (
              <a
                key={sub.label}
                href={sub.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-[0.875rem] font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-[var(--color-brand)] font-semibold bg-[var(--color-foam)]"
                    : "text-[var(--color-text-ink)] hover:text-[var(--color-brand)] hover:bg-[var(--color-foam)]"
                }`}
              >
                {sub.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ forceSolid = false }) {
  const { isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hovered,  setHovered]  = useState(false);
  const [open,     setOpen]     = useState(false);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => { setOpen(false); setExpanded(null); };

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close the drawer on Escape.
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeMobile(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const solid = forceSolid || hovered || scrolled || open;

  const solidBg   = isDark ? "#1a1d21" : "rgba(255,255,255,0.97)";
  const panelBg   = isDark ? "#1a1d21" : "#ffffff";
  const panelLine = isDark ? "#363c44" : "#f3f4f6";

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Single navbar row ── */}
      <div
        style={solid ? { background: solidBg, boxShadow: "0 2px 16px rgba(0,0,0,0.12)" } : {}}
        className="relative z-10 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <nav className="flex items-center h-16 lg:h-20">

            {/* LEFT — Logo */}
            <a href="/" className="flex items-center shrink-0">
              <Logo
                variant={solid && !isDark ? "on-light" : "on-dark"}
                className="h-10 sm:h-12 lg:h-16 w-auto"
              />
            </a>

            {/* CENTER — Nav links (desktop / large screens only) */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9 mx-auto">
              {NAV.map((item) => (
                <NavDropdown
                  key={item.label}
                  item={item}
                  solid={solid}
                  isDark={isDark}
                />
              ))}
            </div>

            {/* RIGHT — Contact us + Theme toggle (desktop) */}
            <div
              className="hidden lg:flex items-center gap-2 ml-auto rounded-2xl p-1.5 transition-all duration-300"
              style={{
                background: solid ? (isDark ? "rgba(26,29,33,0.96)" : "rgba(255,255,255,0.92)") : "rgba(18,20,23,0.42)",
                border: `1px solid ${solid ? (isDark ? "#3a4048" : "rgba(255,255,255,0.9)") : "rgba(255,255,255,0.38)"}`,
                boxShadow: solid ? "0 10px 26px rgba(9,25,42,0.15), inset 0 1px 0 rgba(255,255,255,0.45)" : "0 12px 30px rgba(3,13,25,0.18), inset 0 1px 0 rgba(255,255,255,0.25)",
                backdropFilter: "blur(16px)",
              }}
            >
              <a
                href="/contact/"
                className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-300 whitespace-nowrap hover:-translate-y-px hover:shadow-[0_8px_18px_rgba(0,112,173,0.34)]"
                style={{
                  background: "linear-gradient(135deg, #0b92d2 0%, #0070ad 58%, #005b94 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 10px rgba(0,75,125,0.28)",
                }}
              >
                Contact us
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/35 text-xs leading-none transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
              </a>
              <SunMoonToggle solid={solid} isDark={isDark} />
            </div>

            {/* Mobile / tablet hamburger */}
            <button
              type="button"
              style={{ color: solid ? (isDark ? "#edf6ff" : "#374151") : "#ffffff" }}
              className="lg:hidden p-2 ml-auto -mr-2 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open
                  ? <path d="M6 6l12 12M18 6L6 18" />
                  : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* ── Mobile backdrop ── */}
      <div
        onClick={closeMobile}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-0 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(4,10,20,0.55)", backdropFilter: "blur(2px)" }}
      />

      {/* ── Mobile drawer (floating card, slides + fades in) ── */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-16 z-0 px-3 transition-all duration-300 ease-out origin-top ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div
          style={{ background: panelBg, border: `1px solid ${panelLine}` }}
          className="rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-3 py-2 max-h-[65vh] overflow-y-auto">
            {NAV.map((item) =>
              item.items ? (
                <div key={item.label} style={{ borderBottom: `1px solid ${panelLine}` }} className="last:border-0">
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    style={{ color: isDark ? "rgba(255,255,255,0.9)" : "#374151" }}
                    className="w-full flex items-center justify-between px-2 py-3.5 font-medium rounded-lg transition-colors hover:bg-brand-light/40"
                  >
                    {item.label}
                    <Chevron className={`transition-transform duration-200 ${expanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-200 ease-out"
                    style={{ gridTemplateRows: expanded === item.label ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-3 pl-4 flex flex-col gap-1">
                        {item.items.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={closeMobile}
                            style={{ color: isDark ? "#8ea6b8" : "#6b7280" }}
                            className="flex items-center gap-2 text-sm hover:text-brand transition-colors py-2 px-2 rounded-md"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobile}
                  style={{
                    color: isDark ? "rgba(255,255,255,0.9)" : "#374151",
                    borderBottom: `1px solid ${panelLine}`,
                  }}
                  className="block px-2 py-3.5 font-medium rounded-lg transition-colors hover:bg-brand-light/40 last:border-0"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* CTA + theme toggle footer */}
          <div
            style={{ borderTop: `1px solid ${panelLine}`, background: isDark ? "#15181c" : "#fafbfc" }}
            className="flex items-center gap-1.5 px-3 py-3"
          >
            <a
              href="/contact/"
              onClick={closeMobile}
              style={{ background: "#0070ad" }}
              className="flex-1 text-center text-white text-sm font-semibold rounded-lg py-3 shadow-md shadow-[#0070ad]/20 transition-transform active:scale-[0.98]"
            >
              Contact us
            </a>
            <SunMoonToggle solid={true} isDark={isDark} />
          </div>
        </div>
      </div>
    </header>
  );
}
