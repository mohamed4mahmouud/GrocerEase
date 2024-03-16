import React, { useState } from 'react'
import { addToCart } from '../../Products/Products';
export const AddToCartComponent = () => {
    const [state, setState] = useState({
        count: 1
    });
    const incrementCount = () => {
        setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    const decrementCount = () => {
        setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    return (
        <>
            <div className="row">
                <div className="col-4 d-flex p-2 border rounded-pill mt-2" style={{height:"60px"}}>
                    <button onClick={decrementCount} className='btn greenbook col-4 border rounded-circle'><i class="fa fa-1x fa-minus"></i>
                    </button>
                    <div className='d-flex justify-content-center align-items-center col-4'>{state.count}</div>
                    <button onClick={incrementCount} className='btn greenbook border col-4 rounded-circle'><i class="fa-solid fa-plus"></i>
                    </button>

                </div>
                <div className="col-md-7 mt-2 rounded-pill h-25">
                    <button className='btn greencart col-md-12 rounded-pill ' style={{ height: "60px" }} onClick={addToCart}><strong className='text-white'>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-handbag pb-1" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z" />
                    </svg>
                    </strong>
                    </button>
                </div>
                <div className="col-md-1 mt-2">
                    <button className='rounded-circle greybackground  ms-3' style={{ height: "60px", width:"60px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </button>
                </div>
            </div>
                <hr />
        </>
    )
}
