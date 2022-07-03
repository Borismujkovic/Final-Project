import React from 'react';
import "./Admin.scss";
import Header from "../../Components/Header/Header"
import Modal from "../../Components/Modal/Modal"
import ReportList from "../../Components/ReportsList/ReportsList"

const Admin = (props) => {
    return (
        <div id="admin">
        {props.openModal && <Modal toggleModal={props.toggleModal}/>}
        <Header />
        <div className='reports'>
        {props.reports.map((e) => <ReportList reports={e} toggleModal={props.toggleModal} />)}
        </div>
            
        </div>
    )
}

export default Admin