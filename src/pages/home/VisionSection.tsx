import { Smartphone, CreditCard, Brain, Building, Stethoscope, GraduationCap, Mic, Fingerprint } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const visionItems = [
  { icon: <CreditCard className="w-5 h-5" />, label: 'دفع إلكتروني', desc: 'بوابات دفع متعددة وآمنة' },
  { icon: <Brain className="w-5 h-5" />, label: 'توصيات ذكية', desc: 'تجربة شخصية بالذكاء الاصطناعي' },
  { icon: <Mic className="w-5 h-5" />, label: 'طلب صوتي', desc: 'اطلب بصوتك عبر الذكاء الاصطناعي' },
  { icon: <Fingerprint className="w-5 h-5" />, label: 'محفظة رقمية', desc: 'إدارة أموالك بأمان وسهولة' },
  { icon: <Building className="w-5 h-5" />, label: 'خدمات حكومية', desc: 'ربط رقمي بالمؤسسات الحكومية' },
  { icon: <Stethoscope className="w-5 h-5" />, label: 'خدمات طبية', desc: 'استشارات وحجوزات طبية' },
  { icon: <GraduationCap className="w-5 h-5" />, label: 'خدمات تعليمية', desc: 'منصة تعليم رقمية متكاملة' },
  { icon: <Smartphone className="w-5 h-5" />, label: 'سوبر آب', desc: 'كل ما تحتاجه في تطبيق واحد' },
];

export default function VisionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-400/20 text-accent-400 text-xs font-bold tracking-wide mb-5 shadow-sm">
            المستقبل الرقمي
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            رؤية وفرة للإعمار
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 mx-auto mb-5" />
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            من تطبيق توصيل إلى بنية تحتية رقمية شاملة تساهم في إعادة بناء اقتصاد غزة وتمكين مجتمعها
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {visionItems.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-5 md:p-6 text-center cursor-default transition-all duration-300 border border-white/[0.08] hover:border-white/[0.18] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08]"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-accent-400/5 to-transparent" />
              <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.08] text-accent-400 mb-3 group-hover:bg-accent-400/20 group-hover:text-accent-300 transition-all duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <p className="relative text-sm font-bold text-white mb-1">{item.label}</p>
              <p className="relative text-xs text-blue-200 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
