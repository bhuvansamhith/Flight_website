import React from 'react';
import { Link } from 'react-router-dom';
import './Trips.css';
import Paris from "./Paris.jpg";
import Barcelona from "./Barcelona.jpg";
import Dubai from "./Dubai.jpg";
import London from "./London.jpg";
import Newyork from "./Newyork.jpg";
import Rome from "./Rome.jpg";
import Tokyo from "./Tokyo.jpg";
import Sydney from "./sydney.jpg";
import airplane from "./airplane.png";

// import Footer from './Footer';

const Trips = () => {
  return (
    <div className="trips-container">
      <div className="Flight-contanier">
        <h1>Flights</h1>
        <p>
          <Link to="/">Home</Link> / <span>Flight</span>
        </p>
      </div>
      <div className='Flight-boxes'>
        <div className="slide">
            <img src={Paris} alt="Paris" className="slide-image" />
            <div className="slide-content">
              <div className="slide-header">
                <div className="slide-header1">
                  <div className="airplane-icon">
                  <img src={airplane} alt="Airplane Icon" />
                </div>
                <div className="route-info">
                  <p>Mumbai to Paris</p>
                  <p>One Way</p>
                </div>
                </div>
                <div className="price-info">
                  <p>from</p>
                  <h2>$1200</h2>
                </div>
              </div>
              <div className="slide-actions">
                <button aria-label="View flight to Paris">View</button>
                <button aria-label="Book flight to Paris">Book</button>
              </div>
            </div>
        </div>
        <div className="slide">
        <img src={Tokyo} alt="Tokyo" className="slide-image" />
        <div className="slide-content">
          <div className="slide-header">
            <div className="slide-header1">
              <div className="airplane-icon">
              <img src={airplane} alt="Airplane Icon" />
            </div>
            <div className="route-info">
              <p>Mumbai to Tokyo</p>
              <p>One Way</p>
            </div>
            </div>
            <div className="price-info">
              <p>from</p>
              <h2>$1200</h2>
            </div>
          </div>
          <div className="slide-actions">
            <button aria-label="View flight to Tokyo">View</button>
            <button aria-label="Book flight to Tokyo">Book</button>
          </div>
        </div>
      </div>

      <div className="slide">
        <img src={Newyork} alt="New York" className="slide-image" />
        <div className="slide-content">
          <div className="slide-header">
            <div className="slide-header1">
              <div className="airplane-icon">
              <img src={airplane} alt="Airplane Icon" />
            </div>
            <div className="route-info">
              <p>Mumbai to New York</p>
              <p>One Way</p>
            </div>
            </div>
            <div className="price-info">
              <p>from</p>
              <h2>$1200</h2>
            </div>
          </div>
          <div className="slide-actions">
          <button aria-label="View flight to New York">View</button>
            <button aria-label="Book flight to New York">Book</button>
          </div>
        </div>
      </div>

      <div className="slide">
        <img src={Sydney} alt="Sydney" className="slide-image" />
        <div className="slide-content">
          <div className="slide-header">
            <div className="slide-header1">
              <div className="airplane-icon">
              <img src={airplane} alt="Airplane Icon" />
            </div>
            <div className="route-info">
              <p>Mumbai to Sydney</p>
              <p>One Way</p>
            </div>
            </div>
            <div className="price-info">
              <p>from</p>
              <h2>$1200</h2>
            </div>
          </div>
          <div className="slide-actions">
            <button aria-label="View flight to Sydney">View</button>
            <button aria-label="Book flight to Sydney">Book</button>
          </div>
        </div>
      </div>

      <div className="slide">
        <img src={Rome} alt="Rome" className="slide-image" />
        <div className="slide-content">
          <div className="slide-header">
            <div className="slide-header1">
              <div className="airplane-icon">
              <img src={airplane} alt="Airplane Icon" />
            </div>
            <div className="route-info">
              <p>Mumbai to Rome</p>
              <p>One Way</p>
            </div>
            </div>
            <div className="price-info">
              <p>from</p>
              <h2>$1200</h2>
            </div>
          </div>
          <div className="slide-actions">
            <button aria-label="View flight to Rome">View</button>
            <button aria-label="Book flight to Rome">Book</button>
          </div>
        </div>
      </div>

      <div className="slide">
        <img src={Dubai} alt="Dubai" className="slide-image" />
        <div className="slide-content">
          <div className="slide-header">
            <div className="slide-header1">
              <div className="airplane-icon">
              <img src={airplane} alt="Airplane Icon" />
            </div>
            <div className="route-info">
              <p>Mumbai to Dubai</p>
              <p>One Way</p>
            </div>
            </div>
            <div className="price-info">
              <p>from</p>
              <h2>$1200</h2>
            </div>
          </div>
          <div className="slide-actions">
            <button aria-label="View flight to Dubai">View</button>
            <button aria-label="Book flight to Dubai">Book</button>
          </div>
        </div>
      </div>

      <div className="slide">
        <img src={London} alt="London" className="slide-image" />
        <div className="slide-content">
          <div className="slide-header">
            <div className="slide-header1">
              <div className="airplane-icon">
              <img src={airplane} alt="Airplane Icon" />
            </div>
            <div className="route-info">
              <p>Mumbai to London</p>
              <p>One Way</p>
            </div>
            </div>
            <div className="price-info">
              <p>from</p>
              <h2>$1200</h2>
            </div>
          </div>
          <div className="slide-actions">
            <button aria-label="View flight to London">View</button>
            <button aria-label="Book flight to London">Book</button>
          </div>
        </div>
      </div>

      <div className="slide">
          <img src={Barcelona} alt="Barcelona" className="slide-image" />
          <div className="slide-content">
            <div className="slide-header">
              <div className="slide-header1">
                <div className="airplane-icon">
                  <img src={airplane} alt="Airplane Icon" />
                </div>
                <div className="route-info">
                  <p>Mumbai to Barcelona</p>
                  <p>One Way</p>
                </div>
              </div>
              <div className="price-info">
                <p>from</p>
                <h2>$1200</h2>
              </div>
            </div>
            <div className="slide-actions">
              <button aria-label="View flight to Barcelona">View</button>
              <button aria-label="Book flight to Barcelona">Book</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Trips;
