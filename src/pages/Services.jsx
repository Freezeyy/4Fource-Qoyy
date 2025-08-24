
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';

// Import background images
import companyWebsiteImg from '../assets/Gambar_Company_Website.jpg';
import workerStateImg from '../assets/Keadaan-Pekerja-Fancy_simple_compose.png';
import agencyDiscussionImg from '../assets/Perbincangan-Agensi-Kreatif_simple_compose.png';
import quickInfoBgImg from '../assets/quickInfo-bg.png';
import contactUsImg from '../assets/contactUs.png';

const Services = () => {
  const { data, isLoading, error } = useCMSData('services');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Service content slides - exactly 5 slides with background images
  const serviceSlides = [
    {
      title: "Media Monitoring",
      description: "Real-time brand monitoring and sentiment analysis to keep your brand informed and relevant in today's fast-paced digital landscape.",
      features: [
        "24/7 brand monitoring",
        "Sentiment analysis",
        "Crisis detection",
        "Competitive intelligence"
      ],
      backgroundImage: companyWebsiteImg
    },
    {
      title: "Public Relations",
      description: "Strategic communication services that build and maintain your brand's reputation across all media channels.",
      features: [
        "Press release distribution",
        "Media relations",
        "Crisis management",
        "Strategic communication"
      ],
      backgroundImage: workerStateImg
    },
    {
      title: "Digital PR",
      description: "Comprehensive digital public relations solutions that enhance your online presence and engagement.",
      features: [
        "Social media management",
        "Influencer partnerships",
        "Content strategy",
        "Online reputation management"
      ],
      backgroundImage: agencyDiscussionImg
    },
    {
      title: "Government Relations",
      description: "Specialized services for government agencies and organizations working with public sector clients.",
      features: [
        "Policy communication",
        "Stakeholder engagement",
        "Regulatory compliance",
        "Public affairs"
      ],
      backgroundImage: quickInfoBgImg
    },
    {
      title: "Creative Services",
      description: "Innovative creative solutions that bring your brand vision to life through compelling visual and digital content.",
      features: [
        "Brand identity design",
        "Digital marketing",
        "Content creation",
        "Creative strategy"
      ],
      backgroundImage: contactUsImg
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % serviceSlides.length);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700); // Match the CSS transition duration
  };

  return (
    <>
      <Helmet>
        <title>Our Service - Qoyy Global</title>
        <meta name="description" content="Solutions that drive brands forward. Media monitoring and public relations services that keep your brand informed, relevant, and strategically visible." />
      </Helmet>

      {/* Full Page Background Layer - Behind Everything */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        {/* Background Images with Crossfade Animation */}
        {serviceSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.backgroundImage})`
            }}
          />
        ))}
      </div>

      {/* Content Layer - Above Background */}
      <main className="container-custom min-h-screen flex flex-col relative z-0">
          <div className="relative flex items-center justify-center rounded-lg mt-8 mb-8 flex-grow">
          <div className="relative w-full flex flex-col items-center justify-center px-4 h-full">
            <h2 className="text-center text-white text-xl mb-10">
              OUR SERVICE
            </h2>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 uppercase">
              Solutions That Drive Brands Forward.
            </h1>
            
            {/* Sliding Content Section */}
            <div className="w-full mb-8">
              <div className="relative bg-black bg-opacity-30 rounded-lg p-8 mb-8 h-96 overflow-hidden">
                <div className={`text-center transition-all duration-700 ease-in-out transform ${
                  isTransitioning ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
                }`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-500 ease-in-out">
                    {serviceSlides[currentSlide].title}
                  </h3>
                  <p className="text-lg text-white mb-6 leading-relaxed transition-all duration-600 ease-in-out">
                    {serviceSlides[currentSlide].description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceSlides[currentSlide].features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-center text-white transition-all duration-700 ease-in-out transform ${
                          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <span className="text-orange-500 mr-3 text-xl">✓</span>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right Arrow */}
                <button
                  onClick={nextSlide}
                  disabled={isTransitioning}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-200 ${
                    isTransitioning ? 'opacity-50 cursor-not-allowed scale-95' : 'opacity-100 hover:scale-110'
                  }`}
                  aria-label="Next service"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      isTransitioning ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2">
                {serviceSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isTransitioning && index !== currentSlide) {
                        setIsTransitioning(true);
                        setCurrentSlide(index);
                        setTimeout(() => setIsTransitioning(false), 700);
                      }
                    }}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                      index === currentSlide
                        ? 'bg-orange-500 scale-125'
                        : 'bg-gray-400 hover:bg-gray-300 hover:scale-110'
                    } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        </main>
    </>
  );
};

export default Services; 
