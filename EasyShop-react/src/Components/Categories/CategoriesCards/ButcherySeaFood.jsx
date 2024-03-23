import { Link } from "react-router-dom";
import React, { useState } from 'react';
import style from '../Categories.module.css';
export default function ButcherySeaFood() {
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
                <p className={`${style.shampoo} mb-0 mt-1`}>Meat</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>BEEF</p>
                <img src="../../images/beef.png" alt="" height={130} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 2 ? 4 : 2} card ${style.cardHover} ${style.makeUpContainer}`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none'> 
                <p className={`${style.makeUp} mb-0 mt-1`}>Chicken</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>BREASTS</p>
                <img src="../../images/chicken.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex === 3 ? 4 : 2} card ${style.cardHover} ${style.supplementsContainer}`}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(1)}
            >
                <Link className='text-decoration-none'> 
                <p className={`${style.supplements} mb-0 mt-1`}>Sausages</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>SODOK</p>
                <img src="../../images/sodok.png" alt="" height={130} width={150} />
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
                <p className={`${style.supplies} mb-0 mt-1`}>Smoked Meats</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>TURKEY</p>
                <img src="../../images/turkey.png" alt="" height={150} width={150} />
                </Link>
            </div>
            <div
              className={`col-md-${hoveredIndex2 === 2 ? 4 : 2} card ${style.cardHover} ${style.painContainer}`}
              onMouseEnter={() => setHoveredIndex2(2)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none'> 
                <p className={`${style.pain} mb-0 mt-1`}>Meat For Grilling</p>        
                <p className={`${style.cardHeader} h2 fw-bold`}>STEAK</p>
                <img src="../../images/steak.png" alt="" height={150} width={150} />
                </Link>
            </div>
            
            <div
              className={`col-md-${hoveredIndex2 === 3 ? 4 : 2} card ${style.cardHover} ${style.oralContainer} `}
              onMouseEnter={() => setHoveredIndex2(3)}
              onMouseLeave={() => setHoveredIndex2(3)}
            >
                <Link className='text-decoration-none '> 
                <p className={`${style.oral} mb-0 mt-1`}>Seafood Selection</p>        
                <p className={`${style.cardHeader} h3 fw-bold `}>SHRIMPS</p>
                <img src="../../images/shrimp.png" alt="" height={150} width={150} />
                </Link>
            </div>
          </div>
          </>
  )
}
