const PersonInfo = ({ person, handleDeletePerson }) => {
  return (
    <div>
      {person.name}: {person.number}{" "}
      <button onClick={handleDeletePerson}>Delete</button>
    </div>
  );
};

export default PersonInfo;
