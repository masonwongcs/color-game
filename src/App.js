import Game from "./components/Game";

export const configs ={
  OFFSET: 20,
  INITIAL_TIMER: 30,
  TOTAL_NO_OF_QUESTIONS: 10
}

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
