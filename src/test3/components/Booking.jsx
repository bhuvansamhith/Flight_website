import React, { useState } from 'react';
import './Booking.css'; 

const Flight = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    travelClass: 'Economy'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Flight Booking Details:', formData);
  };

  return (
    <div className="flight-container">
      {/* <h2>Welcome to the Flight Booking Home Page</h2> */}
      <form onSubmit={handleSubmit} className="flight-form">
        <div className="form-title">
          <h2>Book Your Flight</h2>
        </div>        

        <div className="form-inputs">
          <input type="text" name="from" placeholder="From" id='input-1' value={formData.from} onChange={handleChange} required/>

          <input type="text" name="to" placeholder="To" id='input-1' value={formData.to} onChange={handleChange} required/>

          <input type="date" name="departureDate" id='input-1' value={formData.departureDate} onChange={handleChange} required/>

          <input type="date" name="returnDate" id='input-1' value={formData.returnDate} onChange={handleChange}/>

          <input type="number" name="passengers" id='input-2' value={formData.passengers} onChange={handleChange} min="1" max="10"/>

          <select name="travelClass" id='input-3' value={formData.travelClass} onChange={handleChange}>

            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>

          </select>
        </div>

        <div className="form-button">
          <button type="submit">Search Flight</button>
        </div>
      </form>
    </div>
  );
};

export default Flight;