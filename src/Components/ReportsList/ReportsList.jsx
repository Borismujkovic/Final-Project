import React from "react";
import "./ReportsList.scss";

const ReportsList = (props) => {
  return (
    <div id="reportsList">
      <div className="singleReport">
        <h1>{props.reports.candidateName}</h1>
        <h1 className="date">Date</h1>
        <button
          onClick={() => {
            props.toggleModal();
            props.selectReport(props.reports);
          }}
        >
          See Status
        </button>
      </div>
    </div>
  );
};

export default ReportsList;
