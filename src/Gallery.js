import { useState, useEffect } from "react";
import Card from "./Card";
import levelDB from "./levels";

const Gallery = ({ setNewScore }) => {
  const [currLevel, setNewLevel] = useState(0);
  const [level, setLevel] = useState(levelDB[currLevel]);
  const [levelScore, setLevelScore] = useState([]);

  const resetGame = () => {
    setNewLevel(0);
    setLevel({ ...levelDB[0] });
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
    if (currLevel > levelDB.length - 1) {
      alert("finished game, continue to add more to your score!");
      resetGame();
    } else {
      setLevel({ ...levelDB[currLevel] });
      setLevelScore([]);
    }
  }, [currLevel]);

  const display = level.people.map((x, i) => (
    <Card
      key={i}
      name={x}
      level={level}
      setLevel={setLevel}
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
