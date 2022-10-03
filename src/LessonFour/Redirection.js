import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";

const Redirection = () => {
  const [isLoggedOut, setLoggedOut] = useState(false);

  return (
    <Fragment>
      <h2>Hi there</h2>
      <p>please logout</p>
      <button onClick={() => setLoggedOut(!isLoggedOut)}>Log Out</button>
      {isLoggedOut ? <Redirect to="/SignIn" /> : null}
    </Fragment>
  );
};

export default Redirection;
