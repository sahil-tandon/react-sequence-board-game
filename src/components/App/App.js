import React from "react";
import "./App.css";
import Board from "../Board/Board";
import Hand from "../Hand/Hand";
import Player from "../Player/Player";
import { makeMove, checkForWin, switchTurn } from "../../GameLogic"; // Update path accordingly

const App = () => {
  const [gameState, setGameState] = React.useState({
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

  // Example data for testing the Player component
  const playerName = "Player 1";

  // Example data for testing the Hand component
  const playerHand = [
    { id: 101, value: "4" },
    { id: 102, value: "5" },
    { id: 103, value: "6" },
    // Add more cards as needed
  ];

  return (
    <div className="app">
      <h1>Sequence Game</h1>
      <Board gameState={gameState} onCardClick={handleCardClick} />
      <Player playerName={playerName} />
      <Hand cards={playerHand} />
      {/* Add other components as needed */}
    </div>
  );
};

export default App;
