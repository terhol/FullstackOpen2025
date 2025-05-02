const PersonInfo = ({ person }) => {
  return (
    <div>
      {person.name}: {person.number}
    </div>
  );
};

export default PersonInfo;
