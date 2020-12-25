import { turn, notTurn } from "../rules/turn";

function removeEventListeners() {
  const eventListeners = document.querySelectorAll(".field");
  eventListeners.forEach((listener) => {
    var new_element = listener.cloneNode(true);
    listener.parentNode.replaceChild(new_element, listener);
  });
}
function removeActionFields() {
  const actionFields = document.querySelectorAll(".action-field");
  actionFields.forEach((field) => {
    field.classList.remove("action-field");
    field.classList.remove("available");
    field.classList.remove("hitable");
  });
}
function removePiece(id, pieceName) {
  const oldField = document.getElementById(id);
  oldField.classList.remove(pieceName);
  oldField.classList.remove("piece");
  oldField.classList.remove(turn);
}
function addPiece(id, pieceName) {
  const newField = document.getElementById(id);
  newField.classList.add(pieceName);
  newField.classList.add("piece");
  newField.classList.add(turn);
}

function hitPiece(id, pieceName) {
  const newField = document.getElementById(id);
  newField.classList.remove(newField.classList[1]);
  newField.classList.remove("piece");
  newField.classList.remove(notTurn);
  addPiece(newField.id, pieceName);
}

export {
  removeEventListeners,
  hitPiece,
  addPiece,
  removePiece,
  removeActionFields,
};
