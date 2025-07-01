import React from 'react'
import mask from './mask.png';
import refund from './refund.png';
import guarantee from './guarantee.png';
import './Service.css';

const Service = () => {
  return (
    <div className='Service-contanier'>
        <div className='Service-contanier1'>
            <img src={guarantee} alt="" />
            <div>
                <h3>Guarantee of the best price</h3>
            <p>We offer the best deals,if you find the same flight cheaper elsewhere,contact us</p>
            </div>
        </div>
        <div className='Service-contanier1'>
            <img src={refund} alt="" />
            <div>
                <h3>Refunds & cancellations</h3>
            <p>your flight got cancelled? we have you covered with our instant refund services.</p>
            </div>
        </div>
        <div className='Service-contanier1'>
            <img src={mask} alt="" />
            <div>
                <h3>Covid-19 information</h3>
            <p>Read about all the travel restrictions due to covid-19 that may affect your flight</p>
            </div>
        </div>
    </div>
  )
}

export default Service