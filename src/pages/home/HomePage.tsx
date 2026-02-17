import HeroHome from './HeroHome';
import ServicesOverview from './ServicesOverview';
import WhyWefrh from './WhyWefrh';
import StatsSection from './StatsSection';
import HowItWorks from './HowItWorks';
import ReliefHighlight from './ReliefHighlight';
import PartnersSection from './PartnersSection';
import VisionSection from './VisionSection';
import TestimonialsSection from './TestimonialsSection';
import DownloadSection from './DownloadSection';

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <ServicesOverview />
      <WhyWefrh />
      <StatsSection />
      <HowItWorks />
      <ReliefHighlight />
      <PartnersSection />
      <VisionSection />
      <TestimonialsSection />
      <DownloadSection />
    </>
  );
}
