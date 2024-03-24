import { Link } from "react-router-dom";
import React, { useState } from 'react';
import style from '../Categories.module.css';
export default function BakeriesCakes() {
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
                <p className={`${style.shampoo} mb-0 mt-1`}>Pastries and Croissants</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>CROISSANT</p>
                <img src="../../../images/croissant.png" alt="" height={120} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 2 ? 4 : 2} card ${style.cardHover} ${style.makeUpContainer}`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none'> 
                <p className={`${style.makeUp} mb-0 mt-1`}>Bread</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>BROWN</p>
                <img src="../../../images/brown.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 3 ? 4 : 2} card ${style.cardHover} ${style.supplementsContainer}`}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none'> 
                <p className={`${style.supplements} mb-0 mt-1`}>Cakes and Cupcakes</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>CUPCAKE</p>
                <img src="../../../images/cupCake.png" alt="" height={150} width={150} />
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
                <p className={`${style.supplies} mb-0 mt-1`}>Cookies and Brownies</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>BROWNIES</p>
                <img src="../../../images/brownie.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex2 === 2 ? 4 : 2} card ${style.cardHover} ${style.painContainer}`}
              onMouseEnter={() => setHoveredIndex2(2)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none'> 
                <p className={`${style.pain} mb-0 mt-1`}>Tarts and Pies</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>TARTS</p>
                <img src="../../../images/tart.png" alt="" height={150} width={150} />
                </Link>
            </div>
            
            <div
              className={`col-md-${hoveredIndex2 === 3 ? 4 : 2} card ${style.cardHover} ${style.oralContainer} `}
              onMouseEnter={() => setHoveredIndex2(3)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none '> 
                <p className={`${style.oral} mb-0 mt-1`}>rolls</p>        
                <p className={`${style.cardHeader} h3 fw-bold `}>SWISS ROLL</p>
                <img src="../../../images/swiss.png" alt="" height={150} width={150} />
                </Link>
            </div>
          </div>
          </>
  )
}
