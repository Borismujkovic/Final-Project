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
            <Info />
            <Modal/>
            <Footer />
            Details
        </div>
    )
}

export default Details