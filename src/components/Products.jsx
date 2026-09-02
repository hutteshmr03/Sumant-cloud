import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import useScrollReveal from "../hooks/useScrollReveal";

const PRODUCTS = [
  {
    code: "CMMS",
    kicker: "PRODUCT / CMMS",
    headline: "Computerized Maintenance Management System",
    description: "Track, schedule, and optimize physical assets and equipment maintenance. Automate work orders, eliminate unplanned downtime, and manage spare parts inventory in real time.",
    href: "/cmms",
    theme: "silver",
    renderVisual: () => (
      <div className="relative w-full h-full flex items-end justify-center overflow-hidden p-4">
        {/* CMMS: 3D Precision Machinery, Gears & Glowing Violet Diagnostic Laser Nodes */}
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-[210px]" fill="none">
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
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Industrial Base Structure */}
          <g transform="translate(15, 75)">
            <path d="M0 35 L40 15 L80 35 L40 55 Z" fill="url(#cmmsMetal)" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M0 35 L40 55 L40 95 L0 75 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M40 55 L80 35 L80 75 L40 95 Z" fill="#334155" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="40" cy="35" r="14" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="40" cy="35" r="6" fill="#cbd5e1" />
          </g>

          {/* Laser Diagnostic Beams Connecting Equipment */}
          <g filter="url(#laserGlow)">
            <line x1="95" y1="110" x2="150" y2="95" stroke="#d946ef" strokeWidth="2.5" />
            <line x1="95" y1="130" x2="165" y2="130" stroke="#c084fc" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="175" y1="95" x2="225" y2="110" stroke="#d946ef" strokeWidth="2.5" />
            <line x1="165" y1="140" x2="225" y2="130" stroke="#a855f7" strokeWidth="2" />
          </g>

          {/* Center 3D Smart Maintenance Hub */}
          <g transform="translate(120, 55)">
            <path d="M0 25 L30 10 L60 25 L30 40 Z" fill="#f0abfc" fillOpacity="0.85" stroke="#f5d0fe" strokeWidth="1.5" />
            <path d="M0 25 L30 40 L30 75 L0 60 Z" fill="url(#cmmsViolet)" stroke="#f5d0fe" strokeWidth="1" />
            <path d="M30 40 L60 25 L60 60 L30 75 Z" fill="#581c87" stroke="#f5d0fe" strokeWidth="1" />
            <circle cx="30" cy="40" r="4.5" fill="#ffffff" filter="url(#laserGlow)" />
          </g>

          {/* Center Lower Sensor Node */}
          <g transform="translate(150, 100)">
            <path d="M0 20 L24 8 L48 20 L24 32 Z" fill="#e879f9" stroke="#f5d0fe" strokeWidth="1.5" />
            <path d="M0 20 L24 32 L24 55 L0 43 Z" fill="url(#cmmsViolet)" stroke="#f5d0fe" strokeWidth="1" />
            <path d="M24 32 L48 20 L48 43 L24 55 Z" fill="#3b0764" stroke="#f5d0fe" strokeWidth="1" />
          </g>

          {/* Right Industrial Base Structure */}
          <g transform="translate(225, 75)">
            <path d="M0 35 L40 15 L80 35 L40 55 Z" fill="url(#cmmsMetal)" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M0 35 L40 55 L40 95 L0 75 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M40 55 L80 35 L80 75 L40 95 Z" fill="#334155" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="40" cy="35" r="14" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="40" cy="35" r="6" fill="#cbd5e1" />
          </g>
        </svg>
      </div>
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
      <div className="relative w-full h-full flex items-end justify-center overflow-hidden p-4">
        {/* PEM: Project Financial Budgeting Line Art */}
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-[210px]" fill="none" stroke="currentColor">
          <rect x="25" y="45" width="75" height="110" rx="4" stroke="#cbd5e1" strokeWidth="1.5" fill="#f8fafc" className="dark:fill-[#1e2230] dark:stroke-slate-700" />
          <line x1="35" y1="65" x2="85" y2="65" stroke="#94a3b8" strokeWidth="1.8" />
          <line x1="35" y1="80" x2="70" y2="80" stroke="#94a3b8" strokeWidth="1.8" />
          <line x1="35" y1="95" x2="80" y2="95" stroke="#94a3b8" strokeWidth="1.8" />
          <rect x="35" y="112" width="55" height="24" rx="3" stroke="#9333ea" strokeWidth="1.5" fill="#f3e8ff" className="dark:fill-[#3b0764]" />
          <path d="M45 124 L55 124 M65 120 L75 120" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" />

          {/* Project Finance Manager at Monitor */}
          <g transform="translate(110, 25)" stroke="#1e293b" className="dark:stroke-slate-100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="15" y="15" width="105" height="75" rx="4" fill="#ffffff" className="dark:fill-[#1e2230]" />
            <path d="M67 90 L67 110 M45 110 L90 110" />
            <path d="M30 68 L52 48 L72 58 L105 30" stroke="#9333ea" strokeWidth="2.5" />
            <circle cx="105" cy="30" r="3.5" fill="#9333ea" />

            <circle cx="145" cy="55" r="15" />
            <path d="M130 115 C130 88, 160 88, 160 115" />
            <path d="M135 95 L118 110" />

            <g transform="translate(60, -12)" stroke="#9333ea">
              <path d="M10 18 C5 14, 5 6, 10 2 C15 6, 15 14, 10 18 Z" fill="#f3e8ff" className="dark:fill-[#581c87]" />
              <line x1="10" y1="-3" x2="10" y2="-7" />
              <line x1="17" y1="1" x2="21" y2="-2" />
              <line x1="3" y1="1" x2="-1" y2="-2" />
            </g>
          </g>

          {/* 3D Expense Token Block */}
          <g transform="translate(205, 120)" stroke="#9333ea" strokeWidth="1.2">
            <path d="M0 16 L22 6 L44 16 L22 26 Z" fill="#faf5ff" className="dark:fill-[#2e1065]" />
            <path d="M0 16 L22 26 L22 48 L0 38 Z" fill="#f3e8ff" className="dark:fill-[#3b0764]" />
            <path d="M22 26 L44 16 L44 38 L22 48 Z" fill="#e9d5ff" className="dark:fill-[#581c87]" />
          </g>
        </svg>
      </div>
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
      <div className="relative w-full h-full flex items-end justify-center overflow-hidden p-4">
        {/* EP2P: Holographic Procurement Network */}
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-[210px]" fill="none">
          <defs>
            <filter id="p2pGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g stroke="#3b0764" strokeWidth="0.8" opacity="0.6">
            <line x1="40" y1="50" x2="120" y2="30" />
            <line x1="120" y1="30" x2="200" y2="50" />
            <line x1="200" y1="50" x2="280" y2="30" />
            <line x1="70" y1="105" x2="160" y2="85" />
            <line x1="160" y1="85" x2="250" y2="115" />
          </g>

          <ellipse cx="160" cy="135" rx="105" ry="38" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.8" />

          <g filter="url(#p2pGlow)">
            {/* Left PO Node */}
            <g transform="translate(55, 100)">
              <circle cx="20" cy="20" r="18" stroke="#c084fc" strokeWidth="1.5" fill="#1e1b4b" />
              <rect x="12" y="10" width="16" height="20" rx="2" stroke="#e879f9" strokeWidth="1.5" />
              <line x1="15" y1="16" x2="23" y2="16" stroke="#f5d0fe" strokeWidth="1.2" />
              <line x1="15" y1="22" x2="23" y2="22" stroke="#f5d0fe" strokeWidth="1.2" />
            </g>

            {/* Central 3-Way Match Verification Vault */}
            <g transform="translate(125, 75)">
              <rect x="0" y="20" width="70" height="52" rx="6" stroke="#d946ef" strokeWidth="2" fill="#0f0728" />
              <path d="M0 20 L35 0 L70 20" stroke="#f0abfc" strokeWidth="1.8" />
              <circle cx="35" cy="46" r="13" stroke="#a855f7" strokeWidth="1.5" fill="#3b0764" />
              <path d="M29 46 L33 50 L41 42" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Right Payment Disbursement Node */}
            <g transform="translate(230, 100)">
              <circle cx="20" cy="20" r="18" stroke="#c084fc" strokeWidth="1.5" fill="#1e1b4b" />
              <rect x="10" y="13" width="20" height="14" rx="2" stroke="#e879f9" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="2.5" fill="#f5d0fe" />
            </g>
          </g>

          <circle cx="85" cy="55" r="2" fill="#e879f9" filter="url(#p2pGlow)" />
          <circle cx="240" cy="50" r="2.5" fill="#c084fc" filter="url(#p2pGlow)" />
          <circle cx="160" cy="40" r="3" fill="#ffffff" filter="url(#p2pGlow)" />
        </svg>
      </div>
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
      <div className="relative w-full h-full flex items-end justify-center overflow-hidden p-4">
        {/* CMS: Clinical Healthcare Line Art */}
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-[210px]" fill="none">
          <rect x="25" y="35" width="80" height="120" rx="6" stroke="#cbd5e1" strokeWidth="1.5" fill="#f8fafc" className="dark:fill-[#1e2230] dark:stroke-slate-700" />
          <path d="M40 75 L55 75 L60 60 L68 90 L75 75 L88 75" stroke="#9333ea" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Clinician Figure with Digital Tablet */}
          <g transform="translate(125, 25)" stroke="#1e293b" className="dark:stroke-slate-100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="35" r="16" />
            <path d="M30 95 C30 68, 70 68, 70 95" />
            <path d="M42 70 C42 82, 58 82, 58 70" stroke="#9333ea" strokeWidth="2" />
            <circle cx="50" cy="88" r="3.5" fill="#9333ea" />

            <rect x="75" y="55" width="60" height="75" rx="4" stroke="#1e293b" className="dark:stroke-slate-100" fill="#ffffff" className="dark:fill-[#1e2230]" />
            <line x1="85" y1="72" x2="122" y2="72" stroke="#94a3b8" strokeWidth="1.8" />
            <line x1="85" y1="88" x2="115" y2="88" stroke="#94a3b8" strokeWidth="1.8" />
            <line x1="85" y1="104" x2="120" y2="104" stroke="#94a3b8" strokeWidth="1.8" />
          </g>

          {/* Glowing Purple Medical Cross */}
          <g transform="translate(55, 105)">
            <rect x="0" y="0" width="34" height="34" rx="8" fill="#f3e8ff" className="dark:fill-[#3b0764]" stroke="#9333ea" strokeWidth="1.8" />
            <path d="M17 9 L17 25 M9 17 L25 17" stroke="#9333ea" strokeWidth="2.8" strokeLinecap="round" />
          </g>
        </svg>
      </div>
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
      <div className="relative w-full h-full flex items-end justify-center overflow-hidden p-4">
        {/* WMS: High-Velocity Logistics Stock Ribbons */}
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-[210px]" fill="none">
          <defs>
            <linearGradient id="wmsWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
            </linearGradient>
            <filter id="wmsGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g filter="url(#wmsGlow)" strokeWidth="3.5" strokeLinecap="round">
            <path d="M20 150 C 60 70, 100 190, 160 110 C 220 30, 260 170, 300 100" stroke="url(#wmsWave)" />
            <path d="M20 130 C 70 60, 110 170, 160 90 C 210 20, 250 150, 300 80" stroke="#38bdf8" opacity="0.65" strokeWidth="2" />
            <path d="M20 170 C 50 90, 90 210, 160 130 C 230 50, 270 190, 300 120" stroke="#ec4899" opacity="0.65" strokeWidth="2" />
            <path d="M30 140 C 80 100, 120 150, 160 105 C 200 60, 240 130, 290 90" stroke="#a855f7" strokeWidth="4" />
          </g>

          <g stroke="url(#wmsWave)" strokeWidth="1.2" opacity="0.45">
            {[45, 75, 105, 135, 165, 195, 225, 255, 285].map((x, i) => (
              <line key={x} x1={x} y1={75 + (i % 3) * 18} x2={x} y2={175 - (i % 3) * 14} />
            ))}
          </g>
        </svg>
      </div>
    ),
  },
  {
    code: "E-dims",
    kicker: "PRODUCT / E-DIMS",
    headline: "Electronic Document & Information Management System",
    description: "Centralize and safeguard enterprise records with intelligent digital archiving, role-based access control, cryptographic verification, and lifecycle workflows.",
    href: "/e-dims",
    theme: "purple-gradient",
    renderVisual: () => (
      <div className="relative w-full h-full flex items-end justify-center overflow-hidden p-4">
        {/* E-DIMS: Floating Digital Compliance Vault */}
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-[210px] relative z-10" fill="none">
          <g transform="translate(105, 30)">
            <rect x="22" y="10" width="80" height="110" rx="8" fill="rgba(255, 255, 255, 0.18)" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
            <rect x="11" y="22" width="80" height="110" rx="8" fill="rgba(255, 255, 255, 0.28)" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="1.5" />
            <rect x="0" y="34" width="80" height="110" rx="8" fill="rgba(255, 255, 255, 0.45)" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" />

            <line x1="15" y1="54" x2="55" y2="54" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="15" y1="69" x2="65" y2="69" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
            <line x1="15" y1="84" x2="60" y2="84" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
            <line x1="15" y1="99" x2="45" y2="99" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />

            <circle cx="65" cy="120" r="14" fill="#ffffff" />
            <path d="M59 120 L63 124 L71 116" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
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
      className={`group relative flex flex-col justify-between overflow-hidden border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl min-h-[460px] lg:min-h-[500px] ${
        visible ? "animate-reveal-up" : "opacity-0 translate-y-6"
      }`}
      style={{ ...cardStyle, animationDelay: `${delay}ms` }}
    >
      {/* Top Editorial Copy Section */}
      <div className="p-7 sm:p-8 flex flex-col z-20">
        {/* Kicker */}
        <p
          className="text-[0.72rem] font-bold uppercase tracking-[0.2em]"
          style={{ color: kickerColor }}
        >
          {product.kicker}
        </p>

        {/* Bold Editorial Headline */}
        <h3
          className="mt-4 font-display text-2xl sm:text-[1.65rem] font-bold tracking-tight leading-snug"
          style={{ color: headlineColor }}
        >
          {product.headline}
        </h3>
      </div>

      {/* Default Visual Art (Smoothly fades out and shifts down on hover) */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden mt-auto transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-6 group-hover:scale-95 [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_100%)]">
        {/* Soft top blend gradient matching card background */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 z-10"
          style={{
            background: `linear-gradient(to bottom, ${fadeColor} 0%, transparent 100%)`,
          }}
        />
        {product.renderVisual()}
      </div>

      {/* Hover Content Overlay (Smoothly slides up and fades in on hover with large clear text) */}
      <div
        className="absolute inset-x-0 bottom-0 top-[160px] p-7 sm:p-8 flex flex-col justify-between opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-out transform translate-y-6 group-hover:translate-y-0 z-30"
        style={{
          background: `linear-gradient(to top, ${fadeColor} 85%, transparent 100%)`,
        }}
      >
        <p
          className="text-sm sm:text-base md:text-[1.05rem] font-normal leading-relaxed"
          style={{ color: descColor }}
        >
          {product.description}
        </p>

        <div
          className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
          style={{ color: linkColor }}
        >
          <span>EXPAND</span>
          <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5 font-bold">›</span>
        </div>
      </div>
    </a>
  );
}
