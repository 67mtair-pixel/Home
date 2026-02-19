import { Link } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 pt-40 md:pt-44 pb-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronLeft className="w-3 h-3" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">{title}</h1>
        {description && (
          <p className="text-lg text-blue-100 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
