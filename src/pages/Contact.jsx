import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';

const Contact = () => {
  const { data, isLoading, error } = useCMSData('contact');

  return (
    <>
      <Helmet>
        <title>Contact Us - Qoyy Global</title>
        <meta name="description" content="Reach out for projects or possibilities. Let's build something great together with Qoyy Global." />
      </Helmet>
      
      <main className="min-h-screen">
        <div className="container-custom section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                Reach Out For Projects Or Possibilities
              </h1>
            </div>

            {/* Sub Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-8">
                LET'S BUILD SOMETHING GREAT TOGETHER
              </h2>
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
                Whether you're looking for partnerships, career opportunities, collaborations, or want to join our team, 
                we're here to help you achieve your goals. Reach out and let's start a conversation about how we can 
                work together to create something amazing.
              </p>
            </div>

            {/* Contact Buttons */}
            {isLoading ? (
              <LoadingSkeleton type="contact" />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div className="text-center">
                    <a
                      href="https://wa.me/15551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block w-full py-6 text-xl font-bold"
                    >
                      📱 CONTACT US VIA WHATSAPP
                    </a>
                    <p className="text-gray-400 mt-4">
                      Quick responses for urgent inquiries and immediate support
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <a
                      href="mailto:info@qoyy.com"
                      className="btn-secondary inline-block w-full py-6 text-xl font-bold"
                    >
                      ✉️ CONTACT US VIA EMAIL
                    </a>
                    <p className="text-gray-400 mt-4">
                      Detailed project discussions and comprehensive proposals
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-4 text-2xl">📍</span>
                      <div>
                        <div className="font-semibold">Address</div>
                        <div>123 Business Street</div>
                        <div>City, State 12345</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-4 text-2xl">📞</span>
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div>(555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-4 text-2xl">✉️</span>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div>info@qoyy.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-4 text-2xl">🕒</span>
                      <div>
                        <div className="font-semibold">Business Hours</div>
                        <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                        <div>Sat: 10:00 AM - 4:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact; 