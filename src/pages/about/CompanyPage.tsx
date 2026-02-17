import { Eye, Target, Heart, Lightbulb, Shield, Users, HandHeart } from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import CTABanner from '../../components/shared/CTABanner';

const values = [
  { icon: <Heart className="w-6 h-6" />, title: 'الإنسانية أولاً', description: 'نضع الإنسان في مركز كل قرار ونسعى لخدمة المجتمع بكل ما نملك.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'الابتكار', description: 'نبتكر حلولاً تقنية متكيفة مع الواقع المحلي وتلبي احتياجات المجتمع.' },
  { icon: <Shield className="w-6 h-6" />, title: 'الشفافية', description: 'نلتزم بالشفافية الكاملة في جميع عملياتنا وتعاملاتنا المالية والإنسانية.' },
  { icon: <Users className="w-6 h-6" />, title: 'التمكين', description: 'نمكّن التجار والشباب والمجتمع من بناء مستقبل اقتصادي مستدام.' },
];

const ecosystem = [
  { label: 'المستهلك', desc: 'يحصل على كل ما يحتاجه بسهولة', color: '#0146c7' },
  { label: 'التاجر', desc: 'يوسّع تجارته ويصل لعملاء جدد', color: '#16a34a' },
  { label: 'مقدم الخدمة', desc: 'يقدم خدماته عبر المنصة', color: '#0891b2' },
  { label: 'المتبرع', desc: 'يساهم بشفافية ويرى أثر تبرعه', color: '#ea580c' },
  { label: 'الجهة الإغاثية', desc: 'توزع المساعدات بكفاءة', color: '#dc2626' },
  { label: 'السائق', desc: 'يعمل بمرونة ويكسب دخلاً', color: '#7c3aed' },
];

export default function CompanyPage() {
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();

  return (
    <>
      <PageHero
        title="من نحن"
        description="وفرة -- منظومة اقتصادية إنسانية متكاملة تخدم المجتمع الفلسطيني وتبني بنية تحتية رقمية لاقتصاد غزة."
        breadcrumbs={[{ label: 'عن وفرة' }, { label: 'من نحن' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">ماذا نفعل في وفرة؟</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              وفرة ليست مجرد تطبيق -- بل هي منظومة تشغيلية اقتصادية وإنسانية وتقنية تهدف إلى بناء بنية تحتية رقمية تخدم المجتمع الفلسطيني، وتحديداً في بيئة غزة، عبر نموذج "السوبر آب" الذي يجمع بين التجارة والخدمات والتمويل والإغاثة في منصة واحدة مترابطة.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div
            ref={visionRef}
            className={`grid md:grid-cols-2 gap-8 ${visionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="bg-gradient-to-bl from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <Eye className="w-10 h-10 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">رؤيتنا</h3>
              <p className="text-primary-100 leading-relaxed">
                بناء اقتصاد محلي مرن ومستدام يخدم الإنسان أولاً، ويعيد توزيع القيمة داخل المجتمع الفلسطيني.
              </p>
            </div>
            <div className="bg-gradient-to-bl from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
              <Target className="w-10 h-10 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">رسالتنا</h3>
              <p className="text-primary-100 leading-relaxed">
                توحيد الخدمات الرقمية في منصة واحدة تسهّل الوصول للسلع والخدمات، وتمكّن التجار المحليين من التحول الرقمي، وتربط العمل التجاري بالعمل الإنساني.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title="قيمنا الأساسية" subtitle="المبادئ التي تقود كل قرار نتخذه" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 mb-4">
                  {v.icon}
                </span>
                <h3 className="text-base font-bold text-primary-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <SectionHeader title="منظومة وفرة" subtitle="وفرة تعمل كنقطة ربط بين جميع أطراف المنظومة" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ecosystem.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                  <HandHeart className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <p className="font-bold text-primary-900 text-sm mb-1">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="انضم لمنظومة وفرة"
        description="كن جزءاً من البنية التحتية الرقمية لاقتصاد غزة"
        primaryLabel="حمّل التطبيق"
        primaryHref="/#download"
        secondaryLabel="تواصل معنا"
        secondaryHref="/about/contact"
      />
    </>
  );
}
