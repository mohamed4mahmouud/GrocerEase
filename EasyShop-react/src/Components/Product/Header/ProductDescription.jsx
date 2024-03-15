import React from 'react'

export const ProductDescription = () => {
    return (
        <>
            <div className="row">
                <div className='col-md-6'>
                    <span className='fs-5'>Brand: </span>
                </div>
                <div className='col-md-6 d-flex'>
                    <div className='col-3'>
                        <span className='fs-5'>Share:</span>
                    </div>
                    <div >
                        <i class="fa-brands fa-facebook fa-2x greenbook me-2"></i>
                        <i class="fa-brands fa-twitter fa-2x review me-2"></i>
                        <i class="fa-brands fa-pinterest-p fa-2x review me-2"></i>
                        <i class="fa-brands fa-instagram fa-2x me-2"></i>
                    </div>
                </div>

            </div>
            {/* ProductDescription */}
            <div className="row">
                <div className='mt-4'>
                    <p className='oldprice text-decoration-none'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem laborum eum iusto maxime inventore id omnis cupiditate vel illo unde fugit voluptatibus cumque numquam, aut iure dolore dolorem sit.
                    </p>
                </div>
                <hr />
            </div>
            
        </>
    )
}
