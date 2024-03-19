import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getCart } from "../Components/Cart/Cart";

export const PaymentContext = createContext();

let userToken = localStorage.getItem("userToken");
let headers = {
    token: userToken,
};

async function CardPayment(values, cartId) {
    console.log(cartId);
    // console.log('context values:',values)
    return await axios
        .post(
            `http://localhost:8000/checkout/${cartId}/${values.shipping_address}`,
            {
                shipping_address: values,
            },
            { headers }
        )
        .then((response) => response)
        .catch((err) => err);
}

export default function PaymentContextProvider(props) {
    const [cartId, setCartId] = useState(null);

    async function fetchCartId() {
        try {
            const response = await getCart();
            console.log("Cart response:", response);
            const cartItems = response?.data?.cart;
            if (cartItems && cartItems.length > 0) {
                const cartId = cartItems[0].cart_id;
                console.log("Cart Id:", cartId);
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
