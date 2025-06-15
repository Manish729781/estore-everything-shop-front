
import React from "react";

type LanguageOption = {
  code: string;
  label: string;
};

interface LanguageSwitcherProps {
  languages?: LanguageOption[];
  className?: string;
}

const languageOptions: LanguageOption[] = [
  { code: "EN", label: "English" },
  { code: "FR", label: "Français" },
  { code: "ES", label: "Español" },
  { code: "HI", label: "हिन्दी" },
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  languages = languageOptions,
  className,
}) => {
  // Placeholder: not interactive, only for layout
  return (
    <select className={`bg-gray-100 dark:bg-gray-800 text-sm rounded px-2 py-1 ${className || ""}`}>
      {languages.map(lang => (
        <option value={lang.code} key={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
