import React from "react";
import "./Hand.css";
import Card from "../Card/Card";

const Hand = ({ cards }) => {
  return (
    <div className="hand">
      {cards.map((card) => (
        <Card key={card.id} value={card.value} />
      ))}
    </div>
  );
};

export default Hand;
