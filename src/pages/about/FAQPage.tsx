import { useState } from 'react';
import PageHero from '../../components/shared/PageHero';
import FAQAccordion from '../../components/shared/FAQAccordion';

const faqCategories = [
  {
    id: 'general',
    label: 'عام',
    faqs: [
      { question: 'ما هي وفرة؟', answer: 'وفرة هي منصة رقمية فلسطينية متكاملة تعمل كسوبر آب يجمع بين التجارة والخدمات والإغاثة في تطبيق واحد يخدم المجتمع الفلسطيني.' },
      { question: 'هل وفرة مجانية؟', answer: 'نعم، تحميل واستخدام تطبيق وفرة مجاني تماماً. تُطبق رسوم توصيل بسيطة على الطلبات.' },
      { question: 'ما المناطق التي تغطيها وفرة؟', answer: 'وفرة تغطي حالياً معظم مناطق قطاع غزة وتتوسع باستمرار.' },
      { question: 'كيف أحمّل التطبيق؟', answer: 'يمكنك تحميل تطبيق وفرة من متجر Google Play لأجهزة Android أو App Store لأجهزة iPhone.' },
      { question: 'هل أحتاج لحساب لاستخدام وفرة؟', answer: 'نعم، تحتاج لإنشاء حساب برقم هاتفك لاستخدام خدمات وفرة. التسجيل سريع ومجاني.' },
    ],
  },
  {
    id: 'orders',
    label: 'الطلبات',
    faqs: [
      { question: 'كيف أقدم طلباً؟', answer: 'اختر الخدمة (مارت، فارما، كير، غاز)، ثم تصفح المتاجر والمنتجات، أضف ما تريد لسلة المشتريات، واختر طريقة الدفع وعنوان التوصيل، ثم أكّد الطلب.' },
      { question: 'هل يمكنني تتبع طلبي؟', answer: 'نعم، يمكنك تتبع حالة طلبك لحظياً من لحظة تأكيده حتى وصوله لبابك.' },
      { question: 'هل يمكنني إلغاء طلبي؟', answer: 'يمكنك إلغاء الطلب قبل أن يبدأ التاجر في تجهيزه. بعد ذلك يُرجى مراجعة سياسة الإلغاء.' },
      { question: 'ماذا أفعل إذا وصل طلب خاطئ؟', answer: 'تواصل مع فريق الدعم فوراً وسنعمل على حل المشكلة في أسرع وقت.' },
    ],
  },
  {
    id: 'delivery',
    label: 'التوصيل',
    faqs: [
      { question: 'كم يستغرق التوصيل عادة؟', answer: 'يعتمد على نوع الخدمة وموقعك. عادة ما يتراوح بين 30-60 دقيقة للطلبات العادية.' },
      { question: 'ما هي رسوم التوصيل؟', answer: 'تبدأ رسوم التوصيل من 10 شيكل وقد تختلف حسب المسافة ونوع الطلب. يتم عرض الرسوم قبل تأكيد الطلب.' },
      { question: 'هل يمكنني تغيير عنوان التوصيل؟', answer: 'يمكنك تغيير العنوان قبل بدء التوصيل. تواصل مع الدعم إذا كان التوصيل قد بدأ.' },
    ],
  },
  {
    id: 'payment',
    label: 'الدفع',
    faqs: [
      { question: 'ما طرق الدفع المتاحة؟', answer: 'حالياً نوفر الدفع عند الاستلام. نعمل على إضافة خيارات الدفع الإلكتروني والمحفظة الرقمية قريباً.' },
      { question: 'هل الدفع آمن؟', answer: 'نعم، جميع المعاملات المالية تتم بأمان تام مع حماية كاملة لبياناتك.' },
    ],
  },
  {
    id: 'partners',
    label: 'الشراكات',
    faqs: [
      { question: 'كيف أنضم كتاجر؟', answer: 'يمكنك التسجيل من خلال صفحة "انضم كتاجر" وملء نموذج التسجيل. سيتواصل فريقنا معك خلال 24 ساعة.' },
      { question: 'كيف أعمل كسائق؟', answer: 'سجّل من صفحة "كن سائقاً" وأكمل المتطلبات (هوية، رخصة، هاتف ذكي). بعد الموافقة ستتلقى تدريباً سريعاً.' },
      { question: 'ما هي عمولة وفرة على التجار؟', answer: 'العمولات تنافسية وشفافة وتختلف حسب نوع المتجر وحجم المبيعات. تفاصيل كاملة عند التسجيل.' },
      { question: 'هل يمكن لمؤسستنا الإغاثية الانضمام؟', answer: 'بالتأكيد! نرحب بالشراكات المؤسسية. تواصلوا معنا عبر صفحة "شراكة مؤسسية" وسنبحث التعاون.' },
    ],
  },
  {
    id: 'relief',
    label: 'الإغاثة',
    faqs: [
      { question: 'كيف تعمل الإغاثة الرقمية؟', answer: 'المتبرع يشتري كوبوناً رقمياً، المستفيد يستلمه ويختار ما يحتاجه من المتاجر المحلية. نظام شفاف يحفظ كرامة المستفيد.' },
      { question: 'كيف أتبرع؟', answer: 'يمكنك التبرع عبر التطبيق بشراء كوبون رقمي بالقيمة التي تختارها وتوجيهه لمستفيد أو مؤسسة.' },
      { question: 'هل يمكنني تتبع تبرعي؟', answer: 'نعم، نوفر شفافية كاملة. يمكنك تتبع تبرعك من لحظة الشراء حتى استخدامه مع تقرير عن التأثير.' },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const active = faqCategories.find((c) => c.id === activeCategory)!;

  return (
    <>
      <PageHero
        title="الأسئلة الشائعة"
        description="إجابات لأكثر الأسئلة شيوعاً حول منصة وفرة وخدماتها."
        breadcrumbs={[{ label: 'عن وفرة' }, { label: 'الأسئلة الشائعة' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={active.faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
