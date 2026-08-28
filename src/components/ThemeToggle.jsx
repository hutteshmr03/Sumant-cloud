import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={`relative inline-flex h-9 w-[4.5rem] shrink-0 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors ${className}`}
    >
      {/* Sun */}
      <span className="absolute left-2.5 flex items-center justify-center text-ink dark:text-gray-400">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" />
        </svg>
      </span>

      {/* Moon */}
      <span className="absolute right-2.5 flex items-center justify-center text-ink dark:text-gray-300">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 14.5A7.5 7.5 0 0 1 9.5 4 9.5 9.5 0 1 0 20 14.5z" />
        </svg>
      </span>

      {/* Thumb */}
      <span
        className={`absolute top-1 left-1 h-7 w-7 rounded-full bg-white shadow-md transition-transform duration-300 ease-out ${
          isDark ? "translate-x-[2.125rem]" : "translate-x-0"
        }`}
      />
    </button>
  );
}
