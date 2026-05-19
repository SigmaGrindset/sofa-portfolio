import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { language, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="relative flex h-9 items-center gap-1 rounded-full border border-default px-3 font-mono text-xs uppercase tracking-wider text-fg transition hover:border-[var(--color-action)]"
    >
      <span className={language === 'en' ? 'text-fg' : 'text-muted'}>EN</span>
      <span className="text-muted">/</span>
      <span className={language === 'hr' ? 'text-fg' : 'text-muted'}>HR</span>
    </button>
  );
}
