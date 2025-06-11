import PersonInfo from "./PersonInfo";
import personService from "../services/person";

const Numbers = ({ filteredList }) => {
  const handleDeletePerson = (person) => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      personService.deletePerson(person.id);
    }
  };
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {filteredList.map((person) => (
          <li key={person.id}>
            <PersonInfo
              person={person}
              handleDeletePerson={() => handleDeletePerson(person)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Numbers;
