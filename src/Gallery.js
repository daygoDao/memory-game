import { useState } from "react";
import Card from "./Card";
import levelDB from "./levels";

const Gallery = ({
  bestScore,
  setBest,
  setCurr,
  currLevel,
  setNewLevel,
  setCurrScore,
}) => {

  const [level, setLevel] = useState(levelDB.levels[0]);
  const [levelScore, setLevelScore] = useState([]);

  const handleLevels = () => {
    setLevel();
  };

  const display = level.people.map((x, i) => (
    <Card
      name={x}
      key={i}
      level={level}
      levelScore={levelScore}
      bestScore={bestScore}
      setLevel={setLevel}
      setBest={setBest}
      setLevelScore={setLevelScore}
    />
  ));

  return <ul className="gallery">{display}</ul>;
};

export default Gallery;
