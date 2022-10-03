import React from "react";
import ComponentOne from "./ComponentOne";
import Clock from "./Clock";

const MappingStrings = () => {
  //CONSTANTS

  const names = [
    "Kate",
    "Rora",
    "Rora",
    "Nyan",
    "Ricky",
    "Dominic",
    "Christin"
  ];
  const checkPos = (i) => {
    if (i === 1) {
      return "red";
    }
  };

  //MAIN CODE
  return (
    <>
      <ComponentOne names={names} checkPos={checkPos} />
      <Clock />
    </>
  );
};

export default MappingStrings;

//you will need to assign each key in the array with a unique
