import React from "react";
import { OrdersTable } from "./OrdersTable";

export default function OrderHistory() {
    // Dummy orders data for testing
    const orders = [
        { id: 1, date: "2024-03-19", total: 100, status: "Pending" },
        { id: 2, date: "2024-03-20", total: 150, status: "Completed" },
        { id: 3, date: "2024-03-20", total: 150, status: "Completed" },
        { id: 4, date: "2024-03-20", total: 150, status: "Completed" },
        { id: 5, date: "2024-03-20", total: 150, status: "Completed" },
        { id: 6, date: "2024-03-20", total: 150, status: "Completed" },
        { id: 7, date: "2024-03-20", total: 150, status: "Completed" },
        { id: 8, date: "2024-03-20", total: 150, status: "Completed" },
        // Add more orders as needed
    ];

    // Use the OrdersTable component here
    return (
        <div>
            <OrdersTable orders={orders} />
        </div>
    );
}
