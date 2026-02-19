import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Pill, Flame, HandHeart, ArrowLeft } from 'lucide-react';
import SectionHeader from '../../components/shared/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'وفرة مارت',
    description: 'السوق الرقمي المتكامل -- سوبرماركت، خضار وفواكه، حلويات، إلكترونيات، ومنتجات متنوعة بين يديك.',
    href: '/services/mart',
    color: '#22c55e',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'lg:col-span-3',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'وفرة كير',
    description: 'تجربة العناية والجمال -- منتجات العناية الشخصية والصحية توصلك لباب بيتك بأفضل الأسعار.',
    href: '/services/care',
    color: '#f472b6',
    image: 'https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'lg:col-span-3',
  },
  {
    icon: <Pill className="w-6 h-6" />,
    title: 'وفرة فارما',
    description: 'صيدليتك الإلكترونية -- اطلب أدويتك ومستلزماتك الصحية بسهولة وأمان.',
    href: '/services/pharma',
    color: '#22d3ee',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'lg:col-span-2',
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: 'وفرة غاز',
    description: 'الغاز يوصلك لباب بيتك -- خدمة توصيل آمنة وموثوقة.',
    href: '/services/gas',
    color: '#fb923c',
    image: 'https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'lg:col-span-2',
  },
  {
    icon: <HandHeart className="w-6 h-6" />,
    title: 'وفرة الإغاثية',
    description: 'الأثر الإنساني الرقمي -- ربط المتبرعين بالمستفيدين عبر كوبونات رقمية.',
    href: '/services/aid',
    color: '#f87171',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'lg:col-span-2',
  },
];

export default function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          title="الأذرع التشغيلية لوفرة"
          subtitle="منظومة خدمات متكاملة تغطي احتياجاتك اليومية وتربط بين التجارة والإغاثة في منصة واحدة"
        />
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {services.map((service, i) => (
            <BentoCard key={service.href} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon,
  title,
  description,
  href,
  color,
  image,
  span,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
  image: string;
  span: string;
  index: number;
}) {
  const isLarge = index < 2;

  return (
    <Link
      to={href}
      className={`${span} relative group rounded-2xl overflow-hidden block`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={`relative ${isLarge ? 'h-72 sm:h-80' : 'h-64 sm:h-72'}`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-all duration-500 group-hover:from-black/85 group-hover:via-black/50" />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${color}30`, color }}
          >
            {icon}
          </span>
          <h3 className="text-xl font-bold text-white mb-1.5">{title}</h3>
          <p className="text-sm text-white/75 leading-relaxed line-clamp-2 mb-3">{description}</p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:text-accent-400 group-hover:gap-3 transition-all duration-300">
            اعرف أكثر
            <ArrowLeft className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
