import React, { useEffect, useState } from "react";

const Pomodoro = () => {
  const initMin = 0;
  const initSec = "00";
  const [min, setMin] = useState(initMin);
  const [sec, setSec] = useState(initSec);
  const [isDisabled, setIsDisabled] = useState(true);

  // watch min
  useEffect(() => {
    // time over
    if (min === -1 && sec === 59) {
      // stop and rest timer
      stopTimer();

      // alarm CountDown finish
      alert("Time is over");
    }

    // the sec which updates the Min
    if (sec === 0) {
      // 59 ~ 0 repeat
      clearAllInterval();
      countDownSec();

      // decrease Min
      decreaseMin();
    }

    // check btn disabled
    setIsDisabled(min === 0 && sec === "00");
  }, [min, sec]);

  // counter control
  const increaseMin = () => {
    setMin((prev) => {
      return prev + 1;
    });
  };

  const decreaseMin = () => {
    setMin((prev) => {
      return prev - 1;
    });
  };

  const resetMin = () => {
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

  const startTimer = () => {
    // TODO: condition for disable start button

    // decrase Sec
    countDownSec();

    // decrease Min as init
    decreaseMin();
  };

  const countDownSec = () => {
    // set init Min: "00"
    setSec(initSec);

    // init 1st sec: "00" -> 59
    setSec(59);

    // decrease each sec
    setInterval(() => {
      setSec((prev) => {
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
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
      <button onClick={decreaseMin}>-</button>
      <button onClick={resetMin}>0</button>
      <button onClick={increaseMin}>+</button>
      <hr />
      <button onClick={startTimer} disabled={isDisabled}>
        Start
      </button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
};

export default Pomodoro;
