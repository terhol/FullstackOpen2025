import PersonInfo from "./PersonInfo";

const Numbers = ({ filteredList }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {filteredList.map((person) => (
          <li key={person.name}>
            <PersonInfo person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Numbers;
