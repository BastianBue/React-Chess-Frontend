var positions = {
  whitePawn: ["2a", "2b", "2c", "2d", "2e", "2f", "2g", "2h"] /*  */,
  blackPawn: ["7a", "7b", "7c", "7d", "7e", "7f", "7g", "7h"] /*  */,
  whiteRook: ["1a", "1h"] /*  */,
  blackRook: ["8a", "8h"] /*  */,
  whiteKnight: ["1b", "1g"] /*  */,
  blackKnight: ["8b", "8g"] /*  */,
  whiteBishop: ["1c", "1f"] /*  */,
  blackBishop: ["8c", "8f"] /*  */,
  whiteQueen: ["1d"] /*  */,
  blackQueen: ["8d"] /*  */,
  whiteKing: ["1e"] /*  */,
  blackKing: ["8e"] /*  */,
};

function changePositions(newPositions) {
  positions = newPositions;
}

function manipulatePositions(oldPosition, newPosition) {
  for (var pieceName in positions) {
    for (var count = 0; count < positions[pieceName].length; count++) {
      if (positions[pieceName][count] === newPosition) {
        positions[pieceName].splice(count, 1);
      }
    }
    for (var i = 0; i < positions[pieceName].length; i++) {
      if (positions[pieceName][i] === oldPosition) {
        positions[pieceName].splice(i, 1);
        positions[pieceName].push(newPosition);
      }
    }
  }
  return positions;
}

export { positions, manipulatePositions, changePositions };
