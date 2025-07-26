import { useEffect, useState } from "react";
import Country from "./Country";

const CountryList = ({ countries, filteredName }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(
      countries.filter(
        (country) => country.toUpperCase().includes(filteredName.toUpperCase())
        // eslint-disable-next-line react-hooks/exhaustive-deps
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredName]);

  if (filteredCountries.length > 10) {
    return <div> Too many matches, specify another filter.</div>;
  }

  const handleClickOnShow = (country) => {
    setFilteredCountries([country]);
  };

  return (
    <div>
      {filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : (
        <ul>
          {filteredCountries.map((country) => {
            return (
              <li key={country}>
                {country}{" "}
                <button onClick={() => handleClickOnShow(country)}>Show</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CountryList;
