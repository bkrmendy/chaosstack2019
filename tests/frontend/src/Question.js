import React from "react";
export const Question = ({ id, text, answers, chosen, setAnswer }) => {
  return (<div>
    <p>{text}</p>
    {answers.map((answer, index) => (<div key={index}>
      <label>
        <input type="radio" checked={index === chosen} name={text + id} onChange={() => setAnswer(index)} />
        {answer}
      </label>
    </div>))}
  </div>);
};
