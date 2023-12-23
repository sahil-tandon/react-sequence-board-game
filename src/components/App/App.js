import React from "react";
import "./App.css";
import Card from "../Card/Card";

const App = () => {
  return (
    <div className="app">
      <h1>Sequence Game</h1>
      <div className="card-container">
        <Card value="A" />
        <Card value="2" />
        <Card value="3" />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default App;
