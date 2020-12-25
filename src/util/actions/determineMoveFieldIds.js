import { pieceRulebook, specialHitAndMoveIds } from "../rules";
import manipulateId from "../manipulateId";

function determineMoveFieldIds(originalPosition, pieceName) {
  var { moveFieldIds } = specialHitAndMoveIds(originalPosition, pieceName);
  const pieceOptions = pieceRulebook(pieceName);

  pieceOptions.forEach((direction) => {
    const newFields = manipulateId(originalPosition, direction);
    if (typeof newFields === "string") {
      moveFieldIds[direction.slice(0, 2)].push(newFields);
    } else {
      newFields.forEach((newField) => {
        moveFieldIds[direction.slice(0, 2)].push(newField);
      });
    }
  });
  return moveFieldIds;
}
export default determineMoveFieldIds;
