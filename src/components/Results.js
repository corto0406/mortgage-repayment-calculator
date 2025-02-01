import React from "react";
import "../styles/Results.css";

const Results = ({ monthlyPayment, totalPayment }) => {
  return (
    <div className="results">
      {monthlyPayment && totalPayment ? (
        <>
          <div>Monthly Payment: ${monthlyPayment}</div>
          <div>Total Payment: ${totalPayment}</div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Results;

