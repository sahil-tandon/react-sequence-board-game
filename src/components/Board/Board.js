/**
 * Renders the game board.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.gameState - The game state object.
 * @param {Function} props.onCardClick - The callback function for card click event.
 * @returns {JSX.Element} The rendered game board.
 */
import "./Board.css";
import Card from "../Card/Card";

const Board = ({ gameState, onCardClick }) => {
  return (
    <div className="board">
      {gameState.board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <Card
              key={colIndex}
              value={cell}
              onClick={() => onCardClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
