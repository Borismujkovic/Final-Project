import React from 'react';
import "./Info.scss"
import "../ReportListItem/ReportListItem"
import ReportListItem from '../ReportListItem/ReportListItem';

const Info = (props) => {
    return (
        <div id= "info">
            <div className='candidateInfo'>
                <img onClick={props.selectCandidate} src="https://pbs.twimg.com/profile_images/1154468712/MILOSEVIC_400x400.jpg" alt="" />
                <div>
                <h2>Full Name: {props.modalData.name}</h2>
                <h3>Date of Birth: {props.modalData.birthday}</h3>
                <h3>Email: {props.modalData.email}</h3>
                <h3>Education: {props.modalData.education}</h3>
                </div>
            </div>
            <div className='reportWrapper'>
                <ReportListItem></ReportListItem>
            </div>
        </div>
    )
}

export default Info