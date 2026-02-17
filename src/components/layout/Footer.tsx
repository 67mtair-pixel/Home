import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ShoppingCart, Heart, Pill, HandHeart, ChevronDown, Scale, ExternalLink } from 'lucide-react';

const services = [
  { label: 'وفرة مارت', href: '/services/mart', icon: <ShoppingCart className="w-4 h-4" /> },
  { label: 'وفرة كير', href: '/services/care', icon: <Heart className="w-4 h-4" /> },
  { label: 'وفرة فارما', href: '/services/pharma', icon: <Pill className="w-4 h-4" /> },
  { label: 'وفرة أيد', href: '/services/aid', icon: <HandHeart className="w-4 h-4" /> },
];

const aboutLinks = [
  { label: 'من نحن', href: '/about/company' },
  { label: 'رؤية 2030', href: '/about/strategy' },
  { label: 'تواصل معنا', href: '/about/contact' },
  { label: 'مركز المساعدة', href: '/about/support' },
];

const legalLinks = [
  { label: 'سياسة الخصوصية', href: '/legal/privacy' },
  { label: 'شروط الاستخدام', href: '/legal/terms' },
  { label: 'ملفات الارتباط', href: '/legal/cookies' },
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
];

const contactItems = [
  {
    icon: <MapPin className="w-[18px] h-[18px]" />,
    label: 'العنوان',
    value: 'فلسطين, غزة',
    dir: undefined as string | undefined,
  },
  {
    icon: <Phone className="w-[18px] h-[18px]" />,
    label: 'الهاتف',
    value: '+970 56 640 4550',
    dir: 'ltr' as string | undefined,
  },
  {
    icon: <Mail className="w-[18px] h-[18px]" />,
    label: 'البريد',
    value: 'info@wefrh.com',
    dir: undefined as string | undefined,
  },
];

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom pt-14 pb-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-[320px] shrink-0 flex flex-col items-center lg:items-start text-center lg:text-right">
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
              <h3 className="font-bold text-base mb-5">خدماتنا</h3>
              <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-wrap">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-primary-900/60 border border-primary-800/50 text-sm font-medium text-primary-200 hover:bg-primary-800/60 hover:border-accent-500/40 hover:text-white transition-all duration-300 lg:rounded-full lg:px-5 lg:py-2.5 lg:bg-transparent lg:border-primary-700/60"
                  >
                    <span className="text-accent-400">{s.icon}</span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base mb-5">عن وفرة</h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base mb-5">معلومات التواصل</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3.5 p-4 rounded-xl bg-primary-900/40 border border-primary-800/30"
                  >
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 shrink-0">
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] text-primary-500 mb-0.5 font-medium uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-semibold text-primary-100 truncate" dir={item.dir}>{item.value}</p>
                    </div>
                  </div>
                ))}
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
