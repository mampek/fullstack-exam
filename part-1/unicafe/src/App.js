import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = (props) => {
  console.log(props);
  if (props.total > 0) {
    const { good, neutral, bad, total } = props;

    return (
      <div>
        <table>
          <thead></thead>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="total" value={total} />
            <StatisticLine text="average" value={good - bad / total} />
            <StatisticLine text="positive" value={(good / total) * 100} />
          </tbody>
        </table>
        {/* good {good} <br /> */}
        {/* neutral {neutral} <br /> */}
        {/* bad {bad} <br /> */}
        {/* total {total} <br /> */}
        {/* average {good - bad / total} <br /> */}
        {/* positive {(good / total) * 100} <br /> */}
      </div>
    );
  } else {
    return <div>No Feedback given</div>;
  }
};

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;

  const goodClick = () => setGood(good + 1);
  const neutralClick = () => setNeutral(neutral + 1);
  const badClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={goodClick} text="good" />
      <Button handleClick={neutralClick} text="neutral" />
      <Button handleClick={badClick} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      {/* good {good} */}
      {/* <br /> */}
      {/* neutral {neutral} */}
      {/* <br /> */}
      {/* bad {bad} */}
      {/* <br /> */}
      {/* all {total} */}
      {/* <br /> */}
      {/* average {(good - bad) / total} */}
      {/* <br /> */}
      {/* positive {(good / total) * 100} % */}
      {/* <br /> */}
    </div>
  );
};
export default App;
