import React, { useState } from "react";
import "../styles/Form.css";

const MortgageForm = ({ onCalculate }) => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (principal === "" || rate === "" || years === "") {
      alert("Please fill out all fields before calculating.");
      return;
    }

    if (onCalculate) {
      // Pass values in the expected format
      onCalculate({
        loanAmount: parseFloat(principal),
        interestRate: parseFloat(rate),
        loanTerm: parseInt(years),
      });
    }
  };

  const handleClearAll = () => {
    setPrincipal("");
    setRate("");
    setYears("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="calculator-header">
        <h2>Mortgage Calculator</h2>
        <span className="clear-all" onClick={handleClearAll}>
          Clear All
        </span>
      </div>
      <div className="form-group">
        <label>Principal:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>
      <div className="form-group">
        <label>Rate (%):</label>
        <input
          type="number"
          step="0.01"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter interest rate"
        />
      </div>
      <div className="form-group">
        <label>Years:</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="Enter loan term"
        />
      </div>
      <div className="form-group" style={{ marginTop: "50px", color: "#001F3F" }}>
  <button 
    type="submit" 
    style={{
      backgroundColor: "#001F3F", 
      color: "white", 
      border: "none", 
      padding: "10px 20px", 
      borderRadius: "5px", 
      cursor: "pointer"
    }}
  >
    Calculate
  </button>
</div>
    </form>
  );
};

export default MortgageForm;
