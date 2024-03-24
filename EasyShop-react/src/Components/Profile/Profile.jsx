import React, { Fragment, useEffect, useState } from "react";
import style from "./Profile.module.css";
import { Link } from "react-router-dom";
import ProfileNav from "./ProfileNav/ProfileNav";
import Delivery from "../Delivery/Delivery";
import axios from "axios";
import { useQuery } from "react-query";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [recentOrders, setRecentOrders] = useState([]);

    const {
        isLoading,
        isError,
        data: userData,
    } = useQuery("userData", fetchUserData);
    const {
        isLoading: ordersLoading,
        isError: ordersError,
        data: ordersData,
    } = useQuery("recentOrders", fetchRecentOrders);

    async function fetchUserData() {
        const response = await axios.get("http://localhost:8000/api/user", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    }

    async function fetchRecentOrders() {
        const response = await axios.post("http://localhost:8000/api/orders");
        const orders = response.data.orders;
        const lastTwoOrders = orders.slice(Math.max(orders.length - 2, 0));
        return lastTwoOrders;
    }

    useEffect(() => {
        if (userData) setUser(userData);
        if (ordersData) setRecentOrders(ordersData);
    }, [userData, ordersData]);

    return (
        <Fragment>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileNav />
                    </div>
                    <div className="col-md-9 ">
                        {isLoading || ordersLoading ? (
                            <div className="row justify-content-center">
                                <div className="col-md-4 order-md-2 mb-4">
                                    <div className="d-flex justify-content-center align-items-center mb-3">
                                        <div
                                            className="spinner-border checkout"
                                            role="status"
                                        >
                                            <span className="visually-hidden">
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col-md-6">
                                    <div
                                        className={`${style.cardHeight} card d-flex align-items-center shadow flex-column`}
                                    >
                                        {user && (
                                            <>
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                                    className="rounded-circle mt-4"
                                                    width={150}
                                                    alt="Avatar"
                                                />
                                                <p className="h3">
                                                    {user.name}
                                                </p>
                                                <p className="h5 text-muted">
                                                    {user.role}
                                                </p>
                                                <Link
                                                    to="/profileEdit"
                                                    className={`${style.orange} text-decoration-none h6`}
                                                >
                                                    Edit Profile
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div
                                        className={`${style.cardHeight} card shadow text-start d-flex flex-column`}
                                    >
                                        <div className="ms-4">
                                            <p className="h6 mt-4 mb-2">
                                                BILLING ADDRESS
                                            </p>
                                            {user && (
                                                <>
                                                    <p className="mt-3 h3 mb-2">
                                                        {user.name}
                                                    </p>
                                                    <p className="mt-3 h6 nb-2">
                                                        {user.address}
                                                    </p>
                                                    <p className="mt-3 h6 mb-2">
                                                        {user.email}
                                                    </p>
                                                    <p className="mt-3 h6 mb-4">
                                                        (+20) {user.phone}
                                                    </p>
                                                    <Link
                                                        to="/profileEdit"
                                                        className={`${style.orange} text-decoration-none h6`}
                                                    >
                                                        Edit Address
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="card mt-4 shadow">
                            <div
                                className={`${style.cardHeader} card-header d-flex justify-content-between align-items-center`}
                            >
                                <div className="d-flex align-items-center">
                                    <p className="h3 m-0">
                                        Recent Order History
                                    </p>
                                </div>
                                <div>
                                    <Link
                                        to="/myOrder"
                                        className={`${style.orange} m-0 text-decoration-none h6`}
                                    >
                                        View All
                                    </Link>
                                </div>
                            </div>
                            <div className="card-header">
                                <div className="d-flex">
                                    <p className="h6 col-md-2 text-start">
                                        ORDER ID
                                    </p>
                                    <p className="h6 col-md-3">DATE</p>
                                    <p className="h6 col-md-3">TOTAL</p>
                                    <p className="h6 col-md-2">STATUS</p>
                                    <p className="h6 col-md-2"></p>
                                </div>
                            </div>
                            <div className="card-body d-flex">
                                <table className="col-md-12">
                                    <tbody>
                                        {recentOrders.map((order) => (
                                            <tr key={order.id}>
                                                <td className=" col-md-2 text-start ps-3">
                                                    <p>{order.id}</p>
                                                </td>
                                                <td className=" col-md-3">
                                                    <p>{order.shipping_date}</p>
                                                </td>
                                                <td className=" col-md-3">
                                                    <p>{order.price}</p>
                                                </td>
                                                <td className=" col-md-2">
                                                    <p>{order.status}</p>
                                                </td>
                                                <td className=" col-md-2 text-end h6 pb-3">
                                                    <Link
                                                        to={`/orders/${order.id}`}
                                                        className={`${style.orange} text-decoration-none `}
                                                    >
                                                        View Details
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card mt-4 shadow">
                            <Delivery />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
