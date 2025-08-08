import React from 'react';
import { Helmet } from 'react-helmet-async';
import CMSContentBlock from '../components/CMSContentBlock';
import useCMSData from '../hooks/useCMSData';

const Home = () => {
  const { data, isLoading, error } = useCMSData('home');

  return (
    <>
      <Helmet>
        <title>Qoyy Global - Marketing Made Simple</title>
        <meta name="description" content="Marketing made simple, all under one roof. Qoyy Global provides innovative solutions for your business." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-800">
        <div className="container-custom section-padding">
          {/* Hero Section */}
          <div className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Marketing Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            
            <div className="relative z-10 text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                MARKETING MADE SIMPLE
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-orange-500">
                ALL UNDER ONE ROOF
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home; 