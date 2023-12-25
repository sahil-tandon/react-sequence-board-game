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

export const checkForWin = (gameState) => {
  const winningPatterns = [
    // Horizontal
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    // Vertical
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ],
    // Diagonal
    [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ],
  ];

  for (const pattern of winningPatterns) {
    const [a, b, c, d, e] = pattern;
    const chipA = gameState.board[a[0]][a[1]];
    const chipB = gameState.board[b[0]][b[1]];
    const chipC = gameState.board[c[0]][c[1]];
    const chipD = gameState.board[d[0]][d[1]];
    const chipE = gameState.board[e[0]][e[1]];

    if (
      chipA !== null &&
      chipA === chipB &&
      chipA === chipC &&
      chipA === chipD &&
      chipA === chipE
    ) {
      return {
        ...gameState,
        gameOver: true,
        winner: gameState.currentPlayer,
      };
    }
  }

  return gameState;
};

export const switchTurn = (gameState) => {
  return {
    ...gameState,
    currentPlayer: gameState.currentPlayer === 1 ? 2 : 1,
    turn: gameState.turn + 1,
  };
};
