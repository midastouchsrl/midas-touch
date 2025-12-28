"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { translations, type Locale, type Translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "midas-touch-locale";

// List of Italian country codes
const ITALIAN_COUNTRIES = ["IT"];

async function detectCountryFromIP(): Promise<string | null> {
  try {
    // Using a free geolocation API
    const response = await fetch("https://ipapi.co/json/", {
      signal: AbortSignal.timeout(3000), // 3 second timeout
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.country_code || null;
  } catch {
    // Fallback: try another service
    try {
      const response = await fetch("https://ip-api.com/json/?fields=countryCode", {
        signal: AbortSignal.timeout(3000),
      });
      if (!response.ok) return null;
      const data = await response.json();
      return data.countryCode || null;
    } catch {
      return null;
    }
  }
}

function getDefaultLocale(): Locale {
  // Check localStorage first
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "it") {
      return stored;
    }
  }
  return "en"; // Default to English, will be updated by geolocation
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isLoading, setIsLoading] = useState(true);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    }
  }, []);

  useEffect(() => {
    async function initializeLocale() {
      // First check localStorage
      const storedLocale = localStorage.getItem(STORAGE_KEY);
      if (storedLocale === "en" || storedLocale === "it") {
        setLocaleState(storedLocale);
        document.documentElement.lang = storedLocale;
        setIsLoading(false);
        return;
      }

      // If no stored preference, detect from geolocation
      const countryCode = await detectCountryFromIP();
      const detectedLocale: Locale = ITALIAN_COUNTRIES.includes(countryCode || "")
        ? "it"
        : "en";

      setLocaleState(detectedLocale);
      document.documentElement.lang = detectedLocale;
      localStorage.setItem(STORAGE_KEY, detectedLocale);
      setIsLoading(false);
    }

    initializeLocale();
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
