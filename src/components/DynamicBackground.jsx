import React from 'react';
import useCMSData from '../hooks/useCMSData';

const DynamicBackground = ({ endpoint, children, fallbackImage = null }) => {
  const { data, isLoading, error } = useCMSData(endpoint);
  
  // Get background image from CMS data or use fallback
  const backgroundImage = data?.backgroundImage || fallbackImage;
  
  // Default fallback images for each page
  const getDefaultBackground = () => {
    switch (endpoint) {
      case 'home':
        return '/src/assets/Perbincangan-Agensi-Kreatif_simple_compose.png';
      case 'about':
        return '/src/assets/Keadaan-Pekerja-Fancy_simple_compose.png';
      case 'services':
        return '/src/assets/services-bg.png';
      case 'info':
        return '/src/assets/info-bg.png';
      case 'contact':
        return '/src/assets/contact-bg.png';
      default:
        return '/src/assets/Perbincangan-Agensi-Kreatif_simple_compose.png';
    }
  };

  // Use CMS background image, fallback image, or default
  const finalBackgroundImage = backgroundImage || fallbackImage || getDefaultBackground();
  
  const backgroundStyle = {
    backgroundImage: `url(${finalBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle} className="flex flex-col">
      {children}
    </div>
  );
};

export default DynamicBackground;
