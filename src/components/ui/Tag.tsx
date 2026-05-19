import type { ReactNode } from 'react';

export function Tag({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-default bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted ${className}`}
    >
      {children}
    </span>
  );
}
