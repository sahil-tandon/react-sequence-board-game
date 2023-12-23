import React from "react";
import "./App.css";
import Board from "../Board/Board";

const App = () => {
  return (
    <div className="app">
      <h1>Sequence Game</h1>
      <Board />
      {/* Add other components as needed */}
    </div>
  );
};

export default App;
