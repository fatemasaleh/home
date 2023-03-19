import React from 'react'
import "./FeaturedProducts.scss"

import Card from '../../Components/Card/Card'

import panadol from '../../assets/panadol.png';
import panadol2 from '../../assets/panadol22.jpg';
import solpadien from '../../assets/solpadin.jpg';
import solpadien2 from '../../assets/solpadin2.jpg';
import voltaren from '../../assets/voltaren.jpg';
import voltaren2 from '../../assets/voltaren2.jpg';

const data=[
    {
        id:1,
        img: panadol,
        img2: panadol2,
        isNew: true,
        title:'Panadol Advance',
        disc: 'Panadol Advance Tablets with Optizorb Formulation',
        subtitle:'500mg Paracetamol',
        price:1500,
    },
    {
        id:2,
        img: solpadien,
        img2: solpadien2,
        isNew: true,
        title:'Panadol Advance',
        disc: 'Panadol Advance Tablets with Optizorb Formulation',
        subtitle:'500mg Paracetamol',
        price:1500,
    },
    {
        id:3,
        img: voltaren,
        img2: voltaren2,
        isNew: false,
        title:'Panadol Advance',
        disc: 'Panadol Advance Tablets with Optizorb Formulation',
        subtitle:'500mg Paracetamol',
        price:1500,
    }
]

function FeaturedProducts() {
  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>Diffrent Kind of Drugs </h1>
            <p>
                Choose multy drugs from diffrent opptions. 
            </p>
        </div>
        <div className="bottom">

        {data.map(item => (
            <Card
                key={item.id}
                item={item}
            />
        ))}
        </div>

        
    </div>
  )
}

export default FeaturedProducts