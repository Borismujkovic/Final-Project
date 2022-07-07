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
                <div className='candidateDetails'>
                <h2>Full Name: {props.candidateInfo.name}</h2>
                <h3>Date of Birth: {props.candidateInfo.birthday.substring(4, 15)}</h3>
                <h3>Email: {props.candidateInfo.email.toLowerCase()}</h3>
                <h3>Education: {props.candidateInfo.education}</h3>
                </div>
            </div>
             <div className='reportWrapper'>
                {props.reports.filter(e => {
                return e.candidateId === props.candidateInfo.id}).map(e => <ReportListItem singleReport={e} toggleModal={props.toggleModal} selectReport={props.selectReport}/>)}
            </div>
        </div>
    )
}

export default Info