import React from "react";
import SelectHeader from "./SelectHeader";
import Select from "./select/Select";

function StartingPageSelect(props) {
  return (
    <div className='starting-page-select'>
      <SelectHeader />
      <Select showGame={props.showGame} />
    </div>
  );
}

export default StartingPageSelect;
