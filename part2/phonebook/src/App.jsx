import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Helas" },
    { name: "Art Hela" },
  ]);
  const [newName, setNewName] = useState("");

  const handleNoteChange = (event) => {
    setNewName(event.target.value);
  };

  const handleAddName = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook.`);
    } else {
      const changedName = {
        name: newName,
      };
      setPersons(persons.concat(changedName));
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          Name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          <button onChange={handleNoteChange} type="submit">
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
