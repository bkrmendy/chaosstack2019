import React, { useState } from 'react';

const Test = ({ questions, canSubmit }) => {
  const [answers, setAnswers] = useState(questions.map(() => -1));
  const onSubmit = () => alert('Answers are: ' + answers.join(' '))
  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          {...question}
          chosen={answers[index]}
          setAnswer={(answer) => setAnswers([...answers.slice(0, index), answer, ...answers.slice(index + 1)])}
        />
      ))}
      <button disabled={canSubmit} onClick={onSubmit}>Submit</button>
    </div>
  )
}

const Question = ({id, text, answers, chosen, setAnswer}) => {
  return (
    <div>
      <p>{text}</p>
      {answers.map((answer, index) => (
        <div key={index}>
          <label>
            <input type="radio" checked={index === chosen} name={text + id} onChange={() => setAnswer(index)}/>
            {answer}
          </label>
        </div>
        )
      )}
    </div>
  )
}

const questions = [
  {
    text: "first",
    id: 1,
    answers: [
      "a",
      "b",
      "c"
    ]
  },
  {
    text: "second",
    id: 2,
    answers: [
      "d",
      "e",
      "f"
    ]
  },
  {
    text: "third",
    id: 3,
    answers: [
      "g",
      "h",
      "i"
    ]
  },
]

const App = () => {
  const [userName, setUserName] = useState("")
  
  return (
    <div>
      <label>Name: <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/></label>
      <Test canSubmit={userName === ""} questions={questions}/>
    </div>
  )
}

export default App;
