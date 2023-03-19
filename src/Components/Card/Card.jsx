import React from 'react'
import "./Card.scss";

import { Link } from 'react-router-dom';

function Card({item}) {
  return (
    <Link to={`/drug/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New</span>}
          <img src={item.img} alt="" className="mainImage" />
          <img src={item.img2} alt="" className="subImage" />
        </div>

        <div className="content">
        <h2>{item.title}</h2>
        <p>{item.disc}</p>
        <p>{item.subtitle}</p>


        <div className="price">
          <h3>{item.price} YER</h3>
        </div>


        </div>

        

        
      </div>
    </Link>
    
  )
}

export default Card