import {
  indirectMoveHandler,
  indirectHitHandler,
} from "../eventhandlers/eventHandlers";
import { notTurn } from "../rules";

function displayMoveFields(moveFieldIds, pieceName, originalPosition) {
  for (var direction in moveFieldIds) {
    var directonalMoveFieldIds = moveFieldIds[direction];
    if (directonalMoveFieldIds.length > 0) {
      for (var i = 0; i < directonalMoveFieldIds.length; i++) {
        const field = document.getElementById(directonalMoveFieldIds[i]);
        if (field) {
          if (field.className.indexOf("piece") === -1) {
            field.classList.add("available");
            field.classList.add("action-field");
            field.addEventListener("click", () => {
              indirectMoveHandler(field.id, originalPosition, pieceName);
            });
          } else if (pieceName !== "white-pawn" && pieceName !== "black-pawn") {
            if (field.className.indexOf(notTurn) !== -1) {
              field.classList.add("hitable");
              field.classList.add("action-field");
              field.addEventListener("click", () => {
                indirectHitHandler(field.id, originalPosition, pieceName);
              });
            }
            break;
          }
        }
      }
    }
  }
}

export default displayMoveFields;
