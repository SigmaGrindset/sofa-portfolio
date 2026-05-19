import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type CommonProps = {
  variant?: Variant;
  className?: string;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-action)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]';

const variants: Record<Variant, string> = {
  primary:
    'bg-fg text-[var(--color-bg)] hover:bg-[var(--color-action)] hover:text-[var(--color-action-fg)] hover:-translate-y-0.5',
  secondary:
    'border border-default text-fg hover:border-[var(--color-action)] hover:text-[var(--color-action)]',
  ghost: 'text-fg hover:text-[var(--color-action)]',
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...rest }, ref) => (
    <button ref={ref} className={`${base} ${variants[variant]} ${className}`} {...rest} />
  ),
);
Button.displayName = 'Button';

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'primary', className = '', ...rest }, ref) => (
    <a ref={ref} className={`${base} ${variants[variant]} ${className}`} {...rest} />
  ),
);
ButtonLink.displayName = 'ButtonLink';
