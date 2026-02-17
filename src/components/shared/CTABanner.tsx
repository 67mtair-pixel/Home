import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'blue' | 'dark' | 'accent';
}

export default function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = 'blue',
}: CTABannerProps) {
  const { ref, isVisible } = useScrollAnimation();

  const bgClass = {
    blue: 'bg-gradient-to-bl from-primary-600 to-primary-700',
    dark: 'bg-gradient-to-bl from-primary-900 to-primary-800',
    accent: 'bg-gradient-to-bl from-accent-500 to-accent-600',
  }[variant];

  const textClass = variant === 'accent' ? 'text-primary-900' : 'text-white';
  const descClass = variant === 'accent' ? 'text-primary-800' : 'text-primary-100';

  return (
    <section
      ref={ref}
      className={`${bgClass} section-padding overflow-hidden relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-500 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <h2 className={`text-2xl md:text-4xl font-bold ${textClass} mb-4`}>{title}</h2>
        <p className={`text-base md:text-lg ${descClass} max-w-xl mx-auto mb-8`}>{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryHref}
            className={`px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg ${
              variant === 'accent'
                ? 'bg-primary-900 text-white hover:bg-primary-800'
                : 'bg-accent-500 text-primary-900 hover:bg-accent-600 hover:shadow-accent-500/25'
            }`}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              to={secondaryHref}
              className={`px-8 py-3.5 rounded-xl font-semibold border-2 transition-all ${
                variant === 'accent'
                  ? 'border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
