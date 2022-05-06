import React from "react";

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
  const level1 = [
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
  ];

  let round = [];
  for (let person of level1) {
    round.push(<Card name={person} />);
  }

  console.log(level1);
  return (
    <ul className="gallery">
      {rngLevel(level1).map((x, i) => (
        <Card name={x}  key={i} />
      ))}
    </ul>
  );
};

const Card = ({ name, index }) => {
  return (
    <li className="card">
      <img
        src={`./images/wanted/${name}.png 
      `}
        alt={name}
      />
    </li>
  );
};

export default Gallery;
