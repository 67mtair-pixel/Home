import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  light?: boolean;
}

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('ar-EG')}{suffix}
    </span>
  );
}

export default function StatsCounter({ stats, light = false }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <p className={`text-3xl md:text-5xl font-bold mb-2 ${light ? 'text-accent-500' : 'text-primary-600'}`}>
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
          </p>
          <p className={`text-sm ${light ? 'text-primary-200' : 'text-gray-600'}`}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
