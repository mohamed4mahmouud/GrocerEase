import React, { useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";
// import { Container, Row, Col } from "react-bootstrap";
import product1 from "../../assets/Green-Capsicum.png";

const OrderDetails = ({ orderId }) => {
    // const [orderDetails, setOrderDetails] = useState(null);

    // let userToken = localStorage.getItem("userToken");
    // let headers = {
    //     token: userToken,
    // };
    // const { data, isLoading, isError } = useQuery(
    //     ["order", orderId],
    //     async () => {
    //         const response = await axios.get(
    //             `http://localhost:8000/api/orders/${orderId}`,
    //             {
    //                 headers,
    //             }
    //         );
    //         console.log(response.data);
    //         return response.data;
    //     }
    // );

    // if (isLoading) {
    //     return (
    //         <div className="d-flex justify-content-center mt-2">
    //             <div className="spinner-border" role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     );
    // }

    // if (isError) {
    //     return <div>Error fetching order details</div>;
    // }

    // const { order, delivery, msg } = data;

    const order = {
        id: 123,
        paymentMethod: "Credit Card",
        billingAddress: {
            name: "John Doe",
            address: "123 Main St",
            city: "Anytown",
            zipCode: "12345",
        },
        shippingAddress: {
            name: "John Doe",
            address: "123 Main St",
            city: "Anytown",
            zipCode: "12345",
        },
        email: "john@example.com",
        phone: "123-456-7890",
        products: [
            { name: "Product 1", price: 10, quantity: 2, subtotal: 20 },
            { name: "Product 2", price: 15, quantity: 1, subtotal: 15 },
        ],
        subtotal: 35,
        discount: 0,
        shipping: 5,
        total: 40,
        status: "Pending",
    };

    return (
        <div className="container">
            <div className="row">
                <h2 className="my-4">Order Details</h2>
            </div>
            <div className="row border d-flex justify-content-center">
                <div className="col-5 border mt-3 ms-3">
                    <p>
                        Shipping Address: <br />
                        {order.shippingAddress.name} <br />
                        {order.shippingAddress.address} <br />
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.zipCode}
                    </p>
                    <p>Email: {order.email}</p>
                    <p>Phone: {order.phone}</p>
                </div>
                <div className="col-6 align-content-center border mt-3 ms-5">
                    <div className="d-flex mt-2">
                        <div className="me-5 ms-2">
                            <p className="review">Order ID:</p>
                            <p>{order.id}</p>
                        </div>
                        <div className="vr"></div>
                        <div className="ms-5">
                            <p className="review">Payment Method:</p>
                            <p>Credit Card</p>
                        </div>
                    </div>
                    <hr />
                    <div className="p-3">
                        <p className="d-flex justify-content-between review">
                            Subtotal: <strong>{order.subtotal}</strong>
                        </p>
                        <p className="d-flex justify-content-between review">
                            Discount: <strong>{order.discount}</strong>
                        </p>
                        <p className="d-flex justify-content-between review">
                            Shipping: <strong>{order.shipping}</strong>
                        </p>
                        <p className="d-flex justify-content-between review">
                            Total: <strong>{order.total}</strong>
                        </p>
                        <p className="d-flex justify-content-between review">
                            Order Status: <strong>{order.status}</strong>
                        </p>
                    </div>
                </div>

                <div className="table-container mt-3">
                    <Table borderless>
                        <thead>
                            <tr className="table-secondary">
                                <th className="text-uppercase">Product</th>
                                <th className="text-uppercase">Price</th>
                                <th className="text-uppercase">Quantity</th>
                                <th className="text-uppercase">Suptotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.shipping_date}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
