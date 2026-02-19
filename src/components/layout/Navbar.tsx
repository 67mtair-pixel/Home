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
        className={`relative flex items-center justify-between px-6 lg:px-8 h-[72px] transition-all duration-300 ${
          scrolled
            ? 'bg-primary-800 shadow-2xl'
            : 'bg-primary-800 shadow-2xl'
        }`}
      >
        <Link to="/" className="flex items-center gap-3 shrink-0 group z-10">
          <img
            src="/wefrh_logo.png"
            alt="وفرة"
            className="h-10 w-auto brightness-0 invert drop-shadow-lg"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                  activeDropdown === group.label
                    ? 'text-accent-400 bg-white/10'
                    : 'text-white hover:text-accent-400 hover:bg-white/5'
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
                className={`absolute top-full right-0 pt-3 transition-all duration-300 ${
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
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
          >
            EN
          </button>
          <Link
            to="/#download"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-[15px] rounded-lg bg-accent-400 text-primary-900 hover:bg-accent-500 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            تحميل التطبيق
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-200"
          aria-label="القائمة"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
    <div className="w-[340px] bg-primary-800 rounded-xl shadow-2xl border border-white/10 p-2 overflow-hidden">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 group/item"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white group-hover/item:bg-accent-400 group-hover/item:text-primary-900 transition-all duration-200 shrink-0">
            {item.icon}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-semibold text-white group-hover/item:text-accent-400 transition-colors leading-tight">
              {item.label}
            </p>
            <p className="text-[12px] text-white/60 mt-0.5 leading-tight">{item.desc}</p>
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
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[340px] max-w-[90vw] bg-primary-800 z-50 transition-transform duration-400 ease-out shadow-2xl ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-[80px] px-6 border-b border-white/10">
          <Link to="/" onClick={onClose} className="shrink-0">
            <img src="/wefrh_logo.png" alt="وفرة" className="h-11 w-auto brightness-0 invert" />
          </Link>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-[calc(100%-80px)] overflow-y-auto overscroll-contain px-4 py-4">
          <div className="space-y-2">
            <Link
              to="/"
              onClick={onClose}
              className={`flex items-center justify-center px-5 py-4 rounded-xl font-semibold text-[16px] transition-all duration-200 ${
                currentPath === '/'
                  ? 'bg-accent-400 text-primary-900'
                  : 'text-white border border-white/20 hover:bg-white/10'
              }`}
            >
              الرئيسية
            </Link>

            {navGroups.map((group) => (
              <div key={group.label} className="border border-white/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => onToggleExpand(group.label)}
                  className="flex items-center justify-between w-full px-5 py-4 text-white font-semibold text-[16px] hover:bg-white/10 transition-all duration-200"
                >
                  {group.label}
                  <ChevronDown
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      expanded === group.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expanded === group.label ? 'max-h-[800px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-2 pb-2 pt-1 space-y-1 bg-white/5">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 group/link"
                      >
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white group-hover/link:bg-accent-400 group-hover/link:text-primary-900 transition-all duration-200 shrink-0">
                          {item.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] font-semibold text-white leading-tight">{item.label}</p>
                          <p className="text-[12px] text-white/60 mt-0.5 leading-tight">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-3 space-y-2">
              <Link
                to="/#download"
                onClick={onClose}
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-accent-400 text-primary-900 font-semibold hover:bg-accent-500 transition-all duration-200 text-[16px]"
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
      className={`px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
        active
          ? 'text-accent-400 bg-white/10'
          : 'text-white hover:text-accent-400 hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  );
}
