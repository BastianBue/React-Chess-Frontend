import { indirectHitHandler } from "../eventhandlers/eventHandlers";
import { notTurn } from "../rules";

function displayHitFields(hitFieldIds, pieceName, originalPosition) {
  hitFieldIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      if (element.className.indexOf(notTurn) !== -1) {
        element.classList.add("hitable");
        element.classList.add("action-field");
        element.addEventListener("click", () => {
          indirectHitHandler(id, originalPosition, pieceName);
        });
      }
    }
  });
}

export default displayHitFields;
