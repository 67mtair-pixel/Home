import {
  Pill, Stethoscope, TestTubes, Syringe, HeartPulse,
  Clock, ShieldCheck, BadgeCheck, Lock, FileText, ThumbsUp,
  Search, ShoppingBag, CreditCard, PackageCheck,
} from 'lucide-react';
import ServicePageTemplate from './ServicePageTemplate';

const data = {
  heroTitle: 'وفرة فارما',
  heroDescription: 'صيدليتك الإلكترونية -- اطلب أدويتك ومستلزماتك الصحية بسهولة وأمان مع ضمان الجودة.',
  breadcrumbLabel: 'وفرة فارما',
  introTitle: 'صيدليتك في جيبك',
  introText: 'وفرة فارما تربطك بأقرب صيدلية في منطقتك لتوصيل الأدوية والمستلزمات الصحية بأمان وسرعة. نحرص على ضمان جودة الأدوية وسلامة تخزينها ونقلها وفق أعلى المعايير.',
  categoriesTitle: 'الأقسام الصحية',
  categories: [
    { icon: <Pill className="w-6 h-6" />, name: 'أدوية وعلاجات', color: '#0891b2' },
    { icon: <HeartPulse className="w-6 h-6" />, name: 'صحة القلب', color: '#dc2626' },
    { icon: <TestTubes className="w-6 h-6" />, name: 'فيتامينات ومكملات', color: '#16a34a' },
    { icon: <Syringe className="w-6 h-6" />, name: 'مستلزمات طبية', color: '#0146c7' },
    { icon: <Stethoscope className="w-6 h-6" />, name: 'أجهزة صحية', color: '#7c3aed' },
  ],
  featuresTitle: 'لماذا وفرة فارما؟',
  featuresSubtitle: 'نضمن لك تجربة صحية آمنة وموثوقة',
  features: [
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'أمان تام', description: 'جميع الأدوية من صيدليات مرخصة ومعتمدة مع ضمان سلامة التخزين والنقل.' },
    { icon: <BadgeCheck className="w-6 h-6" />, title: 'صيدليات موثوقة', description: 'نتعامل فقط مع صيدليات مرخصة وتحمل جميع التراخيص اللازمة.' },
    { icon: <Clock className="w-6 h-6" />, title: 'توصيل سريع', description: 'توصيل الأدوية بأسرع وقت لأننا نعلم أن صحتك لا تنتظر.' },
    { icon: <Lock className="w-6 h-6" />, title: 'خصوصية تامة', description: 'طلباتك الصحية سرية تماماً مع حماية كاملة لبياناتك الطبية.' },
    { icon: <FileText className="w-6 h-6" />, title: 'وصفات طبية', description: 'إمكانية رفع الوصفة الطبية مع الطلب للأدوية التي تتطلب ذلك.' },
    { icon: <ThumbsUp className="w-6 h-6" />, title: 'استشارة سريعة', description: 'تواصل مع الصيدلي للحصول على إرشادات حول الأدوية والجرعات.' },
  ],
  stepsTitle: 'كيف تطلب من وفرة فارما؟',
  stepsSubtitle: 'ثلاث خطوات بسيطة لتوصيل أدويتك',
  steps: [
    { number: 1, title: 'ابحث عن دوائك', description: 'ابحث بالاسم أو الفئة أو ارفع وصفتك الطبية', icon: <Search className="w-8 h-8" /> },
    { number: 2, title: 'أضف للسلة', description: 'اختر الصيدلية وأضف المنتجات المطلوبة', icon: <ShoppingBag className="w-8 h-8" /> },
    { number: 3, title: 'أكّد الطلب', description: 'راجع طلبك واختر طريقة الدفع والتوصيل', icon: <CreditCard className="w-8 h-8" /> },
    { number: 4, title: 'استلم بأمان', description: 'دوائك يوصلك مع مراعاة ظروف التخزين', icon: <PackageCheck className="w-8 h-8" /> },
  ],
  faqs: [
    { question: 'هل أحتاج وصفة طبية لجميع الأدوية؟', answer: 'لا، فقط الأدوية التي تتطلب وصفة طبية بموجب القانون. الأدوية التي لا تحتاج وصفة والمكملات متاحة للطلب مباشرة.' },
    { question: 'كيف تضمنون جودة الأدوية؟', answer: 'نتعامل فقط مع صيدليات مرخصة، ونلتزم بمعايير التخزين والنقل الصحية. جميع الأدوية تصل بتاريخ صلاحية سليم.' },
    { question: 'هل يمكنني استشارة صيدلي؟', answer: 'نعم، يمكنك التواصل مع صيدلي معتمد عبر التطبيق للحصول على إرشادات حول الأدوية والجرعات والتفاعلات الدوائية.' },
    { question: 'ما سرعة التوصيل؟', answer: 'نسعى لتوصيل الأدوية في أسرع وقت ممكن. عادة خلال ساعة واحدة حسب الموقع وتوفر المنتج.' },
  ],
  ctaTitle: 'صحتك أولويتنا',
  ctaDescription: 'حمّل التطبيق واطلب أدويتك ومستلزماتك الصحية بأمان وسرعة',
};

export default function PharmaPage() {
  return <ServicePageTemplate data={data} />;
}
