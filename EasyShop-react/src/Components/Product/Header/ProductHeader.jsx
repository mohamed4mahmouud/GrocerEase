import React from "react";
import { ProductDescription } from "./ProductDescription";
import { AddToCartComponent } from "../AddToCart/AddToCartComponent";


export const ProductHeader = ({ data, isLoading }) => {
    console.log(data?.data.products)
    return (
        <>
            <div className="row pt-4">
                {/* TODO: Add product image */}
                {isLoading ? (
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="col-md-6">
                            <img src={data?.data.products.image} height={400} alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                {/*Title*/}
                                <p className="h1 col-auto">
                                    {data?.data.products.title}
                                    {data?.data.products.quantity > 0 ?
                                        <small className="col-3 ms-2">
                                            <span className="rounded-3 p-1 instock fs-6">
                                                <strong>In Stock</strong>
                                            </span>
                                        </small> :
                                        <small className="col-3 ms-2">
                                            <span className="rounded-3 p-1 outofstock fs-6">
                                                <strong>Out Of Stock</strong>
                                            </span>
                                        </small>}

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
                                        <span className="review ms-1">
                                            4 Review
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {/* discount */}
                            <div className="row">
                                <div className="mt-2 px-2">

                                    {
                                        data?.data.products.discount ? (
                                            <span className="oldprice me-2 fs-3">
                                                ${data?.data.products.price + data?.data.products.discount}
                                            </span>
                                        ) : ``
                                    }
                                    <span className="discountedprice me-4 fs-3">
                                        <strong>${data?.data.products.price}</strong>
                                    </span>

                                    {
                                        data?.data.products.discount ?
                                            (
                                                <span className="discountrate rounded-3 p-1 fs-6">
                                                    {`${data.data.products.discount} Egp Off`}
                                                </span>
                                            )
                                            : ``
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <hr />
                            </div>
                            <ProductDescription product={data?.data.products} />
                            <AddToCartComponent product={data?.data.products} />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
