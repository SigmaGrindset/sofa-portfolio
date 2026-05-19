import { createContext, useContext, useState, useCallback, useEffect, type ReactNode, createElement } from 'react';
import type { Language } from '@/data/translations';

type LanguageContextValue = {
  language: Language;
  toggle: () => void;
  setLanguage: (l: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitial = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem('language');
  return stored === 'hr' || stored === 'en' ? stored : 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitial);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggle = useCallback(() => {
    setLanguage((l) => (l === 'en' ? 'hr' : 'en'));
  }, []);

  return createElement(LanguageContext.Provider, { value: { language, toggle, setLanguage } }, children);
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function t<T extends { en: string; hr: string }>(value: T, language: Language): string {
  return value[language];
}
