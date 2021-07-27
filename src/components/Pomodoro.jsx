import React, { useState } from "react";

const Pomodoro = () => {
  const [restTime, setRestTime] = useState(0);

  const increaseTimeHandler = () => {
    setRestTime((prev) => {
      return prev + 1;
    });
  };

  const decreaseTimeHandler = () => {
    setRestTime((prev) => {
      return prev - 1;
    });
  };

  const resetTimeHandler = () => {
    setRestTime(0);
  };

  return (
    <>
      <h4>Pomodoro</h4>
      <h5>{restTime}</h5>
      <button onClick={decreaseTimeHandler}>-</button>
      <button onClick={resetTimeHandler}>0</button>
      <button onClick={increaseTimeHandler}>+</button>
      <hr />
      <button>Start</button>
      <button>Pause</button>
      <button>Stop</button>
    </>
  );
};

export default Pomodoro;
