import { useState } from "react";
import Card from "./Card";

const Gallery = () => {
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

  return (
    <ul className="gallery">
      {level1.map((x, i) => (
        <Card name={x} key={i} level={level1} setLevel={setLevel1} />
      ))}
    </ul>
  );
};

export default Gallery;
