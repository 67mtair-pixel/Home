import { Link } from 'react-router-dom';
import {
  ShoppingBag, CreditCard, User, Monitor, Phone, Mail,
  MessageCircle, Clock, ArrowLeft,
} from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import FAQAccordion from '../../components/shared/FAQAccordion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const supportCategories = [
  { icon: <ShoppingBag className="w-6 h-6" />, title: 'مشاكل الطلبات', description: 'طلب متأخر، خاطئ، أو ناقص', color: '#0146c7' },
  { icon: <CreditCard className="w-6 h-6" />, title: 'مشاكل الدفع', description: 'استرجاع، مبالغ مكررة، أخطاء', color: '#16a34a' },
  { icon: <User className="w-6 h-6" />, title: 'مشاكل الحساب', description: 'تسجيل، تفعيل، كلمة المرور', color: '#ea580c' },
  { icon: <Monitor className="w-6 h-6" />, title: 'مشاكل تقنية', description: 'التطبيق لا يعمل، أخطاء، تحديثات', color: '#dc2626' },
];

const contactMethods = [
  { icon: <Phone className="w-5 h-5" />, title: 'اتصل بنا', value: '+970 59 123 4567', action: 'اتصل الآن' },
  { icon: <Mail className="w-5 h-5" />, title: 'راسلنا', value: 'support@wefrh.com', action: 'أرسل بريد' },
  { icon: <MessageCircle className="w-5 h-5" />, title: 'دردشة مباشرة', value: 'متاحة في التطبيق', action: 'افتح التطبيق' },
];

const quickFAQs = [
  { question: 'طلبي لم يصل في الوقت المحدد', answer: 'يمكنك تتبع طلبك من التطبيق. إذا تجاوز الوقت المتوقع، تواصل مع الدعم وسنحل المشكلة فوراً.' },
  { question: 'أريد إلغاء طلبي', answer: 'يمكنك إلغاء الطلب من التطبيق قبل بدء التجهيز. بعد ذلك يُرجى التواصل مع الدعم.' },
  { question: 'لا أستطيع تسجيل الدخول', answer: 'تأكد من رقم الهاتف وكلمة المرور. يمكنك استعادة كلمة المرور من شاشة تسجيل الدخول.' },
  { question: 'كيف أحدّث بيانات حسابي؟', answer: 'اذهب لصفحة "حسابي" في التطبيق واضغط على "تعديل" لتحديث بياناتك الشخصية.' },
];

function CategoryCard({ item, index }: { item: typeof supportCategories[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all text-center group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
        {item.icon}
      </span>
      <h3 className="text-base font-bold text-primary-900 mb-1">{item.title}</h3>
      <p className="text-xs text-gray-500">{item.description}</p>
    </div>
  );
}

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="مركز الدعم"
        description="نحن هنا لمساعدتك. اختر طريقة التواصل المناسبة أو تصفح حلول المشاكل الشائعة."
        breadcrumbs={[{ label: 'عن وفرة' }, { label: 'مركز الدعم' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title="كيف يمكننا مساعدتك؟" subtitle="اختر تصنيف مشكلتك" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportCategories.map((cat, i) => <CategoryCard key={i} item={cat} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader title="طرق التواصل" subtitle="اختر الطريقة الأسرع والأنسب لك" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-4">
                  {method.icon}
                </span>
                <h3 className="font-bold text-primary-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{method.value}</p>
                <span className="text-sm font-semibold text-primary-600">{method.action}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>ساعات العمل: السبت - الخميس، 8:00 صباحاً - 8:00 مساءً</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title="حلول سريعة" subtitle="إجابات لأكثر المشاكل شيوعاً" />
          <div className="max-w-3xl mx-auto mb-8">
            <FAQAccordion items={quickFAQs} />
          </div>
          <div className="text-center">
            <Link to="/about/faq" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
              عرض جميع الأسئلة الشائعة
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
