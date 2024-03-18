import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Cart.module.css'

const PlusMinusCounter = () => {
  const [count, setCount] = useState(1);


  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
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

export default function Cart() {
  return (
    <Fragment>
      <div className="container text-center">
        <h1 className='mt-5 mb-5'>My Shopping Cart</h1>
        <div className="row">
          <div className="col-md-7">
            <div className="card">
            <table>
            <thead className='text-start border'>
              <tr>
                <th style={{ width: '40%',paddingLeft: '20px' }}>PRODUCT</th>
                <th>PRICE</th>
                <th style={{ paddingLeft: '15px' }}>QUANTITY</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody className='text-start'>
              <tr className='border'>
                <td style={{ width: '40%',paddingLeft: '20px' }}>
                  <img src="../../images/productTest.png" alt="product" className={`${style.productImg}`}/>
                  <span>Green Felfel</span>
                </td>
                <td>12412</td>
                <td> 
                  <PlusMinusCounter />
                </td>
                <td>235235</td>
                <td>
                  <a href="" className="text-reset text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle " viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className='border'>
                <td style={{ width: '40%',paddingLeft: '20px' }}>
                  <img src="../../images/productTest.png" alt="product" className={`${style.productImg}`}/>
                  <span>Green Felfel</span>
                </td>
                <td>12412</td>
                <td> 
                  <PlusMinusCounter />
                </td>
                <td>235235</td>
                <td>
                  <a href="" className="text-reset text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle " viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className='border'>
                <td style={{ width: '40%',paddingLeft: '20px' }}>
                  <img src="../../images/productTest.png" alt="product" className={`${style.productImg}`}/>
                  <span>Green Felfel</span>
                </td>
                <td>12412</td>
                <td> 
                  <PlusMinusCounter />
                </td>
                <td>235235</td>
                <td>
                  <a href="" className="text-reset text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle " viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
              <div className={`${style.cartFooter} card-footer d-flex justify-content-between`}>
                <button className={`${style.cartButton} rounded-5`}>Return to shop</button>
                <button className={`${style.cartButton} rounded-5`}>Update Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className='text-start mb-4'>Cart Total</h5>
                <div className={`${style.cartText} text-start d-flex justify-content-between`}>
                  <h6>Subtotal:</h6><h6>$235.00</h6>
                </div>
                <hr />
                <div className={`${style.cartText} text-start d-flex justify-content-between`}>
                  <h6>Shipping:</h6><h6>Free</h6>
                </div>
                <hr />
                <div className={`${style.cartText} text-start d-flex justify-content-between`}>
                  <h5>Total:</h5><h5>$235.00</h5>
                </div>
                <button className={`${style.mainColor} btn btn-primary w-100 rounded-5 mt-3`}>Procced to checkout</button>
              </div>
            </div>
          </div>
          <div className="col-md-7 mt-3">
            <div className="card">
              <div className="card-body mt-3">
                <div className="input-group mb-3">
                  <h5 className='mt-2'>Coupon Code</h5>
                  <input type="text" className="form-control rounded-5 ms-2 " placeholder="Enter coupon code" />
                  <button className={`${style.coupon} rounded-5 text-white`} type="button">Apply Coupon</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </Fragment>
  );
}
