import { useState } from 'react';
import {
  Store, TrendingUp, BarChart3, Users, Smartphone, Headphones,
  UserPlus, Settings, ShoppingBag, Rocket, ChevronLeft,
} from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import FeatureCard from '../../components/shared/FeatureCard';
import StepsSection from '../../components/shared/StepsSection';
import CTABanner from '../../components/shared/CTABanner';

const benefits = [
  { icon: <TrendingUp className="w-6 h-6" />, title: 'زيادة المبيعات', description: 'توسيع قاعدة عملائك والوصول لشرائح جديدة من المستهلكين عبر المنصة.' },
  { icon: <Smartphone className="w-6 h-6" />, title: 'لوحة تحكم متكاملة', description: 'إدارة المنتجات والمخزون والطلبات والمبيعات من مكان واحد.' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'تقارير ذكية', description: 'تقارير مبيعات تفصيلية تساعدك على اتخاذ قرارات أفضل لتجارتك.' },
  { icon: <Users className="w-6 h-6" />, title: 'قاعدة عملاء واسعة', description: 'آلاف المستخدمين النشطين يبحثون يومياً عن منتجات ومتاجر جديدة.' },
  { icon: <Store className="w-6 h-6" />, title: 'تحول رقمي سهل', description: 'حوّل متجرك التقليدي لمتجر رقمي بدون تعقيد أو تكلفة عالية.' },
  { icon: <Headphones className="w-6 h-6" />, title: 'دعم متواصل', description: 'فريق دعم مخصص لمساعدتك في كل خطوة من رحلتك مع وفرة.' },
];

const steps = [
  { number: 1, title: 'سجّل اهتمامك', description: 'املأ نموذج التسجيل ببيانات متجرك', icon: <UserPlus className="w-8 h-8" /> },
  { number: 2, title: 'إعداد المتجر', description: 'فريقنا يساعدك في إعداد صفحة متجرك', icon: <Settings className="w-8 h-8" /> },
  { number: 3, title: 'أضف منتجاتك', description: 'ارفع منتجاتك وحدد الأسعار والمخزون', icon: <ShoppingBag className="w-8 h-8" /> },
  { number: 4, title: 'ابدأ البيع', description: 'استقبل الطلبات وابدأ النمو مع وفرة', icon: <Rocket className="w-8 h-8" /> },
];

const storeTypes = ['سوبرماركت', 'مطعم', 'صيدلية', 'متجر إلكترونيات', 'محل حلويات', 'متجر ملابس', 'بقالة', 'أخرى'];

export default function StorePage() {
  const [formData, setFormData] = useState({
    storeName: '', ownerName: '', phone: '', storeType: '', city: '', description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لاهتمامك! سيتواصل معك فريقنا قريباً.');
  };

  return (
    <>
      <PageHero
        title="انضم كتاجر"
        description="حوّل متجرك رقمياً وانضم لمنظومة وفرة. وسّع قاعدة عملائك وزِد مبيعاتك مع لوحة تحكم متكاملة."
        breadcrumbs={[{ label: 'الشراكات' }, { label: 'انضم كتاجر' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title="لماذا تنضم لوفرة؟" subtitle="مميزات تجعل من وفرة الشريك الأمثل لنمو تجارتك" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => <FeatureCard key={i} {...b} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader title="كيف تبدأ؟" subtitle="أربع خطوات بسيطة وتبدأ رحلتك الرقمية مع وفرة" />
          <StepsSection steps={steps} />
        </div>
      </section>

      <section className="section-padding" id="register">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">سجّل اهتمامك الآن</h2>
              <div className="w-16 h-1 rounded-full bg-accent-500 mb-4" />
              <p className="text-gray-600 mb-8">
                املأ النموذج التالي وسيتواصل معك فريقنا خلال 24 ساعة لمساعدتك في البدء.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <ChevronLeft className="w-5 h-5" />, text: 'تسجيل مجاني بدون رسوم اشتراك' },
                  { icon: <ChevronLeft className="w-5 h-5" />, text: 'دعم فني متواصل خلال رحلة الإعداد' },
                  { icon: <ChevronLeft className="w-5 h-5" />, text: 'تدريب شامل على استخدام لوحة التحكم' },
                  { icon: <ChevronLeft className="w-5 h-5" />, text: 'عمولات تنافسية وشفافة' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-50 text-primary-600">{item.icon}</span>
                    <span className="text-sm font-medium text-primary-900">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">اسم المتجر</label>
                  <input
                    type="text"
                    required
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                    placeholder="مثال: متجر السلام"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">اسم صاحب المتجر</label>
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                    placeholder="الاسم الكامل"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">رقم الهاتف</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                    placeholder="059XXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">نوع المتجر</label>
                  <select
                    required
                    value={formData.storeType}
                    onChange={(e) => setFormData({ ...formData, storeType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                  >
                    <option value="">اختر نوع المتجر</option>
                    {storeTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-1.5">المنطقة / المدينة</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                  placeholder="مثال: غزة - الرمال"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-1.5">وصف مختصر (اختياري)</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm resize-none"
                  placeholder="أخبرنا عن متجرك..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
              >
                سجّل اهتمامك
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTABanner
        title="جاهز للنمو مع وفرة؟"
        description="انضم لمئات التجار الذين وسّعوا تجارتهم عبر منصة وفرة"
        primaryLabel="سجّل الآن"
        primaryHref="/partners/store#register"
        variant="dark"
      />
    </>
  );
}
