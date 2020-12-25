import React from "react";
import FieldColumn from "./FieldColumn";

function Chessboard(props) {
  var xAxis = ["8", "7", "6", "5", "4", "3", "2", "1"];

  return (
    <div className='board'>
      {xAxis.map((value, index) => {
        return <FieldColumn key={value} positionX={value} indexX={index} />;
      })}
    </div>
  );
}

export default Chessboard;
