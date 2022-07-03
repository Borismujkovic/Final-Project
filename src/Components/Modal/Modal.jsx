import React from 'react';
import "./Modal.scss"

const Modal = (props) => {
    return (
        <div id="modal-bcg">
            <div className='modal'>
            <h1 onClick={props.toggleModal}>{props.modalData.candidateName}</h1>
            </div>
        </div>
    )
}

export default Modal