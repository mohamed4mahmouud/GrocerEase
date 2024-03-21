import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

export async function getCart() {
    return await axios.get(`http://127.0.0.1:8000/api/get-cart`);
}

// update quantity function
async function updateQuantity(product_id, quantity) {
    let data = {
        product_id: product_id,
        quantity: quantity,
    };
    await axios.post(`http://127.0.0.1:8000/api/update-quantity`, data);
}
// remove item from cart
async function removeItem(product_id) {
    await axios.delete(
        `http://127.0.0.1:8000/api/delete-product-cart/${product_id}`
    );
}
//  remove whole cart
async function removeCart() {
    await axios.delete(`http://127.0.0.1:8000/api/clear-cart`);
}

const PlusMinusCounter = ({ quantity, onQuantityChange }) => {
    const [count, setCount] = useState(quantity);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onQuantityChange(newCount);
    };

    const decrement = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            onQuantityChange(newCount);
        }
    };

    return (
        <div className="container">
            <div>
                <div className="col-md-5">
                    <div
                        className="d-flex justify-content-center align-items-center border rounded-pill"
                        style={{ height: "40px", width: "110px" }}
                    >
                        <button
                            onClick={decrement}
                            className={`${style.counterButton} rounded-5`}
                        >
                            -
                        </button>
                        <span className="mx-3">{count}</span>
                        <button
                            onClick={increment}
                            className={`${style.counterButton} rounded-5`}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Cart() {
    let { isLoading, data } = useQuery("getCart", getCart);

    const handleQuantityChange = async (productId, newQuantity) => {
        await updateQuantity(productId, newQuantity);
    };
    // set subtotal
    let [cartSubTotal, setCartTotal] = useState(0);
    let subtotal = 0;
    useEffect(() => {
        data?.data.cart.forEach((item) => {
            return (subtotal += item.price * item.quantity);
        });
        setCartTotal(subtotal);
    });
    return (
        <>
            {isLoading ? (
                <div className="d-flex justify-content-center mt-2">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : !data?.data.cart ? (
                <div>
                    <img src="" alt="shoping cart is empty"></img>
                    <Link
                        to="/products"
                        className={`${style.cartButton} rounded-5`}
                    >
                        Return to shop
                    </Link>
                </div>
            ) : (
                <Fragment>
                    <div className="container text-center">
                        <h1 className="mt-5 mb-5">My Shopping Cart</h1>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="card">
                                    <table>
                                        <thead className="text-start border">
                                            <tr>
                                                <th
                                                    style={{
                                                        width: "40%",
                                                        paddingLeft: "20px",
                                                    }}
                                                >
                                                    PRODUCT
                                                </th>
                                                <th>PRICE</th>
                                                <th
                                                    style={{
                                                        paddingLeft: "15px",
                                                    }}
                                                >
                                                    QUANTITY
                                                </th>
                                                <th>SUBTOTAL</th>
                                            </tr>
                                        </thead>
                                        {data?.data.cart.map(
                                            (cartItem, index) => (
                                                <tbody
                                                    className="text-start"
                                                    key={index}
                                                >
                                                    <tr className="border">
                                                        <td
                                                            style={{
                                                                width: "40%",
                                                                paddingLeft:
                                                                    "20px",
                                                            }}
                                                        >
                                                            <img
                                                                src="../../images/productTest.png"
                                                                alt="product"
                                                                className={`${style.productImg}`}
                                                            />
                                                            <span>
                                                                {
                                                                    cartItem.product_name
                                                                }
                                                            </span>
                                                        </td>
                                                        <td>
                                                            {cartItem.price}
                                                        </td>
                                                        <td>
                                                            <PlusMinusCounter
                                                                quantity={
                                                                    cartItem.quantity
                                                                }
                                                                onQuantityChange={(
                                                                    newQuantity
                                                                ) =>
                                                                    handleQuantityChange(
                                                                        cartItem.product_id,
                                                                        newQuantity
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        {/* TODO:calculate total price */}
                                                        <td>
                                                            {cartItem.price *
                                                                cartItem.quantity}{" "}
                                                            EGP
                                                        </td>
                                                        <td>
                                                            <button
                                                                href=""
                                                                className="btn rounded-circle text-reset text-decoration-none"
                                                                onClick={() =>
                                                                    removeItem(
                                                                        cartItem.product_id
                                                                    )
                                                                }
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20"
                                                                    height="20"
                                                                    fill="currentColor"
                                                                    className="bi bi-x-circle "
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        )}
                                    </table>
                                    <div
                                        className={`${style.cartFooter} card-footer d-flex justify-content-between`}
                                    >
                                        <Link
                                            to="/products"
                                            className={`${style.cartButton} rounded-5`}
                                        >
                                            Return to shop
                                        </Link>
                                        <button
                                            className={`${style.cartButton} rounded-5`}
                                            onClick={removeCart}
                                        >
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-start mb-4">
                                            Cart Total
                                        </h5>
                                        <div
                                            className={`${style.cartText} text-start d-flex justify-content-between`}
                                        >
                                            <h6>Subtotal:</h6>
                                            <h6>{cartSubTotal} $</h6>
                                        </div>
                                        <hr />
                                        {/* TODO: set shipping fee dynamically */}
                                        <div
                                            className={`${style.cartText} text-start d-flex justify-content-between`}
                                        >
                                            <h6>Shipping:</h6>
                                            <h6>Free</h6>
                                        </div>
                                        <hr />
                                        <div
                                            className={`${style.cartText} text-start d-flex justify-content-between`}
                                        >
                                            <h5>Total:</h5>
                                            <h5>{cartSubTotal} $</h5>
                                        </div>
                                        <button
                                            className={`${style.mainColor} btn btn-primary w-100 rounded-5 mt-3`}
                                        >
                                            Procced to checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 mt-3">
                                <div className="card">
                                    <div className="card-body mt-3">
                                        <div className="input-group mb-3">
                                            <h5 className="mt-2">
                                                Coupon Code
                                            </h5>
                                            <input
                                                type="text"
                                                className="form-control rounded-5 ms-2 "
                                                placeholder="Enter coupon code"
                                            />
                                            <button
                                                className={`${style.coupon} rounded-5 text-white p-2 z-1 ms-3`}
                                                type="button"
                                            >
                                                Apply Coupon
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
            ;
        </>
    );
}
