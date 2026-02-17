import { Link } from 'react-router-dom';
import { Store, Bike, Building2, ArrowLeft } from 'lucide-react';
import SectionHeader from '../../components/shared/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const partners = [
  {
    icon: <Store className="w-8 h-8" />,
    title: 'انضم كتاجر',
    description: 'حوّل متجرك رقمياً وتوسّع بقاعدة عملائك مع لوحة تحكم متكاملة لإدارة المنتجات والطلبات والمبيعات.',
    href: '/partners/store',
    color: '#16a34a',
  },
  {
    icon: <Bike className="w-8 h-8" />,
    title: 'كن سائقاً مع وفرة',
    description: 'اعمل بمرونة واكسب دخلاً إضافياً. اختر وقتك واستلم طلباتك وحقق أرباحك بسهولة.',
    href: '/partners/rider',
    color: '#ea580c',
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'شراكة مؤسسية',
    description: 'للمؤسسات الإغاثية والإنسانية -- نوفر البنية التقنية واللوجستية لتوزيع المساعدات بشفافية وكفاءة.',
    href: '/partners/aid-orgs',
    color: '#0146c7',
  },
];

export default function PartnersSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          title="كن جزءاً من وفرة"
          subtitle="انضم لمنظومة وفرة وساهم في بناء الاقتصاد الرقمي المحلي"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <PartnerCard key={partner.href} {...partner} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ icon, title, description, href, color, index }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <span
        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}15`, color }}
      >
        {icon}
      </span>
      <h3 className="text-xl font-bold text-primary-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-6">{description}</p>
      <Link
        to={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:gap-3 transition-all"
      >
        اعرف المزيد
        <ArrowLeft className="w-4 h-4" />
      </Link>
    </div>
  );
}
