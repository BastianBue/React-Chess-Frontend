var gameID = "";

function setGameID(newGameID) {
  gameID = newGameID;
}

var playerColor = "white black";

/* called in Select */
function setPlayerColor(newPlayerColor) {
  playerColor = newPlayerColor;
}

export { gameID, setGameID, playerColor, setPlayerColor };
