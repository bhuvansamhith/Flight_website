import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are committed to providing excellent customer service and prompt support for all your needs.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about">Services</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>Email: samhith18@gmail.com</p>
          <p>Phone: +91 98495 09816</p>
          <p>Location: Hyderabad, Telangana</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
