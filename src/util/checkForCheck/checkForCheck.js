import { turn, notTurn } from "../rules/turn";
import determineMoveFieldIds from "../actions/determineMoveFieldIds";
import { specialHitAndMoveIds } from "../rules/specialHitAndMoveIds";

function checkForCheck(newPosition, pieceName) {
  const enemyKing = document.querySelector("." + notTurn + "-king");
  if (!enemyKing) {
    console.log(`${turn} wins!`);
    /* display win window 
!
!
!
!
!
!
! */
  } else {
    const newMoveFieldIds = determineMoveFieldIds(newPosition, pieceName);
    var { hitFieldIds } = specialHitAndMoveIds(newPosition, pieceName);
    hitFieldIds.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (field.id === enemyKing.id) {
        console.log("check");
        checkForCheckMate();
      }
    });
    for (var direction in newMoveFieldIds) {
      var directonalMoveFieldIds = newMoveFieldIds[direction];
      if (directonalMoveFieldIds.length > 0) {
        for (var i = 0; i < directonalMoveFieldIds.length; i++) {
          if (pieceName !== "white-pawn" && pieceName !== "black-pawn") {
            const field = document.getElementById(directonalMoveFieldIds[i]);
            if (field) {
              if (field.id === enemyKing.id) {
                console.log("check initiate check for mate");
                checkForCheckMate();
              }
              if (field.className.indexOf("piece") !== -1) {
                break;
              }
            }
          }
        }
      }
    }
  }
}

function checkForCheckMate() {}

export { checkForCheck };
