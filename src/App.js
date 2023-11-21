import React, { useState, useEffect } from 'react';

function App() {
  const [accessibilityValue, setAccessibilityValue] = useState(0);
  const [participantsValue, setParticipantsValue] = useState('');
  const [priceValue, setPriceValue] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [randomActivity, setRandomActivity] = useState(null);

  useEffect(() => {
    fetchRandomActivity();
  }, []);

  const handleAccessibilityChange = (event) => {
    setAccessibilityValue(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceValue(event.target.value);
  };

  const handleParticipantsChange = (event) => {
    setParticipantsValue(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    const apiUrl = `https://www.boredapi.com/api/activity?q=${searchInput}&accessibility=${accessibilityValue}&participants=${participantsValue}&price=${priceValue}&type=${document.getElementById('type').value}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setRandomActivity(data);
      })
      .catch(error => {
        console.error('Greška prilikom dohvatanja podataka:', error);
      });
  };

  const fetchRandomActivity = () => {
    fetch('https://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(data => {
        setRandomActivity(data);
      })
      .catch(error => {
        console.error('Greška prilikom dohvatanja random aktivnosti:', error);
      });
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Bored API</h1>
        <div className="filters">
          <label htmlFor="accessibility">Accessibility:</label>
          <input
            type="range"
            id="accessibility"
            min="0"
            max="1"
            step="0.05"
            value={accessibilityValue}
            onChange={handleAccessibilityChange}
          />
          <div className="slider-value">
            <p>{accessibilityValue}</p>
          </div>
          <label htmlFor="type">Type:</label>
          <select id="type">
            <option value="">All</option>
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
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
            <p>{priceValue}</p>
          </div>
        </div>

        <div className="search">
          <button className='button' onClick={handleSearch}>Get Unbored</button>
        </div>
      </header>

      <div className="container">
        {randomActivity && (
          <>
            <h2>Activity:</h2>
            <p><b>{randomActivity.activity}</b></p>
            <p>Accessibility: {randomActivity.accessibility}</p>
            <p>Type: {randomActivity.type}</p>
            <p>Participants: {randomActivity.participants}</p>
            <p>Price: {randomActivity.price}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
