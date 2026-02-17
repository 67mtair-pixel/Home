import { useState } from 'react';
import {
  Building2, BarChart3, QrCode, Shield, Globe, Users,
  Handshake, Settings, Rocket, HeartHandshake,
} from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import FeatureCard from '../../components/shared/FeatureCard';
import StepsSection from '../../components/shared/StepsSection';
import CTABanner from '../../components/shared/CTABanner';

const benefits = [
  { icon: <QrCode className="w-6 h-6" />, title: 'كوبونات رقمية', description: 'توزيع المساعدات عبر كوبونات شرائية رقمية يختار بها المستفيد ما يحتاجه.' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'لوحة تحكم مخصصة', description: 'لوحة تحكم شاملة لإدارة التوزيع وتتبع المستفيدين وإنشاء التقارير.' },
  { icon: <Shield className="w-6 h-6" />, title: 'شفافية كاملة', description: 'تتبع كل تبرع وكوبون من لحظة الإنشاء حتى الاستخدام مع سجل كامل.' },
  { icon: <Globe className="w-6 h-6" />, title: 'تغطية واسعة', description: 'شبكة متاجر واسعة تغطي القطاع بأكمله لضمان وصول المساعدات.' },
  { icon: <Users className="w-6 h-6" />, title: 'إدارة المستفيدين', description: 'نظام متكامل لتسجيل وإدارة بيانات المستفيدين بأمان وخصوصية.' },
  { icon: <Building2 className="w-6 h-6" />, title: 'تقارير التأثير', description: 'تقارير دورية شاملة توضح حجم التأثير الإنساني والاقتصادي.' },
];

const steps = [
  { number: 1, title: 'تواصل معنا', description: 'قدّم طلب شراكة وسيتواصل فريقنا معكم', icon: <Handshake className="w-8 h-8" /> },
  { number: 2, title: 'إعداد النظام', description: 'نُعد لكم لوحة التحكم ونظام التوزيع', icon: <Settings className="w-8 h-8" /> },
  { number: 3, title: 'بدء التوزيع', description: 'ابدأوا بإنشاء الكوبونات وتوزيعها', icon: <Rocket className="w-8 h-8" /> },
  { number: 4, title: 'متابعة التأثير', description: 'تابعوا التقارير وقيسوا التأثير', icon: <HeartHandshake className="w-8 h-8" /> },
];

export default function AidOrgsPage() {
  const [formData, setFormData] = useState({
    orgName: '', contactName: '', email: '', phone: '', orgType: '', description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لطلب الشراكة! سيتواصل فريقنا معكم قريباً.');
  };

  return (
    <>
      <PageHero
        title="شراكة المؤسسات الإغاثية"
        description="نوفر البنية التقنية واللوجستية لتوزيع المساعدات بشفافية وكفاءة وكرامة للمستفيدين."
        breadcrumbs={[{ label: 'الشراكات' }, { label: 'شراكة مؤسسية' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title="ماذا نقدم للمؤسسات؟" subtitle="بنية تقنية متكاملة تخدم العمل الإنساني بكفاءة وشفافية" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => <FeatureCard key={i} {...b} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader title="كيف تبدأ الشراكة؟" subtitle="أربع خطوات لبدء شراكة فعالة ومؤثرة" />
          <StepsSection steps={steps} />
        </div>
      </section>

      <section className="section-padding" id="register">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">طلب شراكة مؤسسية</h2>
              <div className="w-16 h-1 rounded-full bg-accent-500 mx-auto mb-4" />
              <p className="text-gray-600">أخبرنا عن مؤسستكم وسنتواصل معكم لبحث إمكانية الشراكة</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">اسم المؤسسة</label>
                  <input type="text" required value={formData.orgName} onChange={(e) => setFormData({ ...formData, orgName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">اسم المسؤول</label>
                  <input type="text" required value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">البريد الإلكتروني</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-1.5">رقم الهاتف</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-1.5">نوع المؤسسة</label>
                <select required value={formData.orgType} onChange={(e) => setFormData({ ...formData, orgType: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm">
                  <option value="">اختر نوع المؤسسة</option>
                  <option value="ngo">منظمة غير حكومية</option>
                  <option value="ingo">منظمة دولية</option>
                  <option value="charity">جمعية خيرية</option>
                  <option value="government">مؤسسة حكومية</option>
                  <option value="other">أخرى</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-1.5">وصف المؤسسة ونوع الشراكة المطلوبة</label>
                <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={4} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm resize-none" placeholder="أخبرنا عن مؤسستكم وكيف يمكننا التعاون..." />
              </div>
              <button type="submit" className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors">
                أرسل طلب الشراكة
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTABanner
        title="معاً نصنع الفرق"
        description="انضموا لمنظومة وفرة الإغاثية وساهموا في بناء مستقبل أفضل"
        primaryLabel="تقدّم للشراكة"
        primaryHref="/partners/aid-orgs#register"
        variant="dark"
      />
    </>
  );
}
