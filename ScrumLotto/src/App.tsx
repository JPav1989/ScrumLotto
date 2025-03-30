import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);
  const [selectedName, setSelectedName] = useState('');

  const handleAddName = () => {
    if (name.trim()) {
      setNamesList([...namesList, name]);
      setName('');
    }
  };

  const handlePickRandom = () => {
    if (namesList.length === 0) return;

    const randomIndex = Math.floor(Math.random() * namesList.length);
    const pickedName = namesList[randomIndex];

    setSelectedName(pickedName);
    setNamesList(namesList.filter((_, index) => index !== randomIndex)); // Remove selected name
  };

  return (
    <div className="vh-100 vw-100 d-flex flex-column bg-light">
      {/* Full-Width Header */}
      <div className="header">
      </div>

      {/* Main Content (Centered) */}
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        {/* Input & Button */}
        <div className="col-md-6 col-lg-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a name"
            />
            <button className="btn btn-primary" onClick={handleAddName}>Add</button>
          </div>
        </div>

        {/* Names List */}
        <div className="mt-4 text-center w-100">
          <h3>Names List</h3>
          <div className="d-flex justify-content-center">
            <ul className="list-group shadow-lg w-50">
              {namesList.map((name, index) => (
                <li key={index} className="list-group-item text-center">{name}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pick Button */}
        <div className="mt-4">
          <button className="btn btn-success btn-lg" onClick={handlePickRandom} disabled={namesList.length === 0}>
            🎲 Pick Random Name
          </button>
        </div>

        {/* Selected Name Display */}
        {selectedName && (
          <div className="mt-4">
            <h2 className="text-success fw-bold">🎉 Selected: {selectedName} 🎉</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;