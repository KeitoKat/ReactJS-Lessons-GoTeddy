import React, { useState } from "react";

const ClientInfoForm = () => {
  //STATES
  const [data] = useState([]);
  const [info, setInfo] = useState({ Name: "", Password: "", Confirm: "" });

  //FUNCTION HANDLERS
  const dataHandler = (key, e) => {
    return setInfo({
      ...info, //duplicate previous info, and only update name
      [key]: e.target.value //use [] bracket to identify and change the param.
    });
  };

  //INFO PROCESSORS
  const passwordChecker = () => {
    if (info.Password === info.Confirm) {
      data.push(info);
      console.log(data);
    } else {
      return alert("Your passwords do not match. Please reconfirm.");
    }
  };

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
          value={info.Name}
          type="text"
          onChange={(e) => dataHandler("Name", e)}
        />
        <label>Password:</label>
        <input
          value={info.Passoword}
          type="password"
          onChange={(e) => dataHandler("Password", e)}
        />
        <label>Confirm Password:</label>
        <input
          value={info.Confirm}
          type="password"
          onChange={(e) => dataHandler("Confirm", e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ClientInfoForm;

// ...sth is used to duplicate any desired object
