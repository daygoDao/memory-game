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

const Card = ({ name, level, setLevel }) => {
  const handleShuffle = () => {
    setLevel(rngLevel(level));
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
