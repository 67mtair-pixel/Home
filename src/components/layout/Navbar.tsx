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
      <div className="container-custom py-3">
        <nav
          className={`relative flex items-center justify-between rounded-2xl px-4 lg:px-5 h-[56px] transition-all duration-500 ${
            scrolled
              ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-200/60'
              : 'bg-primary-900/60 backdrop-blur-md border border-white/[0.08]'
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src="/wefrh_logo.png"
              alt="وفرة"
              className={`h-8 w-auto transition-all duration-500 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
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
                  className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                    scrolled
                      ? activeDropdown === group.label
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                      : activeDropdown === group.label
                        ? 'text-white bg-white/15'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === group.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full right-0 pt-3 transition-all duration-200 ${
                    activeDropdown === group.label
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}
                  onMouseEnter={() => handleMouseEnter(group.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <DropdownPanel items={group.items} />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <button
              className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide transition-all duration-300 ${
                scrolled
                  ? 'text-gray-500 border border-gray-200 hover:bg-gray-50'
                  : 'text-white/70 border border-white/20 hover:bg-white/10 hover:text-white'
              }`}
            >
              EN
            </button>
            <Link
              to="/#download"
              className={`inline-flex items-center gap-2 px-5 py-2 font-bold text-[13px] rounded-xl transition-all duration-300 ${
                scrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md hover:shadow-primary-600/20'
                  : 'bg-accent-500 text-primary-900 hover:bg-accent-400 shadow-sm'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              تحميل التطبيق
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 ${
              scrolled
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-white/90 hover:bg-white/10'
            }`}
            aria-label="القائمة"
          >
            <span className={`transition-all duration-300 ${mobileOpen ? 'rotate-90 scale-110' : ''}`}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </span>
          </button>
        </nav>
      </div>

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
    <div className="w-[320px] bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 p-2 overflow-hidden">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="flex items-center gap-3.5 px-3 py-3 rounded-lg hover:bg-primary-50/70 transition-all duration-150 group/item"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 text-primary-600 group-hover/item:bg-primary-600 group-hover/item:text-white transition-all duration-200 shrink-0">
            {item.icon}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-800 group-hover/item:text-primary-700 transition-colors leading-tight">
              {item.label}
            </p>
            <p className="text-xs text-gray-400 mt-0.5 leading-tight">{item.desc}</p>
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
        className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-50 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-[64px] px-5 border-b border-gray-100">
          <Link to="/" onClick={onClose} className="shrink-0">
            <img src="/wefrh_logo.png" alt="وفرة" className="h-8 w-auto" />
          </Link>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="h-[calc(100%-64px)] overflow-y-auto overscroll-contain">
          <div className="p-4 space-y-1">
            <Link
              to="/"
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                currentPath === '/'
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              الرئيسية
            </Link>

            {navGroups.map((group) => (
              <div key={group.label}>
                <button
                  onClick={() => onToggleExpand(group.label)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-600 font-semibold text-sm hover:bg-gray-50 hover:text-gray-900 transition-all"
                >
                  {group.label}
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                      expanded === group.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expanded === group.label ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="py-1 pr-3 mr-4 border-r-2 border-primary-100 space-y-0.5">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-50/60 transition-all group/link"
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-50 text-primary-500 group-hover/link:bg-primary-600 group-hover/link:text-white transition-all shrink-0">
                          {item.icon}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-gray-700">{item.label}</p>
                          <p className="text-[11px] text-gray-400">{item.desc}</p>
                        </div>
                        <ChevronLeft className="w-3.5 h-3.5 text-gray-300 mr-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-5 mt-4 border-t border-gray-100 space-y-2.5">
              <Link
                to="/about/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                تواصل معنا
              </Link>
              <Link
                to="/#download"
                onClick={onClose}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all text-sm shadow-sm"
              >
                <Download className="w-4 h-4" />
                حمّل التطبيق
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
      className={`px-3.5 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
        scrolled
          ? active
            ? 'text-primary-700 bg-primary-50'
            : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
          : active
            ? 'text-accent-400'
            : 'text-white/80 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  );
}
