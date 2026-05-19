import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

export function Navbar() {
  const { language } = useLanguage();
  const { location } = useRouterState();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'about', label: translations.nav.about[language] },
    { id: 'skills', label: translations.nav.skills[language] },
    { id: 'projects', label: translations.nav.projects[language] },
    { id: 'contact', label: translations.nav.contact[language] },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-default bg-[color-mix(in_srgb,var(--color-bg)_85%,transparent)] backdrop-blur'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2 font-display text-base font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-fg text-[var(--color-bg)] transition-transform group-hover:rotate-6">
            <span className="font-display text-sm font-black">A</span>
          </span>
          <span className="hidden sm:inline">Antonio B.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {isHome &&
            navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-1.5 text-sm text-muted transition hover:text-fg"
              >
                {item.label}
              </a>
            ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
