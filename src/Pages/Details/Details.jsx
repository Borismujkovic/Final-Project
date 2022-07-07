import React from 'react';
import "./Details.scss";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Info from "../../Components/Info/Info"
import Modal from "../../Components/Modal/Modal"

const Details = (props) => {



    return (
        <div id="details">
            <Header  setToken={props.setToken} changeTheme={props.changeTheme} deleteData={props.deleteData}/>
            <Info  modalData={props.modalData} reports={props.reports} toggleModal={props.toggleModal} candidateInfo={props.candidateInfo} selectReport={props.selectReport}/>
            {props.openModal &&  <Modal toggleModal={props.toggleModal} modalData={props.modalData}/> }
            <Footer />
        </div>
    )
}

export default Details