const Filter = ({ filteredName, setFilteredName }) => {
  const handleFilteredNameChange = (event) => {
    setFilteredName(event.target.value);
  };

  return (
    <div>
      Filter name with:{" "}
      <input
        value={filteredName}
        placeholder={"Start writing name"}
        onChange={handleFilteredNameChange}
      />
    </div>
  );
};

export default Filter;
