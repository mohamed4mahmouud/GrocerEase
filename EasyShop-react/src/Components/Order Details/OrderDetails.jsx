import React, { useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";
import { getCart } from "../Cart/Cart";
import { Link } from "react-router-dom";

const OrderDetails = ({ orderId }) => {
    const {
        isLoading: orderLoading,
        data: orderData,
        isError: orderError,
    } = useQuery(["order", orderId], async () => {
        const userToken = localStorage.getItem("userToken");
        const headers = {
            token: userToken,
        };
        const response = await axios.get(
            `http://localhost:8000/api/orders/${orderId}`,
            {
                headers,
            }
        );
        console.log(response.data);
        return response.data;
    });

    const { isLoading: cartLoading, data: cartData } = useQuery(
        "getCart",
        getCart
    );

    if (orderLoading || cartLoading) {
        return (
            <div className="d-flex justify-content-center mt-2">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (orderError) {
        return <div>Error fetching order details</div>;
    }

    const formatDate = (dateString) => {
        const options = { month: "long", day: "numeric", year: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const totalProducts = cartData?.data.cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
    );

    return (
        <div className="container">
            <div className="row border rounded-3 d-flex justify-content-center">
                <div className="d-flex justify-content-between border-bottom">
                    <div className="d-flex">
                        <h2 className="mt-3 ms-5">Order Details</h2>
                        <p className="mt-4 ms-4">
                            {formatDate(orderData?.order?.shipping_date)}
                        </p>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link
                            to="/myOrder"
                            className="me-5 text-decoration-none"
                            style={{ color: "#3BB77E" }}
                        >
                            Back to list
                        </Link>
                    </div>
                </div>

                {orderData ? (
                    <>
                        <div
                            className="col-5 border rounded-3 mt-3 p-4"
                            style={{ textAlign: "left" }}
                        >
                            <p className="review">
                                Shipping Address <br />
                                <small className="text-black">
                                    {orderData?.order?.shipping_address}
                                </small>
                            </p>
                            <p className="review">
                                Shipping Date <br />
                                <small className="text-black">
                                    {formatDate(
                                        orderData?.order?.shipping_date
                                    )}
                                </small>
                            </p>
                            <p className="review">
                                Products <br />
                                <small className="text-black">
                                    {totalProducts}
                                </small>
                            </p>
                            <p className="review">
                                Order Status <br />
                                <small className="text-black">
                                    {orderData?.order?.status}
                                </small>
                            </p>
                        </div>
                        <div className="col-6 align-content-center border rounded-3 mt-3 ms-5">
                            <div className="d-flex justify-content-between mt-2">
                                <div className="ms-4 mt-3">
                                    <p className="review">Order ID:</p>
                                    <p>{orderData?.order?.id}</p>
                                </div>
                                <div className="vr ms-5"></div>
                                <div className="me-4 mt-3">
                                    <p className="review">Payment Method:</p>
                                    <p>Credit Card</p>
                                </div>
                            </div>
                            <hr />
                            <div className="p-3">
                                <p className="d-flex justify-content-between review">
                                    Subtotal:{" "}
                                    <strong>$ {orderData?.order?.price}</strong>
                                </p>
                                <p className="d-flex justify-content-between review">
                                    Shipping: <strong>Free</strong>
                                </p>
                                <p className="d-flex justify-content-between review">
                                    Total:{" "}
                                    <strong>$ {orderData?.order?.price}</strong>
                                </p>
                            </div>
                        </div>

                        <div className="table-container mt-3 p-0">
                            <Table borderless>
                                <thead>
                                    <tr className="table-secondary">
                                        <th className="text-uppercase">
                                            Product
                                        </th>
                                        <th className="text-uppercase">
                                            Price
                                        </th>
                                        <th className="text-uppercase">
                                            Quantity
                                        </th>
                                        <th className="text-uppercase">
                                            Suptotal
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData?.data.cart.map((cartItem) => (
                                        <tr key={cartItem.id}>
                                            <td>{cartItem.id}</td>
                                            <td>{cartItem.product_name}</td>
                                            <td>x {cartItem.quantity}</td>
                                            <td>$ {cartItem.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </>
                ) : (
                    <div>Error fetching order details</div>
                )}
            </div>
        </div>
    );
};

export default OrderDetails;
