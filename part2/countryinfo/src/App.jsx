import { useEffect, useState } from "react";
import countryService from "./services/country";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredName, setFilteredName] = useState("");

  useEffect(() => {
    countryService
      .getAll()
      .then((countryNames) =>
        setCountries(countryNames.map((country) => country.name.common))
      );
  }, []);

  return (
    <div>
      <Filter filteredName={filteredName} setFilteredName={setFilteredName} />
      <CountryList countries={countries} filteredName={filteredName} />
    </div>
  );
};

export default App;
