import { useCountries } from '../../hooks/useCountries.js';
import Country from '../Country/Country.js';

import './Main.css';

export default function Main() {
  const countries = useCountries();

  return (
    <main>
      <h1>Countries of the world</h1>
      <section className="countryDisplay">
        {countries.map((country) => (
          <Country key={country.id} {...country} />
        ))}
        {/* // <main>country cards</main> */}
      </section>
    </main>
  );
}
