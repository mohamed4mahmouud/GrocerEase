import { Link } from "react-router-dom";
import React, { useState } from 'react';
import style from '../Categories.module.css';
import ProductCategory from "../../Shops/ProductCategory.json";
export default function Pets() {
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
                <Link className='text-decoration-none' to={ProductCategory['pet_food']}> 
                <p className={`${style.shampoo} mb-0 mt-1`}>Pet Food</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>DRY FOOD</p>
                <img src="../../../images/dry.png" alt="" height={150} width={100} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 2 ? 4 : 2} card ${style.cardHover} ${style.makeUpContainer}`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none' to={ProductCategory['treats_and_chews']}> 
                <p className={`${style.makeUp} mb-0 mt-1`}>Treats and Chews</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>COOKIES</p>
                <img src="../../../images/petCookie.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 3 ? 4 : 2} card ${style.cardHover} ${style.supplementsContainer}`}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none' to={ProductCategory['toys_and_accessories']}> 
                <p className={`${style.supplements} mb-0 mt-1`}>Toys and Accessories</p>        
                <p className={`${style.cardHeader} h3 fw-bold`}>INTERACTIVE</p>
                <img src="../../../images/toy.png" alt="" height={150} width={150} />
                </Link>
            </div>
          </div>
          <div className="text-center d-flex row justify-content-center gap-2 ">
            <div
              className={`col-md-${hoveredIndex2 === 1 ? 4 : 2} card ${style.cardHover} ${style.suppliesContainer}`}
              onMouseEnter={() => setHoveredIndex2(1)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none' to={ProductCategory['pet_health_and_wellness']}> 
                <p className={`${style.supplies} mb-0 mt-1`}>Pet Health and Wellness</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>FLEA</p>
                <img src="../../../images/flea.png" alt="" height={150} width={100} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex2 === 2 ? 4 : 2} card ${style.cardHover} ${style.painContainer}`}
              onMouseEnter={() => setHoveredIndex2(2)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none' to={ProductCategory['pet_accessories']}> 
                <p className={`${style.pain} mb-0 mt-1`}>Pet Accessories</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>ID TAGS</p>
                <img src="../../../images/tags.png" alt="" height={150} width={150} />
                </Link>
            </div>
            
            <div
              className={`col-md-${hoveredIndex2 === 3 ? 4 : 2} card ${style.cardHover} ${style.oralContainer} `}
              onMouseEnter={() => setHoveredIndex2(3)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none' to={ProductCategory['pet_beds_and_furniture']}> 
                <p className={`${style.oral} mb-0 mt-1`}>Pet Beds and Furniture</p>        
                <p className={`${style.cardHeader} h3 fw-bold `}>BEDS</p>
                <img src="../../../images/bed.png" alt="" height={200} width={200} />
                </Link>
            </div>
          </div>
          </>
  )
}
