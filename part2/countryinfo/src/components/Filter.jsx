const Filter = ({ filteredName, setFilteredName }) => {
  const handleNameChange = (event) => {
    setFilteredName(event.target.value);
  };
  return (
    <div>
      Find countries:{" "}
      <input
        value={filteredName}
        placeholder="Start typing country name"
        onChange={handleNameChange}
      />
    </div>
  );
};

export default Filter;
