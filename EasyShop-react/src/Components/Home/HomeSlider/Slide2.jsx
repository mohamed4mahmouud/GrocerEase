import React from 'react';
import style from "../Home.module.css"
import { Link } from 'react-router-dom';
const Slide2 = () => (
    <div className="container-fluid">
      <div className={`${style.slide2} row`}>
        <div className="col-md-8 d-flex align-items-center text-center justify-content-around">
          <div className="text-center mt-5">
            <img src="../../images/logo.png" alt="" style={{ width: '20%' }} />
            <p className="h2 d-inline-block fw-bold">GrocerEase</p>
            <p className="h2">Shop all your pharmacy supplies</p>
            <p className="h4">delivered to your door in about 60 minutes!</p>
            <p className="h3 fw-bold">Try it out today!</p>
            <a className="btn btn-outline-primary btn-lg mt-3" href="#services">Shop Now</a>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <div className="text-center mt-5">
            <img src="../../images/slide2.png" alt="" style={{ width: '200px', height: '200px' }}/>
          </div>
        </div>
      </div>
    </div>
  );                        
export default Slide2;