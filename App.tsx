
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layouts
import MainLayout from './components/MainLayout';
import ShowcaseLayout from './components/ShowcaseLayout';

// Main Site Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

// Service Detail Pages
import ResidentialSolarPage from './pages/services/ResidentialSolarPage';
import CommercialSolarPage from './pages/services/CommercialSolarPage';
import SolarWaterPumpPage from './pages/services/SolarWaterPumpPage';
import SystemMaintenancePage from './pages/services/SystemMaintenancePage';
import EnergyConsultationPage from './pages/services/EnergyConsultationPage';
import BatteryStoragePage from './pages/services/BatteryStoragePage';
import SolarFinancingPage from './pages/services/SolarFinancingPage';
import SolarLightingPage from './pages/services/SolarLightingPage';

// Showcase Pages
import ShowcaseHomePage from './pages/ShowcaseHomePage';
import TextGenerationPage from './pages/TextGenerationPage';
import ImageGenerationPage from './pages/ImageGenerationPage';
import ChatPage from './pages/ChatPage';
import JsonModePage from './pages/JsonModePage';
import SearchGroundingPage from './pages/SearchGroundingPage';

const App: React.FC = () => {
  const { pathname } = useLocation();
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Do not show the quote popup on showcase pages
    if (pathname.startsWith('/showcase')) {
        return;
    }
    
    const hasSeenPopup = sessionStorage.getItem('hasSeenQuotePopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsQuotePopupOpen(true);
        sessionStorage.setItem('hasSeenQuotePopup', 'true');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleOpenQuotePopup = () => setIsQuotePopupOpen(true);
  const handleCloseQuotePopup = () => setIsQuotePopupOpen(false);

  return (
    <Routes>
      <Route
        element={
          <MainLayout 
            onGetQuoteClick={handleOpenQuotePopup} 
            isQuotePopupOpen={isQuotePopupOpen} 
            handleCloseQuotePopup={handleCloseQuotePopup} 
          />
        }
      >
        <Route path="/" element={<HomePage onGetQuoteClick={handleOpenQuotePopup} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* Service Pages */}
        <Route path="/services/residential-solar" element={<ResidentialSolarPage />} />
        <Route path="/services/commercial-industrial" element={<CommercialSolarPage />} />
        <Route path="/services/solar-water-pumps" element={<SolarWaterPumpPage />} />
        <Route path="/services/system-maintenance" element={<SystemMaintenancePage />} />
        <Route path="/services/energy-consultation" element={<EnergyConsultationPage />} />
        <Route path="/services/battery-storage" element={<BatteryStoragePage />} />
        <Route path="/services/solar-financing" element={<SolarFinancingPage />} />
        <Route path="/services/solar-lighting" element={<SolarLightingPage />} />
        
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Route>
      
      {/* Gemini API Showcase Routes */}
      <Route path="/showcase" element={<ShowcaseLayout />}>
          <Route index element={<ShowcaseHomePage />} />
          <Route path="text" element={<TextGenerationPage />} />
          <Route path="image" element={<ImageGenerationPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="json" element={<JsonModePage />} />
          <Route path="search" element={<SearchGroundingPage />} />
      </Route>
    </Routes>
  );
};

export default App;
