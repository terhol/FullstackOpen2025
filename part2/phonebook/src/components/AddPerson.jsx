import personService from "../services/person";

const AddPerson = ({
  setNewName,
  setNewNumber,
  newName,
  newNumber,
  persons,
  setPersons,
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
      personService.addPerson(changedName);
      setPersons(persons.concat(changedName));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleUpdateName = (person, updatedNumber) => {
    console.log(person);
    const updatedPerson = { ...person, number: updatedNumber };
    console.log(updatedPerson);
    personService
      .updatePerson(person.id, updatedPerson)
      .then((returnedPerson) =>
        setPersons(
          persons.map((personInfo) => {
            console.log(personInfo);
            personInfo.id === updatedPerson.id ? returnedPerson : personInfo;
          })
        )
      );
    setNewName("");
    setNewNumber("");
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
