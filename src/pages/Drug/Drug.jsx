import React, {useState}from 'react'
import "./Drug.scss";

import panadol from '../../assets/panadol.png';
import panadol2 from '../../assets/panadol22.jpg';

const Drug = () => {

  const [selectedImage, setSelectedImage] = useState(panadol);


  return (
    <div className="drug">
      <div className="left">
        <div className="images">
          <img src={panadol} alt="" onClick={e=> setSelectedImage(panadol)} />
          <img src={panadol2} alt="" onClick={e=> setSelectedImage(panadol2)}/>
        </div>

        <div className="mainImage">
          <img src={selectedImage} alt="" />
        </div>
      </div>


      <div className="right"></div>
    </div>
  )
}

export default Drug