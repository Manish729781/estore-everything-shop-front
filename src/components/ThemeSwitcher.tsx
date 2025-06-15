
import React from "react";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => (
  <button
    className={`bg-gray-200 dark:bg-gray-700 rounded px-2 py-1 text-sm ml-2 ${className || ""}`}
    title="Toggle theme"
  >
    🌓
  </button>
);

export default ThemeSwitcher;
