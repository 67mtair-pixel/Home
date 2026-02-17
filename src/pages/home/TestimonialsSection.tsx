import { Star, Quote } from 'lucide-react';
import SectionHeader from '../../components/shared/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'أحمد محمد',
    role: 'عميل من غزة',
    text: 'وفرة غيّرت طريقة تسوّقي بالكامل. أصبح بإمكاني طلب كل شيء من مكان واحد والتوصيل سريع جداً.',
  },
  {
    name: 'سميرة عبد الله',
    role: 'صاحبة متجر',
    text: 'منذ انضمامي لوفرة كتاجرة، زادت مبيعاتي بشكل ملحوظ. لوحة التحكم سهلة والدعم ممتاز.',
  },
  {
    name: 'خالد ياسين',
    role: 'سائق توصيل',
    text: 'العمل مع وفرة مرن ومريح. أختار وقتي والدخل ممتاز والتطبيق سهل الاستخدام.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          title="ماذا يقول مستخدمونا"
          subtitle="آراء حقيقية من عملاء وتجار وسائقين يثقون بوفرة"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text, index }: {
  name: string;
  role: string;
  text: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Quote className="w-8 h-8 text-primary-100 mb-4" />
      <p className="text-sm text-gray-700 leading-relaxed mb-6">{text}</p>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-accent-500 fill-accent-500" />
        ))}
      </div>
      <div>
        <p className="font-bold text-primary-900 text-sm">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
}
