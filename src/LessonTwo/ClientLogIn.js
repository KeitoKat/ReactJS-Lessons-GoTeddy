import React, { useState } from "react";

const UserLogIn = () => {
  //DATABASE
  var infoArray = [
    { Username: "Kate", Password: "nomanemo" },
    { Username: "Rora", Password: "cielforlife" },
    { Username: "Waterman", Password: "wetwater" }
  ];

  //STATES
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //HANDLER FUNCTIONS
  const nameHandler = (e) => {
    return setName(e.target.value);
  };
  const passwordtHandler = (e) => {
    return setPassword(e.target.value);
  };

  //FETCH-DATA FUNCTION
  const FetchName = (name) => {
    if (infoArray.some((e) => e.Username === name)) {
      return true;
    }
  };

  const FetchPassword = (password) => {
    if (infoArray.some((e) => e.Password === password)) {
      return true;
    }
  };

  const FetchData = (fetchName, fetchData) => {
    if (fetchName && fetchData) {
      return console.log("succeeded");
    } else {
      return alert("either your name or password is incorrect");
    }
  };

  //MAIN CODE
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        FetchData(FetchName(name), FetchPassword(password));
      }}
    >
      <label>Username:</label>
      <input type="text" onChange={(e) => nameHandler(e)} />
      <label>Password:</label>
      <input type="password" onChange={(e) => passwordtHandler(e)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserLogIn;
