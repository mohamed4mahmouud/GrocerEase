import React, { useState } from "react";
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
            <div className="row border">
                <div className="col-4 border mt-3 ms-3">
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
                <div className="col-4 align-content-center">
                    <div className="d-flex justify-content-between mt-2">
                        <p>Order ID: {order.id}</p>
                        <p>Payment Method: {order.paymentMethod}</p>
                    </div>
                    <hr />
                    <p>
                        Subtotal: <strong>{order.subtotal}</strong>
                    </p>
                    <p>
                        Discount: <strong>{order.discount}</strong>
                    </p>
                    <p>
                        Shipping: <strong>{order.shipping}</strong>
                    </p>
                    <p>
                        Total: <strong>{order.total}</strong>
                    </p>
                    <p>Order Status: {order.status}</p>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.subtotal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetails;
