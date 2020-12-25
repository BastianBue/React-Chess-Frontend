import { useState } from "react";
import { Button } from "semantic-ui-react";
import { client } from "../../../websocket";

import {
  generateNewGame,
  joinGameHandleClick,
  localMode,
} from "./selectHandlers";

function Select(props) {
  const [showInput, setShowInput] = useState(true);
  const showGame = () => {
    props.showGame(true);
  };

  client.onmessage = (message) => {
    const data = JSON.parse(message.data);
    if (data.type === "playerTwoJoined") {
      showGame();
    }
    if (data.type === "gameFull") {
      alert("game is already being played");
    }
    if (data.type === "noSuchGame") {
      alert("no such game");
    }
  };

  return (
    <div
      style={{
        width: "70%",
        margin: "10vh auto",
        textAlign: "left",
        color: "white",
      }}>
      <div id='new-game' className='selectable' style={{ width: "100%" }}>
        <h1
          onClick={() => {
            generateNewGame(showGame);
          }}>
          Start a New Game!
        </h1>
      </div>
      {showInput ? (
        <div
          id='join-game'
          onClick={() => {
            setShowInput(!showInput);
          }}
          className='selectable'
          style={{ width: "100%" }}>
          <h1>Join a Game!</h1>
        </div>
      ) : (
        <form
          style={{ display: "flex" }}
          onSubmit={(event) => {
            event.preventDefault();
            joinGameHandleClick();
          }}>
          <input
            id='code-input'
            className='input'
            placeholder='Put your oponents GameCode here!'></input>
          <Button type='submit'>Start</Button>
        </form>
      )}
      <div
        id='local-mode'
        onClick={() => {
          localMode(showGame);
        }}
        className='selectable'
        style={{ width: "100%" }}>
        <h1>Local Mode</h1>
      </div>
      <div id='options' className='selectable' style={{ width: "100%" }}>
        <h1>Options</h1>
      </div>
    </div>
  );
}

export default Select;
