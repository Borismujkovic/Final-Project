import React from 'react';
import "./ReportListItem.scss"

const ReportListItem = (props) => {
    return (
        <div id= "reportListItem">
            <h3>{props.singleReport.companyName}</h3>
            <h3>{props.singleReport.interviewDate}</h3>
            <h3>{props.singleReport.status}</h3>
            <img className='img-modal' onClick={() => {
                props.toggleModal();
                props.selectReport(props.singleReport)
            }} src="https://cp.cuyahogacounty.us/media/1832/form.png?crop=0,0.026831272691590618,0.080070650574035979,0.053239377882445364&cropmode=percentage&width=300&height=300&rnd=131837411850000000" alt="" />
        </div>
    )
}

export default ReportListItem

