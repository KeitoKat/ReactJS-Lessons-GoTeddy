import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";

const Redirection = () => {
  const [input, setInput] = useState("your answer");
  const [isCorrect, setCorrect] = useState(false);

  const result = (e) => {
    return setInput(e.target.value);
  };

  return (
    <Fragment>
      <h2>Welcome back master</h2>
      <p>please verify that you are a human</p>
      <label>25/5 is </label>
      <input
        value={input}
        onChange={(e) => {
          result(e);
          if (e.target.value === "5") setCorrect(true);
        }}
      />
      {isCorrect ? <Redirect to="/TreasurePage" /> : null}
    </Fragment>
  );
};

export default Redirection;
