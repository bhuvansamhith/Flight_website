import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Footer from './Footer';
import video1 from './video1.mp4';
import View from './View';

const About = () => {
  return (
    <div className='About-container'>
      {/* <div className='About-contanier2'>
            <h1>About Us</h1>
            <p><Link to='./Home' >Home</Link>/<span>About</span></p>
      </div>
      <div className="flight-section">
        <div className="flight-text">
          <h3>About Us</h3>
          <h1>A Few Words About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ratione eligendi soluta laborum fuga pariatur, delectus sapiente vitae dolorum repudiandae veritatis magni iure esse ut explicabo magnam deleniti tempora ex.
            Autem possimus ab, tenetur voluptatem labore unde beatae temporibus quia similique quam. Ut officiis itaque sit voluptatibus voluptate mollitia illum nisi cumque odit quia earum nulla, dolor, explicabo esse accusamus.
          </p>
        </div>
        <div className="flight-video">
          <video src={video1} muted autoPlay loop />
        </div>
      </div> */}

      <View></View>





    </div>
  )
}

export default About