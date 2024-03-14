import React from 'react'

export const ProductHeader = () => {
  return (
    <>
    <div className="row pt-4">
          {/* TODO: Add product image */}
          <div className="col-md-6">
            <img src="..." alt="..." />
          </div>
          <div className="col-md-6">
            <div className="row">
              {/*Title*/}
              <p className="h1 col-auto">iphone 9</p>
              <small className='col-3'>
                <span className='rounded-3 p-1 bgnavbar'>
                  In Stock
                </span>
              </small>
            </div>
            <div className="row">
                <div className="col-md-4 d-flex">
                    {/*Stars And Ratings*/}
                <i class="fa-solid fa-star ratingstar"></i>
                <i class="fa-solid fa-star ratingstar"></i>
                <i class="fa-solid fa-star ratingstar"></i>
                <i class="fa-solid fa-star ratingstar"></i>
                <i class="fa-solid fa-star ratingstar"></i>
                
                </div>
            
            </div>
          </div>

        </div>

    </>
  )
}
