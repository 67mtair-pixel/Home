import {
  Flame, ShieldCheck, Clock, Banknote, MapPin, ThumbsUp,
  Smartphone, MousePointerClick, Truck, PackageCheck,
} from 'lucide-react';
import ServicePageTemplate from './ServicePageTemplate';

const data = {
  heroTitle: 'وفرة غاز',
  heroDescription: 'الغاز يوصلك لباب بيتك -- خدمة توصيل الغاز الآمنة والموثوقة بأسعار شفافة وتوصيل سريع.',
  breadcrumbLabel: 'وفرة غاز',
  introTitle: 'غاز البيت بضغطة زر',
  introText: 'لا داعي للانتظار أو البحث عن موزع. وفرة غاز توصل اسطوانة الغاز لبيتك بأمان وسرعة وبسعر واضح ومعلن. خدمة مريحة تضمن لك استمرارية احتياجاتك اليومية دون عناء.',
  featuresTitle: 'لماذا وفرة غاز؟',
  featuresSubtitle: 'خدمة غاز آمنة وشفافة ومريحة',
  features: [
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'أمان أولاً', description: 'معايير سلامة صارمة في النقل والتوصيل مع سائقين مدربين ومؤهلين.' },
    { icon: <Banknote className="w-6 h-6" />, title: 'سعر شفاف', description: 'سعر واضح ومعلن بدون رسوم مخفية. تعرف على التكلفة قبل الطلب.' },
    { icon: <Clock className="w-6 h-6" />, title: 'توصيل سريع', description: 'اسطوانة الغاز توصلك في أقرب وقت مع تتبع لحظي للمندوب.' },
    { icon: <MapPin className="w-6 h-6" />, title: 'تغطية واسعة', description: 'نغطي معظم مناطق القطاع ونتوسع باستمرار لخدمة المزيد.' },
    { icon: <ThumbsUp className="w-6 h-6" />, title: 'جودة مضمونة', description: 'غاز بجودة عالية من موزعين معتمدين ومرخصين.' },
    { icon: <Flame className="w-6 h-6" />, title: 'اسطوانات مؤمّنة', description: 'فحص دوري لجميع الاسطوانات لضمان السلامة والجودة.' },
  ],
  stepsTitle: 'كيف تطلب غاز من وفرة؟',
  stepsSubtitle: 'طلب الغاز أصبح سهلاً وسريعاً',
  steps: [
    { number: 1, title: 'افتح التطبيق', description: 'اختر خدمة وفرة غاز من الشاشة الرئيسية', icon: <Smartphone className="w-8 h-8" /> },
    { number: 2, title: 'اطلب اسطوانة', description: 'حدد الحجم والكمية والعنوان', icon: <MousePointerClick className="w-8 h-8" /> },
    { number: 3, title: 'تابع المندوب', description: 'تتبع المندوب لحظياً حتى يصل لبابك', icon: <Truck className="w-8 h-8" /> },
    { number: 4, title: 'استلم بأمان', description: 'استلم الاسطوانة وادفع بالطريقة المناسبة', icon: <PackageCheck className="w-8 h-8" /> },
  ],
  faqs: [
    { question: 'ما أحجام الاسطوانات المتوفرة؟', answer: 'نوفر اسطوانات الغاز بالأحجام المتداولة محلياً. يمكنك اختيار الحجم المناسب لك من خلال التطبيق.' },
    { question: 'هل التوصيل آمن؟', answer: 'نعم، جميع سائقينا مدربون على معايير السلامة، والاسطوانات تمر بفحوصات دورية لضمان سلامتها.' },
    { question: 'كم يكلف التوصيل؟', answer: 'رسوم التوصيل ثابتة ومعلنة مسبقاً. ستعرف التكلفة الإجمالية قبل تأكيد الطلب.' },
    { question: 'هل يمكنني جدولة التوصيل؟', answer: 'نعمل على إضافة خاصية الجدولة المسبقة. حالياً يتم التوصيل بأسرع وقت ممكن بعد تأكيد الطلب.' },
  ],
  ctaTitle: 'غاز بيتك بضغطة زر',
  ctaDescription: 'حمّل التطبيق واطلب غازك بأمان وراحة',
};

export default function GasPage() {
  return <ServicePageTemplate data={data} />;
}
