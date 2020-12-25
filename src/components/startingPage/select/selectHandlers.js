import { createNewGameID, joinGame } from "../../../websocket";
import { setGameID, setPlayerColor } from "../../../util/multiplayer";
import { getUniqueID } from "../../../util/getUniqueID";

function generateNewGame() {
  const gameID = getUniqueID();
  document.getElementById(
    "new-game"
  ).innerHTML = `<h1 id="game-id">${gameID}</h1>`;
  alert("Send this Code to your oponent!");
  createNewGameID(gameID);
  setGameID(gameID);
  setPlayerColor("white");
}

function joinGameHandleClick() {
  const element = document.getElementById("code-input");
  joinGame(element.value);
  setGameID(element.value);
  setPlayerColor("black");
}

function localMode(showGame) {
  setGameID("local");
  showGame();
}

export { generateNewGame, joinGameHandleClick, localMode };
