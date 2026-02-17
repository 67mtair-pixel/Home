import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import MartPage from './pages/services/MartPage';
import CarePage from './pages/services/CarePage';
import PharmaPage from './pages/services/PharmaPage';
import GasPage from './pages/services/GasPage';
import AidPage from './pages/services/AidPage';
import StorePage from './pages/partners/StorePage';
import RiderPage from './pages/partners/RiderPage';
import AidOrgsPage from './pages/partners/AidOrgsPage';
import CompanyPage from './pages/about/CompanyPage';
import StoryPage from './pages/about/StoryPage';
import StrategyPage from './pages/about/StrategyPage';
import NewsPage from './pages/about/NewsPage';
import FAQPage from './pages/about/FAQPage';
import ContactPage from './pages/about/ContactPage';
import SupportPage from './pages/about/SupportPage';
import LegalLayout from './pages/legal/LegalLayout';
import PrivacyPage from './pages/legal/PrivacyPage';
import TermsPage from './pages/legal/TermsPage';
import CookiesPage from './pages/legal/CookiesPage';
import ShippingPage from './pages/legal/ShippingPage';
import RefundPage from './pages/legal/RefundPage';
import CancellationPage from './pages/legal/CancellationPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/services/mart" element={<MartPage />} />
          <Route path="/services/care" element={<CarePage />} />
          <Route path="/services/pharma" element={<PharmaPage />} />
          <Route path="/services/gas" element={<GasPage />} />
          <Route path="/services/aid" element={<AidPage />} />

          <Route path="/partners/store" element={<StorePage />} />
          <Route path="/partners/rider" element={<RiderPage />} />
          <Route path="/partners/aid-orgs" element={<AidOrgsPage />} />

          <Route path="/about/company" element={<CompanyPage />} />
          <Route path="/about/story" element={<StoryPage />} />
          <Route path="/about/strategy" element={<StrategyPage />} />
          <Route path="/about/news" element={<NewsPage />} />
          <Route path="/about/faq" element={<FAQPage />} />
          <Route path="/about/contact" element={<ContactPage />} />
          <Route path="/about/support" element={<SupportPage />} />

          <Route path="/legal" element={<LegalLayout />}>
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="cookies" element={<CookiesPage />} />
            <Route path="shipping" element={<ShippingPage />} />
            <Route path="refund" element={<RefundPage />} />
            <Route path="cancellation" element={<CancellationPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
