import React, { useEffect, useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [store, setStore] = useState("");
  useEffect(() => {
    setStore(input);
  }, [input]);

  return (
    <form>
      <input onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={() => console.log(input)}>
        Sign In
      </button>
      <button type="button" onClick={() => console.log(store)}>
        Log Out
      </button>
    </form>
  );
};

export default Form;

//setting the button-type will prevent the form from refreshing
//use arrow function with onClick to prevent continuous console.log
