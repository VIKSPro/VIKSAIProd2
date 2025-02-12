import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import LoadingPage from './components/LoadingPage';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Lazy load components
const WhySection = lazy(() => import('./components/WhySection'));
const HowToSection = lazy(() => import('./components/HowToSection'));
const SuccessSection = lazy(() => import('./components/SuccessSection'));
const PortfolioSection = lazy(() => import('./components/PortfolioSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const FaqSection = lazy(() => import('./components/FaqSection'));

// Lazy load legal pages
const PrivacyPolicy = lazy(() => import('./components/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/legal/TermsOfService'));
const CookiePolicy = lazy(() => import('./components/legal/CookiePolicy'));

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-gradient-to-b from-black to-black/95 text-white overflow-x-hidden relative">
          <Navbar />
          <main>
            <Routes>
              {/* Главная страница */}
              <Route
                path="/"
                element={
                  <Suspense fallback={<LoadingPage />}>
                    <Hero />
                    <WhySection />
                    <HowToSection />
                    <SuccessSection />
                    <PortfolioSection />
                    <PricingSection />
                    <FaqSection />
                  </Suspense>
                }
              />
              
              {/* Страницы политики */}
              <Route
                path="/privacy"
                element={
                  <Suspense fallback={<LoadingPage />}>
                    <PrivacyPolicy />
                  </Suspense>
                }
              />
              <Route
                path="/terms"
                element={
                  <Suspense fallback={<LoadingPage />}>
                    <TermsOfService />
                  </Suspense>
                }
              />
              <Route
                path="/cookies"
                element={
                  <Suspense fallback={<LoadingPage />}>
                    <CookiePolicy />
                  </Suspense>
                }
              />

              {/* Обработка 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}