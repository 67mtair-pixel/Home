import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300 group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 mb-4 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm group-hover:shadow-md">
        {icon}
      </span>
      <h3 className="text-lg font-bold text-primary-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
