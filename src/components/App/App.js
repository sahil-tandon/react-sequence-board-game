import React from "react";
import "./App.css";
import Board from "../Board/Board";
import Hand from "../Hand/Hand";
import Player from "../Player/Player";

const App = () => {
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
      <Board />
      <Player playerName={playerName} />
      <Hand cards={playerHand} />
      {/* Add other components as needed */}
    </div>
  );
};

export default App;
