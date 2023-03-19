import React from 'react';
import "./List.scss";
import Card from '../Card/Card.jsx';

import panadol from '../../assets/panadol.png';
import panadol2 from '../../assets/panadol22.jpg';
import solpadien from '../../assets/solpadin.jpg';
import solpadien2 from '../../assets/solpadin2.jpg';
import voltaren from '../../assets/voltaren.jpg';
import voltaren2 from '../../assets/voltaren2.jpg';




const List= ()=> {

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
        },
        {
            id:4,
            img: panadol,
            img2: panadol2,
            isNew: true,
            title:'Panadol Advance',
            disc: 'Panadol Advance Tablets with Optizorb Formulation',
            subtitle:'500mg Paracetamol',
            price:1500,
        },
        {
            id:5,
            img: solpadien,
            img2: solpadien2,
            isNew: true,
            title:'Panadol Advance',
            disc: 'Panadol Advance Tablets with Optizorb Formulation',
            subtitle:'500mg Paracetamol',
            price:1500,
        },
        {
            id:6,
            img: voltaren,
            img2: voltaren2,
            isNew: false,
            title:'Panadol Advance',
            disc: 'Panadol Advance Tablets with Optizorb Formulation',
            subtitle:'500mg Paracetamol',
            price:1500,
        }
    ];

    
  return (
    <div className="list">
        {data.map(item =>(
            <Card 
                key={item.id}
                item={item}
            />
        ))}
    </div>
  )
}


export default List