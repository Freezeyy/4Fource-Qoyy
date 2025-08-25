import React from 'react';
import { Helmet } from 'react-helmet-async';
import { home } from '../cms/content';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{home.seo.title}</title>
        <meta name="description" content={home.seo.description} />
      </Helmet>
     
      <main className="container-custom">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center">
          {/* <div className="absolute inset-0 z-0">
            <img
              src={home.hero.backgroundImage}
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
              {home.hero.title2}
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;