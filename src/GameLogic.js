/**
 * Makes a move on the game board.
 * @param {number} row - The row index of the move.
 * @param {number} col - The column index of the move.
 * @param {object} gameState - The current game state.
 * @returns {object} - The updated game state after making the move.
 */
export const makeMove = (row, col, gameState) => {
  if (gameState.board[row][col] === null) {
    const updatedBoard = gameState.board.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? gameState.currentPlayer : cell
      )
    );

    return {
      ...gameState,
      board: updatedBoard,
    };
  }

  return gameState;
};

/**
 * Checks if the current player has won the game.
 * @param {object} gameState - The current game state.
 * @returns {object} - The updated game state if the current player has won, otherwise the original game state.
 */
export const checkForWin = (gameState) => {
  const directions = [
    { dx: 0, dy: 1 }, // Horizontal
    { dx: 1, dy: 0 }, // Vertical
    { dx: 1, dy: 1 }, // Diagonal from top-left to bottom-right
    { dx: 1, dy: -1 }, // Diagonal from top-right to bottom-left
  ];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (gameState.board[i][j] !== gameState.currentPlayer) continue;

      for (let { dx, dy } of directions) {
        let k;
        for (k = 0; k < 5; k++) {
          let x = i + k * dx;
          let y = j + k * dy;
          if (
            x < 0 ||
            x >= 10 ||
            y < 0 ||
            y >= 10 ||
            gameState.board[x][y] !== gameState.currentPlayer
          )
            break;
        }
        if (k === 5)
          return {
            ...gameState,
            gameOver: true,
            winner: gameState.currentPlayer,
          };
      }
    }
  }

  return gameState;
};

/**
 * Switches the turn to the next player.
 * @param {object} gameState - The current game state.
 * @returns {object} - The updated game state with the next player's turn.
 */
export const switchTurn = (gameState) => {
  return {
    ...gameState,
    currentPlayer: gameState.currentPlayer === 1 ? 2 : 1,
    turn: gameState.turn + 1,
  };
};
