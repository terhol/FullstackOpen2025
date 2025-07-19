import { useEffect, useState } from "react";
import countryService from "./services/country";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService
      .getAll()
      .then((countryNames) =>
        setCountries(countryNames.map((country) => country.name.common))
      );
  }, []);

  return (
    <div>
      {console.log(countries)}
      <div>Hello world!</div>
    </div>
  );
};

export default App;
