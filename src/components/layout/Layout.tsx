import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 relative bg-gradient-to-b from-[#e8f4fc] via-[#eef6fb] to-white">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to left, rgba(1,70,199,0.04) 1px, transparent 1px), linear-gradient(to top, rgba(1,70,199,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative z-[1]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
