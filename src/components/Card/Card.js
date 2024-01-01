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
