import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Info from './pages/Info';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Background image */}
          <div
            className={
              (() => {
                switch (window.location.pathname) {
                  case "/home":
                    return "bg-[url('/src/assets/Perbincangan-Agensi-Kreatif_simple_compose.png')] bg-cover bg-center min-h-screen flex flex-col";
                  case "/":
                    return "bg-[url('/src/assets/Perbincangan-Agensi-Kreatif_simple_compose.png')] bg-cover bg-center min-h-screen flex flex-col";
                  case "/about":
                    return "bg-[url('/src/assets/Keadaan-Pekerja-Fancy_simple_compose.png')] bg-cover bg-center min-h-screen flex flex-col";
                  case "/services":
                    return "bg-[url('/src/assets/services-bg.png')] bg-cover bg-center min-h-screen flex flex-col";
                  case "/info":
                    return "bg-[url('/src/assets/info-bg.png')] bg-cover bg-center min-h-screen flex flex-col";
                  case "/contact":
                    return "bg-[url('/src/assets/contact-bg.png')] bg-cover bg-center min-h-screen flex flex-col";
                  default:
                    return "";
                }
              })()
            }
          >
          {/* Background image */}
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
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
