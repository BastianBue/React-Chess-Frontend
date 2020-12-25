var turn = "white";
var notTurn = "black";
var storeTurn = "";

function changeTurn() {
  storeTurn = turn;
  turn = notTurn;
  notTurn = storeTurn;
}

export { turn, notTurn, changeTurn };
