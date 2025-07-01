import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Account.css';

const Account = () => {
  const [bookings, setBookings] = useState([]);
  const [username, setUsername] = useState('');
  const [totalPassengers, setTotalPassengers] = useState(0);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    setUsername(loggedInUser);

    const allBookings = JSON.parse(localStorage.getItem('allBookings')) || {};
    const userBookings = allBookings[loggedInUser] || [];

    setBookings(userBookings);
    calculateStats(userBookings);
  }, []);

  const calculateStats = (bookingsArray) => {
    const total = bookingsArray.reduce((sum, booking) => sum + parseInt(booking.passengers || 0), 0);
    setTotalPassengers(total);
  };

  const handleDelete = (indexToDelete) => {
    const confirmDelete = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmDelete) return;

    const updatedBookings = bookings.filter((_, index) => index !== indexToDelete);
    setBookings(updatedBookings);
    calculateStats(updatedBookings);

    const allBookings = JSON.parse(localStorage.getItem('allBookings')) || {};
    allBookings[username] = updatedBookings;
    localStorage.setItem('allBookings', JSON.stringify(allBookings));
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Flight Bookings", 14, 15);
    const tableData = bookings.map(b => [
      b.from,
      b.to,
      b.departureDate,
      b.returnDate || "N/A",
      b.passengers,
      b.travelClass,
    ]);
    doc.autoTable({
      head: [["From", "To", "Departure", "Return", "Passengers", "Class"]],
      body: tableData,
      startY: 20,
    });
    doc.save("my_bookings.pdf");
  };


  return (
    <div className="account-container">
      <h2>Welcome, {username}</h2>
      <h3>Your Bookings</h3>

      <div className="stats-section">
        <p><strong>Total Bookings:</strong> {bookings.length}</p>
        <p><strong>Total Passengers:</strong> {totalPassengers}</p>
      </div>

      <div className="export-buttons">
        <button onClick={handleExportPDF}>Export as PDF</button>
        {/* <button onClick={handleExportCSV}>Export as CSV</button> */}
      </div>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking, index) => (
            <div className="booking-card" key={index}>
              <p><strong>From:</strong> {booking.from}</p>
              <p><strong>To:</strong> {booking.to}</p>
              <p><strong>Departure Date:</strong> {booking.departureDate}</p>
              <p><strong>Return Date:</strong> {booking.returnDate || 'N/A'}</p>
              <p><strong>Passengers:</strong> {booking.passengers}</p>
              <p><strong>Class:</strong> {booking.travelClass}</p>
              <button className="cancel-button" onClick={() => handleDelete(index)}>Cancel</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Account;
