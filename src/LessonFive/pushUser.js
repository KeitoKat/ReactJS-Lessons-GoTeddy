import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Axios from "axios";
//we use Axios to connect & contact with the back-end to fetch or send info from/to the database

const PushUser = () => {
  //STATE
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);
  //AXIOS
  useEffect(() => {
    const fetchData = () => {
      Axios.get("https://jsonplaceholder.typicode.com/users").then((response) =>
        setUser(response.data.map((e) => e.name))
      );
    };
    fetchData();
  }, []);
  //HANDLER-FUNCTIONS
  const inputHandler = (e) => {
    return setName(e.target.value);
  };
  const checkName = () => {
    if (name === user.map((e) => e)) {
      return console.log("match found");
    } else {
      console.log("jdfjkd");
    }
  };
  console.log(user);
  console.log(name);
  //MAIN
  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkName();
        }}
      >
        <label>Sign Up</label>
        <input type="text" onChange={(e) => inputHandler(e)} />
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default PushUser;
