import React, { useState } from "react";

const DataManagment = () => {
  //STATES
  // const [clickedBox, setBox] = useState({});
  const [pos, setPos] = useState(null);
  const [isClicked, setClicked] = useState(false);
  const [info, setInfo] = useState({
    review: "",
    name: "",
    brand: "",
    color: ""
  });

  var [array, setArray] = useState([
    {
      review: "hi",
      name: "hey",
      brand: "23",
      color: "12"
    },
    {
      review: "shdfk",
      name: "sdf",
      brand: "q3e",
      color: "asdfc"
    }
  ]);

  //FUNCTION
  const displayInfo = () => {
    return array.map((e, i) => {
      return (
        <div
          style={{
            backgroundColor: "blanchedalmond",
            cursor: "pointer",
            width: "200px",
            height: "80px"
          }}
          onClick={() => {
            dataHanlder();
            setClicked(true);
            // setBox(e);
            setInfo(e);
            setPos(i);
          }}
        >
          <p type="text">
            <b>Review:</b>
            {e.review}, <b>Name:</b>
            {e.name}, <b>Brand:</b>
            {e.brand}, <b>Color:</b>
            {e.color}
          </p>
        </div>
      );
    });
  };
  //Update Info
  const updateInfo = () => {
    var newArray = [...array];
    newArray[pos] = info;
    setArray(newArray);
  };

  //Input Handlers
  const keyHandler = (e, key) => {
    return setInfo({ ...info, [key]: e.target.value });
  };

  //Insert Handler
  const insertHandler = () => {
    var newArray = [...array];
    newArray.push(info);
    setArray([...newArray]);
  };

  //Data Handler
  const dataHanlder = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateInfo();
        }}
      >
        <label>Rating</label>
        <input
          value={info.review}
          type="text"
          onChange={(e) => keyHandler(e, "review")}
        />
        <label>Name</label>
        <input
          value={info.name}
          type="text"
          onChange={(e) => keyHandler(e, "name")}
        />
        <label>Brand</label>
        <input
          value={info.brand}
          type="text"
          onChange={(e) => keyHandler(e, "brand")}
        />
        <label>Color</label>
        <input
          value={info.color}
          type="text"
          onChange={(e) => keyHandler(e, "color")}
        />
        <button type="submit">Confirm Edit</button>
        <button type="button" onClick={() => insertHandler()}>
          Insert Box
        </button>
      </form>
    );
  };

  return (
    <div>
      {displayInfo()}
      {isClicked ? dataHanlder() : <div></div>}
    </div>
  );
};

export default DataManagment;
