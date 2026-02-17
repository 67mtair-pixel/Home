import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import FeatureCard from '../../components/shared/FeatureCard';
import StepsSection from '../../components/shared/StepsSection';
import FAQAccordion from '../../components/shared/FAQAccordion';
import CTABanner from '../../components/shared/CTABanner';

interface ServiceStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceCategory {
  icon: React.ReactNode;
  name: string;
  color: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageData {
  heroTitle: string;
  heroDescription: string;
  breadcrumbLabel: string;
  introTitle: string;
  introText: string;
  categories?: ServiceCategory[];
  categoriesTitle?: string;
  features: ServiceFeature[];
  featuresTitle: string;
  featuresSubtitle: string;
  steps: ServiceStep[];
  stepsTitle: string;
  stepsSubtitle: string;
  faqs: FAQItem[];
  ctaTitle: string;
  ctaDescription: string;
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <>
      <PageHero
        title={data.heroTitle}
        description={data.heroDescription}
        breadcrumbs={[
          { label: 'خدماتنا', href: '/#services' },
          { label: data.breadcrumbLabel },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">{data.introTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{data.introText}</p>
          </div>
        </div>
      </section>

      {data.categories && data.categories.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <SectionHeader
              title={data.categoriesTitle || 'الأقسام'}
              subtitle="تصفّح أقسامنا واختر ما يناسب احتياجاتك"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {data.categories.map((cat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all group cursor-default"
                >
                  <span
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-3 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                  >
                    {cat.icon}
                  </span>
                  <p className="text-sm font-semibold text-primary-900">{cat.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`section-padding ${data.categories ? '' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <SectionHeader title={data.featuresTitle} subtitle={data.featuresSubtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, i) => (
              <FeatureCard key={i} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title={data.stepsTitle} subtitle={data.stepsSubtitle} />
          <StepsSection steps={data.steps} />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader title="الأسئلة الشائعة" subtitle="إجابات لأكثر الأسئلة شيوعاً حول الخدمة" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={data.faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title={data.ctaTitle}
        description={data.ctaDescription}
        primaryLabel="حمّل التطبيق الآن"
        primaryHref="/#download"
        secondaryLabel="تعرّف على خدماتنا"
        secondaryHref="/"
      />
    </>
  );
}
