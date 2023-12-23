import React, { useState } from "react";
import "./Board.css";
import Card from "../Card/Card";

const Board = () => {
  // Example state for the board, you can customize as needed
  const [boardState, setBoardState] = useState([
    { id: 1, value: "A" },
    { id: 2, value: "2" },
    { id: 3, value: "3" },
    // Add more cards as needed
  ]);

  const handleCardClick = (cardId) => {
    // Handle card click logic here
    console.log(`Card clicked: ${cardId}`);
  };

  return (
    <div className="board">
      {boardState.map((card) => (
        <Card
          key={card.id}
          value={card.value}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default Board;
