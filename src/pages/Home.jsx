import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';

const Home = () => {
  const { data, isLoading, error } = useCMSData('home');

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
        <title>Qoyy Global - Marketing Made Simple</title>
        <meta name="description" content="Marketing made simple, all under one roof. Qoyy Global provides innovative solutions for your business." />
      </Helmet>
      
      <main className="container-custom">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center">
          {data?.image && (
            <div className="absolute inset-0 z-0">
              <img 
                src={data.image}
                alt="Marketing Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
          )}
          
          <div className="relative z-10 text-white mb-32">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2">
              {data?.title || 'MARKETING'}
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
              {data?.subtitle || 'MADE SIMPLE'}
            </h2>
            {data?.description && (
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal">
                {data.description}
              </h3>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home; 