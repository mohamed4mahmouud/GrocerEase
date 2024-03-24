import { Link } from "react-router-dom";
import React, { useState } from 'react';
import style from '../Categories.module.css';
import ProductCategory from '../../Shops/ProductCategory.json';
export default function GreenGroceries() {
    const [hoveredIndex, setHoveredIndex] = useState(1);
    const [hoveredIndex2, setHoveredIndex2] = useState(3);
  return (
    <>
    <div className="text-center d-flex row justify-content-center gap-2 mb-2">
            <div
              className={`col-md-${hoveredIndex === 1 ? 4 : 2} card ${style.cardHover}  ${style.shampooContainer}`}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(1)}
            >  
                <Link className='text-decoration-none' to={`${ProductCategory['fruits']}`}> 
                <p className={`${style.shampoo} mb-0 mt-1`}>Fruits</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>APPLES</p>
                <img src="../../../images/apple.png" alt="" height={150} width={180} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 2 ? 4 : 2} card ${style.cardHover} ${style.makeUpContainer}`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none' to={`${ProductCategory['vegetables']}`}> 
                <p className={`${style.makeUp} mb-0 mt-1`}>Vegtables</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>TOMATOES</p>
                <img src="../../../images/tomato.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 3 ? 4 : 2} card ${style.cardHover} ${style.supplementsContainer}`}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none' to={`${ProductCategory['leafy_products']}`}> 
                <p className={`${style.supplements} mb-0 mt-1`}>LEAFY PRODUCTS</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>SPANICH</p>
                <img src="../../../images/spanich.png" alt="" height={150} width={150} />
                </Link>
            </div>
          </div>
          </>
  )
}
