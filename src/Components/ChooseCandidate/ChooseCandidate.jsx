import React, { useState } from "react";
import "./ChooseCandidate.scss";

const ChooseCandidate = (props) => {
  return (
    <div id="chooseCandidate" className={`${props.chosenCandidate.name===props.candidate.name ? "active" : ""}`}>
      <p
        onClick={() => {
          props.function(props.candidate);
        }}
      >
        {props.candidate.name}
      </p>
    </div>
  );
};

export default ChooseCandidate;
