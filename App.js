import React from "react";

function Calculator() {
  const runCalculator = () => {
    let num1 = parseFloat(prompt("Enter First Number:"));
    let operator = prompt("Enter Operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter Second Number:"));
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
        break;
      default:
        result = "Invalid operator!";
    }

    alert(`Result: ${result}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple JavaScript Calculator</h2>
      <button onClick={runCalculator}>Run Calculator</button>
    </div>
  );
}

export default Calculator;
