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
    blue: 'bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800',
    dark: 'bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600',
    accent: 'bg-gradient-to-br from-accent-400 via-accent-500 to-accent-600',
  }[variant];

  const textClass = variant === 'accent' ? 'text-white' : 'text-white';
  const descClass = variant === 'accent' ? 'text-white/90' : 'text-blue-100';

  return (
    <section
      ref={ref}
      className={`${bgClass} section-padding overflow-hidden relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-400 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <h2 className={`text-2xl md:text-4xl font-bold ${textClass} mb-4`}>{title}</h2>
        <p className={`text-base md:text-lg ${descClass} max-w-xl mx-auto mb-8`}>{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryHref}
            className={`px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg transform hover:scale-105 ${
              variant === 'accent'
                ? 'bg-primary-900 text-white hover:bg-primary-800'
                : 'bg-white text-primary-600 hover:bg-blue-50'
            }`}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              to={secondaryHref}
              className={`px-8 py-3.5 rounded-xl font-semibold border-2 transition-all transform hover:scale-105 ${
                variant === 'accent'
                  ? 'border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-primary-600'
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
