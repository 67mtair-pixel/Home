import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Zap } from 'lucide-react';

const AVATAR_URLS = [
  'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80',
];

export default function HeroHome() {
  return (
    <section className="relative pt-[100px] md:pt-[112px] pb-12 md:pb-20 overflow-hidden">
      <div className="absolute top-32 right-[-120px] w-[400px] h-[400px] bg-primary-400/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-80px] w-[300px] h-[300px] bg-accent-400/[0.08] rounded-full blur-[80px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-300/60 rounded-full px-4 py-1.5 mb-7 animate-fade-in shadow-sm">
              <Zap className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-semibold text-primary-700">
                المنصة المركزية الأولى في غزة
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-primary-900 mb-6 leading-[1.15] animate-fade-in-up">
              وفرة..
              <br />
              <span className="text-primary-600">بنية لوجستية</span> ذكية.
            </h1>

            <p className="text-base md:text-lg text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              شركة فلسطينية للتوصيل الذكي والخدمات المتكاملة. نربطك بكل
              احتياجاتك اليومية (تجارة، صحة، دواء، دعم لوجستي) عبر منظومة تقنية
              موحّدة.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/#download"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-primary-600/30 text-sm transform hover:scale-105"
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

            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex -space-x-2.5 rtl:space-x-reverse">
                {AVATAR_URLS.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent-600 text-accent-600" />
                  ))}
                  <span className="text-sm font-bold text-primary-900 mr-1">4.9</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">
                  +5,000 مستخدم يثقون بوفرة
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-[340px] lg:max-w-[400px] mx-auto">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary-300/20 via-transparent to-accent-300/15 rounded-full blur-3xl pointer-events-none" />

              <img
                src="/pHGG80PpGMp5yFZOsjSdxsFw1pA.webp"
                alt="تطبيق وفرة"
                className="relative w-full h-auto drop-shadow-[0_20px_60px_rgba(1,65,199,0.15)]"
              />

              <div className="absolute top-12 -left-4 lg:-left-10 bg-white rounded-xl shadow-lg shadow-black/[0.06] border border-gray-100 px-4 py-3 flex items-center gap-3 animate-float-slow">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-success-50 text-success-600">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold text-gray-800">توصيل سريع</p>
                  <p className="text-[10px] text-gray-400">خلال 30 دقيقة</p>
                </div>
              </div>

              <div className="absolute bottom-16 -right-3 lg:-right-8 bg-white rounded-xl shadow-lg shadow-black/[0.06] border border-gray-100 px-4 py-3 flex items-center gap-3 animate-float-delayed">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold text-gray-800">+200 متجر</p>
                  <p className="text-[10px] text-gray-400">شريك في غزة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
