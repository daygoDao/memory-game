import React from "react";

const Trackbar = ({ currScore, bestScore, currLevel, level }) => {
  return (
    <div className="trackbar">
      <h1>Memory Game</h1>
      <section>score: {currScore}</section>
      <section>best score: {bestScore}</section>
      <section>level: {currLevel + 1}</section>
      <section>stage: {level.level.replace("_", " ")}</section>
    </div>
  );
};

export default Trackbar;
