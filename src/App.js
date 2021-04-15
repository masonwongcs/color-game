import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import Setting from "./components/Settings";
import Menu from "./components/Menu";

const configs = {
  OFFSET: 50,
  INITIAL_TIMER: 30,
  TOTAL_NO_OF_QUESTIONS: 10,
};

export const SettingContext = React.createContext();

function App() {
  const [offset, setOffset] = useState(configs.OFFSET);
  const [timer, setTimer] = useState(configs.INITIAL_TIMER);
  const [totalQuestion, setTotalQuestions] = useState(
    configs.TOTAL_NO_OF_QUESTIONS
  );

  /**
   * 0 = Home
   * 1 = Game
   * 2 = Setting
   */
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    console.log(offset, totalQuestion, timer);
  }, [offset, totalQuestion, timer]);

  return (
    <SettingContext.Provider
      value={{
        offset,
        setOffset,
        timer,
        setTimer,
        totalQuestion,
        setTotalQuestions,
        currentScene,
        setCurrentScene,
      }}
    >
      <div className="App">
        {currentScene === 0 ? (
          <Menu />
        ) : currentScene === 1 ? (
          <Game />
        ) : (
          <Setting />
        )}
      </div>
    </SettingContext.Provider>
  );
}

export default App;
