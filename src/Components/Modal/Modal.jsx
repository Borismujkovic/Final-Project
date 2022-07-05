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
                        <h2>Josip Broz</h2>
                   </div>
                </div>
                <div className='right'>
                    <div className='reportInfo'>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/2891/2891415.png" alt="" className="logo" />
                            <h4>KPJ</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons.flaticon.com/png/512/439/premium/439398.png?token=exp=1657017964~hmac=a5fd7993d8710404336d97a73ac4318b" alt="" className="logo" />
                            <h4>25.05.1893.</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons.flaticon.com/png/512/3783/premium/3783910.png?token=exp=1657023969~hmac=89a6af078a38e564c30e578f3fed53e5" alt="" className="logo" />
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