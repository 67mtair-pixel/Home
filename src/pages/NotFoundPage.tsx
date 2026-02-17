import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-primary-900 via-primary-800 to-primary-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10 text-center py-20">
        <p className="text-8xl md:text-9xl font-bold text-white/20 mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">الصفحة غير موجودة</h1>
        <p className="text-primary-200 text-lg mb-10 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold rounded-xl transition-all"
          >
            <Home className="w-5 h-5" />
            الصفحة الرئيسية
          </Link>
          <Link
            to="/about/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-all"
          >
            تواصل معنا
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
