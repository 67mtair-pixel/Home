import { Lightbulb, Code, Rocket, Users, Globe, Sparkles } from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import CTABanner from '../../components/shared/CTABanner';

const timeline = [
  { year: '2024', quarter: 'الربع الأول', title: 'ولادة الفكرة', description: 'انطلقت فكرة وفرة كاستجابة حقيقية لاحتياجات المجتمع الفلسطيني في غزة -- منصة رقمية تجمع بين التجارة والإغاثة.', icon: <Lightbulb className="w-6 h-6" /> },
  { year: '2024', quarter: 'الربع الثاني', title: 'التأسيس والتطوير', description: 'بدأ فريق العمل ببناء البنية التقنية للمنصة بتقنيات Flutter وLaravel، مع تصميم نموذج العمل المبتكر.', icon: <Code className="w-6 h-6" /> },
  { year: '2024', quarter: 'الربع الثالث', title: 'الإطلاق التجريبي', description: 'إطلاق النسخة التجريبية مع مجموعة مختارة من التجار والسائقين لاختبار المنصة وتحسينها.', icon: <Rocket className="w-6 h-6" /> },
  { year: '2025', quarter: 'الربع الأول', title: 'الإطلاق الرسمي', description: 'إطلاق وفرة رسمياً مع خدمات مارت وفارما وغاز وبداية شراكات مع التجار المحليين.', icon: <Users className="w-6 h-6" /> },
  { year: '2025', quarter: 'الربع الثاني', title: 'وفرة الإغاثية', description: 'إطلاق الذراع الإنساني لوفرة مع نموذج الكوبونات الرقمية وبدء الشراكات مع المؤسسات الإغاثية.', icon: <Globe className="w-6 h-6" /> },
  { year: '2025', quarter: 'المستقبل', title: 'نحو السوبر آب', description: 'التوسع نحو المحفظة الرقمية والدفع الإلكتروني والذكاء الاصطناعي لنصبح البنية التحتية الرقمية لاقتصاد غزة.', icon: <Sparkles className="w-6 h-6" /> },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="hidden md:block w-1/2" />
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white items-center justify-center shadow-lg">
        {item.icon}
      </div>
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:mr-auto md:ml-0' : 'md:pl-12 md:ml-auto md:mr-0'}`}>
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <span className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white shrink-0">
              {item.icon}
            </span>
            <div>
              <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                {item.year} - {item.quarter}
              </span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-primary-900 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function StoryPage() {
  return (
    <>
      <PageHero
        title="قصتنا"
        description="رحلة وفرة من فكرة إلى منظومة رقمية متكاملة تخدم المجتمع الفلسطيني."
        breadcrumbs={[{ label: 'عن وفرة' }, { label: 'قصتنا' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">من الفكرة إلى المنظومة</h2>
            <p className="text-gray-600 leading-relaxed">
              بدأت وفرة كفكرة بسيطة: كيف يمكن للتقنية أن تخدم الإنسان الفلسطيني وتبني اقتصاداً محلياً مرناً ومستداماً؟ من هذا السؤال انطلقت رحلتنا.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-100" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="كن جزءاً من القصة"
        description="انضم لوفرة وساهم في كتابة الفصل القادم"
        primaryLabel="حمّل التطبيق"
        primaryHref="/#download"
        secondaryLabel="تعرّف على خدماتنا"
        secondaryHref="/"
      />
    </>
  );
}
