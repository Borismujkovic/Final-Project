import React from 'react';
import "./Info.scss"
import "../ReportListItem/ReportListItem"
import ReportListItem from '../ReportListItem/ReportListItem';

const Info = (props) => {
    return (
        <div id= "info">
            <div className='candidateInfo'>
                <img src="https://pbs.twimg.com/profile_images/1154468712/MILOSEVIC_400x400.jpg" alt="" />
                <div>
                <h2>Full Name: </h2>
                <h3>Date of Birth: </h3>
                <h3>Email:</h3>
                <h3>Education: </h3>
                
                </div>
            </div>
            <div className='reportWrapper'>
                <ReportListItem></ReportListItem>
                <ReportListItem></ReportListItem>
                <ReportListItem></ReportListItem>
                <ReportListItem></ReportListItem>  
            </div>
        </div>
    )
}

export default Info