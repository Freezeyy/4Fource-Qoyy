import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';

const Contact = () => {
  const { data, isLoading, error } = useCMSData('contact');

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="container-custom">
        <div className="text-center text-white mt-8">
          <h2 className="text-xl mb-4">Error Loading Content</h2>
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Qoyy Global</title>
        <meta name="description" content="Reach out for projects or possibilities. Let's build something great together with Qoyy Global." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-800">
        <div className="container-custom section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                {data?.title || 'Reach Out For Projects Or Possibilities'}
              </h1>
            </div>

            {/* Sub Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-8">
                {data?.subtitle || 'LET\'S BUILD SOMETHING GREAT TOGETHER'}
              </h2>
              {data?.description && (
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  {data.description}
                </p>
              )}
            </div>

            {/* Display Image if Available */}
            {data?.image && (
              <div className="text-center mb-8">
                <img 
                  src={data.image} 
                  alt={data.title || 'Contact Image'} 
                  className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            )}

            {/* Contact Buttons */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 p-8 rounded-lg">
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
              
              <div className="bg-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">
                  What We Offer
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold">Partnerships</div>
                      <div className="text-sm">Collaborative opportunities for mutual growth</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold">Career Opportunities</div>
                      <div className="text-sm">Join our dynamic team of professionals</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold">Collaborations</div>
                      <div className="text-sm">Creative partnerships and joint ventures</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold">Team Building</div>
                      <div className="text-sm">Become part of our growing family</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Contact Options */}
            <div className="mt-16 text-center">
              <div className="bg-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-300 mb-6">
                  Don't wait to begin building something great. Contact us today and let's discuss how we can 
                  help you achieve your goals and create lasting impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Start a Conversation
                  </a>
                  <a
                    href="mailto:info@qoyy.com"
                    className="btn-secondary"
                  >
                    Send us an Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact; 