import { Link, useLocation, Outlet } from 'react-router-dom';
import PageHero from '../../components/shared/PageHero';

const legalPages = [
  { label: 'سياسة الخصوصية', href: '/legal/privacy' },
  { label: 'الشروط والأحكام', href: '/legal/terms' },
  { label: 'سياسة الكوكيز', href: '/legal/cookies' },
  { label: 'سياسة الشحن', href: '/legal/shipping' },
  { label: 'سياسة الاسترجاع', href: '/legal/refund' },
  { label: 'سياسة الإلغاء', href: '/legal/cancellation' },
];

export default function LegalLayout() {
  const location = useLocation();
  const currentPage = legalPages.find((p) => p.href === location.pathname);

  return (
    <>
      <PageHero
        title={currentPage?.label || 'القانوني'}
        description="سياسات وشروط استخدام منصة وفرة"
        breadcrumbs={[{ label: 'القانوني' }, { label: currentPage?.label || '' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <nav className="bg-white rounded-2xl border border-gray-100 p-4 sticky top-24">
                <h3 className="text-sm font-bold text-primary-900 mb-3 px-3">الصفحات القانونية</h3>
                <ul className="space-y-1">
                  {legalPages.map((page) => (
                    <li key={page.href}>
                      <Link
                        to={page.href}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          location.pathname === page.href
                            ? 'bg-primary-50 text-primary-600 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary-900'
                        }`}
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-10">
                <div className="prose prose-sm max-w-none">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
