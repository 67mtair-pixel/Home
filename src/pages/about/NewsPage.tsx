import { Calendar, ArrowLeft } from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const newsItems = [
  { title: 'إطلاق وفرة رسمياً في قطاع غزة', date: '2025-02-01', category: 'إطلاقات', summary: 'أعلنت منصة وفرة عن إطلاقها الرسمي كأول سوبر آب فلسطيني يخدم المجتمع في قطاع غزة مع خدمات متعددة.', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'شراكة استراتيجية مع مؤسسات إغاثية', date: '2025-01-20', category: 'شراكات', summary: 'وقّعت وفرة شراكات مع عدة مؤسسات إغاثية لتوزيع المساعدات عبر نموذج الكوبونات الرقمية المبتكر.', image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'وصول عدد التجار الشركاء إلى 500 تاجر', date: '2025-01-15', category: 'أرقام', summary: 'حققت وفرة إنجازاً جديداً بانضمام أكثر من 500 تاجر محلي لمنصتها الرقمية خلال الأشهر الأولى.', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'إطلاق خدمة وفرة فارما', date: '2025-01-10', category: 'خدمات', summary: 'أطلقت وفرة خدمة الصيدلية الإلكترونية "وفرة فارما" لتوصيل الأدوية والمستلزمات الصحية بأمان وسرعة.', image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'وفرة غاز: خدمة توصيل الغاز الآمنة', date: '2024-12-20', category: 'خدمات', summary: 'إطلاق خدمة وفرة غاز لتوصيل اسطوانات الغاز بأمان وشفافية في الأسعار مع تتبع لحظي.', image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'وفرة الإغاثية: نموذج إنساني مبتكر', date: '2024-12-10', category: 'إغاثة', summary: 'أعلنت وفرة عن نموذجها الإغاثي المبتكر الذي يدمج الإغاثة بالتجارة عبر الكوبونات الرقمية.', image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

function NewsCard({ item, index }: { item: typeof newsItems[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <article
      ref={ref}
      className={`bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">{item.category}</span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            {new Date(item.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        <h3 className="text-base font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.summary}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
          اقرأ المزيد
          <ArrowLeft className="w-4 h-4" />
        </span>
      </div>
    </article>
  );
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="الأخبار"
        description="آخر التحديثات والأخبار من منصة وفرة."
        breadcrumbs={[{ label: 'عن وفرة' }, { label: 'الأخبار' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <NewsCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
