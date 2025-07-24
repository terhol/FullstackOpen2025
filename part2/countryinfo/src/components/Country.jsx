import countryService from "../services/country";
import { useEffect, useState } from "react";

const Country = ({ country }) => {
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    countryService
      .getCountry(country)
      .then((response) => setCountryInfo(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (countryInfo === null) {
    return <div></div>;
  }
  return (
    <div>
      <div>
        <h1>{countryInfo.name.common}</h1>
        Capital: {countryInfo.capital[0]}
        <br></br>
        Area: {countryInfo.area}
      </div>
      <div>
        <h2>Languages</h2>
        <ul>
          {Object.entries(countryInfo.languages).map((value) => (
            <li key={value[1]}>{value[1]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Country;
