import './Country.css';

export default function Country({ name }) {
  return (
    <div>
      <div className="countryCard">
        <h2>{name}</h2>
      </div>
    </div>
  );
}
