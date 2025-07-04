import React, { useEffect, useState } from 'react';
import airasia from './airasia.png';
import indigo from './indigo.png';
import qatar from './qatar.png';
import airindia from './airindia.png';
import './Book.css';
import { useNavigate } from 'react-router-dom'; 

const Book = () => {
  const [bookingData, setBookingData] = useState(null);
  const [flightNumber, setFlightNumber] = useState('');
  const navigate = useNavigate();

  const [personalDetails, setPersonalDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    passportNumber: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    emergencyContact: ''
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('selectedFlightBooking'));
    if (storedData) {
      setBookingData(storedData);

      // Generate flight number once here
      const generatedNumber = `${storedData.flightDetails.airline.slice(0,2).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setFlightNumber(generatedNumber);
    }
  }, []);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConfirmBooking = () => {
  const isAnyFieldEmpty = Object.values(personalDetails).some(
    (value) => value.trim() === ''
  );

  if (isAnyFieldEmpty) {
    alert('Please fill all personal details before confirming.');
    return;
  }

  const confirmedBooking = {
    booking: bookingData,
    personalDetails: personalDetails,
    flightNumber: flightNumber 

  };

  localStorage.setItem('confirmedBooking', JSON.stringify(confirmedBooking));
  console.log('Booking confirmed with details:', confirmedBooking);
  alert('Your ticket has been confirmed.');
  navigate('/confirm');
};


  const getAirlineLogo = (airline) => {
    switch (airline) {
      case 'AirAsia':
        return airasia;
      case 'IndiGo':
        return indigo;
      case 'Qatar Airways':
        return qatar;
      case 'Air India':
        return airindia;
      default:
        return null;
    }
  };

  return (
    <div className="book-container">
      {bookingData ? (
        <>
          <div className="ticket">
            <div className="ticket-header">
              <p className="ticket-subtitle">Ticket Summary</p>
            </div>
            <div className="ticket-logo">
              {getAirlineLogo(bookingData.flightDetails.airline) && (
                <img
                  src={getAirlineLogo(bookingData.flightDetails.airline)}
                  alt={`${bookingData.flightDetails.airline} Logo`}
                  className="airline-logo"
                />
              )}
              <p className="airline-name">{bookingData.flightDetails.airline}</p>
            </div>
            <div className="ticket-body">
              <div className="ticket-row">
                <div className="ticket-column">
                  <p><strong>From:</strong> {bookingData.from}</p>
                  <p><strong>To:</strong> {bookingData.to}</p>
                  <p><strong>Date:</strong> {bookingData.departureDate}</p>
                  <p><strong>Class:</strong> {bookingData.travelClass}</p>
                </div>
                <div className="ticket-column">
                  <p><strong>Flight:</strong> {flightNumber}</p>
                  <p><strong>Departure:</strong> {bookingData.flightDetails.departureTime}</p>
                  <p><strong>Arrival:</strong> {bookingData.flightDetails.arrivalTime}</p>
                  <p><strong>Duration:</strong> {bookingData.flightDetails.duration}</p>
                  <p><strong>Stops:</strong> {bookingData.flightDetails.stops === 0 ? "Non-stop" : `${bookingData.flightDetails.stops} stop(s)`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="personal-details-form">
            <h3>Enter Your Personal Details</h3>
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={personalDetails.fullName} onChange={handlePersonalChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={personalDetails.email} onChange={handlePersonalChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={personalDetails.phone} onChange={handlePersonalChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="passportNumber">Passport Number</label>
                <input type="text" id="passportNumber" name="passportNumber" value={personalDetails.passportNumber} onChange={handlePersonalChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" value={personalDetails.dateOfBirth} onChange={handlePersonalChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" value={personalDetails.gender} onChange={handlePersonalChange} required >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="nationality">Nationality</label>
                <input type="text" id="nationality" name="nationality" value={personalDetails.nationality} onChange={handlePersonalChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="emergencyContact">Emergency Contact</label>
                <input type="tel" id="emergencyContact" name="emergencyContact" value={personalDetails.emergencyContact} onChange={handlePersonalChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea id="address" name="address" rows="3" value={personalDetails.address} onChange={handlePersonalChange} required />
              </div>
              <button type="button" className="confirm-button" onClick={handleConfirmBooking}>Confirm to pay</button>
            </form>
          </div>
        </>
      ) : (
        <p>No booking data found.</p>
      )}
    </div>
  );
};

export default Book;
