import { specialHitAndMoveIds } from "../rules";
import displayMoveFields from "./displayMovveFields";
import displayHitFields from "./displayHitFields";
import determineMoveFieldIds from "./determineMoveFieldIds";
import addActionCanceller from "./addActionCanceler";

function actions(pieceName, originalPosition) {
  var { hitFieldIds } = specialHitAndMoveIds(originalPosition, pieceName);
  const moveFieldIds = determineMoveFieldIds(originalPosition, pieceName);
  displayMoveFields(moveFieldIds, pieceName, originalPosition);
  displayHitFields(hitFieldIds, pieceName, originalPosition);
  addActionCanceller();
}

export default actions;
