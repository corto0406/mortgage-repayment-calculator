function calculateMortgage(loanAmount, interestRate, loanTerm) {
  const principal = parseFloat(loanAmount);
  const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
  const numberOfPayments = parseInt(loanTerm) * 12;

  if (!principal || !monthlyInterestRate || !numberOfPayments) {
    return { monthlyPayment: 0, totalPayment: 0 };
  }

  const monthlyPayment =
    (principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  const totalPayment = monthlyPayment * numberOfPayments;

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
  };
}

export default calculateMortgage;
