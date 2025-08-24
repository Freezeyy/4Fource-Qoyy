import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white relative z-50">
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
                    B3-3A-13A Solaris Dutamas, No. 1 Jalan Dutamas 1, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur.
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
                    commercial@qoyyglobal.com
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
                    +6016-670 4742
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
                alt="QOYY GLOBAL" 
                className="h-32"
              />
            </div>
            <p className="text-sm text-center !mt-0">
              COPYRIGHT © 2025 QOYY GLOBAL (002857086-D) All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-end gap-2 justify-evenly h-full">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 