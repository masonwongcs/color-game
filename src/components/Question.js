import React, { useEffect, useRef, useState, useContext } from "react";
import { QuestionWrapper } from "./Styled";
import AppContext from "../AppContext";
import { configs } from "../App";

const Question = (props) => {
  const OFFSET = configs.OFFSET;
  const canvasRef = useRef();
  const appContext = useContext(AppContext);

  const [color, setColor] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const currentCanvas = canvasRef.current;
    const ctx = currentCanvas.getContext("2d");
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    const color = `rgb(${r}, ${g}, ${b})`;

    ctx.beginPath();
    ctx.rect(
      0,
      0,
      currentCanvas.getBoundingClientRect().width,
      currentCanvas.getBoundingClientRect().height
    );
    ctx.fillStyle = color;
    ctx.fill();

    const options = [...new Array(3).keys()]
      .map((item) => {
        const random = Math.random() * OFFSET;
        const red = Math.ceil(
          r + item - Math.random() * OFFSET <= 0
            ? r + item + Math.random() * OFFSET
            : r + item - Math.random() * OFFSET
        );
        const green = Math.ceil(
          g + item - Math.random() * OFFSET <= 0
            ? g + item + Math.random() * OFFSET
            : g + item - Math.random() * OFFSET
        );
        const blue = Math.ceil(
          b + item - Math.random() * OFFSET <= 0
            ? b + item + Math.random() * OFFSET
            : b + item - Math.random() * OFFSET
        );
        return `rgb(${red}, ${green}, ${blue})`;
      })
      .concat(color)
      .sort(() => Math.random() - Math.random())
      .slice(0, 4);

    console.log(color, options);

    setColor(color);
    setOptions(options);
  }, [canvasRef]);

  const checkAnswer = (answer) => {
    console.log(answer, color);
    if (answer === color) {
      // alert("Correct");
      appContext.setIsCorrect(true);
    } else {
      // alert("Wrong");
      appContext.setIsCorrect(false);
    }
    const currentActive = appContext.active + 1;
    appContext.setActive(currentActive);
    // window.location.reload();
  };

  return (
    <QuestionWrapper {...props}>
      <h3>Q{props.no}/{configs.TOTAL_NO_OF_QUESTIONS}</h3>
      <canvas className="question" ref={canvasRef} />
      <p>Pick the correct color</p>
      <div className="answer-options">
        {options.map((item) => {
          return (
            <div
              className="answer-item"
              key={item}
              onClick={() => checkAnswer(item)}
              style={{ backgroundColor: item }}
            />
          );
        })}
      </div>
    </QuestionWrapper>
  );
};

export default Question;
