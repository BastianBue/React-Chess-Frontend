import React from "react";
import StartingPageSelect from "./StartingPageSelect";

function StartingPage(props) {
  return (
    <div className='starting-page'>
      <div className='starting-page-body body'></div>
      <StartingPageSelect showGame={props.showGame} />
    </div>
  );
}

export default StartingPage;
