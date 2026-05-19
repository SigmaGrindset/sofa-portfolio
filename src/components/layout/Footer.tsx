import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

export function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-default mt-24">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-8 text-sm text-muted md:flex-row md:items-center">
        <div>
          © {year} Antonio Batarilović. {translations.footer.rights[language]}.
        </div>
        <div className="font-mono text-xs uppercase tracking-wider">
          {translations.footer.builtWith[language]}
        </div>
      </div>
    </footer>
  );
}
