import { useEffect, useState } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const resp = await getCountries();
        setIsLoading(false);
        setCountries(resp);
      } catch (error) {
        setError('Oh no! Something went awry.');
      }
    };
    fetchData();
  }, []);
  return { countries, error, isLoading };
}
