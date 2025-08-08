import { useState, useEffect } from 'react';
import axios from 'axios';

const useCMSData = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // For demo purposes, we'll use mock data
        // Replace this with actual API call when backend is ready
        const response = await axios.get(`/api/cms/${endpoint}`);
        setData(response.data);
      } catch (err) {
        // For demo purposes, we'll use mock data instead of throwing error
        console.log('API not available, using mock data');
        
        // Mock data based on endpoint
        const mockData = getMockData(endpoint);
        setData(mockData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};

// Mock data function for demo purposes
const getMockData = (endpoint) => {
  const mockDataMap = {
    home: {
      title: "Welcome to Qoyy",
      subtitle: "Innovative Solutions for Your Business",
      description: "We provide cutting-edge solutions that help businesses grow and succeed in today's competitive market. Our team of experts is dedicated to delivering exceptional results that exceed expectations.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    about: {
      title: "About Qoyy",
      subtitle: "Your Trusted Partner",
      description: "Founded with a vision to transform businesses through innovative technology solutions, Qoyy has been at the forefront of digital transformation. Our commitment to excellence and customer satisfaction drives everything we do.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive Solutions",
      description: "From web development to digital marketing, we offer a full range of services designed to help your business thrive in the digital age. Our expertise spans across multiple industries and technologies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    info: {
      title: "Quick Info",
      subtitle: "Everything You Need to Know",
      description: "Get quick access to important information about our company, services, and how we can help you achieve your business goals. We're here to provide clarity and support every step of the way.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's Start a Conversation",
      description: "Ready to take your business to the next level? Get in touch with us today. Our team is ready to discuss your needs and provide personalized solutions that drive results.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  };

  return mockDataMap[endpoint] || {
    title: "Page Not Found",
    subtitle: "Content Unavailable",
    description: "The requested content could not be loaded. Please try again later.",
    image: null
  };
};

export default useCMSData; 