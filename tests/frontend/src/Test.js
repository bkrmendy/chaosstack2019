import React, { useState } from "react";
import { Question } from "./Question";
export const Test = ({ title, questions, onSubmit }) => {
  const [answers, setAnswers] = useState(questions.map(() => -1));
  const [userName, setUserName] = useState("");
  return (<div>
    <label>
      Name:{" "}
      <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
    </label>
    <h2>Title</h2>
    {questions.map((question, index) => (<Question key={index} {...question} chosen={answers[index]} setAnswer={answer => setAnswers([
      ...answers.slice(0, index),
      answer,
      ...answers.slice(index + 1)
    ])} />))}
    <button disabled={userName === ""} onClick={() => onSubmit(answers, userName)}>
      Submit
      </button>
  </div>);
};
