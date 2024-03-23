import React from "react";
import style from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/Actions/action";

export default function TableRow({ cartItem }) {
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId)); // Dispatch action to remove item
    };

    return (
        <tr className="border">
            <td>
                <img
                    src={cartItem.image}
                    alt=""
                    className={`${style.productImg}`}
                />
                <span>{cartItem.title}</span>
            </td>
            <td>{cartItem.price * cartItem.quantity}</td>
            <td>{cartItem.quantity}</td>
            <td>
                <button
                    href=""
                    className="btn rounded-circle text-reset text-decoration-none"
                    onClick={() => {
                        handleRemove(cartItem.id);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-x-circle "
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            </td>
        </tr>
    );
}
