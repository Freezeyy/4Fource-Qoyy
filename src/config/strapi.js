// Strapi Configuration
export const STRAPI_CONFIG = {
  // Base URL for Strapi backend
  BASE_URL: 'http://localhost:1337',
  
  // API endpoints
  API_ENDPOINTS: {
    HOME: '/api/home',
    ABOUT: '/api/about',
    SERVICES: '/api/info', // Using info endpoint for services temporarily
    INFO: '/api/info',
    CONTACT: '/api/contact',
  },
  
  // Default headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  },
  
  // API token (temporarily removed for testing)
  API_TOKEN: '374a6a1c410507079cd5cdc6a09af942477891cbd648a4c13a48594b939109539c6544b1cfc1617462c9e039da6f3ae6a20cb185b4041f7ffe420698a90094ece430d1fe0c02e92ee9fffd56e0df22b2c8faedae1906d35e0e9ce139cb8e08a4adee6e027d72d410198ca76e39eeece943844b7e2f557f29d3aafb312f4e8ee8', // ⚠️ Remove token temporarily to test public access
};

// Helper function to get full API URL
export const getStrapiURL = (endpoint) => {
  return `${STRAPI_CONFIG.BASE_URL}${endpoint}`;
};

// Helper function to get headers with authentication
export const getAuthHeaders = () => {
  const headers = { ...STRAPI_CONFIG.DEFAULT_HEADERS };
  
  // Enable authentication with API token
  if (STRAPI_CONFIG.API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_CONFIG.API_TOKEN}`;
  }
  
  return headers;
};
