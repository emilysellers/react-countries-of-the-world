import { useState } from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import Country from '../Country/Country.js';

import './Main.css';

export default function Main() {
  const { countries, error, isLoading } = useCountries();
  const [continent, setContinent] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  //   console.log('search input', searchInput);
  const continents = [...new Set(countries.map(({ continent }) => continent))];
  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  if (isLoading && !error) {
    return <h2>Page loading...</h2>;
  }
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <main>
      <h1>Flags of the World</h1>
      <div className="searchBar">
        <label>Search</label>
        {/* <input type="text"></input> */}
        <input type="text" placeholder="search here" onChange={handleChange}></input>
        <div>
          <label>Filter by continent</label>
          <select onChange={(event) => setContinent(event.target.value)}>
            <option value="all">All</option>
            {continents.map((continent) => (
              <option key={continent}>{continent}</option>
            ))}
          </select>
        </div>
      </div>
      <section className="countryDisplay">
        {filtered
          .filter(({ name }) => name.toLowerCase().includes(searchInput.toLowerCase()))
          .map((country) => (
            <Country key={country.id} {...country} />
          ))}
      </section>
      <p style={{ color: 'red' }}>{error}</p>
      <footer>developed by Emily Sellers 2023</footer>
    </main>
  );
}
