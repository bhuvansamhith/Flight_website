import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './View.css';
import airplane from "./airplane.png";
import indigo from './indigo.png';
import airasia from './airasia.png';
import airindia from './airindia.png';
import qatar from './qatar.png';

const View = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    passengers: 1,
    travelClass: 'Economy'
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('flightBooking'));
    if (savedData) {
      setFormData(savedData);
      setSubmittedData(savedData);
    }
  }, []);

//   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Flight Booking Details:', formData);
    localStorage.setItem('flightBooking', JSON.stringify(formData));
    setSubmittedData(formData);
    // navigate("./View");
  };

  return (
    <div className='View-container'>
        <div className='View-container0'>
            <form onSubmit={handleSubmit} className="flight-form">
                <div id="form-title">
                    <h4>Search Your Flight</h4>
                </div>

                <div className="form-inputs">
                    <input type="text" name="from" placeholder="From" id="input-from" value={formData.from} onChange={handleChange} required/>

                    <input type="text" name="to" placeholder="To" id="input-to" value={formData.to} onChange={handleChange} required/>

                    <input type="date" name="departureDate" id="input-departure-date" value={formData.departureDate} onChange={handleChange} required/>

                    <input type="number" name="passengers" id="input-passengers" value={formData.passengers} onChange={handleChange} min="1" max="10"/>

                    <select name="travelClass" id="input-travel-class" value={formData.travelClass} onChange={handleChange}>
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

        <div className='View-container1'>
            <div className="View-Container2">
                <div>
                    <img src={airasia} alt="AirAsia Logo" id="air1" />
                    <p>{submittedData ? submittedData.departureDate : ''}-Departure</p>
                </div>
                <div className='Time-Container1'>
                    <div>
                        <h2>10:20</h2>
                        <p>{submittedData ? submittedData.from : ''}</p>
                    </div>
                    <div>
                        <img src={airplane} alt="Airplane Icon" id="airasia-airplane" />
                        <p>2h 20m</p>
                        <p>0 stops</p>
                    </div>
                    <div>
                        <h2>12:40</h2>
                        <p>{submittedData ? submittedData.to : ''}</p>
                    </div>
                </div>
                <div>
                    <h2>5400/-</h2>
                    <button>Select this Flight</button>
                </div>
            </div>

            <div className="View-Container2">
                <div>
                    <img src={indigo} alt="IndiGo Logo" id="air1" />
                    <p>{submittedData ? submittedData.departureDate : ''}-Departure</p>
                </div>
                <div className='Time-Container1'>
                    <div>
                        <h2>11:45</h2>
                        <p>{submittedData ? submittedData.from : ''}</p>
                    </div>
                    <div>
                        <img src={airplane} alt="Airplane Icon" id="indigo-airplane" />
                        <p>5h 30m</p>
                        <p>1 stop</p>
                    </div>
                    <div>
                        <h2>17:15</h2>
                        <p>{submittedData ? submittedData.to : ''}</p>
                    </div>
                </div>
                <div>
                    <h2>5100/-</h2>
                    <button>Select this Flight</button>
                </div>
            </div>

            <div className="View-Container2">
                <div>
                    <img src={qatar} alt="Qatar Airways Logo" id="air1" />
                    <p>{submittedData ? submittedData.departureDate : ''}-Departure</p>
                </div>
                <div className='Time-Container1'>
                    <div>
                        <h2>13:20</h2>
                        <p>{submittedData ? submittedData.from : ''}</p>
                    </div>
                    <div>
                        <img src={airplane} alt="Airplane Icon" id="qatar-airplane" />
                        <p>2h 30m</p>
                        <p>0 stops</p>
                    </div>
                    <div>
                        <h2>15:50</h2>
                        <p>{submittedData ? submittedData.to : ''}</p>
                    </div>
                </div>
                <div>
                    <h2>9500/-</h2>
                    <button>Select this Flight</button>
                </div>
            </div>

            <div className="View-Container2">
                <div>
                    <img src={airindia} alt="Air India Logo" id="air1" />
                    <p>{submittedData ? submittedData.departureDate : ''}-Departure</p>
                </div>
                <div className='Time-Container1'>
                    <div>
                        <h2>20:00</h2>
                        <p>{submittedData ? submittedData.from : ''}</p>
                    </div>
                    <div>
                        <img src={airplane} alt="Airplane Icon" id="airindia-airplane" />
                        <p>3h 10m</p>
                        <p>0 stops</p>
                    </div>
                    <div>
                        <h2>23:10</h2>
                        <p>{submittedData ? submittedData.to : ''}</p>
                    </div>
                </div>
                <div>
                    <h2>5200/-</h2>
                    <button>Select this Flight</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default View;
