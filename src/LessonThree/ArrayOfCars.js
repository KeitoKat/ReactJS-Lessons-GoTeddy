import React, { useState } from "react";

const ArrayOfCars = () => {
  const [car] = useState([
    { brand: "Ford", color: "mint", wheels: "4" },
    { brand: "Toyota", color: "metallic", wheels: "5" }
  ]);
  const displayCars = () => {
    return car.map((e) => {
      return (
        <div>
          <h2>{e.brand}</h2>
          <h3>{e.color}</h3>
          <h5>{e.wheels}</h5>
        </div>
      );
    });
  };

  console.log(car);

  return <div>{displayCars()}</div>;
};

export default ArrayOfCars;
