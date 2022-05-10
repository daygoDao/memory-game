import { useState, useEffect } from "react";
import Card from "./Card";
import levelDB from "./levels";

const Gallery = ({
  bestScore,
  setBest,
  currLevel,
  setNewLevel,
  setNewScore,
}) => {
  const [level, setLevel] = useState(levelDB.levels[currLevel]);
  const [levelScore, setLevelScore] = useState([]);

  useEffect(() => { 
    console.log(levelScore)
    // check if level is done
    if (levelScore.length == level.people.length) {
      console.log("done");
      setNewLevel((prev) => prev + 1);
      setLevelScore([]);
      handleLevels();
    }
  }, [currLevel, level, levelScore]);

  const handleLevels = () => {
    setLevel({ ...levelDB.levels[currLevel] });

    console.log("currLevel is: " + currLevel);
    console.log(levelScore);
    console.log(levelDB.levels[++currLevel]);
  };

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
    />
  ));

  return <ul className="gallery">{display}</ul>;
};

export default Gallery;
