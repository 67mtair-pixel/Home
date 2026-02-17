import { Link } from 'react-router-dom';
import { HandHeart, QrCode, BarChart3, Users, ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const reliefFeatures = [
  { icon: <HandHeart className="w-5 h-5" />, text: 'استقبال التبرعات وتوزيعها رقمياً' },
  { icon: <QrCode className="w-5 h-5" />, text: 'كوبونات شرائية رقمية للمستفيدين' },
  { icon: <Users className="w-5 h-5" />, text: 'ربط المتبرعين بالمستفيدين مباشرة' },
  { icon: <BarChart3 className="w-5 h-5" />, text: 'شفافية كاملة وتقارير تفصيلية' },
];

export default function ReliefHighlight() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
      </div>
      <div
        ref={ref}
        className={`container-custom relative z-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              الذراع الإنساني
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary-900 mb-4">
              وفرة الإغاثية
              <br />
              <span className="text-primary-600">الأثر الإنساني الرقمي</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              نموذج فريد يدمج الإغاثة بالتجارة -- المتبرع يشتري كوبوناً رقمياً، المستفيد يختار ما يحتاجه من المتاجر المحلية، والتاجر يبيع منتجاته. الجميع يستفيد والاقتصاد المحلي ينمو.
            </p>
            <ul className="space-y-4 mb-8">
              {reliefFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-100 text-primary-600">
                    {f.icon}
                  </span>
                  <span className="text-sm font-medium text-primary-900">{f.text}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/services/aid"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              اعرف أكثر عن وفرة الإغاثية
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-bl from-primary-600 to-primary-800 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <HandHeart className="w-16 h-16 mx-auto mb-4 text-accent-500" />
                <h3 className="text-xl font-bold mb-2">دورة الإغاثة الرقمية</h3>
                <p className="text-sm text-primary-200">نموذج مبتكر يخدم الجميع</p>
              </div>
              <div className="space-y-4">
                {[
                  { step: '١', text: 'المتبرع يشتري كوبوناً رقمياً عبر المنصة' },
                  { step: '٢', text: 'المستفيد يستلم الكوبون ويختار ما يحتاجه' },
                  { step: '٣', text: 'التاجر المحلي يقدم المنتجات ويحصل على ثمنها' },
                  { step: '٤', text: 'الاقتصاد المحلي ينمو والمستفيد يحصل على كرامته' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-500 text-primary-900 font-bold text-sm shrink-0">
                      {item.step}
                    </span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
