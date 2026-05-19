import type { ReactNode } from 'react';

export function Card({
  children,
  className = '',
  as: As = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
}) {
  return (
    <As
      className={`group relative overflow-hidden rounded-2xl border border-default bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-action)] ${className}`}
    >
      {children}
    </As>
  );
}
