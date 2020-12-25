import "./App.css";
import StartingPage from "./components/startingPage/StartingPage";
import { useState } from "react";
import GamePage from "./components/gamePage/GamePage";

function App() {
  const [showGamePage, setShowGamePage] = useState(false);

  if (!showGamePage) {
    return <StartingPage showGame={setShowGamePage} />;
  } else {
    return <GamePage showGame={setShowGamePage} />;
  }
}

export default App;
