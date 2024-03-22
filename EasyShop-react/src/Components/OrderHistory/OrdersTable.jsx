import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./OrdersTable.module.css";
import axios from "axios";
import { useQuery } from "react-query";

export const OrdersTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 5;

    const {
        data: orders,
        isLoading,
        isError,
    } = useQuery("orders", async () => {
        const response = await axios.post(`http://localhost:8000/api/orders`);
        console.log("Orders: ", response);
        return response.data;
    });
    console.log(orders?.orders);

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders?.orders
        ? orders?.orders.slice(indexOfFirstOrder, indexOfLastOrder)
        : [];

    const pageNumbers = [];
    for (
        let i = 1;
        i <= Math.ceil((orders ? orders?.orders.length : 0) / ordersPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => (
        <li key={number} className={styles.pageItem}>
            <button
                href="#!"
                className={`${styles.pageLink} ${
                    currentPage === number ? styles.active : ""
                }`}
                onClick={() => setCurrentPage(number)}
            >
                {number}
            </button>
        </li>
    ));

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            console.log("Current Page: ", currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (
            currentPage <
            Math.ceil((orders ? orders?.orders.length : 0) / ordersPerPage)
        ) {
            setCurrentPage(currentPage + 1);
            console.log("Current Page: ", currentPage + 1);
        }
    };

    if (isLoading)
        return (
            <div className="d-flex justify-content-center mt-2">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    if (isError) return <div>Error fetching orders</div>;

    return (
        <>
            <div className="container border rounded-2 p-0">
                <h5 className="mt-3 mb-3 ms-3">Order History</h5>
                <div className="table-container">
                    <Table borderless>
                        <thead>
                            <tr className="table-secondary">
                                <th className="text-uppercase">Order ID</th>
                                <th className="text-uppercase">Date</th>
                                <th className="text-uppercase">Total</th>
                                <th className="text-uppercase">Status</th>
                                <th className="text-uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.shipping_date}</td>
                                    <td>{order.price}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <Link
                                            className="text-decoration-none"
                                            to={`/orders/${order.id}`}
                                            style={{ color: "#3BB77E" }}
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <nav>
                    <ul
                        className={`pagination justify-content-center ${styles.pagination}`}
                    >
                        <li className={styles.pageItem}>
                            <button
                                className={`${styles.pageLink} ${styles.paginationArrow}`}
                                onClick={goToPrevPage}
                                disabled={currentPage === 1}
                            >
                                {"<"}
                            </button>
                        </li>
                        {renderPageNumbers}
                        <li className={styles.pageItem}>
                            <button
                                className={`${styles.pageLink} ${styles.paginationArrow}`}
                                onClick={goToNextPage}
                                disabled={
                                    currentPage ===
                                    Math.ceil(
                                        (orders ? orders?.orders.length : 0) /
                                            ordersPerPage
                                    )
                                }
                            >
                                {">"}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
