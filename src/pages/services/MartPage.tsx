import {
  ShoppingCart, Apple, CakeSlice, Laptop, Package,
  Clock, BadgeCheck, Truck, Tag, Wallet, ShieldCheck,
  Search, ShoppingBag, CreditCard, PackageCheck,
} from 'lucide-react';
import ServicePageTemplate from './ServicePageTemplate';

const data = {
  heroTitle: 'وفرة مارت',
  heroDescription: 'السوق الرقمي المتكامل -- كل ما تحتاجه من سوبرماركت وخضار وفواكه وحلويات وإلكترونيات في مكان واحد.',
  breadcrumbLabel: 'وفرة مارت',
  introTitle: 'أمازون المحلي لفلسطين',
  introText: 'وفرة مارت هو السوق الرقمي الذي يمكّن التجار المحليين من عرض منتجاتهم رقمياً ويتيح للمستخدمين تصفح وشراء وتوصيل كل ما يحتاجونه بنموذج متكيف مع الواقع اللوجستي والاقتصادي في غزة.',
  categoriesTitle: 'أقسام وفرة مارت',
  categories: [
    { icon: <ShoppingCart className="w-6 h-6" />, name: 'سوبرماركت', color: '#16a34a' },
    { icon: <Apple className="w-6 h-6" />, name: 'خضار وفواكه', color: '#ea580c' },
    { icon: <CakeSlice className="w-6 h-6" />, name: 'حلويات ومخبوزات', color: '#db2777' },
    { icon: <Laptop className="w-6 h-6" />, name: 'إلكترونيات', color: '#0891b2' },
    { icon: <Package className="w-6 h-6" />, name: 'منتجات متنوعة', color: '#7c3aed' },
  ],
  featuresTitle: 'لماذا وفرة مارت؟',
  featuresSubtitle: 'مميزات تجعل تجربة التسوق أسهل وأسرع وأوفر',
  features: [
    { icon: <Clock className="w-6 h-6" />, title: 'توصيل سريع', description: 'طلبك يوصلك بأسرع وقت ممكن مع تتبع لحظي لحالة الطلب.' },
    { icon: <BadgeCheck className="w-6 h-6" />, title: 'جودة مضمونة', description: 'منتجات مختارة بعناية من أفضل المتاجر والموردين المحليين.' },
    { icon: <Tag className="w-6 h-6" />, title: 'أسعار تنافسية', description: 'أسعار محلية عادلة مع عروض وخصومات مستمرة.' },
    { icon: <Truck className="w-6 h-6" />, title: 'تغطية واسعة', description: 'شبكة واسعة من المتاجر والسائقين تغطي أنحاء القطاع.' },
    { icon: <Wallet className="w-6 h-6" />, title: 'دفع مرن', description: 'دفع عند الاستلام أو إلكترونياً حسب ما يناسبك.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'تسوّق آمن', description: 'حماية كاملة لبياناتك ومعاملاتك مع ضمان الخصوصية.' },
  ],
  stepsTitle: 'كيف تطلب من وفرة مارت؟',
  stepsSubtitle: 'أربع خطوات بسيطة وتوصلك طلبيتك',
  steps: [
    { number: 1, title: 'تصفّح المتاجر', description: 'اختر المتجر القريب منك وتصفّح المنتجات', icon: <Search className="w-8 h-8" /> },
    { number: 2, title: 'أضف لسلّتك', description: 'اختر منتجاتك وأضفها لسلة المشتريات', icon: <ShoppingBag className="w-8 h-8" /> },
    { number: 3, title: 'أكّد واختر الدفع', description: 'راجع طلبك واختر طريقة الدفع', icon: <CreditCard className="w-8 h-8" /> },
    { number: 4, title: 'استلم طلبك', description: 'تابع المندوب وطلبك يوصلك لبابك', icon: <PackageCheck className="w-8 h-8" /> },
  ],
  faqs: [
    { question: 'ما هي مناطق التغطية لوفرة مارت؟', answer: 'وفرة مارت تغطي معظم مناطق قطاع غزة وتتوسع باستمرار. يمكنك التحقق من التغطية في منطقتك عند فتح التطبيق.' },
    { question: 'كم يستغرق التوصيل؟', answer: 'يعتمد وقت التوصيل على موقعك والمتجر المختار. عادة ما يتراوح بين 30-60 دقيقة.' },
    { question: 'هل يمكنني إرجاع المنتجات؟', answer: 'نعم، يمكنك إرجاع المنتجات وفقاً لسياسة الاسترجاع الخاصة بنا. يُرجى مراجعة سياسة الاسترجاع لمعرفة التفاصيل.' },
    { question: 'ما هي طرق الدفع المتاحة؟', answer: 'حالياً نوفر الدفع عند الاستلام، ونعمل على إضافة خيارات الدفع الإلكتروني قريباً.' },
    { question: 'هل يوجد حد أدنى للطلب؟', answer: 'يختلف الحد الأدنى حسب المتجر. بعض المتاجر لا تشترط حداً أدنى بينما قد يشترط البعض الآخر حداً معيناً.' },
  ],
  ctaTitle: 'جاهز للتسوّق؟',
  ctaDescription: 'حمّل تطبيق وفرة الآن وابدأ تجربة تسوّق رقمية لا مثيل لها',
};

export default function MartPage() {
  return <ServicePageTemplate data={data} />;
}
