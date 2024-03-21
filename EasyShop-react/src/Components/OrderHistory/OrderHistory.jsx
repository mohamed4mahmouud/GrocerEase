import React, { useState, useEffect } from "react";
import axios from "axios";
import { OrdersTable } from "./OrdersTable";
import ProfileNav from "../Profile/ProfileNav/ProfileNav";

export default function OrderHistory() {

    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col-md-3">
                    <ProfileNav />
                </div>
                <div className="col-md-9">
                    <OrdersTable />
                </div>
            </div>
        </div>
    );
}
