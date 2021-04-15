import React, { useState, useContext } from "react";
import {GameWrapper, Score, FinalScore, Button} from "./Styled";
import Question from "./Question";
import Timer from "./Timer";
import AppContext from "../AppContext";
import { SettingContext } from "../App";

const Game = () => {
  const settingContext = useContext(SettingContext);
  const TOTAL_NO_OF_QUESTIONS = settingContext.totalQuestion;
  const questionArray = [...new Array(TOTAL_NO_OF_QUESTIONS).keys()];
  const [active, setActive] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const reset = () => {
    setActive(0);
    setScore(0);
    setIsCorrect(false);
  };

  return (
    <AppContext.Provider
      value={{
        score,
        setScore,
        active,
        setActive,
        isCorrect,
        setIsCorrect,
      }}
    >
      <GameWrapper>
        <AppContext.Consumer>
          {(context) => {
            return context.active === TOTAL_NO_OF_QUESTIONS + 1 ? (
              <FinalScore>
                <p>Your score</p>
                <div className="bold">{context.score}</div>
                <Button onClick={reset}>Restart</Button>
                <Button onClick={() => settingContext.setCurrentScene(0)}>
                  Home
                </Button>
              </FinalScore>
            ) : (
              <>
                <Timer />
                <Score>
                  Your score: <span key={context.score}>{context.score}</span>
                </Score>
                <div className="questions">
                  {questionArray.map((item) => {
                    return (
                      <Question
                        no={item + 1}
                        key={`question-${item}`}
                        className={context.active === item ? "active" : ""}
                      />
                    );
                  })}
                </div>
              </>
            );
          }}
        </AppContext.Consumer>
      </GameWrapper>
    </AppContext.Provider>
  );
};

export default Game;
