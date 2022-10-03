import React, { useState } from "react";
import CalculatorComp from "./CalculatorComp";

const Calculator = () => {
  //STATES
  const [currency, setCurrency] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState("");
  const [visual, setVisual] = useState("navy");

  //CONVERTING FUNC.
  const Converter = (from) => {
    return from * (100 / 13);
  };

  const Inflation = (from, years) => {
    return from * Number.EPSILON ** ((30 / 100) * years);
  };

  //MATH FUNCTION
  const mathFunction = (from, years) => {
    return Inflation(Converter(from), years);
  };

  //EVENT HANDLERS
  const currencyHandler = (e) => {
    return setCurrency(e.target.value);
  };

  const yearHandler = (e) => {
    return setYears(e.target.value);
  };

  const visualHandler = (visual) => {
    if (visual === "navy") {
      return "red";
    } else if (visual === "red") {
      return "green";
    } else {
      return "navy";
    }
  };

  //OTHER FUNCTIONS
  const LargerThan = (result) => {
    if (result > 1000) {
      return true;
    }
  };

  const Equal = (currency, years) => {
    if (currency === "") {
      return;
    } else if (currency === years) {
      return <CalculatorComp />;
    }
  };

  //MAIN CODE
  return (
    <div
      style={{
        alignSelf: "center",
        align: "fixed"
      }}
    >
      {/* FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setResult(mathFunction(currency, years));
        }}
      >
        {/* INPUTS */}
        <input
          type="number"
          max="1000000"
          min="0"
          value={currency}
          onChange={(e) => currencyHandler(e)}
        />
        <input
          type="number"
          max="1000000"
          min="0"
          value={years}
          onChange={(e) => yearHandler(e)}
        />

        {/* BUTTONS */}
        <button type="submit">Converts</button>
        <button
          type="button"
          onClick={() => {
            setVisual(visualHandler(visual));
          }}
        >
          Change Color
        </button>
      </form>
      {/* RESULT */}
      <div>
        {LargerThan(result) ? (
          <h1 style={{ color: visual, fontWeight: "bold", align: "center" }}>
            {result}
          </h1>
        ) : (
          <p style={{ color: visual, fontWeight: "bold", align: "center" }}>
            {result}
          </p>
        )}
      </div>
      {/* CALC-COMP. */}
      <div>{Equal(currency, years)}</div>
    </div>
  );
};

export default Calculator;
