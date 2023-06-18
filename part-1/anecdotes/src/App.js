import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = ({ votes, anectdotes }) => {
  let highest = 0;
  let key = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > highest) {
      highest = votes[i];
      key = i;
    }
  }
  if (highest === 0) {
    return <></>;
  }

  return (
    <div>
      <h1>Anectode with most votes</h1>
      {anectdotes[key]}
      <br />
      Has {votes[key]} votes <br />
    </div>
  );
};

const App = () => {
  const anectdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anectdotes.length).fill(0));
  console.log("votes", votes);
  console.log("selected", selected);
  const addVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };
  console.log(selected);

  const nextAnectode = () =>
    setSelected(Math.floor(Math.random() * anectdotes.length));
  return (
    <div>
      <h1>Anectode of the day</h1>
      {anectdotes[selected]} <br />
      Has {votes[selected]} votes <br />
      <Button handleClick={addVote} text="Vote" />
      <Button handleClick={nextAnectode} text="Next Anecdote" />
      <Display votes={votes} anectdotes={anectdotes} />
    </div>
  );
};
export default App;
