import React, { useState, useEffect } from "react";
// import Moment from "moment";

const Clock = () => {
  //CONSTANTS
  const myDate = () => {
    return new Date();
  };

  // const myTime = () => {
  //   return (
  //     myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds()
  //   );
  // };

  const myClock = () => {
    return myDate().toLocaleTimeString();
  };

  // const TZOffSet = (city) => {
  //   if (city === "Vancouver" || "vancouver") {
  //     return myTime() + myDate.getTimeZoneOffset() * 15;
  //   } else {
  //     return "hi";
  //   }
  // };

  //STATES
  const [time, setTime] = useState(myClock());

  useEffect(() => {
    setInterval(() => setTime(myClock()), 1000);
  });

  //MAIN CODE
  return (
    <>
      <p>Our current time is:</p>
      <h1>{time}</h1>
      {/* <button onClick={() => TZOffSet("Vancouer")}>Vancouver</button> */}
    </>
  );
};

export default Clock;

//you use setInterval so that code is executed every 1 second
//you also need setTime to render/update your time (based on your myClock function)
