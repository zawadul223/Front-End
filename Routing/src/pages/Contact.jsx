import React from 'react';
import './Design.css';
import { useParams } from 'react-router-dom';

function ContactPage() {

    const { value } = useParams();
  return (
    <div className="contact-page-container">
      <h1>Contact Page</h1>
      <div className="value-container">
        <p>{value}</p>
      </div>
      
    </div>
  );
}

export default ContactPage;
