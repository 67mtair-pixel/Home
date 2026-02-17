import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ShoppingCart, Heart, Pill, HandHeart, ChevronDown, Scale } from 'lucide-react';

const services = [
  { label: 'وفرة مارت', href: '/services/mart', icon: <ShoppingCart className="w-4 h-4" /> },
  { label: 'وفرة كير', href: '/services/care', icon: <Heart className="w-4 h-4" /> },
  { label: 'وفرة فارما', href: '/services/pharma', icon: <Pill className="w-4 h-4" /> },
  { label: 'وفرة أيد', href: '/services/aid', icon: <HandHeart className="w-4 h-4" /> },
];

const aboutLinks = [
  { label: 'من نحن', href: '/about/company' },
  { label: 'رؤية 2030', href: '/about/strategy' },
  { label: 'سجل كتاجر', href: '/partners/store' },
  { label: 'سجل كمندوب', href: '/partners/rider' },
  { label: 'تواصل معنا', href: '/about/contact' },
];

const legalLinks = [
  { label: 'سياسة الخصوصية', href: '/legal/privacy' },
  { label: 'شروط الاستخدام', href: '/legal/terms' },
  { label: 'ملفات الارتباط', href: '/legal/cookies' },
  { label: 'مركز المساعدة', href: '/about/support' },
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom pt-14 pb-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="order-last lg:order-first lg:w-[320px] shrink-0 flex flex-col items-center lg:items-start text-center lg:text-right">
            <Link to="/" className="inline-block mb-5">
              <img src="/wefrh_logo.png" alt="وفرة" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-300 text-sm leading-[1.9] mb-6 max-w-xs lg:max-w-none">
              وفرة (Wefrh Mall P.J.S.C) هي المنصة المركزية الأولى في غزة، تجمع بين التسوق، الصحة، والخدمات اللوجستية في تطبيق واحد فائق السرعة.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-700/50 text-primary-300 hover:border-accent-500/50 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <div>
              <h3 className="font-bold text-base mb-5 text-center lg:text-right">خدماتنا</h3>
              <div className="flex lg:flex-wrap gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-700/60 text-sm font-medium text-primary-200 hover:border-accent-500/50 hover:text-white transition-all duration-300 whitespace-nowrap shrink-0"
                  >
                    <span className="text-accent-400">{s.icon}</span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base mb-5 text-center lg:text-right">عن وفرة</h3>
              <div className="flex lg:flex-wrap gap-x-6 gap-y-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base mb-6 text-center lg:text-right">معلومات التواصل</h3>
              <div className="flex flex-col items-center lg:items-start gap-5 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start sm:gap-10">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 flex items-center justify-center rounded-full bg-accent-500/15">
                    <MapPin className="w-5 h-5 text-accent-400" />
                  </span>
                  <div>
                    <p className="text-xs text-primary-400 mb-0.5">العنوان</p>
                    <p className="text-sm font-semibold text-white">فلسطين, غزة</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 flex items-center justify-center rounded-full bg-accent-500/15">
                    <Phone className="w-5 h-5 text-accent-400" />
                  </span>
                  <div>
                    <p className="text-xs text-primary-400 mb-0.5">للاتصال بنا</p>
                    <p className="text-sm font-semibold text-white" dir="ltr">+970 56 640 4550</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.06]">
                    <Mail className="w-5 h-5 text-primary-300" />
                  </span>
                  <div>
                    <p className="text-xs text-primary-400 mb-0.5">البريد الإلكتروني</p>
                    <p className="text-sm font-semibold text-white">info@wefrh.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-5 pb-5 border-t border-primary-800/60 flex flex-col md:flex-row-reverse items-center justify-between gap-4">
          <p className="text-primary-400 text-xs">
            &copy; Wefrh Mall P.J.S.C {new Date().getFullYear()}. جميع الحقوق محفوظة.
          </p>

          <div className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs text-primary-500 hover:text-primary-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden w-full">
            <button
              onClick={() => setLegalOpen(!legalOpen)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-primary-400 hover:text-primary-200 transition-colors duration-200"
            >
              <Scale className="w-4 h-4" />
              <span>الملفات القانونية</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${legalOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                legalOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col items-center gap-3 pb-3">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-xs text-primary-500 hover:text-primary-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
