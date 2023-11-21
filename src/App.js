import React from "react";
import { useState } from 'react';

function App() {
  const [accessibilityValue, setAccessibilityValue] = useState(0);
  const [participantsValue, setParticipantsValue] = useState('');
  const [priceValue, setPriceValue] = useState(0)

  const handleAccessibilityChange = (event) => {
    setAccessibilityValue(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceValue(event.target.value);
  };

  const handleParticipantsChange = (event) => {
    setParticipantsValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Get Unbored</h1>
        <div className="search">
          <input placeholder="accessibility, type, participants, price"></input>
        </div>
        <div className="filters">
          <label htmlFor="accessibility">Accessibility:</label>
          <input
            type="range"
            id="accessibility"
            min="0"
            max="1"
            step="0.1"
            value={accessibilityValue}
            onChange={handleAccessibilityChange}
          />
          <div className="slider-value">
            <p>Value: {accessibilityValue}</p>
          </div>
          <label for="type">Type:</label>
          <select id="type">
            <option value="">All</option>
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">SOcial</option>
            <option value="diy">DIY</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
          </select>

          <label htmlFor="participants">Participants:</label>
          <input
            type="number"
            id="participants"
            min="1"
            value={participantsValue}
            onChange={handleParticipantsChange}
          />

          <label htmlFor="price">Price:</label>
          <input
            type="range"
            id="price"
            min="0"
            max="1"
            step="0.05"
            value={priceValue}
            onChange={handlePriceChange}
          />
          <div className="slider-value">
            <p>Value: {priceValue}</p>
          </div>
        </div>
      </header>

      <div className="container">

      </div>
    </div>
  );
}

export default App;
