import { useState, useEffect } from "react";
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

  useEffect(() => {
    // check if level is done
    if (levelScore.length == 1) {
      //level.people.length) {
      console.log("done");
    }
  }, [levelScore]);
  const handleLevels = () => {
    setLevel();
  };

  const display = level.people.map((x, i) => (
    <Card
      name={x}
      key={i}
      level={level}
      bestScore={bestScore}
      setLevel={setLevel}
      setBest={setBest}
      levelScore={levelScore}
      setLevelScore={setLevelScore}
    />
  ));

  return <ul className="gallery">{display}</ul>;
};

export default Gallery;
