import styled, { keyframes } from "styled-components";

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
      &:nth-child(odd) {
        margin-right: 10px;
      }
      &:hover {
        transform: scale(1.05);
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
