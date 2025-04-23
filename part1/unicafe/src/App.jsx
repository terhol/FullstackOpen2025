import { useState } from "react";

const Statistics = ({ good, bad, neutral }) => {
  const allFeedback = good + neutral + bad;
  if (allFeedback === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given.
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={allFeedback} />
      <StatisticLine text="Average" value={(good - bad) / allFeedback} />
      <StatisticLine text="Positive" value={`${(good / allFeedback) * 100}%`} />
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text}: {value}
    </div>
  );
};

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
