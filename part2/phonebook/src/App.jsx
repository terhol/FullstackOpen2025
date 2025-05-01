import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Helas", number: "12-3456" },
    { name: "Art Hela", number: "987654" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleAddName = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook.`);
    } else {
      const changedName = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(changedName));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          Name:{" "}
          <input
            value={newName}
            placeholder={"Name"}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Phone number:{" "}
          <input
            value={newNumber}
            placeholder={"Phone number"}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button onChange={handleNameChange} type="submit">
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name}: {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
