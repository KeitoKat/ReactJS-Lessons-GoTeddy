import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";

const LogIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({ name: "", password: "" });

  const inputHandler = (e, key) => {
    return setData({ ...data, [key]: e.target.value });
  };

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoggedIn(true);
        }}
      >
        <h1>Hi there. Let's log you in:</h1>
        <label>username</label>
        <input value={data.name} onChange={(e) => inputHandler(e, "name")} />
        <label>password</label>
        <input
          value={data.passwords}
          onChange={(e) => inputHandler(e, "password")}
        />
        <button>Submit</button>
        {isLoggedIn ? <Redirect to="/Welcome" /> : null}
      </form>
    </Fragment>
  );
};

export default LogIn;
