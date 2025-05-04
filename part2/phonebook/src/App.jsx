import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import AddPerson from "./components/AddPerson";
import Numbers from "./components/Numbers";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const filteredList =
    filteredName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toUpperCase().includes(filteredName.toUpperCase())
        );

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filteredName={filteredName} setFilteredName={setFilteredName} />
      <AddPerson
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <Numbers filteredList={filteredList} />
    </div>
  );
};

export default App;
