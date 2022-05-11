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
  levelScore,
  setLevelScore,
  setNewScore,
  resetGame,
}) => {
  const handleShuffle = () => {
    console.log(levelScore.indexOf(name) !== -1);
    if (levelScore.indexOf(name) !== -1) {
      console.log("in arr");
      setNewScore(0);
      resetGame();
    } else {
      console.log("not in arr");
      setLevelScore((prevState) => [...prevState, name]);
      setNewScore((prev) => prev + 1);
    }
    // rng peoples
    setLevel((prevState) => {
      return { ...prevState, people: rngLevel(prevState.people) };
    });
  };

  // console.log(level.level);

  return (
    <li className="card" onClick={handleShuffle}>
      <img src={require(`./images/${level.level}/${name}.png`)} alt={name} />
    </li>
  );
};

export default Card;
