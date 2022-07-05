import React from 'react';
import "./Info.scss"
import "../ReportListItem/ReportListItem"
import ReportListItem from '../ReportListItem/ReportListItem';

const Info = (props) => {

    const log = () => {
        console.log(props.modalData);
        console.log(props.candidates)
    }


    return (
        <div id= "info">
            <div className='candidateInfo'>
                <img onClick={props.selectCandidate} src={props.modalData.images} alt="" />
                <div>
                <h2 onClick={log}>Full Name: {props.modalData.name}</h2>
                <h3>Date of Birth: {props.modalData.birthday}</h3>
                <h3>Email: {props.modalData.email}</h3>
                <h3>Education: {props.modalData.education}</h3>
                </div>
            </div>
            <div className='reportWrapper'>
                <ReportListItem toggleModal={props.toggleModal}></ReportListItem>
            </div>
        </div>
    )
}

export default Info