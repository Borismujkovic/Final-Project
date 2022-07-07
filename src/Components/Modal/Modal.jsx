import React from 'react';
import "./Modal.scss"

const Modal = (props) => {
    return (
        <div id="modalWrapper">
            <div className='modal-content'>
                <button className='closeBtn' onClick={props.toggleModal}>X</button>
                <div className='left'>
                   <img src="https://icon-library.com/images/profile-icon-white/profile-icon-white-3.jpg" alt="" className='userLogo'/>
                   <div className='personalInfo'>
                        <h2>{props.modalData.candidateName}</h2>
                   </div>
                </div>
                <div className='right'>
                    <div className='reportInfo'>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/2891/2891415.png" alt="" className="logo" />
                            <h4>{props.modalData.companyName}</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/2693/2693507.png" alt="" className="logo" />
                            <h4>{props.modalData.interviewDate.substring(4, 15)}</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/4295/4295910.png" alt="" className="logo" />
                            <h4>{props.modalData.status}</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/5698/5698496.png" alt="" className="logo" />
                            <h4>{props.modalData.phase}</h4>
                       </div>
                    </div>
                    <div className='report'>
                        <p>{props.modalData.note}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal