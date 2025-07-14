import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import AddPerson from "./components/AddPerson";
import Numbers from "./components/Numbers";
import personService from "./services/person";
import Notification from "./components/Notification";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [isNotificationError, setIsNotificationError] = useState(false);

  useEffect(() => {
    personService.getAll().then((personInfo) => setPersons(personInfo));
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification
        message={notificationMessage}
        isError={isNotificationError}
      />
      <Filter filteredName={filteredName} setFilteredName={setFilteredName} />
      <AddPerson
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setNotificationMessage={setNotificationMessage}
        setIsNotificationError={setIsNotificationError}
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
