import React from "react";
import { useParams } from "react-router-dom";
import OrderDetails from "./OrderDetails";

const OrderDetailsWrapper = () => {
    const { orderId } = useParams();

    return <OrderDetails orderId={orderId} />;
};

export default OrderDetailsWrapper;
