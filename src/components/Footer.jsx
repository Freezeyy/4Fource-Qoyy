import React from 'react';
import { Link } from 'react-router-dom';
import useFooterData from '../hooks/useFooterData';

const Footer = () => {
  const { data, isLoading, error } = useFooterData();

  // Show loading state
  if (isLoading) {
    return (
      <footer className="bg-orange-500 text-white">
        <div className="container-custom section-padding">
          <div className="text-center py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-orange-400 rounded mb-4 mx-auto w-64"></div>
              <div className="h-4 bg-orange-400 rounded mb-2 mx-auto w-48"></div>
              <div className="h-4 bg-orange-400 rounded mx-auto w-32"></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Show error state
  if (error) {
    return (
      <footer className="bg-orange-500 text-white">
        <div className="container-custom section-padding">
          <div className="text-center py-8">
            <p className="text-orange-200">Footer content unavailable</p>
            <p className="text-orange-200 text-sm mt-2">Error: {error}</p>
          </div>
        </div>
      </footer>
    );
  }

  // Get footer data with fallbacks
  const footer = data?.attributes || data || {};
  
  const companyName = footer.companyName || 'Qoyy Global';
  const address = footer.address || 'B3-3A-13A Solaris Dutamas, No. 1 Jalan Dutamas 1, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur.';
  const phone = footer.phone || '+6016-670 4742';
  const email = footer.email || 'commercial@qoyyglobal.com';
  const copyrightText = footer.copyrightText || 'COPYRIGHT © 2025 QOYY GLOBAL (002857086-D) All rights reserved.';
  
  const quickLinks = footer.quickLinks || [];

  return (
    <footer className="bg-orange-500 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center text-center">
          {/* Contact Information */}
          <div className="flex flex-col items-center justify-center h-full w-full">
            <table className="w-auto text-left text-sm">
              <tbody>
                <tr>
                  <td className="pr-2 align-center">
                    <img 
                      src="/src/assets/Address.png" 
                      alt="Address Icon" 
                      className="w-18 h-full inline-block align-middle"
                    />
                  </td>
                  <td>
                    {address}
                  </td>
                </tr>
                <tr>
                  <td className="pr-2 align-center">
                    <img 
                      src="/src/assets/Letter.png" 
                      alt="Email Icon" 
                      className="w-18 h-full inline-block align-middle"
                    />
                  </td>
                  <td>
                    {email}
                  </td>
                </tr>
                <tr>
                  <td className="pr-2 align-center">
                    <img 
                      src="/src/assets/Phone.png" 
                      alt="Phone Icon" 
                      className="w-18 h-full inline-block align-middle"
                    />
                  </td>
                  <td>
                    {phone}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col items-center justify-center space-y-4 h-full">
            <div className="flex items-center">
              <img 
                src="/src/assets/QOYY GLOBAL-WHITE-LOGO.png" 
                alt={companyName} 
                className="h-32"
              />
            </div>
            <p className="text-sm text-center !mt-0">
              {copyrightText}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-end gap-2 justify-evenly h-full">
            {quickLinks.length > 0 ? (
              quickLinks
                .sort((a, b) => (a.order || 0) - (b.order || 0))
                .map((link, index) => (
                  <Link 
                    key={index}
                    to={link.url} 
                    className="text-white font-semibold text-sm hover:underline"
                  >
                    {link.title}
                  </Link>
                ))
            ) : (
              <>
                <Link to="/about" className="text-white font-semibold text-sm hover:underline">
                  ABOUT US
                </Link>
                <Link to="/services" className="text-white font-semibold text-sm hover:underline">
                  OUR SERVICE
                </Link>
                <Link to="/info" className="text-white font-semibold text-sm hover:underline">
                  QUICK INFO
                </Link>
                <Link to="/contact" className="text-white font-semibold text-sm hover:underline">
                  CONTACT US
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 