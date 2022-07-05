import React from "react";
import "./ReportsList.scss";

const ReportsList = (props) => {
  return (
    <div id="reportsList">
      <div className="singleReport">
        <h1>{props.reports.candidateName}</h1>
        <h1>Date</h1>
        <h1
          onClick={() => {
            props.toggleModal();
            props.selectCandidate(props.reports);
          }}
        >
          See Status
        </h1>
      </div>
    </div>
  );
};

export default ReportsList;
