import {
  Heart, Sparkles, Droplets, Leaf, Baby,
  Clock, BadgeCheck, Truck, Gift, ShieldCheck, Star,
  Search, ShoppingBag, CreditCard, PackageCheck,
} from 'lucide-react';
import ServicePageTemplate from './ServicePageTemplate';

const data = {
  heroTitle: 'وفرة كير',
  heroDescription: 'تجربة العناية والجمال -- منتجات العناية الشخصية والصحية توصلك لباب بيتك بأفضل الأسعار.',
  breadcrumbLabel: 'وفرة كير',
  introTitle: 'اهتم بنفسك مع وفرة كير',
  introText: 'وفرة كير توفر لك تشكيلة واسعة من منتجات العناية الشخصية والجمال والصحة من أفضل العلامات التجارية المحلية والعالمية، مع خدمة توصيل سريعة ومريحة.',
  categoriesTitle: 'أقسام وفرة كير',
  categories: [
    { icon: <Sparkles className="w-6 h-6" />, name: 'العناية بالبشرة', color: '#ec4899' },
    { icon: <Droplets className="w-6 h-6" />, name: 'العناية بالشعر', color: '#8b5cf6' },
    { icon: <Heart className="w-6 h-6" />, name: 'المكياج والجمال', color: '#e11d48' },
    { icon: <Leaf className="w-6 h-6" />, name: 'منتجات طبيعية', color: '#16a34a' },
    { icon: <Baby className="w-6 h-6" />, name: 'عناية الأطفال', color: '#0891b2' },
  ],
  featuresTitle: 'لماذا وفرة كير؟',
  featuresSubtitle: 'نوفر لك أفضل تجربة تسوق لمنتجات العناية والجمال',
  features: [
    { icon: <BadgeCheck className="w-6 h-6" />, title: 'منتجات أصلية', description: 'جميع المنتجات أصلية ومضمونة من مصادر موثوقة ومعتمدة.' },
    { icon: <Star className="w-6 h-6" />, title: 'أفضل العلامات', description: 'تشكيلة واسعة من أشهر العلامات التجارية المحلية والعالمية.' },
    { icon: <Gift className="w-6 h-6" />, title: 'عروض مستمرة', description: 'خصومات وعروض حصرية على أفضل منتجات العناية والجمال.' },
    { icon: <Clock className="w-6 h-6" />, title: 'توصيل سريع', description: 'طلبك يوصلك بسرعة مع ضمان سلامة المنتجات.' },
    { icon: <Truck className="w-6 h-6" />, title: 'توصيل مغلف', description: 'تغليف آمن يحافظ على جودة المنتجات أثناء التوصيل.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'ضمان الجودة', description: 'ضمان استبدال المنتج في حال وجود أي خلل أو ضرر.' },
  ],
  stepsTitle: 'كيف تطلب من وفرة كير؟',
  stepsSubtitle: 'اختر منتجات عنايتك بسهولة',
  steps: [
    { number: 1, title: 'تصفّح الأقسام', description: 'اختر القسم واستعرض المنتجات المتاحة', icon: <Search className="w-8 h-8" /> },
    { number: 2, title: 'اختر منتجاتك', description: 'أضف ما يعجبك لسلة المشتريات', icon: <ShoppingBag className="w-8 h-8" /> },
    { number: 3, title: 'أكمل الطلب', description: 'اختر عنوان التوصيل وطريقة الدفع', icon: <CreditCard className="w-8 h-8" /> },
    { number: 4, title: 'استلم بعنايتك', description: 'طلبك يوصلك مغلفاً بعناية', icon: <PackageCheck className="w-8 h-8" /> },
  ],
  faqs: [
    { question: 'هل جميع المنتجات أصلية؟', answer: 'نعم، جميع المنتجات في وفرة كير أصلية ومضمونة. نتعامل فقط مع موردين معتمدين وموثوقين.' },
    { question: 'هل يمكنني إرجاع منتج إذا لم يعجبني؟', answer: 'يمكنك إرجاع المنتج خلال 7 أيام من الاستلام بشرط أن يكون مغلفاً ولم يُستخدم، وفقاً لسياسة الاسترجاع.' },
    { question: 'هل تتوفر منتجات للرجال أيضاً؟', answer: 'بالتأكيد! لدينا قسم كامل لمنتجات العناية الرجالية بما في ذلك العناية بالبشرة والشعر واللحية.' },
    { question: 'كيف أضمن أن المنتج مناسب لبشرتي؟', answer: 'نوفر وصفاً تفصيلياً لكل منتج يشمل المكونات ونوع البشرة المناسب. يمكنك أيضاً مراجعة تقييمات المستخدمين الآخرين.' },
  ],
  ctaTitle: 'اهتم بنفسك مع وفرة كير',
  ctaDescription: 'حمّل التطبيق واكتشف تشكيلة واسعة من منتجات العناية والجمال',
};

export default function CarePage() {
  return <ServicePageTemplate data={data} />;
}
