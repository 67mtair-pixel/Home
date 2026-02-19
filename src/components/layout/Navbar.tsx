import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
  Heart,
  Pill,
  Flame,
  HandHeart,
  Store,
  Bike,
  Building2,
  Info,
  BookOpen,
  Target,
  Newspaper,
  HelpCircle,
  Phone,
  Headphones,
  Download,
  ChevronLeft,
} from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  desc: string;
}

interface NavGroup {
  label: string;
  items: DropdownItem[];
}

const servicesItems: DropdownItem[] = [
  { label: 'وفرة مارت', href: '/services/mart', icon: <ShoppingCart className="w-5 h-5" />, desc: 'السوق الرقمي المتكامل' },
  { label: 'وفرة كير', href: '/services/care', icon: <Heart className="w-5 h-5" />, desc: 'العناية والجمال' },
  { label: 'وفرة فارما', href: '/services/pharma', icon: <Pill className="w-5 h-5" />, desc: 'الصيدلية الإلكترونية' },
  { label: 'وفرة غاز', href: '/services/gas', icon: <Flame className="w-5 h-5" />, desc: 'توصيل الغاز لبابك' },
  { label: 'وفرة الإغاثية', href: '/services/aid', icon: <HandHeart className="w-5 h-5" />, desc: 'الأثر الإنساني الرقمي' },
];

const partnersItems: DropdownItem[] = [
  { label: 'انضم كتاجر', href: '/partners/store', icon: <Store className="w-5 h-5" />, desc: 'حوّل متجرك رقمياً' },
  { label: 'كن سائقاً', href: '/partners/rider', icon: <Bike className="w-5 h-5" />, desc: 'اعمل بمرونة واكسب أكثر' },
  { label: 'شراكة مؤسسية', href: '/partners/aid-orgs', icon: <Building2 className="w-5 h-5" />, desc: 'شراكات إغاثية وإنسانية' },
];

const aboutItems: DropdownItem[] = [
  { label: 'من نحن', href: '/about/company', icon: <Info className="w-5 h-5" />, desc: 'تعرّف على وفرة' },
  { label: 'قصتنا', href: '/about/story', icon: <BookOpen className="w-5 h-5" />, desc: 'رحلة وفرة من البداية' },
  { label: 'استراتيجيتنا', href: '/about/strategy', icon: <Target className="w-5 h-5" />, desc: 'رؤيتنا وخارطة الطريق' },
  { label: 'الأخبار', href: '/about/news', icon: <Newspaper className="w-5 h-5" />, desc: 'آخر التحديثات' },
  { label: 'الأسئلة الشائعة', href: '/about/faq', icon: <HelpCircle className="w-5 h-5" />, desc: 'إجابات لأسئلتك' },
  { label: 'تواصل معنا', href: '/about/contact', icon: <Phone className="w-5 h-5" />, desc: 'نحن هنا لمساعدتك' },
  { label: 'مركز الدعم', href: '/about/support', icon: <Headphones className="w-5 h-5" />, desc: 'الدعم الفني والمساعدة' },
];

const navGroups: NavGroup[] = [
  { label: 'الخدمات', items: servicesItems },
  { label: 'الشركاء', items: partnersItems },
  { label: 'من نحن', items: aboutItems },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`relative flex items-center justify-between px-6 lg:px-8 h-[72px] transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/80'
            : 'bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 backdrop-blur-md shadow-xl'
        }`}
      >
        <Link to="/" className="flex items-center gap-3 shrink-0 group z-10">
          <img
            src="/wefrh_logo.png"
            alt="وفرة"
            className={`h-10 w-auto transition-all duration-500 ${
              scrolled ? '' : 'brightness-0 invert drop-shadow-lg'
            }`}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1.5">
          <DesktopNavLink to="/" active={location.pathname === '/'} scrolled={scrolled}>
            الرئيسية
          </DesktopNavLink>

          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(group.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[15px] font-bold transition-all duration-300 ${
                  scrolled
                    ? activeDropdown === group.label
                      ? 'text-primary-700 bg-primary-50/80 shadow-sm'
                      : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50/50'
                    : activeDropdown === group.label
                      ? 'text-white bg-white/20 shadow-lg'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                {group.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === group.label ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full right-0 pt-4 transition-all duration-300 ${
                  activeDropdown === group.label
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-3 pointer-events-none'
                }`}
                onMouseEnter={() => handleMouseEnter(group.label)}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownPanel items={group.items} />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
              scrolled
                ? 'text-gray-600 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                : 'text-white border-2 border-white/30 hover:bg-white/15 hover:border-white/50'
            }`}
          >
            EN
          </button>
          <Link
            to="/#download"
            className={`inline-flex items-center gap-2.5 px-6 py-3 font-bold text-[15px] rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
              scrolled
                ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700'
                : 'bg-gradient-to-r from-accent-400 to-accent-500 text-white hover:from-accent-500 hover:to-accent-600'
            }`}
          >
            <Download className="w-4 h-4" />
            تحميل التطبيق
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
            scrolled
              ? 'text-gray-700 hover:bg-gray-100'
              : 'text-white hover:bg-white/15'
          }`}
          aria-label="القائمة"
        >
          <span className={`transition-all duration-300 ${mobileOpen ? 'rotate-180' : ''}`}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </span>
        </button>
      </nav>

      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        expanded={mobileExpanded}
        onToggleExpand={(label) => setMobileExpanded(mobileExpanded === label ? null : label)}
        currentPath={location.pathname}
      />
    </header>
  );
}

function DropdownPanel({ items }: { items: DropdownItem[] }) {
  return (
    <div className="w-[360px] bg-white/98 backdrop-blur-xl rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.15)] border border-gray-200/60 p-3 overflow-hidden">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100/50 transition-all duration-300 group/item"
        >
          <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 group-hover/item:from-primary-600 group-hover/item:to-primary-700 group-hover/item:text-white transition-all duration-300 shrink-0 shadow-sm group-hover/item:shadow-md group-hover/item:scale-105">
            {item.icon}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-bold text-gray-800 group-hover/item:text-primary-700 transition-colors leading-tight">
              {item.label}
            </p>
            <p className="text-[13px] text-gray-500 mt-1 leading-tight">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function MobileSidebar({
  open,
  onClose,
  expanded,
  onToggleExpand,
  currentPath,
}: {
  open: boolean;
  onClose: () => void;
  expanded: string | null;
  onToggleExpand: (label: string) => void;
  currentPath: string;
}) {
  return (
    <>
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity duration-400 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[340px] max-w-[90vw] bg-gradient-to-b from-primary-700 via-primary-600 to-primary-700 z-50 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-[80px] px-6">
          <Link to="/" onClick={onClose} className="shrink-0">
            <img src="/wefrh_logo.png" alt="وفرة" className="h-10 w-auto brightness-0 invert drop-shadow-lg" />
          </Link>
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-[calc(100%-80px)] overflow-y-auto overscroll-contain px-5 py-2">
          <div className="space-y-2">
            <Link
              to="/"
              onClick={onClose}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-bold text-[15px] transition-all duration-300 ${
                currentPath === '/'
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'text-white/90 bg-white/10 hover:bg-white/15 backdrop-blur-sm'
              }`}
            >
              الرئيسية
            </Link>

            {navGroups.map((group) => (
              <div key={group.label} className="bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <button
                  onClick={() => onToggleExpand(group.label)}
                  className="flex items-center justify-between w-full px-5 py-4 text-white font-bold text-[15px] hover:bg-white/10 transition-all duration-300 rounded-2xl"
                >
                  {group.label}
                  <ChevronDown
                    className={`w-5 h-5 text-white/70 transition-transform duration-300 ${
                      expanded === group.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    expanded === group.label ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-3 pb-3 space-y-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl bg-primary-800/40 hover:bg-primary-800/60 backdrop-blur-sm transition-all duration-300 group/link border border-white/5"
                      >
                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white group-hover/link:bg-accent-500 group-hover/link:text-white transition-all duration-300 shrink-0 shadow-sm">
                          {item.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] font-bold text-white leading-tight">{item.label}</p>
                          <p className="text-[12px] text-white/60 mt-0.5 leading-tight">{item.desc}</p>
                        </div>
                        <ChevronLeft className="w-4 h-4 text-white/40 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 mt-4 space-y-3">
              <Link
                to="/#download"
                onClick={onClose}
                className="flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 text-[15px] shadow-xl transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                تحميل التطبيق
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function DesktopNavLink({ to, active, scrolled, children }: {
  to: string;
  active: boolean;
  scrolled: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`px-5 py-2.5 rounded-xl text-[15px] font-bold transition-all duration-300 ${
        scrolled
          ? active
            ? 'text-primary-700 bg-primary-50/80 shadow-sm'
            : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50/50'
          : active
            ? 'text-white bg-white/20 shadow-lg'
            : 'text-white/90 hover:text-white hover:bg-white/15'
      }`}
    >
      {children}
    </Link>
  );
}
