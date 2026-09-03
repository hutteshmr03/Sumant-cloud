import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import useScrollReveal from "../hooks/useScrollReveal";

const PRODUCTS = [
  {
    code: "E-DIMS",
    kicker: "PRODUCT / E-DIMS",
    headline: "Document Inventory Management System",
    description: "Streamline and control pharmaceutical documentation with centralized tracking, SOP & BMR/BPR workflows, complete audit trails, and instant retrieval.",
    href: "/e-dims",
    theme: "purple-gradient",
    renderVisual: () => (
      <svg viewBox="0 0 300 160" className="w-full h-full max-h-[145px] mx-auto" fill="none">
        <g transform="translate(108, 14)">
          <rect x="20" y="8" width="68" height="96" rx="8" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
          <rect x="10" y="18" width="68" height="96" rx="8" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
          <rect x="0" y="28" width="68" height="96" rx="8" fill="rgba(255, 255, 255, 0.48)" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" />

          <line x1="12" y1="46" x2="46" y2="46" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="58" x2="54" y2="58" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
          <line x1="12" y1="70" x2="50" y2="70" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
          <line x1="12" y1="82" x2="36" y2="82" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

          <circle cx="54" cy="102" r="12" fill="#ffffff" />
          <path d="M49 102 L52.5 105.5 L59.5 98.5" stroke="#9333ea" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    ),
  },
  {
    code: "CMMS",
    kicker: "PRODUCT / CMMS",
    headline: "Computerized Maintenance Management System",
    description: "Track, schedule, and optimize physical assets and equipment maintenance. Automate work orders, eliminate unplanned downtime, and manage spare parts inventory in real time.",
    href: "/cmms",
    theme: "silver",
    renderVisual: () => (
      <svg viewBox="0 0 300 160" className="w-full h-full max-h-[145px] mx-auto" fill="none">
        <defs>
          <linearGradient id="cmmsMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <linearGradient id="cmmsViolet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e879f9" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
          <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Left Industrial Node */}
        <g transform="translate(18, 42)">
          <path d="M0 28 L35 12 L70 28 L35 44 Z" fill="url(#cmmsMetal)" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M0 28 L35 44 L35 76 L0 60 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M35 44 L70 28 L70 60 L35 76 Z" fill="#334155" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="35" cy="28" r="11" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="35" cy="28" r="4.5" fill="#cbd5e1" />
        </g>

        {/* Laser Diagnostic Beams */}
        <g filter="url(#laserGlow)">
          <line x1="88" y1="70" x2="135" y2="56" stroke="#d946ef" strokeWidth="2.2" />
          <line x1="88" y1="88" x2="150" y2="88" stroke="#c084fc" strokeWidth="1.8" strokeDasharray="4 4" />
          <line x1="165" y1="56" x2="212" y2="70" stroke="#d946ef" strokeWidth="2.2" />
          <line x1="150" y1="96" x2="212" y2="88" stroke="#a855f7" strokeWidth="1.8" />
        </g>

        {/* Center Smart Hub */}
        <g transform="translate(118, 24)">
          <path d="M0 22 L32 8 L64 22 L32 36 Z" fill="#f0abfc" fillOpacity="0.85" stroke="#f5d0fe" strokeWidth="1.5" />
          <path d="M0 22 L32 36 L32 68 L0 54 Z" fill="url(#cmmsViolet)" stroke="#f5d0fe" strokeWidth="1" />
          <path d="M32 36 L64 22 L64 54 L32 68 Z" fill="#581c87" stroke="#f5d0fe" strokeWidth="1" />
          <circle cx="32" cy="36" r="4" fill="#ffffff" filter="url(#laserGlow)" />
        </g>

        {/* Center Lower Node */}
        <g transform="translate(145, 66)">
          <path d="M0 16 L20 6 L40 16 L20 26 Z" fill="#e879f9" stroke="#f5d0fe" strokeWidth="1.5" />
          <path d="M0 16 L20 26 L20 44 L0 34 Z" fill="url(#cmmsViolet)" stroke="#f5d0fe" strokeWidth="1" />
          <path d="M20 26 L40 16 L40 34 L20 44 Z" fill="#3b0764" stroke="#f5d0fe" strokeWidth="1" />
        </g>

        {/* Right Industrial Node */}
        <g transform="translate(212, 42)">
          <path d="M0 28 L35 12 L70 28 L35 44 Z" fill="url(#cmmsMetal)" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M0 28 L35 44 L35 76 L0 60 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M35 44 L70 28 L70 60 L35 76 Z" fill="#334155" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="35" cy="28" r="11" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="35" cy="28" r="4.5" fill="#cbd5e1" />
        </g>
      </svg>
    ),
  },
  {
    code: "LMS",
    kicker: "PRODUCT / LMS",
    headline: "Learning Management System",
    description: "Empower your pharmaceutical workforce with centralized employee training, SOP compliance, assessments, progress tracking, and complete audit readiness.",
    href: "/lms",
    theme: "dark",
    renderVisual: () => (
      <svg viewBox="0 0 300 160" className="w-full h-full max-h-[145px] mx-auto" fill="none">
        <defs>
          <linearGradient id="lmsCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <filter id="lmsGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g stroke="#334155" strokeWidth="0.8" opacity="0.6">
          <line x1="30" y1="35" x2="100" y2="20" />
          <line x1="100" y1="20" x2="180" y2="35" />
          <line x1="180" y1="35" x2="260" y2="20" />
        </g>

        <ellipse cx="150" cy="95" rx="100" ry="32" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.8" />

        {/* Left Node */}
        <g transform="translate(42, 65)" filter="url(#lmsGlow)">
          <circle cx="18" cy="18" r="16" stroke="#38bdf8" strokeWidth="1.5" fill="#0f172a" />
          <rect x="11" y="9" width="14" height="18" rx="2" stroke="#7dd3fc" strokeWidth="1.5" />
          <polygon points="15,14 21,18 15,22" fill="#38bdf8" />
        </g>

        {/* Center Cap & Screen */}
        <g transform="translate(108, 30)" filter="url(#lmsGlow)">
          <rect x="8" y="24" width="68" height="46" rx="6" stroke="#38bdf8" strokeWidth="2" fill="#0c1322" />
          <line x1="18" y1="38" x2="50" y2="38" stroke="#7dd3fc" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="18" y1="48" x2="44" y2="48" stroke="#7dd3fc" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="60" cy="48" r="6" stroke="#fbbf24" strokeWidth="1.5" fill="#78350f" />
          <path d="M58 48 L60 50 L63 46" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Graduation Cap */}
          <g transform="translate(12, -14)">
            <polygon points="30,0 60,9 30,18 0,9" fill="url(#lmsCyan)" stroke="#bae6fd" strokeWidth="1.5" />
            <path d="M12 12 L12 22 C12 28, 48 28, 48 22 L48 12" fill="#1e293b" stroke="#7dd3fc" strokeWidth="1.2" />
            <line x1="45" y1="13" x2="52" y2="25" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="52" cy="25" r="2" fill="#fbbf24" />
          </g>
        </g>

        {/* Right Node */}
        <g transform="translate(222, 65)" filter="url(#lmsGlow)">
          <circle cx="18" cy="18" r="16" stroke="#818cf8" strokeWidth="1.5" fill="#0f172a" />
          <circle cx="18" cy="18" r="9" stroke="#a5b4fc" strokeWidth="1.2" strokeDasharray="3 3" />
          <polygon points="18,11 20,15 24,16 21,19 22,23 18,21 14,23 15,19 12,16 16,15" fill="#fbbf24" />
        </g>
      </svg>
    ),
  },
  {
    code: "EP2P",
    kicker: "PRODUCT / EP2P",
    headline: "Electronic Purchase to Pay",
    description: "Automate purchasing, digital RFQs, purchase orders, 3-way invoice matching, and payment disbursements in a transparent enterprise audit trail.",
    href: "/ep2p",
    theme: "dark",
    renderVisual: () => (
      <svg viewBox="0 0 300 160" className="w-full h-full max-h-[145px] mx-auto" fill="none">
        <defs>
          <filter id="p2pGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g stroke="#3b0764" strokeWidth="0.8" opacity="0.6">
          <line x1="30" y1="35" x2="100" y2="20" />
          <line x1="100" y1="20" x2="180" y2="35" />
          <line x1="180" y1="35" x2="260" y2="20" />
        </g>

        <ellipse cx="150" cy="95" rx="100" ry="32" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.8" />

        <g filter="url(#p2pGlow)">
          {/* Left Node */}
          <g transform="translate(42, 68)">
            <circle cx="18" cy="18" r="16" stroke="#c084fc" strokeWidth="1.5" fill="#1e1b4b" />
            <rect x="10" y="9" width="16" height="18" rx="2" stroke="#e879f9" strokeWidth="1.5" />
            <line x1="13" y1="14" x2="21" y2="14" stroke="#f5d0fe" strokeWidth="1.2" />
            <line x1="13" y1="20" x2="21" y2="20" stroke="#f5d0fe" strokeWidth="1.2" />
          </g>

          {/* Center Vault */}
          <g transform="translate(115, 38)">
            <rect x="0" y="18" width="70" height="48" rx="6" stroke="#d946ef" strokeWidth="2" fill="#0f0728" />
            <path d="M0 18 L35 0 L70 18" stroke="#f0abfc" strokeWidth="1.8" />
            <circle cx="35" cy="42" r="12" stroke="#a855f7" strokeWidth="1.5" fill="#3b0764" />
            <path d="M29 42 L33 46 L41 38" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Right Node */}
          <g transform="translate(222, 68)">
            <circle cx="18" cy="18" r="16" stroke="#c084fc" strokeWidth="1.5" fill="#1e1b4b" />
            <rect x="9" y="11" width="18" height="14" rx="2" stroke="#e879f9" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="2.5" fill="#f5d0fe" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    code: "CMS",
    kicker: "PRODUCT / CMS",
    headline: "Clinic Management Software",
    description: "Streamline healthcare workflows with online appointment scheduling, digital electronic medical records (EMR), automated billing, and patient analytics.",
    href: "/cms",
    theme: "light",
    renderVisual: () => (
      <svg viewBox="0 0 300 160" className="w-full h-full max-h-[145px] mx-auto" fill="none">
        {/* Left EMR Document */}
        <g transform="translate(45, 18)">
          <rect x="0" y="0" width="70" height="98" rx="6" stroke="#cbd5e1" strokeWidth="1.5" fill="#f8fafc" className="dark:fill-[#1e2230] dark:stroke-slate-700" />
          <path d="M12 30 L26 30 L32 16 L38 45 L45 30 L58 30" stroke="#9333ea" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="56" x2="56" y2="56" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="12" y1="68" x2="48" y2="68" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
          
          <g transform="translate(20, 72)">
            <rect x="0" y="0" width="26" height="26" rx="6" fill="#f3e8ff" className="dark:fill-[#3b0764]" stroke="#9333ea" strokeWidth="1.6" />
            <path d="M13 6 L13 20 M6 13 L20 13" stroke="#9333ea" strokeWidth="2.4" strokeLinecap="round" />
          </g>
        </g>

        {/* Right Clinician & Digital Tablet */}
        <g transform="translate(145, 18)" stroke="#1e293b" className="dark:stroke-slate-100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="36" cy="22" r="13" />
          <path d="M20 70 C20 48, 52 48, 52 70" />
          <path d="M30 48 C30 58, 42 58, 42 48" stroke="#9333ea" strokeWidth="2" />
          <circle cx="36" cy="62" r="3" fill="#9333ea" />

          <rect x="58" y="28" width="52" height="68" rx="4" stroke="#1e293b" className="dark:stroke-slate-100" fill="#ffffff" className="dark:fill-[#1e2230]" />
          <line x1="68" y1="44" x2="100" y2="44" stroke="#94a3b8" strokeWidth="1.8" />
          <line x1="68" y1="56" x2="94" y2="56" stroke="#94a3b8" strokeWidth="1.8" />
          <line x1="68" y1="68" x2="98" y2="68" stroke="#94a3b8" strokeWidth="1.8" />
        </g>
      </svg>
    ),
  },
  {
    code: "PEM",
    kicker: "PRODUCT / PEM",
    headline: "Project Expense Management",
    description: "Accurately track, control, and optimize project expenses with real-time budget adherence, automated receipt approvals, and multi-tier governance.",
    href: "/pem",
    theme: "light",
    renderVisual: () => (
      <svg viewBox="0 0 300 160" className="w-full h-full max-h-[145px] mx-auto" fill="none">
        {/* Left Budget Card */}
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="68" height="96" rx="6" stroke="#cbd5e1" strokeWidth="1.5" fill="#f8fafc" className="dark:fill-[#1e2230] dark:stroke-slate-700" />
          <line x1="10" y1="18" x2="56" y2="18" stroke="#94a3b8" strokeWidth="1.8" />
          <line x1="10" y1="32" x2="44" y2="32" stroke="#94a3b8" strokeWidth="1.8" />
          <line x1="10" y1="46" x2="50" y2="46" stroke="#94a3b8" strokeWidth="1.8" />
          <rect x="10" y="62" width="48" height="22" rx="3" stroke="#9333ea" strokeWidth="1.5" fill="#f3e8ff" className="dark:fill-[#3b0764]" />
          <path d="M18 73 L26 73 M34 70 L42 70" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Center Monitor & Analytics */}
        <g transform="translate(108, 20)" stroke="#1e293b" className="dark:stroke-slate-100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="0" y="0" width="90" height="64" rx="4" fill="#ffffff" className="dark:fill-[#1e2230]" />
          <path d="M45 64 L45 80 M28 80 L62 80" />
          <path d="M14 44 L32 28 L50 36 L75 14" stroke="#9333ea" strokeWidth="2.5" />
          <circle cx="75" cy="14" r="3" fill="#9333ea" />

          {/* Manager Figure */}
          <circle cx="112" cy="30" r="12" />
          <path d="M98 78 C98 56, 126 56, 126 78" />
        </g>

        {/* Right 3D Block */}
        <g transform="translate(218, 72)" stroke="#9333ea" strokeWidth="1.2">
          <path d="M0 14 L16 5 L32 14 L16 23 Z" fill="#faf5ff" className="dark:fill-[#2e1065]" />
          <path d="M0 14 L16 23 L16 40 L0 31 Z" fill="#f3e8ff" className="dark:fill-[#3b0764]" />
          <path d="M16 23 L32 14 L32 31 L16 40 Z" fill="#e9d5ff" className="dark:fill-[#581c87]" />
        </g>
      </svg>
    ),
  },
  {
    code: "WMS",
    kicker: "PRODUCT / WMS",
    headline: "Warehouse Management System",
    description: "Maximize warehouse fulfillment speed with real-time inventory visibility, pick-pack-ship automation, barcode/RFID tracking, and automated replenishment.",
    href: "/wms",
    theme: "dark",
    renderVisual: () => (
      <svg viewBox="0 0 300 160" className="w-full h-full max-h-[145px] mx-auto" fill="none">
        <defs>
          <linearGradient id="wmsWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
          </linearGradient>
          <filter id="wmsGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g filter="url(#wmsGlow)" strokeWidth="3" strokeLinecap="round">
          <path d="M15 105 C 50 48, 90 135, 150 78 C 210 20, 250 120, 285 70" stroke="url(#wmsWave)" />
          <path d="M15 90 C 60 38, 100 120, 150 62 C 200 15, 240 105, 285 55" stroke="#38bdf8" opacity="0.65" strokeWidth="1.8" />
          <path d="M15 120 C 40 62, 80 150, 150 92 C 220 35, 260 135, 285 85" stroke="#ec4899" opacity="0.65" strokeWidth="1.8" />
          <path d="M25 100 C 70 72, 110 110, 150 75 C 190 42, 230 90, 275 65" stroke="#a855f7" strokeWidth="3.2" />
        </g>

        <g stroke="url(#wmsWave)" strokeWidth="1.2" opacity="0.45">
          {[35, 65, 95, 125, 155, 185, 215, 245, 275].map((x, i) => (
            <line key={x} x1={x} y1={50 + (i % 3) * 14} x2={x} y2={125 - (i % 3) * 10} />
          ))}
        </g>
      </svg>
    ),
  },
];

function OrganicParticleMeshCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 800);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Pause when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Optimized 3D Particle Count
    const PARTICLE_COUNT = 85;
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 140 + Math.random() * 190;
      particles.push({
        theta,
        phi,
        radius,
        baseRadius: radius,
        speedTheta: (Math.random() - 0.5) * 0.003,
        speedPhi: (Math.random() - 0.5) * 0.002,
        pulseSpeed: 0.0012 + Math.random() * 0.002,
        pulseOffset: Math.random() * Math.PI * 2,
        size: 1.5 + Math.random() * 2.2,
        colorType: i % 3, // 0: Cyan, 1: Purple, 2: Sky
      });
    }

    let rotX = 0.25;
    let rotY = 0;
    let time = 0;
    const maxDist = 75;
    const maxDistSq = maxDist * maxDist;

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        time += 1;
        rotY += 0.0025;
        rotX += 0.001;

        const cx = width * 0.5;
        const cy = height * 0.42;
        const fov = 380;

        const projected = [];
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);

        // 1. Calculate and project 3D positions
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const p = particles[i];
          p.theta += p.speedTheta;
          p.phi += p.speedPhi;

          // Organic blooming displacement
          const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset);
          const currentRadius = p.baseRadius + pulse * 45;

          // Spherical to 3D
          const x = currentRadius * Math.sin(p.phi) * Math.cos(p.theta);
          const y = currentRadius * Math.sin(p.phi) * Math.sin(p.theta);
          const z = currentRadius * Math.cos(p.phi);

          // 3D Rotations
          const x1 = x * cosY - z * sinY;
          const z1 = z * cosY + x * sinY;
          const y2 = y * cosX - z1 * sinX;
          const z2 = z1 * cosX + y * sinX;

          // Perspective projection
          const depth = z2 + 360;
          if (depth > 20) {
            const scale = fov / depth;
            const px = cx + x1 * scale;
            const py = cy + y2 * scale;
            const alpha = Math.max(0.2, Math.min(0.95, (z2 + 220) / 400));

            projected.push({
              x: px,
              y: py,
              scale,
              alpha,
              colorType: p.colorType,
              size: Math.max(1, p.size * scale),
            });
          }
        }

        // 2. Batched Mesh Lines (Zero lag batching)
        ctx.beginPath();
        for (let i = 0; i < projected.length; i++) {
          const p1 = projected[i];
          for (let j = i + 1; j < projected.length; j++) {
            const p2 = projected[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < maxDistSq) {
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
            }
          }
        }
        ctx.strokeStyle = "rgba(168, 85, 247, 0.22)";
        ctx.lineWidth = 0.85;
        ctx.stroke();

        // 3. Batched Particle Nodes
        for (let i = 0; i < projected.length; i++) {
          const p = projected[i];
          let colorRGB = "0, 229, 255";
          if (p.colorType === 1) colorRGB = "192, 132, 252";
          if (p.colorType === 2) colorRGB = "56, 189, 248";

          // Fast halo
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${colorRGB}, ${p.alpha * 0.25})`;
          ctx.fill();

          // Core node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${colorRGB}, ${p.alpha})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-85 transition-opacity duration-700 will-change-transform"
    />
  );
}

export default function Products() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="products" className="relative overflow-hidden bg-[#07090e] py-20 md:py-28 border-t border-b border-white/10 scroll-mt-20">
      {/* 3D Organic Particle Cloud / Mesh Animation Canvas */}
      <OrganicParticleMeshCanvas />

      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute -top-40 right-10 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-[550px] w-[550px] rounded-full bg-purple-600/15 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div
          ref={headerRef}
          className={`max-w-3xl ${headerVisible ? "animate-reveal-up" : "opacity-0 translate-y-6"}`}
        >
          <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-sky-300 shadow-sm">
            Products &amp; Platforms
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white leading-tight drop-shadow-md">
            The systems we build for ourselves, too.
          </h2>
        </div>

        {/* 3 boxes per row matching layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.code} product={product} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, delay }) {
  const { isDark } = useTheme();
  const [ref, visible] = useScrollReveal();

  const isDarkCard = product.theme === "dark";
  const isPurpleGradient = product.theme === "purple-gradient";
  const isSilverCard = product.theme === "silver";

  let cardStyle = {};
  let kickerColor = isDark ? "#94a3b8" : "#475569";
  let headlineColor = isDark ? "#ffffff" : "#0f172a";
  let descColor = isDark ? "#e2e8f0" : "#1e293b";
  let linkColor = isDark ? "#ffffff" : "#0f172a";
  let fadeColor = isDark ? "#131620" : "#ffffff";

  if (isPurpleGradient) {
    cardStyle = {
      background: "linear-gradient(135deg, #6b21a8 0%, #7e22ce 50%, #9333ea 100%)",
      borderColor: "#9333ea",
      color: "#ffffff",
    };
    kickerColor = "rgba(255, 255, 255, 0.85)";
    headlineColor = "#ffffff";
    descColor = "#ffffff";
    linkColor = "#ffffff";
    fadeColor = "#7e22ce";
  } else if (isDarkCard) {
    cardStyle = {
      backgroundColor: "#0c0d14",
      borderColor: "#1e2230",
      color: "#ffffff",
    };
    kickerColor = "#94a3b8";
    headlineColor = "#ffffff";
    descColor = "#f1f5f9";
    linkColor = "#ffffff";
    fadeColor = "#0c0d14";
  } else if (isSilverCard) {
    cardStyle = {
      backgroundColor: isDark ? "#161922" : "#f4f4f6",
      borderColor: isDark ? "#262d3d" : "#e2e8f0",
      color: isDark ? "#ffffff" : "#0f172a",
    };
    kickerColor = isDark ? "#94a3b8" : "#475569";
    headlineColor = isDark ? "#ffffff" : "#0f172a";
    descColor = isDark ? "#f1f5f9" : "#1e293b";
    linkColor = isDark ? "#ffffff" : "#0f172a";
    fadeColor = isDark ? "#161922" : "#f4f4f6";
  } else {
    // Light card in light mode (PEM & CMS)
    cardStyle = {
      backgroundColor: isDark ? "#131620" : "#ffffff",
      borderColor: isDark ? "#262d3d" : "#e2e8f0",
      color: isDark ? "#ffffff" : "#0f172a",
    };
    kickerColor = isDark ? "#94a3b8" : "#475569";
    headlineColor = isDark ? "#ffffff" : "#0f172a";
    descColor = isDark ? "#f1f5f9" : "#1e293b";
    linkColor = isDark ? "#ffffff" : "#0f172a";
    fadeColor = isDark ? "#131620" : "#ffffff";
  }

  return (
    <a
      href={product.href}
      ref={ref}
      className={`group relative flex flex-col justify-between overflow-hidden border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-[370px] sm:h-[380px] ${
        visible ? "animate-reveal-up" : "opacity-0 translate-y-6"
      }`}
      style={{ ...cardStyle, animationDelay: `${delay}ms` }}
    >
      {/* Top Editorial Copy Section */}
      <div className="p-6 sm:p-7 flex flex-col z-20">
        {/* Kicker */}
        <p
          className="text-[0.68rem] font-bold uppercase tracking-[0.2em]"
          style={{ color: kickerColor }}
        >
          {product.kicker}
        </p>

        {/* Bold Editorial Headline */}
        <h3
          className="mt-3 font-display text-xl sm:text-[1.38rem] font-bold tracking-tight leading-snug"
          style={{ color: headlineColor }}
        >
          {product.headline}
        </h3>
      </div>

      {/* Default Visual Art (Cleanly centered & balanced at identical height across all cards) */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden mt-auto flex items-center justify-center transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-6 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_100%)]">
        {/* Soft top blend gradient matching card background */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-10 z-10"
          style={{
            background: `linear-gradient(to bottom, ${fadeColor} 0%, transparent 100%)`,
          }}
        />
        <div className="w-full h-full flex items-center justify-center px-4 pb-3">
          {product.renderVisual()}
        </div>
      </div>

      {/* Hover Content Overlay (Smoothly slides up and fades in on hover with large clear text) */}
      <div
        className="absolute inset-x-0 bottom-0 top-[95px] sm:top-[105px] p-6 sm:p-7 flex flex-col justify-between opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-out transform translate-y-4 group-hover:translate-y-0 z-30"
        style={{
          background: `linear-gradient(to top, ${fadeColor} 90%, transparent 100%)`,
        }}
      >
        <p
          className="text-xs sm:text-sm md:text-[0.92rem] font-medium leading-relaxed"
          style={{ color: descColor }}
        >
          {product.description}
        </p>

        <div
          className="mt-auto pt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
          style={{ color: linkColor }}
        >
          <span>EXPAND</span>
          <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5 font-bold">›</span>
        </div>
      </div>
    </a>
  );
}
