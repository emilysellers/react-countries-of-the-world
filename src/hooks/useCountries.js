import { useEffect, useState } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getCountries();
        setCountries(resp);
      } catch (error) {
        setError('Oh no! Something went awry.');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
