import manipulateId from "../manipulateId";

function specialHitAndMoveIds(originalPosition, pieceName) {
  const moveFieldIds = {
    NN: [],
    WW: [],
    EE: [],
    SS: [],
    NW: [],
    NE: [],
    SW: [],
    SE: [],
  };

  if (pieceName === "white-pawn" && originalPosition.slice(0, 1) === "2") {
    const frontPosition = `${
      parseInt(originalPosition.slice(0, 1)) + 1
    }${originalPosition.slice(1, 2)}`;
    const frontField = document.getElementById(frontPosition);
    if (frontField.className.indexOf("piece") === -1) {
      moveFieldIds.NN.push(
        manipulateId(manipulateId(originalPosition, "NN"), "NN")
      );
    }
  }
  if (pieceName === "black-pawn" && originalPosition.slice(0, 1) === "7") {
    const frontPosition = `${
      parseInt(originalPosition.slice(0, 1)) - 1
    }${originalPosition.slice(1, 2)}`;
    const frontField = document.getElementById(frontPosition);
    if (frontField.className.indexOf("piece") === -1) {
      moveFieldIds.NN.push(
        manipulateId(manipulateId(originalPosition, "SS"), "SS")
      );
    }
  }

  var hitFieldIds = [];
  if (pieceName === "white-pawn") {
    hitFieldIds = [
      manipulateId(originalPosition, "NE"),
      manipulateId(originalPosition, "NW"),
    ];
  } else if (pieceName === "black-pawn") {
    hitFieldIds = [
      manipulateId(originalPosition, "SE"),
      manipulateId(originalPosition, "SW"),
    ];
  }
  return { moveFieldIds, hitFieldIds };
}

export { specialHitAndMoveIds };
