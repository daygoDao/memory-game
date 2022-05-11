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
      <Gallery
        currScore={currScore}
        bestScore={bestScore}
        setNewScore={setNewScore}
      />
    </div>
  );
}

export default App;
