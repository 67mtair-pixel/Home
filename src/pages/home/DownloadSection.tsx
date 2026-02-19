import { Smartphone, Download } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function DownloadSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="download" className="section-padding bg-gradient-to-br from-primary-700 via-primary-600 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-accent-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-primary-400 rounded-full blur-3xl" />
      </div>
      <div
        ref={ref}
        className={`container-custom relative z-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              حمّل تطبيق وفرة الآن
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              انضم لآلاف المستخدمين في غزة واستمتع بتجربة تسوّق رقمية متكاملة. كل ما تحتاجه في تطبيق واحد.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="flex items-center gap-3 bg-white hover:bg-blue-50 rounded-xl px-6 py-3.5 transition-all transform hover:scale-105 shadow-lg group">
                <svg className="w-8 h-8 text-primary-900" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                <div className="text-right">
                  <p className="text-xs text-gray-500">حمّل من</p>
                  <p className="text-base font-bold text-primary-900">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-white hover:bg-blue-50 rounded-xl px-6 py-3.5 transition-all transform hover:scale-105 shadow-lg group">
                <svg className="w-8 h-8 text-primary-900" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.394 13l2.304-2.304v-.001l.001.001-.001-.188zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z" /></svg>
                <div className="text-right">
                  <p className="text-xs text-gray-500">حمّل من</p>
                  <p className="text-base font-bold text-primary-900">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-[3rem] border-4 border-white/20 shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-white font-bold text-lg mb-1">وفرة</p>
                  <p className="text-blue-200 text-xs">Super App</p>
                  <div className="mt-6">
                    <Download className="w-6 h-6 text-accent-400 mx-auto animate-bounce" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-primary-900 font-bold text-xs text-center">مجاني</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
