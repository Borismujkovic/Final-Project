import React from 'react';
import "./Admin.scss";
import Header from "../../Components/Header/Header"
import Modal from "../../Components/Modal/Modal"
import ReportList from "../../Components/ReportsList/ReportsList"

const Admin = (props) => {
    return (
        <div id="admin">
        <Header />
        <Modal />
        <ReportList />
            Admin
        </div>
    )
}

export default Admin