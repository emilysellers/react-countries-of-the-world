import { useState } from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import Country from '../Country/Country.js';

import './Main.css';

export default function Main() {
  const { countries, error } = useCountries();
  const [continent, setContinent] = useState('all');

  const continents = [...new Set(countries.map(({ continent }) => continent))];
  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  return (
    <main>
      <h1>Countries of the World</h1>
      <div className="searchBar">
        <label>Search</label>
        <input type="text"></input>
        <select onChange={(event) => setContinent(event.target.value)}>
          <option value="all">all</option>
          {continents.map((continent) => (
            <option key={continent}>{continent}</option>
          ))}
        </select>
      </div>
      <section className="countryDisplay">
        {filtered.map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </section>
      <p style={{ color: 'red' }}>{error}</p>
      <footer>developed by Emily Sellers 2023</footer>
    </main>
  );
}
