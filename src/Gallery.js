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

  return (
    <ul>
      <h1>yo</h1>
      {level1.map( x => <Card name={x} /> )}
    </ul>
  );
};

const Card = ({name}) => {
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
