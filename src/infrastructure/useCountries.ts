import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { CountriesAPI } from "./apiTypes";
import { useFetch } from "./useFetch";

const useCountries = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState<CountriesAPI[]>([]);
  const fuseOptions = {
    keys: ['name.common'],
  };
  const fuse = new Fuse(countries, fuseOptions);

  useEffect(() => {
    useFetch('https://restcountries.com/v3.1/all')
      .then(countries => {
        setLoading(false)
        setCountries(countries)
      })
  }, [])

  const getRegions = (): string[] => {
    const regions = new Set(countries.map((country) => country.region));
    const regionString: string[] = Array.from(regions).map((item) =>
      item?.toString()
    )!;

    return regionString;
  }

  const getByRegion = (region: string) => {
    const countriesByRegion = countries.filter((country) =>
      region === 'all' ? country.region : country.region === region
    );

    return countriesByRegion;
  }

  const getByCountry = (searchPattern: string) => {    
    const result = fuse.search(searchPattern);
    const filteredCountries = result.map((item) => item.item);
    return filteredCountries    
  }



  return {
    loading,
    countries,
    getRegions,
    getByRegion,
    getByCountry
  }
}

export default useCountries