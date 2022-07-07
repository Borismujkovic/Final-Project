import React, { useState } from 'react';
import "./ChooseCandidate.scss"

const ChooseCandidate = (props) => {
  
    return (
        <div id="chooseCandidate">
            <p onClick={() => {
                props.function(props.candidates)
                }}>{props.candidates.name}</p>
        </div>
    )
}

export default ChooseCandidate