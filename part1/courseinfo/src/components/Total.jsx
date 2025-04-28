const Total = ({ courseParts }) => {
  const totalExercises = () =>
    courseParts.reduce((total, part) => total + part.exercises, 0);
  return <div>Total of {totalExercises()} exercises.</div>;
};

export default Total;
