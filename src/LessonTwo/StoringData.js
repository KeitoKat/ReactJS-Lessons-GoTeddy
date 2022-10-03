import React, { useState } from "react";

const StoringData = () => {
  // const [input, setInput] = useState({
  //   name: "",
  //   lastname: "",
  //   age: ""
  // });

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(name, lastName, age);
      }}
    >
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default StoringData;

//...state
//use "value" attribute to set the exact value that needs to be displayed/stored
