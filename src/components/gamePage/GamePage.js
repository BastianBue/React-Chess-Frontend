import React, { useEffect } from "react";
import Chessboard from "./Chessboard";
import startTurn from "../../util/startTurn";

import { changeTurn, turn } from "../../util/rules/turn";
import { client } from "../../websocket";
import { setGameID } from "../../util/multiplayer";
import {
  removePiece,
  addPiece,
  hitPiece,
} from "../../util/eventhandlers/manipulatePieces";

function GamePage(props) {
  client.onmessage = (message) => {
    const data = JSON.parse(message.data);
    if (data.type === "connectionClosed") {
      alert("connection closed");
      props.showGame(false);
      setGameID("");
    }
    if (data.type === "move") {
      if (data.actionType === "move") {
        removePiece(data.oldPosition, data.pieceName);
        addPiece(data.newPosition, data.pieceName);
      }
      if (data.actionType === "hit") {
        removePiece(data.oldPosition, data.pieceName);
        hitPiece(data.newPosition, data.pieceName);
      }

      changeTurn();
      startTurn(turn);
    }
  };

  useEffect(() => {
    startTurn(turn);
  });

  return (
    <div className='App'>
      <Chessboard></Chessboard>
    </div>
  );
}

export default GamePage;
