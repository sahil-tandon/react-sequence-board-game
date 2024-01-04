/**
 * Renders a hand of cards.
 *
 * @param {Object[]} cards - The array of cards to render.
 * @param {number} cards[].id - The unique identifier of the card.
 * @param {string} cards[].value - The value of the card.
 * @returns {JSX.Element} The rendered hand component.
 */
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
