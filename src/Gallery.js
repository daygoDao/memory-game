import { useState } from "react";
import Card from "./Card";
import levelDB from './levels'

const Gallery = ({ currScore, bestScore, setBest, setCurr, currLevel, setNewLevel }) => {
  const [level, setLevel] = useState([
    "brook",
    "chopper",
    "franky",
    "god",
    "jinbe",
    "luffy",
    "nami",
    "robin",
    "sanji",
    "zoro",
  ]);
  
  // const handleLevels = () => {
  //   setLevel()
  // }

  // level decider
  // switch(currLevel) {
  //   case 0: 
  // }

  console.log(levelDB.levels)

  const display = level.map((x, i) => (
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
