import './Country.css';

export default function Country({ name, iso2 }) {
  return (
    <div>
      <div className="countryCard">
        <p>{name}</p>
        <img src={`https://flagcdn.com/160x120/${iso2.toLowerCase()}.png`}></img>
      </div>
    </div>
  );
}
