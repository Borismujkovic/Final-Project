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
        <main>

        <div className='search'>
        <div>
            <button className='admin-button'>Admin Page</button>
            <button className='newReport-button'>New Report</button>
        </div>
            <div className='search-image'>
                <input type="text" />
                <img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt="" />
            </div>
        </div>
        <div className='reports'>
        {props.reports.map((e) => <ReportList reports={e} toggleModal={props.toggleModal} selectCandidate={selectCandidate}/>)}
        </div>
        </main>
        </div>
    )
}

export default Admin