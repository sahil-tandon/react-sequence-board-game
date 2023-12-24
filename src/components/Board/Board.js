import React, { useState } from "react";
import "./Board.css";
import Card from "../Card/Card";

const Board = () => {
  const [gameState, setGameState] = useState({
    board: Array(10).fill(Array(10).fill(null)), // Example: 10x10 board
    currentPlayer: 1,
    turn: 1,
    gameOver: false,
    winner: null,
  });

  const handleCardClick = (row, col) => {
    if (!gameState.gameOver && gameState.board[row][col] === null) {
      const updatedGameState = makeMove(row, col, gameState);
      setGameState(updatedGameState);

      const gameWithWin = checkForWin(updatedGameState);
      if (gameWithWin.gameOver) {
        setGameState(gameWithWin);
        // Handle game over (e.g., display winner, restart button)
      } else {
        setGameState(switchTurn(gameWithWin));
      }
    }
  };

  return (
    <div className="board">
      {gameState.board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <Card
              key={colIndex}
              value={cell}
              onClick={() => handleCardClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
