import React from "react";

const ComponentOne = (props) => {
  //MAIN CODE
  return (
    <ul>
      {props.names.map((name, i) => (
        <li
          key={i}
          style={{ color: props.checkPos(i), cursor: "pointer" }}
          onClick={() => console.log(name)}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default ComponentOne;
