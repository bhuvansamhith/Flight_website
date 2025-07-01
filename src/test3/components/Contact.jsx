import React, { useState } from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import gps from './gps.png';
import phone from './phone.png';
import email from './email.png';
import Footer from './Footer.jsx';



const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject:'',
    phone:'',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '',subject:'',phone:'', message: '' });
  };

  return (
    <div className="contact-container">
        <div className='Contact-contanier2'>
            <h1>Contact Us</h1>
            <p><Link to='./Home' >Home</Link>/<span>Contact</span></p>
        </div>
        <div className='Contact-container6'> 
            <div className='Contact-container61'>
                <img src={gps} alt="" />
                <div>
                  <p>Madhapur,Hyderabad</p>
                  <p>Telangana</p>
                </div>
            </div>
            <div className='Contact-container62'>
                <img src={phone} alt="" />
                <div>
                  <p>+919849509816</p>
                  <p>Mon-Sat 9:00am-5:00pm</p>
                </div>
            </div>
            <div className='Contact-container63'>
                <img src={email} alt="" />
                <div>
                  <p>samhith18@gmail.com</p>
                  <p>24 X 7 online support</p>
                </div>
            </div>
        </div>
        <div className='Contact-contanier3'>
            <div className='Contact-container4'>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Get in Touch</h2>

                {submitted && <p className="success-message">Thank you! We will get back to you soon.</p>}

                <div className="row">
                  <input type="text" name="name" id="name" placeholder='Name' value={form.name} onChange={handleChange} required/>
                  <input type="email" name="email" id="email" placeholder='Email' value={form.email} onChange={handleChange} required/>
                </div>
                <div className="row">
                  <input type="subject" name="subject" id="subject" placeholder='subject' value={form.subject} onChange={handleChange} required/>
                  <input type='tel' name="phone" id="phone" placeholder='phone.no' value={form.phone} onChange={handleChange} required/>
                </div>
                <textarea name="message" id="message" rows="4" placeholder='Message' value={form.message} onChange={handleChange} required/>
                <button type="submit">Send Message</button>
              </form>
              <div className="Contact-container5">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203530906!2d78.24323239564612!3d17.412281015627997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1751279407652!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>   
        </div>
    </div>
  );
};

export default ContactUs;
