import { Link } from '@tanstack/react-router';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

export function NotFound() {
  const { language } = useLanguage();

  return (
    <section className="container-page flex min-h-[80svh] flex-col items-center justify-center gap-6 text-center">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        {translations.notFound.code[language]}
      </div>
      <h1 className="aurora-text font-display text-6xl font-black leading-[1.1] tracking-tight pb-2 md:text-8xl">
        {translations.notFound.heading[language]}
      </h1>
      <p className="max-w-md text-muted">
        {translations.notFound.body[language]}
      </p>
      <Link
        to="/"
        className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent-fg)] transition-transform hover:-translate-y-0.5"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
        <span>{translations.notFound.home[language]}</span>
      </Link>
    </section>
  );
}
