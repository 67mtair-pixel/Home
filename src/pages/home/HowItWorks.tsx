import { Search, ShoppingBag, CreditCard, PackageCheck } from 'lucide-react';
import SectionHeader from '../../components/shared/SectionHeader';
import StepsSection from '../../components/shared/StepsSection';

const steps = [
  {
    number: 1,
    title: 'تصفّح واختر',
    description: 'اختر من بين مئات المتاجر والمنتجات القريبة منك',
    icon: <Search className="w-8 h-8" />,
  },
  {
    number: 2,
    title: 'أضف لسلّتك',
    description: 'اختر منتجاتك المفضلة وأضفها لسلة المشتريات',
    icon: <ShoppingBag className="w-8 h-8" />,
  },
  {
    number: 3,
    title: 'أكّد الطلب',
    description: 'راجع طلبك واختر طريقة الدفع المناسبة',
    icon: <CreditCard className="w-8 h-8" />,
  },
  {
    number: 4,
    title: 'استلم بسرعة',
    description: 'تابع طلبك لحظياً حتى يصل لباب بيتك',
    icon: <PackageCheck className="w-8 h-8" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="كيف يعمل التطبيق؟"
          subtitle="أربع خطوات بسيطة تفصلك عن تجربة تسوّق رقمية متكاملة"
        />
        <StepsSection steps={steps} />
      </div>
    </section>
  );
}
