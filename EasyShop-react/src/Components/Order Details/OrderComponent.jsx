import React from "react";
import { useParams } from "react-router-dom";
import ProfileNav from "../Profile/ProfileNav/ProfileNav";
import OrderDetails from "./OrderDetails";

const OrderDetailsWrapper = () => {
    const { orderId } = useParams();

    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col-md-3">
                    <ProfileNav />
                </div>
                <div className="col-md-9">
                    <OrderDetails orderId={orderId} />
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsWrapper;
