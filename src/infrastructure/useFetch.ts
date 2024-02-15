import { useState } from 'react';
import { CountriesAPI } from './apiTypes';

export const useFetch = (url: string) => {  
  const [data, setData] = useState<CountriesAPI[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setData(responseData);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, fetchData };
};