import React, { useState } from "react";
import './Calculator.css'; // Ensure the path is correct

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("");
      }
    } else if (value === "AC") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttonLabels = [
    ["AC", "DEL", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="]
  ];

  return (
    <div className="calculator-container">
      <h1 className="text-4xl text-white mb-6">JS-Calculator</h1>
      <div className="calculator">
        <input
          type="text"
          value={input}
          placeholder="0"
          className="w-80 h-16 text-2xl text-white text-center bg-transparent border-b-2 border-gray-600 placeholder-gray-500 focus:outline-none"
        />
        <div className="grid grid-cols-4 gap-4 mt-4">
          {buttonLabels.flat().map((label) => (
            <button
              key={label}
              className={`h-16 rounded-full shadow-md hover:bg-gray-700 ${
                label === "=" ? "bg-orange-500 text-white" : "bg-transparent text-white"
              }`}
              onClick={() => handleClick(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
