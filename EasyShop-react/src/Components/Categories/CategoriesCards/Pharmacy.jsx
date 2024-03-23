import { Link } from "react-router-dom";
import React, { useState } from 'react';
import style from '../Categories.module.css';
import ProductCategory from '../../Shops/ProductCategory.json';
export default function Pharmacy() {
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
                <Link className='text-decoration-none' to={ProductCategory['hair_care']}> 
                <p className={`${style.shampoo} mb-0 mt-1`}>Hair Care</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>SHAMPOO</p>
                <img src="../../../images/shampoo.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 2 ? 4 : 2} card ${style.cardHover} ${style.makeUpContainer}`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none' to={ProductCategory['beauty_and_cosmetics']}> 
                <p className={`${style.makeUp} mb-0 mt-1`}>Beauty & Cosmetics</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>MAKEUP</p>
                <img src="../../../images/makeUp.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 3 ? 4 : 2} card ${style.cardHover} ${style.supplementsContainer}`}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none' to={ProductCategory['supplements']}> 
                <p className={`${style.supplements} mb-0 mt-1`}>Supplements</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>VITAMINS</p>
                <img src="../../../images/vitamin.png" alt="" height={150} width={150} />
                </Link>
            </div>
          </div>
          <div className="text-center d-flex row justify-content-center gap-2 ">
            <div
              className={`col-md-${hoveredIndex2 === 1 ? 4 : 2} card ${style.cardHover} ${style.suppliesContainer}`}
              onMouseEnter={() => setHoveredIndex2(1)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none' to={ProductCategory['supplies']}> 
                <p className={`${style.supplies} mb-0 mt-1`}>Supplies</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>FIRST AID</p>
                <img src="../../../images/firstAid.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex2 === 2 ? 4 : 2} card ${style.cardHover} ${style.painContainer}`}
              onMouseEnter={() => setHoveredIndex2(2)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none' to={ProductCategory['headache_and_fever']}> 
                <p className={`${style.pain} mb-0 mt-1`}>Headache & Fever</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>PAIN RELIEF</p>
                <img src="../../../images/pain.png" alt="" height={150} width={150} />
                </Link>
            </div>
            
            <div
              className={`col-md-${hoveredIndex2 === 3 ? 4 : 2} card ${style.cardHover} ${style.oralContainer} `}
              onMouseEnter={() => setHoveredIndex2(3)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none' to={ProductCategory['oral_care']}> 
                <p className={`${style.oral} mb-0 mt-1`}>Oral Care</p>        
                <p className={`${style.cardHeader} h3 fw-bold `}>TOOTH PASTE</p>
                <img src="../../../images/oral.png" alt="" height={150} width={150} />
                </Link>
            </div>
          </div>
          </>
  )
}
