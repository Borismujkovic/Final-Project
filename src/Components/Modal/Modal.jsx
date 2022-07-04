import React from 'react';
import "./Modal.scss"

const Modal = (props) => {
    return (
        <div id="modal-bcg">
            <div className='modal'>
                <div className='name'>
            <h1 onClick={props.toggleModal}>{props.modalData.candidateName}</h1>
                </div>
            <div className='candidateDetails'>
                <div className='details'>
                <h2>Company:</h2>
                <h4>Face</h4>
                <h2>Date:</h2>
                <h4>28.02.2022.</h4>
                <h2>Phase:</h2>
                <h4>HR</h4>
                <h2>Status:</h2>
                <h4>Passed</h4>
                </div>
                <div className='report'>
                    <h2>Report</h2>
                    <p>HR LAB POYY</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Modal