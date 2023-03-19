import React from 'react'

import "./Categories.scss";

import pills from '../../assets/pills.jpeg';
import syrb from '../../assets/ssyrub.jpg';
import vitamen from '../../assets/vita.jpeg';
import vaseline from '../../assets/vaseline.jpeg';
import needle from '../../assets/neadle.jpeg';
import Serum from '../../assets/gotar.jpeg';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="categories">
        
        <div className="col">
            <div className="row">
                <img src={pills} alt="" />
                <button>
                    <Link className='link' to="/drugs/1">
                        Pills
                    </Link>
                </button>
            </div>
            <div className="row">
            <img src={syrb} alt="" />
                <button>
                    <Link className='link' to="/drugs/1">
                    Syrup Medicine
                    </Link>
                </button>
            </div>
        </div>

        <div className="coll">
            <div className="row">
            <img src={vitamen} alt="" />
                <button>
                    <Link className='link' to="/drugs/1">
                    Vitamins
                    </Link>
                </button>
            </div>
        </div>

        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src={Serum} alt="" />
                <button>
                    <Link className='link' to="/drugs/1">
                    Serum
                    </Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src={vaseline} alt="" />
                <button>
                    <Link className='link' to="/drugs/1">
                     Skin Care
                    </Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src={needle} alt="" />
                <button>
                    <Link className='link' to="/drugs/1">
                    Medication Needle
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories