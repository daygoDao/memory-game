import { useState, useEffect } from "react";
import Card from "./Card";
import levelDB from "./levels";

const Gallery = ({ bestScore, setBest, setNewScore }) => {
  const [currLevel, setNewLevel] = useState(0);
  const [level, setLevel] = useState(levelDB.levels[currLevel]);
  const [levelScore, setLevelScore] = useState([]);

  const resetGame = () => {
    setNewLevel(0);
    setLevel({ ...levelDB.levels[0] });
    setLevelScore([]);
  };

  // check level is finished
  useEffect(() => {
    if (levelScore.length == level.people.length) {
      setNewLevel((prev) => prev + 1);
    }
  }, [level, levelScore]);
 
  // chevk if game is finished
  useEffect(() => {
    if (currLevel > levelDB.levels.length - 1) {
      alert("finished game, continue to add more to your score!");
      resetGame();
    } else {
      setLevel({ ...levelDB.levels[currLevel] });
      setLevelScore([]);
    }
  }, [currLevel]);

  const display = level.people.map((x, i) => (
    <Card
      name={x}
      key={i}
      level={level}
      bestScore={bestScore}
      setLevel={setLevel}
      setBest={setBest}
      setNewScore={setNewScore}
      levelScore={levelScore}
      setLevelScore={setLevelScore}
      resetGame={resetGame}
    />
  ));

  return (
    <div>
      <section>level: {currLevel}</section>
      <ul className="gallery">{display}</ul>
    </div>
  );
};

export default Gallery;
