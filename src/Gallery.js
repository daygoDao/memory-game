import React from "react";
import { useState } from "react";

const rngLevel = (levelArr) => {
  const shuffledArr = levelArr.map((x) => x);
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = shuffledArr[i];
    shuffledArr[i] = shuffledArr[j];
    shuffledArr[j] = temp;
  }
  return shuffledArr;
};

const Gallery = () => {
  // const level1 = [
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
  // ];
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
      {rngLevel(level1).map((x, i) => (
        <Card name={x} key={i} level={level1} setLevel={setLevel1} />
      ))}
    </ul>
  );
};

const Card = ({ name, level, setLevel }) => {
  const cardClicked = () => {
    console.log(level);
    setLevel(rngLevel(level))
  };

  return (
    <li className="card" onClick={cardClicked}>
      <img
        src={`./images/wanted/${name}.png 
      `}
        alt={name}
      />
    </li>
  );
};

export default Gallery;
