import { useState, useEffect } from 'react';
import axios from 'axios';
import { getStrapiURL, getAuthHeaders } from '../config/strapi';

const useCMSData = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Map endpoint to correct API path
        let apiPath = endpoint;
        if (endpoint === 'services') {
          apiPath = 'info'; // Map services to info endpoint
        }
        
        const fullUrl = getStrapiURL(`/api/${apiPath}`);
        const headers = getAuthHeaders();
        
        // Fetch data from Strapi
        const response = await axios.get(fullUrl, {
          headers: headers,
          params: {
            populate: '*', // Include all relations (like images)
          }
        });

        // Transform Strapi response to match our frontend structure
        const transformedData = transformStrapiData(response.data.data, endpoint);
        
        setData(transformedData);
        setError(null); // Clear any previous errors
        
      } catch (err) {
        console.error(`Error fetching ${endpoint}:`, err);
        setError('Failed to fetch from CMS');
        // Don't set mock data - let the component handle the error state
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};

// Transform Strapi data to match our frontend structure
const transformStrapiData = (strapiData, endpoint) => {
  if (!strapiData) {
    return null;
  }

  // Check if data has attributes (nested structure) or is flat
  let attributes = {};
  
  if (strapiData.attributes) {
    // Nested structure: { data: { attributes: { title: "...", ... } } }
    attributes = strapiData.attributes;
  } else {
    // Flat structure: { data: { title: "...", ... } }
    attributes = strapiData;
  }
  
  // Handle both richtext and string descriptions
  let description = '';
  if (typeof attributes.description === 'string') {
    description = attributes.description;
  } else if (attributes.description && attributes.description.content) {
    // Handle richtext format
    description = attributes.description.content || '';
  }
  
  let imageUrl = null;
  if (attributes.image) {
    if (attributes.image.data?.attributes?.url) {
      // Standard Strapi image structure
      imageUrl = `http://localhost:1337${attributes.image.data.attributes.url}`;
    } else if (attributes.image.url) {
      // Direct URL structure
      imageUrl = attributes.image.url.startsWith('http') 
        ? attributes.image.url 
        : `http://localhost:1337${attributes.image.url}`;
    }
  }

  // Handle background images
  let backgroundImageUrl = null;
  if (attributes.backgroundImage) {
    if (attributes.backgroundImage.data?.attributes?.url) {
      // Standard Strapi image structure
      backgroundImageUrl = `http://localhost:1337${attributes.backgroundImage.data.attributes.url}`;
    } else if (attributes.backgroundImage.url) {
      // Direct URL structure
      backgroundImageUrl = attributes.backgroundImage.url.startsWith('http') 
        ? attributes.backgroundImage.url 
        : `http://localhost:1337${attributes.backgroundImage.url}`;
    }
  }
  
  const transformedData = {
    title: attributes.title || '',
    subtitle: attributes.subtitle || '',
    description: description,
    image: imageUrl,
    backgroundImage: backgroundImageUrl,
  };

  return transformedData;
};

export default useCMSData; 