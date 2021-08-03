import React, { useEffect, useState } from "react";

const Pomodoro = () => {
  const initMin = 0;
  const initSec = "00";
  const [min, setMin] = useState(initMin);
  const [sec, setSec] = useState(initSec);

  // watch min
  useEffect(() => {
    // count down finished
    if (min === 0) {
      stopHandler();

      // TODO: alarm CountDown finish
    }

    // the sec which updates the Min
    // TODO: sec === 0
    if (sec === 55) {
      // 59 ~ 0 repeat
      clearAllInterval();
      countDownSec();

      // decrease Min
      decreaseMinHandler();
    }
  }, [min, sec]);

  // counter control
  const increaseMinHandler = () => {
    setMin((prev) => {
      return prev + 1;
    });
  };

  const decreaseMinHandler = () => {
    setMin((prev) => {
      return prev - 1;
    });
  };

  const resetMinHandler = () => {
    setMin(initMin);
  };

  // timer control
  const clearAllInterval = () => {
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function () {},
    Number.MAX_SAFE_INTEGER);

    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  };

  const startHandler = () => {
    // TODO: condition for disable start button

    // decrase Sec
    countDownSec();
  };

  const countDownSec = () => {
    // set init Min
    setSec(initSec);

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
    // clear Interval
    clearAllInterval();

    // reset min and sec
    setMin(initMin);
    setSec(initSec);
  };

  return (
    <>
      <h4>Pomodoro</h4>
      <h5>
        {min}:{sec}
      </h5>
      <button onClick={decreaseMinHandler}>-</button>
      <button onClick={resetMinHandler}>0</button>
      <button onClick={increaseMinHandler}>+</button>
      <hr />
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
    </>
  );
};

export default Pomodoro;
