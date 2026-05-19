import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

export function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-default mt-24">
      <div className="container-page py-8 text-sm text-muted">
        © {year} Antonio Batarilović. {translations.footer.rights[language]}.
      </div>
    </footer>
  );
}
