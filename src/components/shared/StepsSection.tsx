import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StepsSectionProps {
  steps: Step[];
}

export default function StepsSection({ steps }: StepsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <StepCard key={i} step={step} index={i} />
      ))}
    </div>
  );
}

function StepCard({ step, index }: { step: Step; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-50 text-primary-600 mb-4">
        {step.icon}
        <span className="absolute -top-1 -right-1 w-7 h-7 bg-accent-500 text-primary-900 rounded-full text-xs font-bold flex items-center justify-center">
          {step.number}
        </span>
      </div>
      <h3 className="text-base font-bold text-primary-900 mb-2">{step.title}</h3>
      <p className="text-sm text-gray-600">{step.description}</p>
    </div>
  );
}
