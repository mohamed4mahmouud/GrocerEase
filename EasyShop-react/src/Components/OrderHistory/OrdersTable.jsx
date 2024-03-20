import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./OrdersTable.module.css";

// Define OrdersTable component
export const OrdersTable = ({ orders }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 5;

    // Logic for displaying orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Logic for rendering page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(orders.length / ordersPerPage); i++) {
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
                // style={{
                //     color: currentPage === number ? "white" : "black",
                //     backgroundColor:
                //         currentPage === number ? "blue" : "transparent",
                // }}
            >
                {number}
            </button>
        </li>
    ));

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < Math.ceil(orders.length / ordersPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className="container border rounded-2 p-0 mt-5">
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
                                    <td>{order.date}</td>
                                    <td>{order.total}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <Link
                                            className="text-decoration-none"
                                            to="#"
                                            style={{ color: '#3BB77E' }}
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
                                    Math.ceil(orders.length / ordersPerPage)
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
