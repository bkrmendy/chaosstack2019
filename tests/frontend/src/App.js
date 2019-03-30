import React, { useState } from "react";

const Test = ({ title, questions, onSubmit }) => {
  const [answers, setAnswers] = useState(questions.map(() => -1));
  const [userName, setUserName] = useState("");

  return (
    <div>
      <label>
        Name:{" "}
        <input
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      </label>
      <h2>Title</h2>
      {questions.map((question, index) => (
        <Question
          key={index}
          {...question}
          chosen={answers[index]}
          setAnswer={answer =>
            setAnswers([
              ...answers.slice(0, index),
              answer,
              ...answers.slice(index + 1)
            ])
          }
        />
      ))}
      <button
        disabled={userName === ""}
        onClick={() => onSubmit(answers, userName)}
      >
        Submit
      </button>
    </div>
  );
};

const Question = ({ id, text, answers, chosen, setAnswer }) => {
  return (
    <div>
      <p>{text}</p>
      {answers.map((answer, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              checked={index === chosen}
              name={text + id}
              onChange={() => setAnswer(index)}
            />
            {answer}
          </label>
        </div>
      ))}
    </div>
  );
};

const LeaderBoard = ({ users }) => (
  <table>
    <tbody>
      <tr>
        <th>Username</th>
        <th>Score</th>
      </tr>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.score}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const test = {
  title: "Test",
  questions: [
    {
      text: "first",
      id: 1,
      answers: ["a", "b", "c"]
    },
    {
      text: "second",
      id: 2,
      answers: ["d", "e", "f"]
    },
    {
      text: "third",
      id: 3,
      answers: ["g", "h", "i"]
    }
  ]
}

const users = [
  {
    name: "Dude",
    score: 420
  },
  {
    name: "Bro",
    score: 69
  },
  {
    name: "Hackerman",
    score: 1337
  }
];

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (answers, userName) => {
    alert(userName + "'s answers are: " + answers.join(" "));
    setSubmitted(true);
  };
  return (
    <div>
      {submitted ? (
        <LeaderBoard users={users} />
      ) : (
        <Test onSubmit={onSubmit} {...test} />
      )}
    </div>
  );
};

export default App;
