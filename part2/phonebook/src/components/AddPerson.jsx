import personService from "../services/person";

const AddPerson = ({
  setNewName,
  setNewNumber,
  newName,
  newNumber,
  persons,
  setPersons,
  setNotificationMessage,
  setIsNotificationError,
}) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleAddName = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Do you want to update it?`
        )
      ) {
        const person = persons.find(
          (currentPerson) => currentPerson.name === newName
        );
        handleUpdateName(person, newNumber);
      }
    } else {
      const changedName = {
        name: newName,
        number: newNumber,
      };
      personService
        .addPerson(changedName)
        .then((data) => setPersons(persons.concat(data)));
      setNewName("");
      setNewNumber("");
      setNotificationMessage(`${changedName.name} was added to phonebook.`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
    }
  };

  const handleUpdateName = (person, updatedNumber) => {
    const updatedPerson = { ...person, number: updatedNumber };
    personService
      .updatePerson(person.id, updatedPerson)
      .then((returnedPerson) => {
        setPersons(
          persons.map((personInfo) => {
            return personInfo.id === updatedPerson.id
              ? returnedPerson
              : personInfo;
          })
        );
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        setIsNotificationError(true);
        setNotificationMessage(`${person.name} was already removed.`);
        setTimeout(() => {
          setIsNotificationError(false);
          setNotificationMessage(null);
        }, 5000);
      });

    setNewName("");
    setNewNumber("");
    setNotificationMessage(`${person.name}: number changed successfully.`);
    setTimeout(() => {
      setNotificationMessage(null);
    }, 5000);
  };

  return (
    <div>
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
    </div>
  );
};

export default AddPerson;
