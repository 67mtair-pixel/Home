import { Truck, ShoppingBag, Wallet, Brain, Building, Stethoscope, GraduationCap, Globe } from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import CTABanner from '../../components/shared/CTABanner';

const phases = [
  {
    phase: 'المرحلة الأولى',
    title: 'بنية التوصيل',
    status: 'الآن',
    color: '#16a34a',
    items: ['تطبيق توصيل متعدد القطاعات', 'شبكة تجار وسائقين', 'لوحات تحكم للتجار والأدمن', 'خدمات مارت وفارما وغاز وكير'],
    icon: <Truck className="w-8 h-8" />,
  },
  {
    phase: 'المرحلة الثانية',
    title: 'السوق الرقمي',
    status: 'قريباً',
    color: '#0146c7',
    items: ['سوق إلكتروني متكامل', 'إدارة مخزون متقدمة', 'تجميع الطلبات', 'البيع بالتجزئة والجملة'],
    icon: <ShoppingBag className="w-8 h-8" />,
  },
  {
    phase: 'المرحلة الثالثة',
    title: 'البنية المالية',
    status: 'مخطط',
    color: '#ea580c',
    items: ['محفظة رقمية', 'مدفوعات بين الأفراد', 'نظام نقاط ومكافآت', 'تمويل مصغر مستقبلاً'],
    icon: <Wallet className="w-8 h-8" />,
  },
  {
    phase: 'المرحلة الرابعة',
    title: 'السوبر آب',
    status: 'رؤية',
    color: '#dc2626',
    items: ['ذكاء اصطناعي وتوصيات', 'طلب صوتي', 'خدمات حكومية وطبية وتعليمية', 'بنية تحتية رقمية شاملة'],
    icon: <Brain className="w-8 h-8" />,
  },
];

const superAppServices = [
  { icon: <Wallet className="w-6 h-6" />, label: 'دفع إلكتروني' },
  { icon: <Brain className="w-6 h-6" />, label: 'ذكاء اصطناعي' },
  { icon: <Building className="w-6 h-6" />, label: 'خدمات حكومية' },
  { icon: <Stethoscope className="w-6 h-6" />, label: 'خدمات طبية' },
  { icon: <GraduationCap className="w-6 h-6" />, label: 'خدمات تعليمية' },
  { icon: <Globe className="w-6 h-6" />, label: 'تغطية شاملة' },
];

function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="p-6" style={{ borderTop: `4px solid ${phase.color}` }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: `${phase.color}15`, color: phase.color }}>
            {phase.status}
          </span>
          <span style={{ color: phase.color }}>{phase.icon}</span>
        </div>
        <p className="text-xs text-gray-500 mb-1">{phase.phase}</p>
        <h3 className="text-lg font-bold text-primary-900 mb-4">{phase.title}</h3>
        <ul className="space-y-2">
          {phase.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: phase.color }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function StrategyPage() {
  return (
    <>
      <PageHero
        title="استراتيجيتنا"
        description="رؤيتنا الاستراتيجية وخارطة الطريق نحو بناء البنية التحتية الرقمية لاقتصاد غزة."
        breadcrumbs={[{ label: 'عن وفرة' }, { label: 'استراتيجيتنا' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">من تطبيق توصيل إلى بنية تحتية رقمية</h2>
            <p className="text-gray-600 leading-relaxed">
              استراتيجية وفرة تقوم على التوسع المرحلي المدروس من تطبيق توصيل إلى منظومة رقمية شاملة تخدم كل جوانب حياة المواطن الفلسطيني.
            </p>
          </div>
          <SectionHeader title="خارطة الطريق" subtitle="أربع مراحل استراتيجية نحو السوبر آب" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, i) => <PhaseCard key={i} phase={phase} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-bl from-primary-900 to-primary-800">
        <div className="container-custom">
          <SectionHeader title="رؤية السوبر آب" subtitle="التوسع نحو خدمات شاملة تغطي كل جوانب الحياة" light />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {superAppServices.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/20 transition-colors">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/20 text-accent-500 mb-3">
                  {s.icon}
                </span>
                <p className="text-sm font-semibold text-white">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="شارك في بناء المستقبل"
        description="انضم لمنظومة وفرة كتاجر أو سائق أو شريك وساهم في بناء الاقتصاد الرقمي"
        primaryLabel="انضم الآن"
        primaryHref="/partners/store"
        secondaryLabel="تعرّف على خدماتنا"
        secondaryHref="/"
        variant="accent"
      />
    </>
  );
}
