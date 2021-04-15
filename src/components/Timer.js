import React, { useEffect, useRef, useState, useContext } from "react";
import { TimerWrapper } from "./Styled";
import AppContext from "../AppContext";
import { SettingContext } from "../App";

const Timer = () => {
  const settingContext = useContext(SettingContext);
  const INITIAL_TIMER = settingContext.timer;
  const appContext = useContext(AppContext);
  const [count, setCount] = useState(INITIAL_TIMER);
  const intervalRef = useRef();

  const startCounter = () => {
    let time = INITIAL_TIMER;
    clearInterval(intervalRef.current);
    setCount(INITIAL_TIMER);
    intervalRef.current = setInterval(() => {
      time -= 1;
      setCount(time);
      if (time === 0) {
        clearInterval(intervalRef.current);
        appContext.setActive(appContext.active + 1);
      }
    }, 1000);
  };

  useEffect(() => {
    startCounter();
    console.log("Current active: ", appContext.active);
    if (appContext.isCorrect) {
      const currentScore = appContext.score + count;
      appContext.setScore(currentScore);
    }

    if (appContext.active === settingContext.totalQuestion) {
      appContext.setActive(appContext.active + 1);
    }
  }, [appContext.active, appContext.isCorrect]);

  useEffect(() => {
    console.log(appContext.score);
    appContext.setIsCorrect(false);
  }, [appContext.score, appContext]);

  return (
    <TimerWrapper data-count={count}>
      <div
        className="progress"
        style={{
          transform: `scaleX(${count / INITIAL_TIMER})`,
        }}
      />
    </TimerWrapper>
  );
};

export default Timer;
