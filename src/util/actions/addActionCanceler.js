import { cancelAction } from "../eventhandlers/eventHandlers";

function addActionCanceller() {
  const fields = document.querySelectorAll(".field");
  fields.forEach((field) => {
    if (field.className.indexOf("action-field") === -1) {
      field.addEventListener("click", () => {
        cancelAction(field);
      });
    }
  });
}

export default addActionCanceller;
