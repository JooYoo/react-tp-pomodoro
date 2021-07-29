import React, { useEffect, useState } from "react";

const Pomodoro = () => {
  const [restTime, setRestTime] = useState(0);

  // watch restTime
  useEffect(() => {
    if (restTime === 0) {
      clearAllInterval();
    }
  }, [restTime]);

  // counter control
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

  // timer control
  const clearAllInterval = () => {
    for (let i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
  };

  const startHandler = () => {
    setInterval(() => {
      decreaseTimeHandler();
    }, 1000);
  };

  const stopHandler = () => {
    clearAllInterval();
  };

  return (
    <>
      <h4>Pomodoro</h4>
      <h5>{restTime}</h5>
      <button onClick={decreaseTimeHandler}>-</button>
      <button onClick={resetTimeHandler}>0</button>
      <button onClick={increaseTimeHandler}>+</button>
      <hr />
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
    </>
  );
};

export default Pomodoro;
