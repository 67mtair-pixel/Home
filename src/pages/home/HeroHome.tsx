import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function HeroHome() {
  return (
    <section className="relative pt-[88px] md:pt-[96px] pb-8 md:pb-16">
      <div className="container-custom">
        <div className="bg-white rounded-3xl shadow-[0_8px_60px_rgba(1,65,199,0.07)] border border-gray-100/60 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="order-2 lg:order-1 p-6 md:p-4 lg:p-6">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] rounded-2xl overflow-hidden border border-gray-200/50 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="خدمات وفرة"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center p-8 md:p-10 lg:p-14 lg:pr-10">
              <div className="inline-flex self-start mb-6 animate-fade-in">
                <span className="inline-flex items-center gap-2 border border-primary-600/30 text-primary-700 rounded-full px-5 py-2 text-sm font-medium">
                  وفرة - المنصة المركزية الأولى في غزة
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-primary-900 mb-6 leading-[1.2] animate-fade-in-up">
                وفرة..
                <br />
                بنية لوجستية ذكية.
              </h1>

              <p className="text-base md:text-lg text-gray-500 mb-10 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                شركة فلسطينية للتوصيل الذكي والخدمات المتكاملة. نربطك بكل
                احتياجاتك اليومية (تجارة، صحة، دواء، دعم لوجستي) عبر منظومة تقنية
                موحّدة.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  to="/#download"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-primary-600/25 text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  حمّل التطبيق الآن
                </Link>
                <Link
                  to="/about/strategy"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-xl transition-all text-sm"
                >
                  رؤية الإعمار
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
