import React from "react";
import "./Player.css";

const Player = ({ playerName }) => {
  return (
    <div className="player">
      <div className="player-info">
        <span className="player-avatar">👤</span>
        <span className="player-name">{playerName}</span>
      </div>
      {/* Add other player-related information as needed */}
    </div>
  );
};

export default Player;
