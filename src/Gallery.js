import React from "react";

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

  const rngMe = (levelArr) => {
    for (let i = levelArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = levelArr[i];
      levelArr[i] = levelArr[j];
      levelArr[j] = temp;
    }
  };
  
  rngMe(level1);
  return (
    <ul className="gallery">
      {level1.map((x) => (
        <Card name={x} />
      ))}
    </ul>
  );
};

const Card = ({ name }) => {
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
