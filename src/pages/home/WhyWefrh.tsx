import { Brain, Zap, Shield, Users, Globe, Wallet } from 'lucide-react';
import SectionHeader from '../../components/shared/SectionHeader';
import FeatureCard from '../../components/shared/FeatureCard';

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'ذكاء اصطناعي متقدم',
    description: 'تقنيات ذكية لتحسين المسارات والتوصيات وتجربة المستخدم بشكل مستمر.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'سرعة وكفاءة',
    description: 'نظام تشغيلي متكامل يضمن وصول طلبك بأسرع وقت وبأعلى جودة.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'أمان وموثوقية',
    description: 'بنية تحتية آمنة تحمي بياناتك ومعاملاتك مع ضمان الشفافية الكاملة.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'تمكين المجتمع',
    description: 'خلق فرص عمل تشغيلية وتقنية للشباب الفلسطيني وتمكين التجار المحليين.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'تغطية شاملة',
    description: 'شبكة واسعة من المتاجر والسائقين تغطي أنحاء قطاع غزة.',
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'اقتصاد مستدام',
    description: 'نموذج يعيد توزيع القيمة داخل المجتمع ويبني اقتصاداً محلياً مرناً.',
  },
];

export default function WhyWefrh() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="لماذا وفرة؟"
          subtitle="نبني نظام تشغيل اقتصادي مجتمعي يعمل على تسهيل الوصول للسلع والخدمات وتمكين المجتمع الفلسطيني"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
