import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';

const Services = () => {
  const { data, isLoading, error } = useCMSData('services');

  return (
    <>
      <Helmet>
        <title>Our Service - Qoyy Global</title>
        <meta name="description" content="Solutions that drive brands forward. Media monitoring and public relations services that keep your brand informed, relevant, and strategically visible." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-800">
        <div className="container-custom section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                SOLUTIONS THAT DRIVE BRANDS FORWARD
              </h1>
            </div>

            {/* Service Focus */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-8">
                MEDIA MONITORING & PUBLIC RELATIONS
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                We help brands stay informed, relevant, and strategically visible across all media platforms. 
                Our comprehensive media monitoring and public relations services ensure your brand narrative is 
                aligned, amplified, and protected.
              </p>
            </div>

            {/* Service Details */}
            {isLoading ? (
              <LoadingSkeleton type="grid" />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-700 p-8 rounded-lg">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Media Monitoring
                  </h3>
                  <p className="text-gray-300">
                    Real-time tracking of brand mentions, sentiment analysis, and competitive intelligence across all media channels.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• 24/7 brand monitoring</li>
                    <li>• Sentiment analysis</li>
                    <li>• Crisis detection</li>
                    <li>• Competitive insights</li>
                  </ul>
                </div>

                <div className="bg-gray-700 p-8 rounded-lg">
                  <div className="text-4xl mb-4">📰</div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Public Relations
                  </h3>
                  <p className="text-gray-300">
                    Strategic PR campaigns that build brand reputation, manage crises, and create positive media coverage.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Press release distribution</li>
                    <li>• Media relations</li>
                    <li>• Crisis management</li>
                    <li>• Event PR</li>
                  </ul>
                </div>

                <div className="bg-gray-700 p-8 rounded-lg">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Strategic Communication
                  </h3>
                  <p className="text-gray-300">
                    Comprehensive communication strategies that align with your business objectives and target audience.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Message development</li>
                    <li>• Stakeholder engagement</li>
                    <li>• Content strategy</li>
                    <li>• Brand positioning</li>
                  </ul>
                </div>

                <div className="bg-gray-700 p-8 rounded-lg">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Digital PR
                  </h3>
                  <p className="text-gray-300">
                    Online reputation management and digital media strategies for the modern digital landscape.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Online reputation management</li>
                    <li>• Social media PR</li>
                    <li>• Influencer partnerships</li>
                    <li>• Digital crisis management</li>
                  </ul>
                </div>

                <div className="bg-gray-700 p-8 rounded-lg">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Reporting & Analytics
                  </h3>
                  <p className="text-gray-300">
                    Comprehensive reporting and analytics to measure the impact and ROI of your PR campaigns.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Monthly reports</li>
                    <li>• ROI measurement</li>
                    <li>• Performance tracking</li>
                    <li>• Strategic insights</li>
                  </ul>
                </div>

                <div className="bg-gray-700 p-8 rounded-lg">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Government Relations
                  </h3>
                  <p className="text-gray-300">
                    Specialized PR services for government agencies and public sector organizations.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Public affairs</li>
                    <li>• Policy communication</li>
                    <li>• Stakeholder engagement</li>
                    <li>• Crisis communication</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Elevate Your Brand?
                </h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how our media monitoring and public relations services can drive your brand forward.
                </p>
                <a
                  href="/contact"
                  className="btn-primary inline-block"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services; 