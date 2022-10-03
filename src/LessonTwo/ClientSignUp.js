import React, { useState } from "react";

const UserSignUp = () => {
  //STATES
  const [info] = useState([]);

  const [data, setData] = useState({
    Name: "",
    Password: "",
    Confirm: ""
  });

  //FUNCTION HANDLERS
  const DataHandler = (key, e) => {
    return setData({ ...data, [key]: e.target.value });
  };

  //INFO PROCESSORS
  const passwordChecker = () => {
    if (data.Password === data.Confirm) {
      return console.log(info);
    } else {
      return alert("Your passwords do not match. Please reconfirm.");
    }
  };

  console.log(data);

  // /info.push({ Name: name, Passoword: password })

  //MAIN CODE
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          passwordChecker();
        }}
      >
        <label>Username:</label>
        <input
          value={data.Name}
          type="text"
          onChange={(e) => DataHandler("Name", e)}
        />
        <label>Password:</label>
        <input
          value={data.Passoword}
          type="password"
          onChange={(e) => DataHandler("Password", e)}
        />
        <label>Confirm Password:</label>
        <input
          value={data.Confirm}
          type="password"
          onChange={(e) => DataHandler("Confirm", e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserSignUp;
