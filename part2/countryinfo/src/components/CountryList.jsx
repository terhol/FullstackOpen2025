import Country from "./Country";

const CountryList = ({ countries, filteredName }) => {
  const filteredCountries = countries.filter((country) =>
    country.toUpperCase().includes(filteredName.toUpperCase())
  );

  if (filteredCountries.length > 10) {
    return <div> Too many matches, specify another filter.</div>;
  }

  return (
    <div>
      {filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : (
        <ul>
          {filteredCountries.map((country) => {
            return <li key={country}>{country}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default CountryList;
