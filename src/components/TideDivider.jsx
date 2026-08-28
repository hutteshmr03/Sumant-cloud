// TideDivider — the page's signature element. A hand-set wave line stands
// in for the numbered-marker / hairline-rule default. It reads as the coast
// at Vasco, and doubles as a literal register of "current state": flat
// calm before a section, a sharper break where the page changes direction.
export default function TideDivider({ tone = "foam", amplitude = "calm" }) {
  const stroke = tone === "ink" ? "#1c3350" : "#d8f0ec";
  const accent = tone === "ink" ? "#17b8a6" : "#c1592b";
  const bg = tone === "ink" ? "#0a1628" : "#f4f7f6";

  const path =
    amplitude === "calm"
      ? "M0 20 C 120 8, 240 32, 360 20 S 600 8, 720 20 S 960 32, 1080 20 S 1320 8, 1440 20"
      : "M0 24 C 90 -4, 180 52, 270 24 S 450 -4, 540 24 S 720 52, 810 24 S 990 -4, 1080 24 S 1260 52, 1350 24 S 1440 4, 1440 24";

  return (
    <div className="relative w-full h-10 md:h-14 overflow-hidden" style={{ backgroundColor: bg }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="w-[200%] h-full animate-tide-drift"
        style={{ willChange: "transform" }}
      >
        <path d={path} fill="none" stroke={stroke} strokeWidth="1.5" />
        <path d={path} fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="2 14" transform="translate(0 6)" opacity="0.8" />
        <path d={path} fill="none" stroke={stroke} strokeWidth="1.5" transform="translate(720 0)" />
        <path d={path} fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="2 14" transform="translate(720 6)" opacity="0.8" />
      </svg>
    </div>
  );
}
