import React, { useState, useEffect } from 'react';
import './App.css';
import './Card.css';
import './Modal.css';
import axios from 'axios';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setData(data));
  }

  function fetchCountryDetails(country) {
    axios
      .get(`https://restcountries.com/v3.1/name/${country.name.common}`)
      .then(response => {
        const details = response.data[0];
        setSelectedCountry(details);
        setShowModal(true);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <h1>List of Countries</h1>
      <div className="card-container">
        {data.map(country => {
          return (
            <div className="card" key={country.name.common}>
              <div className="card-img">
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
              </div>
              <div className="card-title">{country.name.common}</div>
              <button onClick={() => fetchCountryDetails(country)}>View Details</button>
            </div>
          );
        })}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedCountry?.name?.common}</h2>
            <p>Population: {selectedCountry?.population?.toLocaleString()}</p>
            <p>Area: {selectedCountry?.area} km²</p>
            <p>
              Language:{' '}
              {selectedCountry?.languages &&
                selectedCountry.languages[Object.keys(selectedCountry.languages)[0]]}
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
