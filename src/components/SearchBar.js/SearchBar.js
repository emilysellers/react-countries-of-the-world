import { useState } from 'react';
import { getCountries } from '../../services/countries.js';

const searchBar = () => {};

const [searchInput, setSearchInput] = useState('');

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(event.target.value);
};

if (searchInput.length > 0) {
  getCountries.filter((country) => {
    return country.name.match(searchInput);
  });
}
