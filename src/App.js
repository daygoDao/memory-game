import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import "./style.css";

function App() {
  const [currLevel, setNewLevel] = useState(0);
  const [currScore, setNewScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // useEffect( () => {
  //   if(bestScore < currScore) {
  //     setBestScore(currScore);
  //   }
  // }, [bestScore])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <section>score: {currScore}</section>
      <section>best score: {bestScore}</section>
      <section>level: {currLevel + 1}</section>
      <Gallery
        bestScore={bestScore}
        setBest={setBestScore}
        currLevel={currLevel}
        setNewLevel={setNewLevel}
        setNewScore={setNewScore}
      />
    </div>
  );
}

export default App;
