import React, { useContext } from "react";
import { SettingWrapper, BackButton } from "./Styled";
import { SettingContext } from "../App";

const TIMER = [10, 20, 30];
const DIFFICULTIES = [
  {
    name: "Easy",
    offset: 50,
  },
  {
    name: "Normal",
    offset: 25,
  },
  {
    name: "Hard",
    offset: 10,
  },
];

const NO_OF_QUESTION = [10, 20, 30];

const Setting = () => {
  const settingContext = useContext(SettingContext);
  return (
    <SettingWrapper>
      <BackButton onClick={() => settingContext.setCurrentScene(0)}>
        Back
      </BackButton>
      <h3>Time</h3>
      <div className="setting-item">
        {TIMER.map((item) => {
          return (
            <div
              className={`setting-button ${
                item === settingContext.timer ? "active" : ""
              }`}
              key={`time-${item}`}
              onClick={() => settingContext.setTimer(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <h3>Difficulties</h3>
      <div className="setting-item">
        {DIFFICULTIES.map((item) => {
          return (
            <div
              className={`setting-button ${
                item.offset === settingContext.offset ? "active" : ""
              }`}
              key={`question-${item.offset}`}
              onClick={() => settingContext.setOffset(item.offset)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <h3>No. of Questions</h3>
      <div className="setting-item">
        {NO_OF_QUESTION.map((item) => {
          return (
            <div
              className={`setting-button ${
                item === settingContext.totalQuestion ? "active" : ""
              }`}
              key={`question-${item}`}
              onClick={() => settingContext.setTotalQuestions(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </SettingWrapper>
  );
};

export default Setting;
