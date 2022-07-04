import React from 'react';
import "./ReportListItem.scss"

const ReportListItem = (props) => {
    return (
        <div id= "reportListItem">
            <h3>Company</h3>
            <h3>Date</h3>
            <h3>Passed</h3>
            <img src="https://cdn-icons-png.flaticon.com/512/1666/1666578.png" alt="" />
        </div>
    )
}

export default ReportListItem