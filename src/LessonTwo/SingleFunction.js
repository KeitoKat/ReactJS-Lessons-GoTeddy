import React, { useState } from "react";

const SingleFunction = () => {
  const [data, setData] = useState({ Name: "", Password: "" });

  const dataHandler = (key, e) => {
    return setData({ ...data, [key]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(data);
      }}
    >
      <label>Name</label>
      <input
        value={data.Name}
        type="text"
        onChange={(e) => dataHandler("Name", e)}
      />

      <label>Password</label>
      <input
        value={data.Password}
        type="text"
        onChange={(e) => dataHandler("Password", e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SingleFunction;

//username & password
//use only 1 function to update both username and password
