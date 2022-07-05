import React, { useState } from 'react';
import "./Admin.scss";
import Header from "../../Components/Header/Header"
import Modal from "../../Components/Modal/Modal"
import ReportList from "../../Components/ReportsList/ReportsList"
import {Link} from "react-router-dom"

const Admin = (props) => {
    

    
    return (
        <div id="admin">
        {props.openModal && <Modal toggleModal={props.toggleModal} selectCandidate={props.selectCandidate} modalData={props.modalData}/>}
        <Header />
        <main>

        <div className='search'>
        <div>
            <Link className='admin-button'>Admin Page</Link>
            <Link to="/new-report" className='newReport-button'>New Report</Link>
        </div>
            <div className='search-image'>
                <input type="text" />
                <img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt="" />
            </div>
        </div>
        <div className='reports'>
        {props.reports.map((e) => <ReportList reports={e} toggleModal={props.toggleModal} selectCandidate={props.selectCandidate}/>)}
        </div>
        </main>
        </div>
    )
}

export default Admin