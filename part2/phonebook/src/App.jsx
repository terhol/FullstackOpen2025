import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import AddPerson from "./components/AddPerson";
import Numbers from "./components/Numbers";
import personService from "./services/person";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");

  useEffect(() => {
    personService.getAll().then((personInfo) => setPersons(personInfo));
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
      <Numbers
        persons={persons}
        filteredName={filteredName}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
