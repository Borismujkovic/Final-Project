import React from 'react';
import "./Details.scss";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Info from "../../Components/Info/Info"
import Modal from "../../Components/Modal/Modal"

const Details = (props) => {



    return (
        <div id="details">
            <Header />
            <Info  modalData={props.modalData} toggleModal={props.toggleModal} candidates={props.candidates}/>
            {props.openModal && <Modal toggleModal={props.toggleModal} modalData={props.modalData}/>}
            <Footer />
        </div>
    )
}

export default Details