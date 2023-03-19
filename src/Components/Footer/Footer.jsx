import React from 'react';

import stripe from '../../assets/s.webp';

import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
        <div className="top">
          <div className="item">
            <h1>About</h1>
            <span>About Company</span>
            <span>Report a Problem</span>
            <span>Contact Us</span>
          </div>
          <div className="item">
             <h1>Help</h1>
             <span>Returns & Exvhange</span>
             <span>Billing</span>
             <span>Inventory Tracking</span>
             <span>Online Ordering</span>     
          </div>
          <div className="item">
             <h1>Language</h1>
             <span>English</span>
             <span>Arabic</span>
          </div>

        </div>


        <div className="bottom">
          <div className="left">
            <span className="logo">DSCM</span>
            <span className="copyright"> &copy; Copyright 2023. All Rights Reserved </span>
          </div>
          
          <div className="right">
            <img src={stripe} alt="" />
          </div>
        </div>

    </div>
  )
}

export default Footer