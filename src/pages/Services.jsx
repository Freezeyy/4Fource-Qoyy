import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';

const Services = () => {
  const { data, isLoading, error } = useCMSData('services');

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
        <title>Our Service - Qoyy Global</title>
        <meta name="description" content="Solutions that drive brands forward. Media monitoring and public relations services that keep your brand informed, relevant, and strategically visible." />
      </Helmet>
      
      <main className="container-custom">
        <div className="relative flex items-center justify-center rounded-lg mt-8 mb-12 h-full">
          <div className="relative w-full flex flex-col items-center justify-center px-4 h-full">
            <h2 className="text-center text-white text-xl mb-10">
              {data?.subtitle || 'OUR SERVICE'}
            </h2>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 uppercase">
              {data?.title || 'Solutions That Drive Brands Forward.'}
            </h1>
            {data?.description && (
              <p className="text-center text-white text-lg max-w-4xl mx-auto">
                {data.description}
              </p>
            )}
            {data?.image && (
              <div className="mt-8">
                <img 
                  src={data.image} 
                  alt={data.title || 'Service Image'} 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Services; 