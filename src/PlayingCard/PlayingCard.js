import React from "react";
import "./PlayingCard.css";

const playingCard = ({card, displayFront, clickCard }) => {
  console.log(card.toImageString());
  return (
    <div className="playing-card" onClick={clickCard}>
      {displayFront === true ? (
        <img className="card-image" src={require('./images/' + card.toImageString())} />
      ) : (
        <img className="card-image" src={require("./images/green_back.png")} />
      )}
    </div>
  );
};

export default playingCard;
