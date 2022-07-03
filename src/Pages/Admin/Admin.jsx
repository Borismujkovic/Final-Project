import React, { useState } from 'react';
import "./Admin.scss";
import Header from "../../Components/Header/Header"
import Modal from "../../Components/Modal/Modal"
import ReportList from "../../Components/ReportsList/ReportsList"

const Admin = (props) => {
    const [modalData, setModalData] = useState(null)


    const selectCandidate = (obj)  => {
        setModalData(obj)
    }

    
    return (
        <div id="admin">
        {props.openModal && <Modal toggleModal={props.toggleModal} modalData={modalData}/>}
        <Header />
        <div className='reports'>
        {props.reports.map((e) => <ReportList reports={e} toggleModal={props.toggleModal} selectCandidate={selectCandidate}/>)}
        </div>
            
        </div>
    )
}

export default Admin