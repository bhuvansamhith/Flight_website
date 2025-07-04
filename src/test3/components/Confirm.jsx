import React, { useEffect, useState } from 'react';
import airasia from './airasia.png';
import indigo from './indigo.png';
import qatar from './qatar.png';
import airindia from './airindia.png';
import { useNavigate } from 'react-router-dom';
import './Confirm.css';

const Confirm = () => {
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('confirmedBooking'));
    if (data) {
      setConfirmedBooking(data);
    }
  }, [navigate]);

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

  if (!confirmedBooking) {
    return <p>Loading confirmed booking details...</p>;
  }

  const { booking, personalDetails, flightNumber } = confirmedBooking;
  const displayedFlightNumber = flightNumber || `${booking.flightDetails.airline.slice(0, 2).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="confirm-container">
      <h2 className="confirm-heading">Boarding Pass</h2>

      <div className="confirm-boarding-pass">
        <div className="confirm-pass-left">
          {getAirlineLogo(booking.flightDetails.airline) && (
            <img
              src={getAirlineLogo(booking.flightDetails.airline)}
              alt={`${booking.flightDetails.airline} Logo`}
              className="confirm-airline-logo"
            />
          )}
          <p className="confirm-airline-name">{booking.flightDetails.airline}</p>
          <p><strong>Flight:</strong> {displayedFlightNumber}</p>
          <p><strong>From:</strong> {booking.from}</p>
          <p><strong>To:</strong> {booking.to}</p>
          <p><strong>Date:</strong> {booking.departureDate}</p>
          <p><strong>Departure:</strong> {booking.flightDetails.departureTime}</p>
          <p><strong>Arrival:</strong> {booking.flightDetails.arrivalTime}</p>
          <p><strong>Duration:</strong> {booking.flightDetails.duration}</p>
          <p><strong>Class:</strong> {booking.travelClass}</p>
          <p><strong>Stops:</strong> {booking.flightDetails.stops === 0 ? "Non-stop" : `${booking.flightDetails.stops} stop(s)`}</p>

          <div className="barcode-placeholder">
            <p className="barcode-number">{displayedFlightNumber}</p>
          </div>
        </div>

        <div className="confirm-pass-right">
          <h3 className="confirm-section-title">Passenger Info</h3>
          <p><strong>Name:</strong> {personalDetails.fullName}</p>
          <p><strong>Email:</strong> {personalDetails.email}</p>
          <p><strong>Phone:</strong> {personalDetails.phone}</p>
          <p><strong>Passport No:</strong> {personalDetails.passportNumber}</p>
          <p><strong>Date of Birth:</strong> {personalDetails.dateOfBirth}</p>
          <p><strong>Gender:</strong> {personalDetails.gender}</p>
          <p><strong>Nationality:</strong> {personalDetails.nationality}</p>
          <p><strong>Seat:</strong> {`A${Math.floor(1 + Math.random() * 30)}`}</p>
          <p><strong>Gate:</strong> {`B${Math.floor(1 + Math.random() * 10)}`}</p>
          <p><strong>Boarding Time:</strong> {booking.flightDetails.departureTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
