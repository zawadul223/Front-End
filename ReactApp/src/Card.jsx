import React from 'react';
import './Card.css'; // Import the CSS file for the card styles

const Card = ({name, age, address, institute}) => {
    const cName = name ? name : "N/A";
    const cAge = age ? age : "N/A";
    const cAddress = address ? address : "N/A";
    const cInstitute = institute ? institute : "N/A";
  return (
    <div className="card">
      <h2 className="card-title">{cName}</h2>
      <p className="card-content">Age: {cAge}</p>
      <p className="card-content">Address: {cAddress}</p>
      <p className="card-content">Institute: {cInstitute}</p>
    </div>
  );
};

export default Card;
