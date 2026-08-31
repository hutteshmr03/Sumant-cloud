import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { useTheme } from "../context/ThemeContext";

const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Development",
    href: "#services",
    items: [
      { label: "Software Development", href: "/software-development/" },
      { label: "Mobile App Development", href: "/mobile-app-development/" },
      { label: "Ecommerce Solutions", href: "/ecommerce-solutions/" },
      { label: "Automation", href: "/automation/" },
    ],
  },
  {
    label: "Product",
    href: "#products",
    items: [
      { label: "CMMS", href: "/cmms" },
      { label: "PEM", href: "/pem/" },
      { label: "EP2P", href: "/ep2p/" },
      { label: "CMS", href: "/cms/" },
      { label: "WMS", href: "/wms/" },
    ],
  },
  {
    label: "Design",
    href: "#services",
    items: [
      { label: "UI & UX Design", href: "/ui-ux-design/" },
      { label: "Website Design", href: "/website-design/" },
    ],
  },
  { label: "About", href: "/about/" },
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
  const { setTheme } = useTheme();

  const pillStyle = solid
    ? isDark
      ? { border: "1px solid #1c3350", background: "#0f2036" }
      : { border: "1px solid #d1d5db", background: "#ffffff" }
    : { border: "1px solid rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.1)" };

  return (
    <div style={pillStyle} className="flex items-center rounded-full overflow-hidden shrink-0 transition-all duration-300">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        style={
          !isDark
            ? { background: "#0070ad", color: "#fff" }
            : { color: solid ? (isDark ? "#8ea6b8" : "#9ca3af") : "rgba(255,255,255,0.6)" }
        }
        className="flex items-center justify-center w-8 h-8 transition-colors hover:opacity-80"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        style={
          isDark
            ? { background: "#0070ad", color: "#fff" }
            : { color: solid ? "#9ca3af" : "rgba(255,255,255,0.6)" }
        }
        className="flex items-center justify-center w-8 h-8 transition-colors hover:opacity-80"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 14.5A7.5 7.5 0 0 1 9.5 4 9.5 9.5 0 1 0 20 14.5z" />
        </svg>
      </button>
    </div>
  );
}

/* Desktop dropdown — now click-to-open with outside-click-to-close
   instead of hover-only, so it behaves correctly on touchscreens
   and in "desktop site" mode on a phone, not just with a mouse. */
function NavDropdown({ item, solid, isDark }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

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

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={linkStyle}
        className={`inline-flex items-center gap-1 ${linkBase}`}
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
        onMouseLeave={e => (e.currentTarget.style.color = textColor)}
      >
        {item.label}
        <Chevron className={`mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div className={`absolute top-full left-0 pt-2 min-w-[210px] z-50 transition-all duration-200 origin-top ${
        open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
      }`}>
        <div
          style={{
            background: isDark ? "#0f2036" : "#ffffff",
            border: `1px solid ${isDark ? "#1c3350" : "#f3f4f6"}`,
          }}
          className="rounded-lg shadow-xl py-1.5"
        >
          {item.items.map((sub) => (
            <a
              key={sub.label}
              href={sub.href}
              onClick={() => setOpen(false)}
              style={{ color: isDark ? "rgba(255,255,255,0.85)" : "#374151" }}
              className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors group hover:text-brand"
              onMouseEnter={e => {
                e.currentTarget.style.background = isDark ? "#1c3350" : "#e8f4fa";
                e.currentTarget.style.color = "#0070ad";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = isDark ? "rgba(255,255,255,0.85)" : "#374151";
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              {sub.label}
            </a>
          ))}
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

  const solidBg   = isDark ? "#0f2036" : "rgba(255,255,255,0.97)";
  const solidText = isDark ? "rgba(255,255,255,0.8)"  : "#4b5563";
  const divColor  = isDark ? "#1c3350" : "#e5e7eb";
  const panelBg   = isDark ? "#0f2036" : "#ffffff";
  const panelLine = isDark ? "#1c3350" : "#f3f4f6";

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
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              <a
                href="/contact/"
                style={{ color: solid ? solidText : "rgba(255,255,255,0.8)" }}
                className="text-sm font-medium transition-colors whitespace-nowrap hover:text-brand"
              >
                Contact us
              </a>
              <span style={{ background: solid ? divColor : "rgba(255,255,255,0.3)" }} className="w-px h-4" />
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
            style={{ borderTop: `1px solid ${panelLine}`, background: isDark ? "#0b1a2c" : "#fafbfc" }}
            className="flex items-center gap-3 px-3 py-3"
          >
            <a
              href="/contact/"
              onClick={closeMobile}
              style={{ background: "#0070ad" }}
              className="flex-1 text-center text-white text-sm font-semibold rounded-full py-3 shadow-md shadow-[#0070ad]/20 transition-transform active:scale-[0.98]"
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
