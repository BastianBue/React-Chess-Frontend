import { turn, changeTurn } from "../rules";
import startTurn from "../startTurn";
/* import { checkForCheck } from "./checkForCheck/checkForCheck"; */
import actions from "../actions/actions";
import { move } from "../../websocket";
import { gameID } from "../multiplayer";
/* import { manipulatePositions } from "./rules/positions"; */
import {
  removeEventListeners,
  hitPiece,
  addPiece,
  removePiece,
  removeActionFields,
} from "./manipulatePieces";

const cancelAction = (field) => {
  removeActionFields();
  removeEventListeners();
  if (field.className.indexOf(turn) !== -1) {
    actions(field.classList[1], field.id);
  } else {
    startTurn(turn);
  }
};

const indirectMoveHandler = (newPosition, oldPosition, pieceName) => {
  removeActionFields();
  removeEventListeners();
  if (gameID === "local") {
    removePiece(oldPosition, pieceName);
    addPiece(newPosition, pieceName);
  }
  /* checkForCheck(newPosition, pieceName); */
  if (gameID !== "local") {
    move(gameID, newPosition, oldPosition, pieceName, "move");
  }
  if (gameID === "local") {
    changeTurn();
    startTurn(turn);
  }
};

const indirectHitHandler = (newPosition, oldPosition, pieceName) => {
  removeActionFields();
  removeEventListeners();
  if (gameID === "local") {
    removePiece(oldPosition, pieceName);
    hitPiece(newPosition, pieceName);
  }
  /* checkForCheck(newPosition, pieceName); */
  if (gameID !== "local") {
    move(gameID, newPosition, oldPosition, pieceName, "hit");
  }
  if (gameID === "local") {
    console.log("local turn change");
    changeTurn();
    startTurn(turn);
  }
};

export { cancelAction, indirectMoveHandler, indirectHitHandler };
