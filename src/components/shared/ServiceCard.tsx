import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, href, color, index = 0 }: ServiceCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      to={href}
      className={`block bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <span
        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}15`, color }}
      >
        {icon}
      </span>
      <h3 className="text-lg font-bold text-primary-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 group-hover:gap-3 transition-all">
        اعرف أكثر
        <ArrowLeft className="w-4 h-4" />
      </span>
    </Link>
  );
}
