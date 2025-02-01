import React, { useState } from "react";

import MortgageForm from "./components/MortgageForm";
import Results from "./components/Results";
import "./styles/App.css";
import calculateMortgage from "./utils/calculateMortgage";

function App() {
  const [results, setResults] = useState({ monthlyPayment: null, totalPayment: null });
  const [formValues, setFormValues] = useState({
    loanAmount: "",
    interestRate: "",
    loanTerm: "",
  });

  const handleCalculate = ({ loanAmount, interestRate, loanTerm }) => {
    const { monthlyPayment, totalPayment } = calculateMortgage(loanAmount, interestRate, loanTerm);
    setResults({ monthlyPayment, totalPayment });
  };

 

  return (
    <div className="calculator-container">
    
      <div className="calculator-content">
        <div className="card">
          {/* Mortgage Form Component */}
          <MortgageForm onCalculate={handleCalculate} formValues={formValues} setFormValues={setFormValues} />
        </div>
        <div className="results-card">
          <h2>Results</h2>
          <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate" again.</p>
          {/* Results Component */}
          <Results
            monthlyPayment={results.monthlyPayment}
            totalPayment={results.totalPayment}
            disabled={!results.monthlyPayment}
          />
          {results.monthlyPayment && (
            <div className="explanation">
              <h3>Explanation:</h3>
              <ul>
                <li>
                  <strong>Monthly Payment:</strong> This is the amount you will pay every month for the loan term.
                </li>
                <li>
                  <strong>Total Payment:</strong> This is the total amount paid over the course of the entire loan.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
