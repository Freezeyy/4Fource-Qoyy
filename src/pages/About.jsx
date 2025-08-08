import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCMSData from '../hooks/useCMSData';

const About = () => {
  const { data, isLoading, error } = useCMSData('about');

  return (
    <>
      <Helmet>
        <title>About Us - Qoyy Global</title>
        <meta name="description" content="Creative impact, measurable results. Learn about Qoyy Global's journey of growth built on shared successes." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-800">
        <div className="container-custom section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                CREATIVE IMPACT, MEASURABLE RESULTS
              </h1>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Established in 2018, Qoyy Global is an integrated marketing agency based in Kuala Lumpur. 
                  We specialize in delivering comprehensive marketing solutions that drive real business results.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our client base includes government agencies and corporate brands across various industries. 
                  We pride ourselves on understanding the unique challenges and opportunities that each sector presents.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  With a team of experienced professionals, we combine creativity with strategic thinking to 
                  create campaigns that not only look great but also deliver measurable outcomes.
                </p>
              </div>
              
              <div className="bg-gray-700 p-8 rounded-lg">
                <h4 className="text-2xl font-semibold text-orange-500 mb-6">
                  Our Approach
                </h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold">Strategic Planning</div>
                      <div className="text-sm">Data-driven insights and market analysis</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold">Creative Excellence</div>
                      <div className="text-sm">Innovative design and compelling content</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold">Measurable Results</div>
                      <div className="text-sm">ROI-focused campaigns and analytics</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold">Client Partnership</div>
                      <div className="text-sm">Long-term relationships and collaboration</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Team Image */}
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Qoyy Global Team"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Quote Section */}
            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-white italic">
                "OUR JOURNEY OF GROWTH IS BUILT ON SHARED SUCCESSES WITH THOSE WE SERVE."
              </blockquote>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About; 