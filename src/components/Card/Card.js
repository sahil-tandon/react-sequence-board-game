import React from "react";
import "./Card.css";

const Card = ({ value }) => {
  return (
    <div className="card">
      <span className="card-value">{value}</span>
    </div>
  );
};

export default Card;
