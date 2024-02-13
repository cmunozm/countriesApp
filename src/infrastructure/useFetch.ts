import { useState, useEffect } from 'react';
import { CountriesAPI } from './apiTypes';

type Card = {
  name: string;
  population: number;
  region: string;
  capital: string;
  urlImage: string;
};

export const useFetch = (url: string) => {
  const [data, setData] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setData(responseData.map((item: CountriesAPI) => {
        return {
          name: item.name?.common,
          population: item.population,
          region: item.region,
          capital: item.capital?.at(0),
          urlImage: item.flags?.png,
        }
      }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};



/* import { useState } from "react"

export const useFetch = <T>() => {
  const [loading, setLoading] = useState(false);
  const [allCountries, setAllCountries] = useState<T>()
  
  const getAllCountries = () => {
    getData('https://restcountries.com/v3.1/all');
  }

  const getData = (url: string) => {
    // setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => setAllCountries(data))
      .catch(e => { throw new Error(e.message) })
      .finally(() =>setLoading(false));
  }

  return [loading, allCountries, getAllCountries];
}

export default useFetch */