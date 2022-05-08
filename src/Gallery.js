import { useState } from "react";
import Card from "./Card";
import levelDB from './levels'

const Gallery = ({ currScore, bestScore, setBest, setCurr, currLevel, setNewLevel }) => {
  const [level, setLevel] = useState(levelDB.levels[0]);
  // const [level, setLevel] = useState([
  //   "brook",
  //   "chopper",
  //   "franky",
  //   "god",
  //   "jinbe",
  //   "luffy",
  //   "nami",
  //   "robin",
  //   "sanji",
  //   "zoro",
  // ]);
  
  const handleLevels = () => {
    setLevel()
  }

  const test = [1, 2, 3];
  const display = level.people.map((x, i) => (
    <Card
      name={x}
      key={i}
      level={level}
      currScore={currScore}
      bestScore={bestScore}
      setLevel={setLevel}
      setBest={setBest}
      setCurr={setCurr}
    />
  ));

  return <ul className="gallery">{display}</ul>;
};

export default Gallery;
