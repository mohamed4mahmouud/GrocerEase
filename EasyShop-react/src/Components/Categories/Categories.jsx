import React, { useState } from 'react';
import style from './Categories.module.css';
import { Link, useParams } from "react-router-dom";
import ProductCategories from "../Shops/ProductCategory.json";


export default function Categories() {
  
  const [hoveredIndex, setHoveredIndex] = useState(1);
  const [hoveredIndex2, setHoveredIndex2] = useState(3);

  return (
    <div className="container col-md-12">
      <div className="row">
        <div className={`${style.storeDiv} col-md-12 mt-5 rounded-top p-5 d-flex`}>
          <div className="col-md-3 text-center">
            <img src="../../images/elEzaby.png" className="rounded-circle mt-4" width={130} alt="Avatar" />
          </div>
          <div className="col-md-8">
            <p className="h3 fw-bold mt-4">Elezby Pharmcy</p>
            <p className="h6">Moharem beik</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF8A00" className="bi bi-star-fill mb-1" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <p className="h6 d-inline-block p-1">4.8</p>
            <div className='mt-4'>
              <button className='btn btn-primary rounded-pill'>EGP 10 Service fee</button>
              <button className='btn btn-primary rounded-pill ms-4'>25 min</button>
              <button className='btn btn-primary rounded-pill ms-4'>Minimum order: 30 EGP</button>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-5 d-flex row">
          <div className="col-md-12">
            <p className="h2 fw-bold mb-5 ms-5">Categories</p>
          </div>
          <div className="text-center d-flex row justify-content-center gap-2 mb-2">
            <div
              className={`col-md-${hoveredIndex === 1 ? 4 : 2} card ${style.cardHover}  ${style.shampooContainer}`}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(1)}
            >  
                <Link className='text-decoration-none' to={`${ProductCategories["Fruits and Vegtables"]}`}> 
                <p className={`${style.shampoo} mb-0 mt-1`}>Hair Care</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>SHAMPOO</p>
                <img src="../../images/shampoo.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 2 ? 4 : 2} card ${style.cardHover} ${style.makeUpContainer}`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none' to={'makeup'}> 
                <p className={`${style.makeUp} mb-0 mt-1`}>Beauty & Cosmetics</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>MAKEUP</p>
                <img src="../../images/makeUp.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 3 ? 4 : 2} card ${style.cardHover} ${style.supplementsContainer}`}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none' to={`vitamins`}> 
                <p className={`${style.supplements} mb-0 mt-1`}>Beauty & Cosmetics</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>VITAMINS</p>
                <img src="../../images/vitamin.png" alt="" height={150} width={150} />
                </Link>
            </div>
          </div>
          <div className="text-center d-flex row justify-content-center gap-2 ">
            <div
              className={`col-md-${hoveredIndex2 === 1 ? 4 : 2} card ${style.cardHover} ${style.suppliesContainer}`}
              onMouseEnter={() => setHoveredIndex2(1)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none' to={"firstaid"}> 
                <p className={`${style.supplies} mb-0 mt-1`}>Supplies</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>FIRST AID</p>
                <img src="../../images/firstAid.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex2 === 2 ? 4 : 2} card ${style.cardHover} ${style.painContainer}`}
              onMouseEnter={() => setHoveredIndex2(2)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none' to={`painrelief`}> 
                <p className={`${style.pain} mb-0 mt-1`}>Headache & Fever</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>PAIN RELIEF</p>
                <img src="../../images/pain.png" alt="" height={150} width={150} />
                </Link>
            </div>
            
            <div
              className={`col-md-${hoveredIndex2 === 3 ? 4 : 2} card ${style.cardHover} ${style.oralContainer} `}
              onMouseEnter={() => setHoveredIndex2(3)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none ' to={`toothpaste`}> 
                <p className={`${style.oral} mb-0 mt-1`}>Oral Care</p>        
                <p className={`${style.cardHeader} h3 fw-bold `}>TOOTH PASTE</p>
                <img src="../../images/oral.png" alt="" height={150} width={150} />
                </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
