import { Link } from "react-router-dom";
import React, { useState } from 'react';
import style from '../Categories.module.css';
export default function SuperMarkets() {
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
                <Link className='text-decoration-none'> 
                <p className={`${style.shampoo} mb-0 mt-1`}>Diary & Eggs</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>CHEESE</p>
                <img src="../../../images/cheese.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 2 ? 4 : 2} card ${style.cardHover} ${style.makeUpContainer}`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none'> 
                <p className={`${style.makeUp} mb-0 mt-1`}>Personal Care</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>SOAP</p>
                <img src="../../../images/soap.png" alt="" height={100} width={150} className="mt-4"/>
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 3 ? 4 : 2} card ${style.cardHover} ${style.supplementsContainer}`}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none'> 
                <p className={`${style.supplements} mb-0 mt-1`}>Snaks</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>CHOCOLATE</p>
                <img src="../../../images/chocolate.png" alt="" height={90} width={150} className="mt-4"/>
                </Link>
            </div>
          </div>
          <div className="text-center d-flex row justify-content-center gap-2 ">
            <div
              className={`col-md-${hoveredIndex2 === 1 ? 4 : 2} card ${style.cardHover} ${style.suppliesContainer}`}
              onMouseEnter={() => setHoveredIndex2(1)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none'> 
                <p className={`${style.supplies} mb-0 mt-1`}>Beverages</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>SODA</p>
                <img src="../../../images/soda.png" alt="" height={150} width={50} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex2 === 2 ? 4 : 2} card ${style.cardHover} ${style.painContainer}`}
              onMouseEnter={() => setHoveredIndex2(2)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none'> 
                <p className={`${style.pain} mb-0 mt-1`}>Cleaning & Laundry</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>SOFTENER</p>
                <img src="../../../images/softener.png" alt="" height={150} width={100} />
                </Link>
            </div>
            
            <div
              className={`col-md-${hoveredIndex2 === 3 ? 4 : 2} card ${style.cardHover} ${style.oralContainer} `}
              onMouseEnter={() => setHoveredIndex2(3)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none '> 
                <p className={`${style.oral} mb-0 mt-1`}>Frozen Food</p>        
                <p className={`${style.cardHeader} h3 fw-bold `}>PIZZA</p>
                <img src="../../../images/pizza.png" alt="" height={150} width={150} />
                </Link>
            </div>
          </div>
          </>
  )
}
