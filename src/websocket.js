import { w3cwebsocket as W3CWebSocket } from "websocket";

/* const client = new W3CWebSocket("ws://localhost:8080"); */
const client = new W3CWebSocket("wss://dry-bastion-35878.herokuapp.com");

client.onopen = () => {
  console.log("client connected");
};

client.onerror = () => {
  console.log("connection could not be established");
};

function createNewGameID(gameID) {
  client.send(JSON.stringify({ type: "gameID", id: gameID }));
}

function joinGame(gameID) {
  client.send(JSON.stringify({ type: "joinGame", id: gameID }));
}

function move(gameID, newPosition, oldPosition, pieceName, actionType) {
  client.send(
    JSON.stringify({
      type: "move",
      gameID: gameID,
      newPosition: newPosition,
      oldPosition: oldPosition,
      pieceName: pieceName,
      actionType: actionType,
    })
  );
}

export { client, createNewGameID, joinGame, move };
