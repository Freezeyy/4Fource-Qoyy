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
  API_TOKEN: 'bb8be28691e7840bd46c62a3584ff02172558af7fdceb1ef21b9529841b62797bfa63a4baf700cf96511a3eb14aaf9f4e75e41261d0a36b59e368c374dab9240445050acc4d5f6570075713616650a8d6fd85c76f66b544e80547a2d0fc5805ef8b3cd98afc506c561b51e6beb7b101c648596617c6ca19593cb1fc3c679e55a', // ⚠️ Remove token temporarily to test public access
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
