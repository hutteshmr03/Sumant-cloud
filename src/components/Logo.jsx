export default function Logo({ variant = "on-dark", className = "" }) {
  const isLightBg = variant === "on-light";

  return (
    <img
      src="/sumant-cloud-logo.png"
      alt="Sumant Cloud"
      className={`w-auto object-contain transition-[filter,opacity] duration-300 ${
        isLightBg ? "logo-on-light" : "logo-on-dark"
      } ${className}`}
    />
  );
}
