/**
 * Represents a card component.
 *
 * @component
 * @param {Object} props - The properties of the card.
 * @param {string} props.value - The value of the card.
 * @param {Function} props.onClick - The function to be called when the card is clicked.
 * @returns {JSX.Element} The card component.
 */
import React from "react";
import "./Card.css";

const Card = ({ value, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <span className="card-value">{value}</span>
    </div>
  );
};

export default Card;
