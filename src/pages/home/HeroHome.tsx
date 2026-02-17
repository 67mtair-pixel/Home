import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-bl from-primary-900 via-primary-800 to-primary-600 overflow-hidden pt-[104px] md:pt-[104px]">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm text-primary-100">منصة رقمية فلسطينية متكاملة</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            البنية التحتية الرقمية
            <br />
            <span className="text-accent-500">لاقتصاد غزة</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            وفرة ليست مجرد تطبيق -- بل منظومة تشغيلية اقتصادية وإنسانية وتقنية تجمع بين التجارة والخدمات والتمويل والإغاثة في منصة واحدة مترابطة تخدم المجتمع الفلسطيني.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/#download"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-accent-500/25"
            >
              حمّل التطبيق الآن
            </Link>
            <Link
              to="/about/company"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-all"
            >
              تعرّف على وفرة
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
