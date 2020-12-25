const camelToKebab = (str) => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
};

function findClassName(positions, id) {
  var className = "field";
  for (var pieceName in positions) {
    var pieceNameIDs = positions[pieceName];
    if (pieceNameIDs.indexOf(id) !== -1) {
      if (pieceName.indexOf("white") !== -1) {
        className = `field ${camelToKebab(pieceName)} piece white`;
      } else if (pieceName.indexOf("black") !== -1) {
        className = `field ${camelToKebab(pieceName)} piece black`;
      }
    }
  }
  return className;
}

export { findClassName };
