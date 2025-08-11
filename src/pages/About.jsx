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
      
      <main className="container-custom">
      <div className="relative flex items-center justify-center rounded-lg mt-8 mb-12 h-full">
        <div className="relative w-full flex flex-col items-center justify-center px-4 h-full">
          <h2 className="text-center text-white text-xl mb-10">
            ABOUT US
          </h2>
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            CREATIVE IMPACT, MEASURABLE RESULTS.
          </h1>
          <p className="text-white text-base md:text-lg text-center mb-6 font-normal font-semibold">
            Established in 2018 and based in Kuala Lumpur, we are an integrated marketing agency delivering end-to-end solutions across digital, creative, media, events, and print. With a growing team of 15 passionate professionals, we proudly serve over 20 retained government clients and 10 corporate brands. We’re continuously expanding to bring impactful ideas to more partners across Malaysia.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center mb-10">
        <p className="text-white text-center text-xl md:text-2xl font-bold w-full mb-10">
          “OUR JOURNEY OF GROWTH IS BUILT ON SHARED SUCCESSES WITH THOSE WE SERVE.”
        </p>
      </div>
      </main>
    </>
  );
};

export default About; 