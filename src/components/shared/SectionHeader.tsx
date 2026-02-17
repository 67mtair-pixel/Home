interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, light = false, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-primary-900'}`}>
        {title}
      </h2>
      <div className={`w-16 h-1 rounded-full bg-accent-500 ${centered ? 'mx-auto' : ''} mb-4`} />
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-primary-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
