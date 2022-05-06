import { useState } from "react";
import Card from "./Card";

const Gallery = ({ currScore, bestScore, setBest, setCurr }) => {
  const [level1, setLevel1] = useState([
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

  const display = level1.map((x, i) => (
    <Card
      name={x}
      key={i}
      level={level1}
      currScore={currScore}
      bestScore={bestScore}
      setLevel={setLevel1}
      setBest={setBest}
      setCurr={setCurr}
    />
  ));

  return <ul className="gallery">{display}</ul>;
};

export default Gallery;
