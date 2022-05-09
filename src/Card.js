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
  setLevelScore,
  bestScore,
  levelScore,
}) => {
  // console.log(level, 'ayo')

  const handleShuffle = () => {
    console.log(levelScore.indexOf(name) !== -1);
    if (levelScore.indexOf(name) !== -1) {
      console.log("in arr");

      if (levelScore.length > bestScore) {
        setBest(levelScore.length);
      }
      setLevelScore([]);
    } else {
      console.log("not in arr");
      setLevelScore((prevState) => [...prevState, name]);
    }

    setLevel( (prevState) => {
      console.log('setLevel called ', prevState)
      return {...prevState, people: rngLevel(prevState.people)}
    });
    console.log(levelScore);
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
