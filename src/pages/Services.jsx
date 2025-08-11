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
      
      <main className="container-custom">
        <div className="relative flex items-center justify-center rounded-lg mt-8 mb-12 h-full">
          <div className="relative w-full flex flex-col items-center justify-center px-4 h-full">
            <h2 className="text-center text-white text-xl mb-10">
              OUR SERVICE
            </h2>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 uppercase">
              Solutions That Drive Brands Forward.
            </h1>
          </div>
        </div>
        
      </main>
    </>
  );
};

export default Services; 