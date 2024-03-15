import React from 'react'
import { ProductDescription } from './ProductDescription'
import { AddToCartComponent } from '../AddToCart/AddToCartComponent'

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
                        <p className="h1 col-auto">iphone 9
                        <small className='col-3 ms-2'>
                            <span className='rounded-3 p-1 instock fs-6'>
                                    <strong>In Stock</strong>
                            </span>
                        </small>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 d-flex">
                            {/*Stars And Ratings*/}
                            <span>
                                <i class="fa-solid fa-star ratingstar"></i>
                                <i class="fa-solid fa-star ratingstar"></i>
                                <i class="fa-solid fa-star ratingstar"></i>
                                <i class="fa-solid fa-star ratingstar"></i>
                                <i class="fa-solid fa-star ratingstar"></i>
                                <span className='review ms-1'>4 Review</span>
                            </span>

                        </div>

                    </div>
                    {/* discount */}
                    <div className="row">
                        <div className='mt-2 px-2'>
                            <span className='oldprice me-2 fs-3'>$48.00</span>
                            <span className='discountedprice me-4 fs-3'><strong>$17.28</strong></span>
                            <span className='discountrate rounded-3 p-1 fs-6'>64% Off</span>
                        </div>
                    </div>
                    <div className="row">
                        <hr />
                    </div>
                    <ProductDescription/>
                    <AddToCartComponent/>                   
                </div>

            </div>

        </>
    )
}
