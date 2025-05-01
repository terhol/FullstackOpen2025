import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const filteredList =
    filteredName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toUpperCase().startsWith(filteredName.toUpperCase())
        );

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilteredNameChange = (event) => {
    setFilteredName(event.target.value);
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
      <h1>Phonebook</h1>
      <div>
        Filter name with:{" "}
        <input
          value={filteredName}
          placeholder={"Start writing name"}
          onChange={handleFilteredNameChange}
        />
      </div>
      <h2>Add new person</h2>
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
        {filteredList.map((person) => (
          <li key={person.name}>
            {person.name}: {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
