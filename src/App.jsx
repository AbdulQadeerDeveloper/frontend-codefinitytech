// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalLoader from "./components/GlobalLoader";
import LiveChatWidget from "./components/LiveChatWidget";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import BookConsultation from "./pages/BookConsultation";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogsPage from "./pages/BlogsPage";
import TestimonialsPage from "./components/TestimonialsPage";
import ReactJsDevelopment from "./pages/ReactJsDevelopment";
import NextJsDevelopment from "./pages/NextJsDevelopment";
import WebApplicationDevelopment from "./pages/WebApplicationDevelopment";
import FrontendDevelopment from "./pages/FrontendDevelopment";
import BackendDevelopment from "./pages/BackendDevelopment";
import FullstackDevelopment from "./pages/FullstackDevelopment";
import ChakraUIService from "./pages/ChakraUIService";
import MUIService from "./pages/MUIService";
import TailwindUIService from "./pages/TailwindUIService";
import ServicesReactBootstrap from "./pages/ServicesReactBootstrap";
import PricingPage from "./components/PricingSection";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import OdooServiceDetail from './pages/OdooServiceDetail';

// =============================
// WRAPPER COMPONENT
// =============================
function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <GlobalLoader />}
      <Header />
      <main className="flex-1 bg-white">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Services - Specific routes first, then dynamic */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/mui" element={<MUIService />} />
          <Route path="/services/tailwind-ui" element={<TailwindUIService />} />
          <Route path="/services/react-bootstrap" element={<ServicesReactBootstrap />} />
          <Route path="/services/backend-development" element={<BackendDevelopment />} />
          <Route path="/services/chakra-ui" element={<ChakraUIService />} />
          <Route path="/services/fullstack-development" element={<FullstackDevelopment />} />
          <Route path="/services/web-application" element={<WebApplicationDevelopment />} />
          <Route path="/services/frontend-development" element={<FrontendDevelopment />} />
          <Route path="/services/nextjs-development" element={<NextJsDevelopment />} />
          <Route path="/services/reactjs-development" element={<ReactJsDevelopment />} />
          
          {/* Odoo Development - specific route */}
          <Route path="/services/odoo-development" element={<OdooServiceDetail />} />
          
          {/* Dynamic service route - this must come LAST */}
          <Route path="/services/:serviceId" element={<ServiceDetail />} />

          {/* Projects */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />

          {/* Blogs */}
          <Route path="/blogs" element={<BlogsPage />} />

          {/* Other Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Routes>
      </main>
      <Footer />
      <LiveChatWidget />
    </>
  );
}

// =============================
// MAIN APP
// =============================
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppWrapper />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}