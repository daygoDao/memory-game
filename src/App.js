import { useState } from "react";
import Gallery from "./Gallery";
import "./style.css";

function App() {
  const [currLevel, setNewLevel] = useState(0);
  // const [currScore, setCurrScore] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      {/* <section>score: {currScore.length}</section> */}
      <section>best score: {bestScore}</section>
      <Gallery
        bestScore={bestScore}
        setBest={setBestScore}
        currLevel={currLevel}
        setNewLevel={setNewLevel}
      />
    </div>
  );
}

export default App;
