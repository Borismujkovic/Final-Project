import React from 'react';
import "./Modal.scss"

const Modal = (props) => {
    return (
        <div id="modalWrapper">
            <div className='modal-content'>
                <button className='closeBtn'>X</button>
                {/* <div className='name'>
                    <h1 onClick={props.toggleModal}>{props.modalData.candidateName}</h1>
                </div> */}
                <div className='left'>
                   <img src="https://icon-library.com/images/profile-icon-white/profile-icon-white-3.jpg" alt="" className='userLogo'/>
                   <div className='personalInfo'>
                        <h2>Josip Broz Tito</h2>
                   </div>
                </div>
                <div className='right'>
                    <div className='reportInfo'>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/2891/2891415.png" alt="" className="logo" />
                            <h4>KPJ</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/2693/2693507.png" alt="" className="logo" />
                            <h4>25.05.1893.</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/4295/4295910.png" alt="" className="logo" />
                            <h4>Technical</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/5698/5698496.png" alt="" className="logo" />
                            <h4>Passed</h4>
                       </div>
                    </div>
                    <div className='report'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda facere consequatur rerum pariatur recusandae doloribus quidem reiciendis voluptatibus dicta! Perspiciatis commodi quaerat quod odio accusamus tempore molestias sunt, beatae laborum?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque error tempore pariatur atque, veniam et, minima debitis dolores exercitationem optio velit praesentium, culpa aperiam ipsum provident aspernatur natus ducimus esse?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal