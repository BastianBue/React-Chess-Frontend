function pieceRulebook(pieceName) {
  if (pieceName === "white-pawn") {
    return ["NN"];
  } else if (pieceName === "black-pawn") {
    return ["SS"];
  } else if (pieceName === "white-rook" || pieceName === "black-rook") {
    return ["NNAll", "SSAll", "EEAll", "WWAll"];
  } else if (pieceName === "white-bishop" || pieceName === "black-bishop") {
    return ["NWAll", "NEAll", "SWAll", "SEAll"];
  } else if (pieceName === "white-knight" || pieceName === "black-knight") {
    return ["NNJJ", "NEJJ", "EEJJ", "SEJJ", "SSJJ", "SWJJ", "WWJJ", "NWJJ"];
  } else if (pieceName === "white-queen" || pieceName === "black-queen") {
    return [
      "NWAll",
      "NEAll",
      "SWAll",
      "SEAll",
      "NNAll",
      "SSAll",
      "EEAll",
      "WWAll",
    ];
  } else if (pieceName === "white-king" || pieceName === "black-king") {
    return ["NN", "NW", "NE", "WW", "EE", "SW", "SE", "SS"];
  } else {
    console.log("this piece has no options yet");
    return [];
  }
}

export { pieceRulebook };
