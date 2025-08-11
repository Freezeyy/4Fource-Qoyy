import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Qoyy Global - Marketing Made Simple</title>
        <meta name="description" content="Marketing made simple, all under one roof. Qoyy Global provides innovative solutions for your business." />
      </Helmet>
      
      <main className="container-custom">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center">
          {/* <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
              alt="Marketing Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div> */}
          
          <div className="relative z-10 text-white mb-32">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2">
              MARKETING
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
              MADE SIMPLE
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal">
              ALL UNDER ONE ROOF
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home; 