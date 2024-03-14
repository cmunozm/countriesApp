import Fuse from "fuse.js";
import { useContext, useEffect, useState } from "react";
import { CountriesAPI, CountriesAdapter } from "./apiTypes";
import { themeContext } from "./themeContext";
import { useFetch } from "./useFetch";


const useCountries = () => {
  const { handleList } = useContext(themeContext);
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState<CountriesAdapter[]>([]);
  const fuseOptions = {
    keys: ['name'],
  };
  const fuse = new Fuse(countries, fuseOptions);

  useEffect(() => { 
    function fetchData() {
      setLoading(true);
      useFetch('https://restcountries.com/v3.1/all')
        .then(countries => {
          setCountries(createContryAdapter(countries));
          handleList(countries);
          setLoading(false);
        })
        .catch(error => {
          throw new Error(error.message);
        });
    } 
    
    fetchData();
  }, []);

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

  const createContryAdapter = (cointriesList: CountriesAPI[]): CountriesAdapter[] => {
    const countriesAdapter = cointriesList.map(country => {
      return {
        name: country.name?.common || '',
        population: country.population || 0,
        region: country.region || '',
        subregion: country.subregion || '',
        capital: country.capital || [],
        tld: country.tld || [],
        currencies: country.currencies || {},
        languages: country.languages || {},
        borders: country.borders || [],
        flag: country.flags?.png || '',
        cca3: country.cca3 || '',
      }
    })
    return countriesAdapter;
  }

  return {
    loading,
    countries,
    getRegions,
    getByRegion,
    getByCountry,    
  }
}

export default useCountries