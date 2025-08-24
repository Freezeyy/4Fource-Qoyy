import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';

const About = () => {
  const { data, isLoading, error, refetch } = useCMSData('about');

  // Debug logging
  console.log('🔍 About component render:', { data, isLoading, error });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="container-custom">
        <div className="text-center text-white mt-8">
          <h2 className="text-xl mb-4">Error Loading Content</h2>
          <p className="text-red-400">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>About Us - Qoyy Global</title>
        <meta name="description" content="Creative impact, measurable results. Learn about Qoyy Global's journey of growth built on shared successes." />
      </Helmet>
      
      <main className="container-custom">


        <div className="relative flex items-center justify-center rounded-lg mt-8 mb-12 h-full">
          <div className="relative w-full flex flex-col items-center justify-center px-4 h-full">
            <h2 className="text-center text-white text-xl mb-10">
              {data?.subtitle || 'ABOUT US'}
            </h2>
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              {data?.title || 'CREATIVE IMPACT, MEASURABLE RESULTS.'}
            </h1>
            {data?.description && (
              <p className="text-white text-base md:text-lg text-center mb-6 font-normal font-semibold">
                {data.description}
              </p>
            )}
            {data?.image && (
              <div className="mt-8 mb-6">
                <img 
                  src={data.image} 
                  alt={data.title || 'About Us Image'} 
                  className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center mb-10">
          <p className="text-white text-center text-xl md:text-2xl font-bold w-full mb-10">
            "OUR JOURNEY OF GROWTH IS BUILT ON SHARED SUCCESSES WITH THOSE WE SERVE."
          </p>
        </div>
      </main>
    </>
  );
};

export default About; 