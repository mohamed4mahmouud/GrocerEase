import React from "react";
import product1 from "../../assets/Green-Capsicum.png";
import product2 from "../../assets/Red-Capsicum.png";

export const OrderSummery = () => {
    return (
        <>
            <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="checkout">Order Summery</span>
                </h4>
                <ul className="list-group mb-3">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between lh-condensed border-bottom-0">
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
                                <h6 className="my-0">Green Capsicum</h6>
                            </div>
                            <span className="text-muted">$70.00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div className="d-flex align-items-center">
                                <img
                                    src={product2}
                                    alt=""
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        marginRight: "10px",
                                    }}
                                />
                                <h6 className="my-0">Red Capsicum</h6>
                            </div>
                            <span className="text-muted">$14.00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Subtotal:</span>
                            <span className="text-muted">$20.00</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Shipping:</span>
                            <span className="text-muted">Free</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total:</span>
                            <strong>$20</strong>
                        </li>
                    </ul>
                </ul>
            </div>
        </>
    );
};
