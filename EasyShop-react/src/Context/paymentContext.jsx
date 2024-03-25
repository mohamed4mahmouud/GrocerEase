import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getCart } from "../Components/Cart/Cart";

export const PaymentContext = createContext();

let userToken = localStorage.getItem("userToken");
let headers = {
    token: userToken,
};

async function CardPayment(cartId, shipping_address) {
    let response = await axios.get(
        `http://localhost:8000/checkout/${cartId}`,
        {
            shipping_address: shipping_address,
        },
        { headers }
    );
}

export default function PaymentContextProvider(props) {
    const [cartId, setCartId] = useState(null);

    async function fetchCartId() {
        try {
            const response = await getCart();
            const cartItems = response?.data?.cart;
            if (cartItems && cartItems.length > 0) {
                const { cart_id: cartId } = cartItems[0];
                setCartId(cartId);
            } else {
                console.error("Cart is empty or undefined");
            }
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    }
    useEffect(() => {
        fetchCartId();
    }, []);

    return (
        <PaymentContext.Provider value={{ CardPayment, cartId }}>
            {props.children}
        </PaymentContext.Provider>
    );
}
