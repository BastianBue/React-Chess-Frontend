import actions from "./actions/actions";
import { playerColor } from "../util/multiplayer";

const pieceEventHandler = (event) => {
  const pieceName = event.target.className.split(" ");
  actions(pieceName[1], event.target.id);
};

function startTurn(turn) {
  if (playerColor.indexOf(turn) !== -1) {
    const classQuery = "." + turn;
    const pieces = document.querySelectorAll(classQuery);
    pieces.forEach((piece) => {
      piece.addEventListener("click", pieceEventHandler);
    });
  }
}

export default startTurn;
