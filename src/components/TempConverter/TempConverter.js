import React, { useState } from 'react';
import './TempConverter.css'; // Corrected import statement

function TempConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToFahrenheit = () => {
    if (celsius !== '') {
      const fahr = (parseFloat(celsius) * 9) / 5 + 32;
      setFahrenheit(fahr.toFixed(2));
    }
  };

  const convertToCelsius = () => {
    if (fahrenheit !== '') {
      const cels = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      setCelsius(cels.toFixed(2));
    }
  };

  return (
    <div className="fullscreen-container">
      <h1 className="temp-converter-heading">Temperature Converter</h1>
      <div className="converter-box">
        <div className="input-group">
          <input
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            className="input-field"
            placeholder="Enter Celsius..."
          />
          <button onClick={convertToFahrenheit} className="convert-btn">
            Convert to Fahrenheit
          </button>
        </div>
        <div className="input-group">
          <input
            type="number"
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)}
            className="input-field"
            placeholder="Enter Fahrenheit..."
          />
          <button onClick={convertToCelsius} className="convert-btn">
            Convert to Celsius
          </button>
        </div>
        <div className="result">
          <p>Celsius: {celsius ? celsius + '°C' : 'N/A'}</p>
          <p>Fahrenheit: {fahrenheit ? fahrenheit + '°F' : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}

export default TempConverter;
