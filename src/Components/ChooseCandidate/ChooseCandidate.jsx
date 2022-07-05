import React from 'react';
import "./ChooseCandidate.scss"

const ChooseCandidate = (props) => {
    return (
        <div id="chooseCandidate">
            <p>{props.candidates.name}</p>
        </div>
    )
}

export default ChooseCandidate