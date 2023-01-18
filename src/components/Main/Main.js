import { useCountries } from '../../hooks/useCountries.js';
import Country from '../Country/Country.js';

export default function Main() {
  const countries = useCountries();

  return (
    <main className="countryPage">
      <h1>Countries of the world</h1>
      {/* // <main>country cards</main> */}
    </main>
  );
}
