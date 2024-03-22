import React, { useState } from 'react'
import style from './Cart.module.css';

export default function PlusMinusCounter({quantity,countParent}) {

        const [count, setCount] = useState(quantity);
      
        const increment = () => {
          const newCount = count+1
          setCount(newCount);
          countParent.current = countParent.current + 1;
        };
      
        const decrement = () => {
          if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            countParent.current = countParent.current - 1;

          }
        };
        return (
          <div className="container">
            <div>
              <div className="col-md-5">
                <div className="d-flex justify-content-center align-items-center border rounded-pill"  style={{height:"40px",width:"110px"}}>
                  <button onClick={decrement} className={`${style.counterButton} rounded-5`}>-</button>
                  <span className="mx-3">{count}</span>
                  <button onClick={increment} className={`${style.counterButton} rounded-5`}>+</button>
                </div>
              </div>
            </div>
          </div>
        );
  
      };



