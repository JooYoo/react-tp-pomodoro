import React, { useEffect, useState } from "react";

const Pomodoro = () => {
  const [restTime, setRestTime] = useState(0);

  // counter control
  const increaseTimeHandler = () => {
    setRestTime((prev) => {
      return prev + 1;
    });
  };

  const decreaseTimeHandler = () => {
    // TODO: not allow less than 0
    setRestTime((prev) => {
      return prev - 1;
    });
  };

  const resetTimeHandler = () => {
    setRestTime(0);
  };

  // timer control
  const startHandler = () => {
    setInterval(() => {
      decreaseTimeHandler();
    }, 1000);
  };

  // watch restTime
  useEffect(() => {
    if (restTime === 0) {
      // clear all Interval
      for (let i = 0; i < 100; i++) {
        window.clearInterval(i);
      }
    }
  }, [restTime]);

  return (
    <>
      <h4>Pomodoro</h4>
      <h5>{restTime}</h5>
      <button onClick={decreaseTimeHandler}>-</button>
      <button onClick={resetTimeHandler}>0</button>
      <button onClick={increaseTimeHandler}>+</button>
      <hr />
      <button onClick={startHandler}>Start</button>
      <button>Pause</button>
      <button>Stop</button>
    </>
  );
};

export default Pomodoro;
