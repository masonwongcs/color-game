import styled, { keyframes } from "styled-components";

const enlarge = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const blink = keyframes`
  0%, 25%, 75% {
    opacity: 0.5;
  }
  50%, 100% {
    opacity: 1;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 24px rgba(55, 55, 55, 0.1);
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 60vw;
  height: 80%;
  opacity: 0;
  transform-origin: top;
  background-color: #fff;
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(10%);
  pointer-events: none;
  box-sizing: border-box;
  max-width: 500px;
  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 20px;
  }

  .correct-color {
    position: absolute;
    left: 0;
    top: 28%;
    width: 100%;
    color: #fff;
    text-align: center;
    font-weight: bold;
    animation: ${fadeIn} 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    font-size: 12px;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 0 3px rgba(0, 0, 0, 0.5),
      0 0 4px rgba(0, 0, 0, 0.5);
  }

  &.active {
    opacity: 1;
    transform: translateY(0);
    z-index: 10;
    pointer-events: auto;

    & + div {
      z-index: 9;
      opacity: 1;
      transform: scale(0.9) translateY(-5%);

      & + div {
        z-index: 8;
        opacity: 1;
        transform: scale(0.8) translateY(-10%);
      }
    }
  }

  .question {
    width: 100%;
    height: 30%;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .answer-options {
    display: flex;
    flex-flow: row wrap;
    height: 50%;

    .answer-item {
      cursor: pointer;
      width: calc(50% - 5px);
      height: 50%;
      margin-bottom: 10px;
      border-radius: 10px;
      transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      box-sizing: border-box;
      font-weight: bold;

      &:nth-child(odd) {
        margin-right: 10px;
      }

      &:hover {
        transform: scale(1.05);
      }

      &.correct {
        border: 4px solid #008000;
        pointer-events: none;
        animation: ${blink} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      &.wrong {
        border: 4px solid #ff0000;
      }

      > span {
        animation: ${fadeIn} 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        font-size: 12px;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 0 3px rgba(0, 0, 0, 0.5),
          0 0 4px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export const TimerWrapper = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
  &:before {
    content: attr(data-count);
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  .progress {
    height: 100%;
    transform-origin: left;
    transition: all 1s;
    background-color: #ffaa00;
  }
`;

export const GameWrapper = styled.div``;

export const Score = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  > span {
    font-weight: bold;
    display: inline-block;
    animation: ${enlarge} 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`;

export const FinalScore = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${enlarge} 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  > p {
    margin: 0;
  }
  .bold {
    font-weight: bold;
    font-size: 40px;
  }
`;

export const SettingWrapper = styled.div`
  width: 60vw;
  margin: 0 auto;
  padding: 20px 0;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  .setting-item {
    display: flex;
    align-items: center;
    .setting-button {
      border: 2px solid #ccc;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      height: 50px;
      flex-grow: 1;
      flex-basis: calc(100% / 3 - 20px);
      &:not(:last-child) {
        margin-right: 10px;
      }
      &.active {
        border-color: #ffaa00;
      }
    }
  }
`;

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 4px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  padding: 10px 20px;
  font-size: 14px;
  margin: 10px 0;
  outline: none;
  &:before {
    content: "";
    position: absolute;
    right: -10px;
    bottom: -10px;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 2px solid #333;
    background: repeating-linear-gradient(
      -45deg,
      #333,
      #333 10px,
      #fff 10px,
      #fff 20px
    );
  }
`;

export const PlayButton = styled(Button)`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  height: 60px;
  font-size: 24px;
`;

export const SettingButton = styled(Button)`
  position: absolute;
  margin: auto;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  font-size: 24px;
`;

export const BackButton = styled(Button)`
  width: 120px;
  height: 40px;
  font-size: 16px;
`;
