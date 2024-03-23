import React from 'react'
import style from './Categories.module.css';
import Pharmacy from './CategoriesCards/Pharmacy';
import Pets from './CategoriesCards/Pets';
import SuperMarkets from './CategoriesCards/SuperMarkets';
import GreenGroceries from './CategoriesCards/GreenGroceries';
import ButcherySeaFood from './CategoriesCards/ButcherySeaFood';
import BakeriesCakes from './CategoriesCards/BakeriesCakes';



export default function Categories() {


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
          <ButcherySeaFood />
        </div>
      </div>
    </div>
  )
}
