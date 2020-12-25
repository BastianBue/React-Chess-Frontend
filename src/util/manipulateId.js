const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

function incNNOne(position) {
  const Y = position.slice(0, 1);
  const X = position.slice(1, 2);
  const Ynew = parseInt(Y) + 1;
  const Xnew = X;
  const newId = Ynew + Xnew;
  return newId;
}
function incNWOne(position) {
  const Y = position.slice(0, 1);
  const X = position.slice(1, 2);
  const Ynew = parseInt(Y) + 1;
  const Xnew = xAxis[xAxis.indexOf(X) - 1];
  const newId = Ynew + Xnew;
  return newId;
}
function incNEOne(position) {
  const Y = position.slice(0, 1);
  const X = position.slice(1, 2);
  const Ynew = parseInt(Y) + 1;
  const Xnew = xAxis[xAxis.indexOf(X) + 1];
  const newId = Ynew + Xnew;
  return newId;
}
function incSSOne(position) {
  const Y = position.slice(0, 1);
  const X = position.slice(1, 2);
  const Ynew = parseInt(Y) + -1;
  const Xnew = X;
  const newId = Ynew + Xnew;
  return newId;
}
function incSWOne(position) {
  const Y = position.slice(0, 1);
  const X = position.slice(1, 2);
  const Ynew = parseInt(Y) - 1;
  const Xnew = xAxis[xAxis.indexOf(X) - 1];
  const newId = Ynew + Xnew;
  return newId;
}
function incSEOne(position) {
  const Y = position.slice(0, 1);
  const X = position.slice(1, 2);
  const Ynew = parseInt(Y) - 1;
  const Xnew = xAxis[xAxis.indexOf(X) + 1];
  const newId = Ynew + Xnew;
  return newId;
}

function incWWOne(position) {
  const Y = position.slice(0, 1);
  const X = position.slice(1, 2);
  const Ynew = Y;
  const Xnew = xAxis[xAxis.indexOf(X) - 1];
  const newId = Ynew + Xnew;
  return newId;
}

function incEEOne(position) {
  const Y = position.slice(0, 1);
  const X = position.slice(1, 2);
  const Ynew = Y;
  const Xnew = xAxis[xAxis.indexOf(X) + 1];
  const newId = Ynew + Xnew;
  return newId;
}

function incNNAll(position) {
  var newPositions = [];
  var storagePosition = position;
  for (var i = 0; i < 8; i++) {
    const newPosition = incNNOne(storagePosition);
    const newY = newPosition.slice(0, 1);
    const newX = xAxis.indexOf(newPosition.slice(1, 2));
    if (newY > 0 && newY < 9) {
      if (newX + 1 > 0 && newX + 1 < 9) {
        newPositions.push(newPosition);
      } else {
        break;
      }
    } else {
      break;
    }
    storagePosition = newPosition;
  }
  return newPositions;
}

function incSSAll(position) {
  var newPositions = [];
  var storagePosition = position;
  for (var i = 0; i < 8; i++) {
    const newPosition = incSSOne(storagePosition);
    const newY = newPosition.slice(0, 1);
    const newX = xAxis.indexOf(newPosition.slice(1, 2));
    if (newY > 0 && newY < 9) {
      if (newX + 1 > 0 && newX + 1 < 9) {
        newPositions.push(newPosition);
      } else {
        break;
      }
    } else {
      break;
    }
    storagePosition = newPosition;
  }
  return newPositions;
}

function incEEAll(position) {
  var newPositions = [];
  var storagePosition = position;
  for (var i = 0; i < 8; i++) {
    const newPosition = incEEOne(storagePosition);
    const newY = newPosition.slice(0, 1);
    const newX = xAxis.indexOf(newPosition.slice(1, 2));
    if (newY > 0 && newY < 9) {
      if (newX + 1 > 0 && newX + 1 < 9) {
        newPositions.push(newPosition);
      } else {
        break;
      }
    } else {
      break;
    }
    storagePosition = newPosition;
  }
  return newPositions;
}

function incWWAll(position) {
  var newPositions = [];
  var storagePosition = position;
  for (var i = 0; i < 8; i++) {
    const newPosition = incWWOne(storagePosition);
    const newY = newPosition.slice(0, 1);
    const newX = xAxis.indexOf(newPosition.slice(1, 2));
    if (newY > 0 && newY < 9) {
      if (newX + 1 > 0 && newX + 1 < 9) {
        newPositions.push(newPosition);
      } else {
        break;
      }
    } else {
      break;
    }
    storagePosition = newPosition;
  }
  return newPositions;
}

function incNWAll(position) {
  var newPositions = [];
  var storagePosition = position;
  for (var i = 0; i < 8; i++) {
    const newPosition = incNWOne(storagePosition);
    if (typeof newPosition === "string") {
      const newY = newPosition.slice(0, 1);
      const newX = xAxis.indexOf(newPosition.slice(1, 2));
      if (newY > 0 && newY < 9) {
        if (newX + 1 > 0 && newX + 1 < 9) {
          newPositions.push(newPosition);
        } else {
          break;
        }
      } else {
        break;
      }
      storagePosition = newPosition;
    }
  }
  return newPositions;
}

function incNEAll(position) {
  var newPositions = [];
  var storagePosition = position;
  for (var i = 0; i < 8; i++) {
    const newPosition = incNEOne(storagePosition);
    if (typeof newPosition === "string") {
      const newY = newPosition.slice(0, 1);
      const newX = xAxis.indexOf(newPosition.slice(1, 2));
      if (newY > 0 && newY < 9) {
        if (newX + 1 > 0 && newX + 1 < 9) {
          newPositions.push(newPosition);
        } else {
          break;
        }
      } else {
        break;
      }
      storagePosition = newPosition;
    }
  }
  return newPositions;
}

function incSWAll(position) {
  var newPositions = [];
  var storagePosition = position;
  for (var i = 0; i < 8; i++) {
    const newPosition = incSWOne(storagePosition);
    if (typeof newPosition === "string") {
      const newY = newPosition.slice(0, 1);
      const newX = xAxis.indexOf(newPosition.slice(1, 2));
      if (newY > 0 && newY < 9) {
        if (newX + 1 > 0 && newX + 1 < 9) {
          newPositions.push(newPosition);
        } else {
          break;
        }
      } else {
        break;
      }
      storagePosition = newPosition;
    }
  }
  return newPositions;
}

function incSEAll(position) {
  var newPositions = [];
  var storagePosition = position;
  for (var i = 0; i < 8; i++) {
    const newPosition = incSEOne(storagePosition);
    if (typeof newPosition === "string") {
      const newY = newPosition.slice(0, 1);
      const newX = xAxis.indexOf(newPosition.slice(1, 2));
      if (newY > 0 && newY < 9) {
        if (newX + 1 > 0 && newX + 1 < 9) {
          newPositions.push(newPosition);
        } else {
          break;
        }
      } else {
        break;
      }
      storagePosition = newPosition;
    }
  }
  return newPositions;
}

function incNNJJ(position) {
  var newPosition = incNNOne(position);
  newPosition = incNEOne(newPosition);
  if (typeof newPosition === "number") {
    return "not valid";
  }
  return newPosition;
}

function incNEJJ(position) {
  var newPosition = incEEOne(position);
  newPosition = incNEOne(newPosition);
  if (typeof newPosition === "number") {
    return "not valid";
  }

  return newPosition;
}

function incEEJJ(position) {
  var newPosition = incEEOne(position);
  newPosition = incSEOne(newPosition);
  if (typeof newPosition === "number") {
    return "not valid";
  }
  return newPosition;
}
function incSEJJ(position) {
  var newPosition = incSSOne(position);
  newPosition = incSEOne(newPosition);
  if (typeof newPosition === "number") {
    return "not valid";
  }
  return newPosition;
}
function incSSJJ(position) {
  var newPosition = incSSOne(position);
  newPosition = incSWOne(newPosition);
  if (typeof newPosition === "number") {
    return "not valid";
  }
  return newPosition;
}

function incSWJJ(position) {
  var newPosition = incWWOne(position);
  newPosition = incSWOne(newPosition);
  if (typeof newPosition === "number") {
    return "not valid";
  }
  return newPosition;
}

function incWWJJ(position) {
  var newPosition = incWWOne(position);
  newPosition = incNWOne(newPosition);
  if (typeof newPosition === "number") {
    return "not valid";
  }
  return newPosition;
}

function incNWJJ(position) {
  var newPosition = incNNOne(position);
  newPosition = incNWOne(newPosition);
  if (typeof newPosition === "number") {
    return "not valid";
  }
  return newPosition;
}

function manipulateId(position, direction) {
  if (direction === "NN") {
    return incNNOne(position);
  } else if (direction === "WW") {
    return incWWOne(position);
  } else if (direction === "EE") {
    return incEEOne(position);
  } else if (direction === "SS") {
    return incSSOne(position);
  } else if (direction === "NW") {
    return incNWOne(position);
  } else if (direction === "NE") {
    return incNEOne(position);
  } else if (direction === "SW") {
    return incSWOne(position);
  } else if (direction === "SE") {
    return incSEOne(position);
  } else if (direction === "NNAll") {
    return incNNAll(position);
  } else if (direction === "SSAll") {
    return incSSAll(position);
  } else if (direction === "EEAll") {
    return incEEAll(position);
  } else if (direction === "WWAll") {
    return incWWAll(position);
  } else if (direction === "NWAll") {
    return incNWAll(position);
  } else if (direction === "NEAll") {
    return incNEAll(position);
  } else if (direction === "SWAll") {
    return incSWAll(position);
  } else if (direction === "SEAll") {
    return incSEAll(position);
  } else if (direction === "NNJJ") {
    return incNNJJ(position);
  } else if (direction === "NEJJ") {
    return incNEJJ(position);
  } else if (direction === "EEJJ") {
    return incEEJJ(position);
  } else if (direction === "SEJJ") {
    return incSEJJ(position);
  } else if (direction === "SSJJ") {
    return incSSJJ(position);
  } else if (direction === "SWJJ") {
    return incSWJJ(position);
  } else if (direction === "WWJJ") {
    return incWWJJ(position);
  } else if (direction === "NWJJ") {
    return incNWJJ(position);
  } else {
  }
}

export default manipulateId;
