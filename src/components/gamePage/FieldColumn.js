import React from "react";
import Field from "./field/Field";

function FieldColumn(props) {
  var yAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return yAxis.map((value, index) => {
    return (
      <Field
        key={value}
        positionX={props.positionX}
        positionY={value}
        color={
          (index % 2 === 0 && props.indexX % 2 === 0) ||
          (index % 2 === 1 && props.indexX % 2 === 1)
            ? "white"
            : ""
        }
      />
    );
  });
}

export default FieldColumn;
