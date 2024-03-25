import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import TableRow from "./TableRow";
import { removeAllFromCart } from "../../redux/Actions/action";
import { Coupon } from "./Coupon";

export async function getCart() {
    const response = await axios.get(`http://127.0.0.1:8000/api/get-cart`);
    return response.data;
}

export default function Cart() {
    const cartItems = useSelector((state) => state.cartItems); // Accessing cart items from Redux store
    const [subtotal, setSubtotal] = useState(0);
    const priceAfterDiscount = useSelector((state) => state.priceAfterDiscount);

    const dispatch = useDispatch();

    useEffect(() => {
        const storedCart = JSON.parse(sessionStorage.getItem("cartState"));
        if (storedCart) {
            setSubtotal(calculateSubtotal(storedCart.cartItems));
        }
    }, []);

    // useEffect(() => {
    //     setPriceAfterDiscount(sessionStorage.getItem("priceAfterDiscount"));
    // }, [priceAfterDiscount]);

    const calculateSubtotal = (items) => {
        let total = 0;
        items.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    const handleRemoveAll = () => {
        dispatch(removeAllFromCart());
        setSubtotal(0);
    };

    return (
        <>
            <Fragment>
                {cartItems.length != 0 ? (
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
                                                        paddingLeft: "100px",
                                                    }}
                                                >
                                                    PRODUCT
                                                </th>
                                                <th
                                                    style={{
                                                        paddingLeft: "70px",
                                                    }}
                                                >
                                                    PRICE
                                                </th>
                                                <th
                                                    style={{
                                                        paddingLeft: "50px",
                                                    }}
                                                >
                                                    QUANTITY
                                                </th>
                                            </tr>
                                        </thead>
                                        {cartItems.map((cartItem, index) => (
                                            <TableRow
                                                cartItem={cartItem}
                                                key={index}
                                                calculateSubtotal={
                                                    calculateSubtotal
                                                }
                                            />
                                        ))}
                                    </table>
                                    <div
                                        className={`${style.cartFooter} card-footer d-flex justify-content-between`}
                                    >
                                        <Link
                                            to="/"
                                            className={`${style.cartButton} rounded-5`}
                                        >
                                            Return to shop
                                        </Link>
                                        <button
                                            className={`${style.cartButton} rounded-5`}
                                            onClick={handleRemoveAll}
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
                                            <h6>
                                                {priceAfterDiscount > 0
                                                    ? priceAfterDiscount
                                                    : subtotal}
                                                $
                                            </h6>
                                        </div>
                                        <hr />
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
                                            <h5>
                                                {priceAfterDiscount > 0
                                                    ? priceAfterDiscount
                                                    : subtotal}
                                                $
                                            </h5>
                                        </div>
                                        <Link to="/checkout"
                                            className={`${style.mainColor} btn btn-primary w-100 rounded-5 mt-3`}
                                        >
                                            Proceed to checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 mt-3">
                                <div className="card">
                                    <div className="card-body mt-3">
                                        {/* Pass the callback function to the Coupon component */}
                                        <Coupon data={subtotal} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // when cart is empty
                    <div className="container">
                        <div
                            className="text-center"
                        >
                            <img
                                src="../../images/emptyCart.jpg"
                                alt="empty cart"
                                width={500}
                            />
                            <h2 className="font text-center"> Your Cart is Empty</h2>
                            <Link className="btn greencart rounded-3 text-white fw-semibold mt-3 font" to="/">Go Shopping</Link>
                        </div>
                    </div>
                )}
            </Fragment>
        </>
    );
}
