import React, { useEffect, useState } from "react";

const Pomodoro = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState("00");

  // watch min
  useEffect(() => {
    if (sec === 0) {
      clearAllInterval();

      // TODO: decrease Min
    }
  }, [sec]);

  // counter control
  const increaseTimeHandler = () => {
    setMin((prev) => {
      return prev + 1;
    });
  };

  const decreaseTimeHandler = () => {
    setMin((prev) => {
      return prev - 1;
    });
  };

  const resetTimeHandler = () => {
    setMin(0);
  };

  // timer control
  const clearAllInterval = () => {
    for (let i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
  };

  const startHandler = () => {
    // decrase Sec
    countDownSec();
  };

  const countDownSec = () => {
    // spend 1s: "00" -> 59
    setTimeout(() => {
      setSec(60);
    }, 1000);

    // decrease each sec
    setInterval(() => {
      setSec((prev) => {
        return prev - 1;
      });
    }, 1000);
  };

  const stopHandler = () => {
    clearAllInterval();
  };

  return (
    <>
      <h4>Pomodoro</h4>
      <h5>
        {min}:{sec}
      </h5>
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
