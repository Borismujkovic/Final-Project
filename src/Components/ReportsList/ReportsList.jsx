import React from "react";
import "./ReportsList.scss";

const ReportsList = (props) => {

  const deleteReport = () => {
    fetch(`http://localhost:3333/api/reports/${props.reports.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${props.token}`
        }
    })
    .then(res=>res.json())
    .then(res => props.fetchReports())
}


  return (
    <div id="reportsList">
      <div className="singleReport">
        <h3>{props.reports.candidateName}</h3>
        <h3 className="date">{props.reports.interviewDate.substring(4, 15)}</h3>
        <button
          onClick={() => {
            props.toggleModal();
            props.selectReport(props.reports);
          }}>
          See Status
        </button>
        <button className="deleteBtn" onClick={deleteReport}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReportsList;
