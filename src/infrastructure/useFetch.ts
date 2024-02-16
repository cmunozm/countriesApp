import { CountriesAPI } from './apiTypes';

export const useFetch = async(url: string): Promise<CountriesAPI[]> => {    
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  } catch {
    throw new Error('Network response was not ok');
  }  
};