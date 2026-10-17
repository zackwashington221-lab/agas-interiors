import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider, useCart } from './context/CartContext';
import { EnquiryProvider, useEnquiry } from './context/EnquiryContext';
import { TopBar } from './components/navigation/TopBar';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { SearchModal } from './components/search/SearchModal';
import { QuickViewModal } from './components/product/QuickViewModal';
import { ConsultationModal } from './components/home/ConsultationModal';
import { EnquiryModal } from './components/enquiry/EnquiryModal';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { SmoothScroll } from './components/common/SmoothScroll';

import Home from './pages/Home';
import DepartmentPage from './pages/DepartmentPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ServicesIndex from './pages/ServicesIndex';
import ServiceDetail from './pages/ServiceDetail';
import ProjectsIndex from './pages/ProjectsIndex';
import ProjectDetail from './pages/ProjectDetail';
import ThankYou from './pages/ThankYou';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import TermsOfSale from './pages/TermsOfSale';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Global Toast notification banner
function ToastNotification() {
  const { toastMessage: cartToast } = useCart();
  const { toastMessage: enquiryToast } = useEnquiry();
  const toastMessage = enquiryToast || cartToast;

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-[#1A1A1A] text-[#FBF6F3] text-xs px-4 py-3 rounded-none shadow-xl border-l-2 border-[#C9A96A] flex items-center gap-2">
      <span>{toastMessage}</span>
    </div>
  );
}

function AgasAppShell() {
  return (
    <div className="min-h-screen bg-[#FBF6F3] text-[#1A1A1A] flex flex-col justify-between font-sans transition-colors duration-300">
      <ScrollToTop />
      <SmoothScroll />
      
      {/* Top Announcements & Main Navigation */}
      <div>
        <TopBar />
        <Navbar />
      </div>

      {/* Main Content Area */}
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Architectural Services Routes */}
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Architectural Case Studies & Monograph Routes */}
          <Route path="/projects" element={<ProjectsIndex />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/work" element={<ProjectsIndex />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />

          {/* Enquiry Thank You Confirmation */}
          <Route path="/thank-you" element={<ThankYou />} />

          {/* All Products Catalogue & Department Routes */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/bedroom-furniture" element={<DepartmentPage categorySlug="bedroom-furniture" />} />
          <Route path="/bedroom-furniture/:subcategory" element={<DepartmentPage categorySlug="bedroom-furniture" />} />
          <Route path="/living-room-furniture" element={<DepartmentPage categorySlug="living-room-furniture" />} />
          <Route path="/living-room-furniture/:subcategory" element={<DepartmentPage categorySlug="living-room-furniture" />} />
          <Route path="/dining-room-furniture" element={<DepartmentPage categorySlug="dining-room-furniture" />} />
          <Route path="/dining-room-furniture/:subcategory" element={<DepartmentPage categorySlug="dining-room-furniture" />} />
          <Route path="/kitchen-furniture" element={<DepartmentPage categorySlug="kitchen-furniture" />} />
          <Route path="/kitchen-furniture/:subcategory" element={<DepartmentPage categorySlug="kitchen-furniture" />} />
          <Route path="/closet-system" element={<DepartmentPage categorySlug="closet-system" />} />
          <Route path="/closet-system/:subcategory" element={<DepartmentPage categorySlug="closet-system" />} />
          <Route path="/entryway-furniture" element={<DepartmentPage categorySlug="entryway-furniture" />} />
          <Route path="/entryway-furniture/:subcategory" element={<DepartmentPage categorySlug="entryway-furniture" />} />
          <Route path="/doors" element={<DepartmentPage categorySlug="doors" />} />
          <Route path="/doors/:subcategory" element={<DepartmentPage categorySlug="doors" />} />
          <Route path="/outdoor-furniture" element={<DepartmentPage categorySlug="outdoor-furniture" />} />
          <Route path="/outdoor-furniture/:subcategory" element={<DepartmentPage categorySlug="outdoor-furniture" />} />

          {/* Institutional & Information Routes */}
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/interior-design-consultation" element={<Contact />} />
          <Route path="/terms-of-sale" element={<TermsOfSale />} />
          <Route path="/terms-conditions" element={<TermsOfSale />} />
          <Route path="/privacy-policy" element={<TermsOfSale />} />

          {/* The Journal */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/5-living-room-furniture-trends-that-will-define-2026" element={<BlogPost />} />
          <Route path="/bedroom-furniture-trends-2026-to-craft-your-perfect-sleep-space" element={<BlogPost />} />

          {/* Product Detail Route */}
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/:slug" element={<ProductDetailPage />} />
        </Routes>
      </main>

      {/* Global Interactive Overlays & Drawers */}
      <CartDrawer />
      <SearchModal />
      <QuickViewModal />
      <ConsultationModal />
      <EnquiryModal />
      <WhatsAppFloating />
      <ToastNotification />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <CartProvider>
          <EnquiryProvider>
            <AgasAppShell />
          </EnquiryProvider>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
