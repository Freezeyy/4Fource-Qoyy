import { useState, useEffect } from 'react';
import axios from 'axios';
import { getStrapiURL, getAuthHeaders } from '../config/strapi';

const useFooterData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const fullUrl = getStrapiURL('/api/footer');
        const headers = getAuthHeaders();
        
        const response = await axios.get(fullUrl, {
          headers: headers,
          params: {
            populate: '*', // Include all relations
          }
        });

        if (response.data.data) {
          const footerData = response.data.data;
          setData(footerData);
        } else {
          setData(null);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching footer data:', err);
        setError('Failed to fetch footer data');
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  return { data, isLoading, error };
};

export default useFooterData;
