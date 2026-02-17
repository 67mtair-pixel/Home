import { useState } from 'react';
import {
  Bike, Wallet, Clock, ShieldCheck, Smartphone, Award,
  UserPlus, FileCheck, MapPin, Rocket,
} from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import FeatureCard from '../../components/shared/FeatureCard';
import StepsSection from '../../components/shared/StepsSection';
import CTABanner from '../../components/shared/CTABanner';

const benefits = [
  { icon: <Wallet className="w-6 h-6" />, title: 'دخل مجزي', description: 'اكسب دخلاً جيداً مع عمولات تنافسية على كل طلب توصّله.' },
  { icon: <Clock className="w-6 h-6" />, title: 'مرونة كاملة', description: 'اختر أوقات عملك بنفسك. اعمل وقت ما تريد وبالقدر الذي يناسبك.' },
  { icon: <Smartphone className="w-6 h-6" />, title: 'تطبيق سهل', description: 'تطبيق مخصص للسائقين سهل الاستخدام لإدارة الطلبات والأرباح.' },
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'تأمين ودعم', description: 'نوفر لك الدعم المتواصل والتأمين اللازم أثناء العمل.' },
  { icon: <MapPin className="w-6 h-6" />, title: 'طلبات قريبة', description: 'نظام ذكي يوزع الطلبات حسب موقعك لتوفير الوقت والجهد.' },
  { icon: <Award className="w-6 h-6" />, title: 'حوافز ومكافآت', description: 'نظام حوافز ومكافآت للسائقين المتميزين مع تقييمات عالية.' },
];

const steps = [
  { number: 1, title: 'سجّل بياناتك', description: 'املأ نموذج التسجيل ببياناتك الأساسية', icon: <UserPlus className="w-8 h-8" /> },
  { number: 2, title: 'أكمل المتطلبات', description: 'ارفع المستندات المطلوبة (هوية، رخصة)', icon: <FileCheck className="w-8 h-8" /> },
  { number: 3, title: 'التدريب والتفعيل', description: 'تدريب سريع على التطبيق وآلية العمل', icon: <Bike className="w-8 h-8" /> },
  { number: 4, title: 'ابدأ العمل', description: 'افتح التطبيق واستلم أول طلب', icon: <Rocket className="w-8 h-8" /> },
];

const requirements = [
  'العمر 18 سنة فما فوق',
  'هوية شخصية سارية المفعول',
  'هاتف ذكي بنظام Android أو iOS',
  'وسيلة نقل (دراجة نارية / هوائية / سيارة)',
  'رخصة قيادة سارية (للمركبات)',
  'معرفة جيدة بمناطق القطاع',
];

export default function RiderPage() {
  const [formData, setFormData] = useState({
    fullName: '', phone: '', city: '', vehicleType: '', age: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لتسجيلك! سيتواصل معك فريقنا قريباً.');
  };

  return (
    <>
      <PageHero
        title="كن سائقاً مع وفرة"
        description="اعمل بمرونة واكسب دخلاً مجزياً. انضم لفريق سائقي وفرة واختر وقتك ومسارك."
        breadcrumbs={[{ label: 'الشراكات' }, { label: 'كن سائقاً' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title="لماذا تعمل مع وفرة؟" subtitle="مميزات تجعل العمل معنا فرصة لا تُفوّت" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => <FeatureCard key={i} {...b} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader title="خطوات الانضمام" subtitle="أربع خطوات بسيطة وتبدأ العمل" />
          <StepsSection steps={steps} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">المتطلبات</h2>
              <div className="w-16 h-1 rounded-full bg-accent-500 mb-6" />
              <p className="text-gray-600 mb-6">للانضمام كسائق مع وفرة، تحتاج لتوفير التالي:</p>
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                    <span className="text-sm text-primary-900">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 space-y-5" id="register">
              <h3 className="text-lg font-bold text-primary-900 mb-2">سجّل كسائق</h3>
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-1.5">الاسم الكامل</label>
                <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" placeholder="الاسم الثلاثي" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">رقم الهاتف</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" placeholder="059XXXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">العمر</label>
                  <input type="number" required min={18} value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" placeholder="العمر" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">المنطقة</label>
                  <input type="text" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" placeholder="مثال: غزة - الشجاعية" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">وسيلة النقل</label>
                  <select required value={formData.vehicleType} onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm">
                    <option value="">اختر وسيلة النقل</option>
                    <option value="motorcycle">دراجة نارية</option>
                    <option value="bicycle">دراجة هوائية</option>
                    <option value="car">سيارة</option>
                    <option value="walking">مشي</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors">
                سجّل كسائق
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTABanner
        title="ابدأ رحلتك مع وفرة اليوم"
        description="انضم لمئات السائقين الذين يعملون بمرونة ويكسبون دخلاً مجزياً"
        primaryLabel="سجّل الآن"
        primaryHref="/partners/rider#register"
        variant="blue"
      />
    </>
  );
}
