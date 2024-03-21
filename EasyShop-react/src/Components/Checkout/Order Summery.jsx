import React from "react";
import product1 from "../../assets/Green-Capsicum.png";
import { getCart } from "../Cart/Cart";
import { useQuery } from "react-query";

export const OrderSummery = () => {
    let { isLoading, data } = useQuery("getCart", getCart);

    const calculateSubtotal = () => {
        let subtotal = 0;
        data?.data.cart.forEach((cartItem) => {
            subtotal += cartItem.price * cartItem.quantity;
        });
        return subtotal;
    };

    return (
        <>
            {isLoading ? (
                <div className="col-md-4 order-md-2 mb-4">
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <div className="spinner-border checkout" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="checkout">Order Summary</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <ul className="list-group">
                            {data?.data.cart.map((cartItem) => (
                                <li
                                    key={cartItem.id}
                                    className="list-group-item d-flex justify-content-between lh-condensed border-bottom-0"
                                >
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={product1}
                                            alt=""
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                marginRight: "10px",
                                            }}
                                        />
                                        <h6 className="my-0">
                                            {cartItem.product_name} x{" "}
                                            {cartItem.quantity}
                                        </h6>
                                    </div>

                                    <span className="text-muted mt-3">
                                        {cartItem.price} $
                                    </span>
                                </li>
                            ))}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Subtotal:</span>
                                <span className="text-muted">
                                    {calculateSubtotal()} $
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Shipping:</span>
                                <span className="text-muted">Free</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total:</span>
                                <strong>{calculateSubtotal()} $</strong>
                            </li>
                        </ul>
                    </ul>
                </div>
            )}
        </>
    );
};
