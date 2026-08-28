import { useEffect, useState } from "react";
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

/* ── Sun / Moon pill toggle ── */
function SunMoonToggle({ solid, isDark }) {
  const { setTheme } = useTheme();

  // Border and background of the pill container
  const pillStyle = solid
    ? isDark
      ? { border: "1px solid #1c3350", background: "#0f2036" }
      : { border: "1px solid #d1d5db", background: "#ffffff" }
    : { border: "1px solid rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.1)" };

  return (
    <div style={pillStyle} className="flex items-center rounded-full overflow-hidden shrink-0 transition-all duration-300">
      {/* Sun — Light mode */}
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
      {/* Moon — Dark mode */}
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

function NavDropdown({ item, solid, isDark, onNavigate }) {
  const [open, setOpen] = useState(false);

  // Text color: transparent→white, solid+light→gray-700, solid+dark→white/90
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
        onClick={onNavigate}
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
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={item.href}
        style={linkStyle}
        className={`inline-flex items-center gap-1 ${linkBase}`}
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
        onMouseLeave={e => (e.currentTarget.style.color = textColor)}
      >
        {item.label}
        <Chevron className={`mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </a>

      {/* Dropdown — always solid panel */}
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
              onClick={onNavigate}
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

  const solid = forceSolid || hovered || scrolled;
  const closeMobile = () => { setOpen(false); setExpanded(null); };

  // Solid background colors per mode
  const solidBg   = isDark ? "#0f2036" : "rgba(255,255,255,0.97)";
  const solidText = isDark ? "rgba(255,255,255,0.8)"  : "#4b5563";
  const divColor  = isDark ? "#1c3350" : "#e5e7eb";

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Single navbar row ── */}
      <div
        style={solid ? { background: solidBg, boxShadow: "0 2px 16px rgba(0,0,0,0.12)" } : {}}
        className="transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <nav className="flex items-center h-16 md:h-20">

            {/* LEFT — Logo */}
            <a href="/" className="flex items-center shrink-0">
              <Logo
                variant={solid && !isDark ? "on-light" : "on-dark"}
                className="h-10 sm:h-12 md:h-16 w-auto"
              />
            </a>

            {/* CENTER — Nav links (desktop) */}
            <div className="hidden md:flex items-center gap-7 xl:gap-9 mx-auto">
              {NAV.map((item) => (
                <NavDropdown
                  key={item.label}
                  item={item}
                  solid={solid}
                  isDark={isDark}
                />
              ))}
            </div>

            {/* RIGHT — Contact us + Theme toggle */}
            <div className="hidden md:flex items-center gap-4 ml-auto">
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

            {/* Mobile hamburger */}
            <button
              style={{ color: solid ? (isDark ? "#edf6ff" : "#374151") : "#ffffff" }}
              className="md:hidden p-2 ml-auto transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div
          style={{ background: isDark ? "#0f2036" : "#ffffff", borderTop: `1px solid ${isDark ? "#1c3350" : "#f3f4f6"}` }}
          className="md:hidden px-4 sm:px-6 py-4 shadow-lg max-h-[80vh] overflow-y-auto"
        >
          {NAV.map((item) =>
            item.items ? (
              <div key={item.label} style={{ borderBottom: `1px solid ${isDark ? "#1c3350" : "#f3f4f6"}` }} className="last:border-0">
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  style={{ color: isDark ? "rgba(255,255,255,0.9)" : "#374151" }}
                  className="w-full flex items-center justify-between py-3.5 font-medium"
                >
                  {item.label}
                  <Chevron className={`transition-transform duration-200 ${expanded === item.label ? "rotate-180" : ""}`} />
                </button>
                {expanded === item.label && (
                  <div className="pb-3 pl-3 flex flex-col gap-1.5">
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={closeMobile}
                        style={{ color: isDark ? "#8ea6b8" : "#6b7280" }}
                        className="text-sm hover:text-brand transition-colors py-1"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                style={{
                  color: isDark ? "rgba(255,255,255,0.9)" : "#374151",
                  borderBottom: `1px solid ${isDark ? "#1c3350" : "#f3f4f6"}`,
                }}
                className="block py-3.5 font-medium hover:text-brand transition-colors"
              >
                {item.label}
              </a>
            )
          )}
          <div className="flex items-center gap-3 pt-4 mt-1">
            <a href="/contact/" style={{ color: isDark ? "#8ea6b8" : "#4b5563" }} className="text-sm hover:text-brand">
              Contact us
            </a>
            <SunMoonToggle solid={true} isDark={isDark} />
          </div>
        </div>
      )}
    </header>
  );
}
