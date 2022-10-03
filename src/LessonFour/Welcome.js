import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";

const Welcome = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  return (
    <Fragment>
      <h1>Welcome Back!</h1>
      <p>Click here to log out</p>
      <button onClick={() => setIsLoggedOut(true)}>Log Out</button>
      {isLoggedOut ? <Redirect to="/LogIn" /> : null}
    </Fragment>
  );
};

export default Welcome;
