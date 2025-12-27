"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
          language === "en"
            ? "bg-primary text-dark"
            : "text-gray-300 hover:text-primary hover:bg-primary/10"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("gr")}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
          language === "gr"
            ? "bg-primary text-dark"
            : "text-gray-300 hover:text-primary hover:bg-primary/10"
        }`}
      >
        GR
      </button>
    </div>
  );
}

