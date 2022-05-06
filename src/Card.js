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
  setCurr,
  bestScore,
  currScore,
}) => {
  const handleShuffle = () => {
    console.log(currScore.indexOf(name) !== -1);
    if (currScore.indexOf(name) !== -1) {
      console.log("in arr");

      if (currScore.length > bestScore) {
        setBest(currScore.length);
      }
      setCurr([]);
    } else {
      console.log("not in arr");
      setCurr((prevState) => [...prevState, name]);
    }

    setLevel(rngLevel(level));
    console.log(currScore);
  };

  return (
    <li className="card" onClick={handleShuffle}>
      <img
        src={`./images/wanted/${name}.png 
        `}
        alt={name}
      />
    </li>
  );
};

export default Card;
