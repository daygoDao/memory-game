import { useState, useEffect } from "react";
import Card from "./Card";
import levelDB from "./levels";

const Gallery = ({ bestScore, setBest, setNewScore }) => {
  const [currLevel, setNewLevel] = useState(0);
  const [level, setLevel] = useState(levelDB.levels[currLevel]);
  const [levelScore, setLevelScore] = useState([]);

  useEffect(() => {
    console.log("within useEffect #1: check if level is done");
    console.log(levelScore);
    if (levelScore.length == level.people.length) {
      console.log("done");
      setNewLevel((prev) => prev + 1);
    }
  }, [level, levelScore]);

  useEffect(() => {
    console.log("currLevel is: " + currLevel);
    console.log(levelDB.levels[currLevel]);
    if (currLevel > levelDB.levels.length - 1) {
      console.log("game is finished");
      alert('finished game, continue to add more to your score!')
      setNewLevel(0)
      setLevel({ ...levelDB.levels[0] });
    } else {
      console.log("within useEffect #2: currLevel updated");
      setLevel({ ...levelDB.levels[currLevel] });
    }
    setLevelScore([]);
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
