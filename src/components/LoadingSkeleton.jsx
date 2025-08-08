import React from 'react';

const LoadingSkeleton = ({ type = 'content' }) => {
  const skeletons = {
    content: (
      <div className="animate-pulse">
        {/* Title skeleton */}
        <div className="h-16 md:h-20 bg-gray-600 rounded mb-6 w-3/4"></div>
        
        {/* Subtitle skeleton */}
        <div className="h-8 bg-gray-600 rounded mb-4 w-1/2"></div>
        
        {/* Description skeleton - multiple lines */}
        <div className="space-y-3 mb-8">
          <div className="h-6 bg-gray-600 rounded w-full"></div>
          <div className="h-6 bg-gray-600 rounded w-5/6"></div>
          <div className="h-6 bg-gray-600 rounded w-4/5"></div>
          <div className="h-6 bg-gray-600 rounded w-3/4"></div>
        </div>
        
        {/* Image skeleton */}
        <div className="h-64 md:h-96 bg-gray-600 rounded-lg mt-8"></div>
      </div>
    ),
    
    card: (
      <div className="animate-pulse">
        <div className="bg-gray-700 p-6 rounded-lg">
          {/* Icon skeleton */}
          <div className="w-12 h-12 bg-gray-600 rounded mb-4"></div>
          
          {/* Title skeleton */}
          <div className="h-6 bg-gray-600 rounded mb-3 w-3/4"></div>
          
          {/* Description skeleton */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-600 rounded w-full"></div>
            <div className="h-4 bg-gray-600 rounded w-5/6"></div>
            <div className="h-4 bg-gray-600 rounded w-4/5"></div>
          </div>
          
          {/* List items skeleton */}
          <div className="space-y-2">
            <div className="h-3 bg-gray-600 rounded w-3/4"></div>
            <div className="h-3 bg-gray-600 rounded w-2/3"></div>
            <div className="h-3 bg-gray-600 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    ),
    
    grid: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-700 p-6 rounded-lg">
              {/* Icon skeleton */}
              <div className="w-12 h-12 bg-gray-600 rounded mb-4"></div>
              
              {/* Title skeleton */}
              <div className="h-6 bg-gray-600 rounded mb-3 w-3/4"></div>
              
              {/* Description skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-600 rounded w-full"></div>
                <div className="h-4 bg-gray-600 rounded w-5/6"></div>
              </div>
              
              {/* List items skeleton */}
              <div className="space-y-2">
                <div className="h-3 bg-gray-600 rounded w-3/4"></div>
                <div className="h-3 bg-gray-600 rounded w-2/3"></div>
                <div className="h-3 bg-gray-600 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    
    hero: (
      <div className="animate-pulse">
        {/* Hero title skeleton */}
        <div className="text-center mb-12">
          <div className="h-16 md:h-20 bg-gray-600 rounded mb-6 w-3/4 mx-auto"></div>
          <div className="h-12 md:h-16 bg-gray-600 rounded w-1/2 mx-auto"></div>
        </div>
        
        {/* Hero description skeleton */}
        <div className="text-center mb-8">
          <div className="space-y-3 max-w-4xl mx-auto">
            <div className="h-6 bg-gray-600 rounded w-full"></div>
            <div className="h-6 bg-gray-600 rounded w-5/6 mx-auto"></div>
            <div className="h-6 bg-gray-600 rounded w-4/5 mx-auto"></div>
          </div>
        </div>
      </div>
    ),
    
    contact: (
      <div className="animate-pulse">
        {/* Contact buttons skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="h-16 bg-gray-600 rounded-lg"></div>
          <div className="h-16 bg-gray-600 rounded-lg"></div>
        </div>
        
        {/* Contact info skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-8 rounded-lg">
            <div className="h-8 bg-gray-600 rounded mb-6 w-1/2"></div>
            <div className="space-y-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-gray-600 rounded mr-4"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-lg">
            <div className="h-8 bg-gray-600 rounded mb-6 w-1/2"></div>
            <div className="space-y-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-4 h-4 bg-gray-600 rounded mr-3 mt-1"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-600 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  };

  return skeletons[type] || skeletons.content;
};

export default LoadingSkeleton; 