import React, { useState } from "react";
import { users, test } from "./dummy";
import { Test } from "./Test";
import { LeaderBoard } from "./LeaderBoard";

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
