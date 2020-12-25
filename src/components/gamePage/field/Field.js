import React, { useState } from "react";

import { findClassName } from "./findClass";
import { positions } from "../../../util/rules/positions";

function Field(props) {
  const id = props.positionX + props.positionY;
  const [className] = useState(findClassName(positions, id));

  return (
    <div id={id} className={className} style={{ backgroundColor: props.color }}>
      <p className='field-id'>{id}</p>
    </div>
  );
}

export default Field;
