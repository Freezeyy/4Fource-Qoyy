import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Info from './pages/Info';
import Contact from './pages/Contact';
import DynamicBackground from './components/DynamicBackground';

// Component to determine current endpoint for background
const AppContent = () => {
  const location = useLocation();
  
  const getEndpointFromPath = (pathname) => {
    switch (pathname) {
      case "/":
      case "/home":
        return "home";
      case "/about":
        return "about";
      case "/services":
        return "services";
      case "/info":
        return "info";
      case "/contact":
        return "contact";
      default:
        return "home";
    }
  };

  const currentEndpoint = getEndpointFromPath(location.pathname);
  
  return (
    <DynamicBackground endpoint={currentEndpoint}>
      <div className="bg-black bg-opacity-60 min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/info" element={<Info />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </DynamicBackground>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <AppContent />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
