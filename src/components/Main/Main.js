import { useCountries } from '../../hooks/useCountries.js';
import Country from '../Country/Country.js';

import './Main.css';

export default function Main() {
  const countries = useCountries();

  return (
    <main>
      <h1>Countries of the world</h1>
      <div className="searchBar">
        <label>Search</label>
        <input type="text"></input>
        <select>
          <option>All</option>
          <option>Africa</option>
          <option>Antartica</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>North America</option>
          <option>Oceana</option>
          <option>South America</option>
        </select>
      </div>
      <section className="countryDisplay">
        {countries.map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </section>
    </main>
  );
}
