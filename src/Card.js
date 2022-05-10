import { useEffect } from "react";

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

const Card = ({
  name,
  level,
  setLevel,
  setBest,
  bestScore,
  levelScore,
  setLevelScore,
  setNewScore,
}) => {

  const handleShuffle = () => {
    console.log(levelScore.indexOf(name) !== -1);
    if (levelScore.indexOf(name) !== -1) {
      console.log("in arr");
      setNewScore(0);
      setLevelScore([]);
    } else {
      console.log("not in arr");
      setLevelScore((prevState) => [...prevState, name]);
      setNewScore((prev) => prev + 1);

      if (levelScore.length > bestScore) {
        setBest((prev) => levelScore.length);
      }
    }
    // rng peoples
    setLevel((prevState) => {
      console.log("setLevel called ", prevState);
      return { ...prevState, people: rngLevel(prevState.people) };
    });
  };

  return (
    <li className="card" onClick={handleShuffle}>
      <img
        src={`./images/${level.level}/${name}.png 
        `}
        alt={name}
      />
    </li>
  );
};

export default Card;
