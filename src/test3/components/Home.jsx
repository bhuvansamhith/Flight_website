import React from 'react';
import Booking from './Booking.jsx';
import Carousel from './Carousel.jsx';
import './Home.css';
import Service from './Service.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className='Home-container1'>
            <h1>Book Your Next Flight with Ease</h1>
            <p>Seamless search, secure booking, and exceptional travel experiences.</p>
        </div>

        <div className='Home-container2'>
            <Booking/>
        </div>
        <div className='Home-container3'>
          <h1>Popular Routes</h1>
          <Carousel/>
        </div>
        <div className='Home-container4'>
          <Service></Service>
        </div>
        <Outlet/>
    </div>
  );
};

export default Home;
