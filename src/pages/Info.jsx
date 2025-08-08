import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';

const Info = () => {
  const { data, isLoading, error } = useCMSData('info');

  return (
    <>
      <Helmet>
        <title>Quick Info - Qoyy Global</title>
        <meta name="description" content="Answers for every question. Explore our services, process, and support for your marketing and creative needs." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-800">
        <div className="container-custom section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                ANSWERS FOR EVERY QUESTION
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Explore our services, process, and support for your marketing and creative needs.
              </p>
            </div>

            {/* FAQ Section */}
            {isLoading ? (
              <div className="space-y-8">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gray-700 p-8 rounded-lg">
                      <div className="h-8 bg-gray-600 rounded mb-4 w-1/2"></div>
                      <div className="space-y-3">
                        <div className="h-6 bg-gray-600 rounded w-full"></div>
                        <div className="h-6 bg-gray-600 rounded w-5/6"></div>
                        <div className="h-6 bg-gray-600 rounded w-4/5"></div>
                        <div className="h-6 bg-gray-600 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                <div className="bg-gray-700 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Which services are available?
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We offer comprehensive media monitoring and public relations services including real-time brand monitoring, 
                    sentiment analysis, crisis management, press release distribution, media relations, strategic communication, 
                    digital PR, and government relations. Our services are tailored to meet the specific needs of government 
                    agencies and corporate brands across various industries.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Who do you usually work with?
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our client base includes government agencies, corporate brands, and organizations across various sectors. 
                    We have extensive experience working with both public and private sector clients, understanding the unique 
                    challenges and opportunities that each sector presents. Our team is equipped to handle projects of all sizes, 
                    from small businesses to large multinational corporations.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    How fast is project delivery?
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Project timelines vary depending on complexity and scope. Media monitoring services can be implemented 
                    within 24-48 hours, while comprehensive PR campaigns typically take 2-4 weeks to develop and launch. 
                    Crisis management responses are immediate, with 24/7 support available. We provide detailed timelines 
                    during our initial consultation and maintain regular communication throughout the project lifecycle.
                  </p>
                </div>
                
                <div className="bg-gray-700 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    How can I get a proposal?
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Getting a proposal is simple. You can contact us via WhatsApp for quick responses or email for detailed 
                    discussions. We'll schedule a consultation to understand your specific needs, challenges, and objectives. 
                    Based on this discussion, we'll provide a comprehensive proposal including strategy, timeline, deliverables, 
                    and investment. Our proposals are detailed and transparent, with no hidden costs.
                  </p>
                </div>
              </div>
            )}

            {/* Additional Info */}
            {!isLoading && (
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-700 p-8 rounded-lg">
                  <h4 className="text-xl font-semibold text-orange-500 mb-4">
                    Our Process
                  </h4>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1 font-bold">1.</span>
                      <div>
                        <div className="font-semibold">Discovery & Analysis</div>
                        <div className="text-sm">Understanding your needs and market position</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1 font-bold">2.</span>
                      <div>
                        <div className="font-semibold">Strategy Development</div>
                        <div className="text-sm">Creating tailored solutions and approaches</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1 font-bold">3.</span>
                      <div>
                        <div className="font-semibold">Implementation</div>
                        <div className="text-sm">Executing campaigns and monitoring results</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1 font-bold">4.</span>
                      <div>
                        <div className="font-semibold">Optimization</div>
                        <div className="text-sm">Continuous improvement and performance tracking</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-700 p-8 rounded-lg">
                  <h4 className="text-xl font-semibold text-orange-500 mb-4">
                    Why Choose Us
                  </h4>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">✓</span>
                      <div>
                        <div className="font-semibold">Proven Track Record</div>
                        <div className="text-sm">Success with government and corporate clients</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">✓</span>
                      <div>
                        <div className="font-semibold">24/7 Support</div>
                        <div className="text-sm">Round-the-clock crisis management</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">✓</span>
                      <div>
                        <div className="font-semibold">Transparent Reporting</div>
                        <div className="text-sm">Clear metrics and ROI measurement</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">✓</span>
                      <div>
                        <div className="font-semibold">Custom Solutions</div>
                        <div className="text-sm">Tailored strategies for your specific needs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Info; 