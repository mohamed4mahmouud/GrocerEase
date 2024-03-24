import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const OrderSummery = () => {
    const cartItems = useSelector((state) => state.cartItems);
    let subtotal = 0;
    // Calculate subtotal
    cartItems.forEach((item) => {
        subtotal += item.price * item.quantity;
    });
    const [cartProduct, setCartProduct] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedCart = JSON.parse(sessionStorage.getItem("cartState"));
        if (storedCart) {
            setCartProduct(storedCart.cartItems);
        }
    }, []);

    return (
        <>
            <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="checkout">Order Summary</span>
                </h4>
                <ul className="list-group mb-3">
                    <ul className="list-group">
                        {cartItems.map((cartItem, index) => (
                            <li
                                cartItem={cartItem}
                                key={index}
                                className="list-group-item d-flex justify-content-between lh-condensed border-bottom-0"
                            >
                                <div className="d-flex align-items-center">
                                    <img
                                        src={cartItem.image}
                                        alt=""
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <h6 className="my-0">
                                        {cartItem.title} x {cartItem.quantity}
                                    </h6>
                                </div>

                                <span className="text-muted mt-3">
                                    {cartItem.price} $
                                </span>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Subtotal:</span>
                            <span className="text-muted">{subtotal} $</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Shipping:</span>
                            <span className="text-muted">Free</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total:</span>
                            <strong>{subtotal} $</strong>
                        </li>
                    </ul>
                </ul>
            </div>
        </>
    );
};
