import Logo from "./Logo";

const SOCIAL_LINKS = [
  { label: "Google", href: "https://sumant-cloud-ideas.vercel.app/", icon: "google" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sumant-cloud-5b527a362/", icon: "linkedin" },
];

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M5.2 8.7H2.8V21h2.4V8.7ZM4 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM8.1 8.7h2.3v1.7h.1c.3-.6 1.2-2 3.5-2 3.7 0 4.4 2.3 4.4 5.3V21H16v-6.5c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V21H8.1V8.7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5Z" fill="#4285F4" />
      <path d="M12 22c2.7 0 5-.9 6.8-2.3l-3.3-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.8v2.7A10.3 10.3 0 0 0 12 22Z" fill="#34A853" />
      <path d="M6.2 13.8a6.2 6.2 0 0 1 0-3.6V7.5H2.8a10.2 10.2 0 0 0 0 9l3.4-2.7Z" fill="#FBBC05" />
      <path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C17 2.9 14.7 2 12 2a10.3 10.3 0 0 0-9.2 5.5l3.4 2.7C7 7.7 9.3 5.9 12 5.9Z" fill="#EA4335" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink pt-12 md:pt-16 pb-10 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1.8fr_1.1fr] gap-8 md:gap-10">
        <div>
          <a href="#top" className="inline-block">
            <Logo variant="on-dark" className="h-16 w-auto" />
          </a>
          <p className="mt-4 text-sm text-text-mist-2 leading-relaxed max-w-[22ch]">
            Block 5, Surekha Complex, Vaddem, next to Vaddem Lake, Vasco, Goa
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-mist-2 mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-text-mist">
            <li><a href="/" className="hover:text-cyan transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-cyan transition-colors">About</a></li>
            <li><a href="/contact" className="hover:text-cyan transition-colors">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-mist-2 mb-4">Products</h4>
          <ul className="space-y-2.5 text-sm text-text-mist">
            {[
              { label: "Document Management System (E-DMS)", href: "/e-dims" },
              { label: "Computerized Maintenance Management System (CMMS)", href: "/cmms" },
              { label: "Learning Management System (LMS)", href: "/lms" },
              { label: "Electronic Purchase to Pay (EP2P)", href: "/ep2p" },
              { label: "Clinic Management System (CMS)", href: "/cms" },
              { label: "Project Expense Management (PEM)", href: "/pem" },
              { label: "Warehouse Management System (WMS)", href: "/wms" },
            ].map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  className="hover:text-cyan transition-colors leading-relaxed block"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-mist-2 mb-4">Get in touch</h4>
          <ul className="space-y-2.5 text-sm text-text-mist">
            <li><a href="mailto:contact@sumantcloud.com" className="hover:text-cyan transition-colors break-all">contact@sumantcloud.com</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-10 md:mt-14 pt-6 border-t border-ink-line text-xs text-text-mist-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <span>© {year} Sumant Cloud. All rights reserved.</span>
        <div className="flex items-center gap-3" aria-label="Social links">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-text-mist-2/60 text-text-mist-2 transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
            >
              <span className="w-4 h-4 [&>svg]:w-full [&>svg]:h-full [&>svg]:opacity-90">
                <SocialIcon type={social.icon} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
