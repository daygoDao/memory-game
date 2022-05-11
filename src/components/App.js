import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import "../style/style.css";

function App() {
  const [currScore, setNewScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (currScore > bestScore) {
      setBestScore(currScore);
    }
  }, [currScore, bestScore]);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <section>score: {currScore}</section>
      <section>best score: {bestScore}</section>
      <Gallery setNewScore={setNewScore} />
    </div>
  );
}

export default App;
