import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getCart } from "../Components/Cart/Cart";

export const PaymentContext = createContext();

let userToken = localStorage.getItem("userToken");
let headers = {
    token: userToken,
};

function stripePayment(cartId, values, url) {
    return axios
        .post(
            `http://localhost:8000/checkout/${cartId}?url=${url}`,
            {
                shippingAddress: values,
            },
            { headers }
        )
        .then((response) => response)
        .catch((err) => err);
}

export default function PaymentContextProvider(props) {
    const [cartId, setCartId] = useState(null);

    useEffect(() => {
        const fetchCartId = async () => {
            try {
                const response = await getCart();
                const cartId = response.data.cartId;
                setCartId(cartId);
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };

        fetchCartId();
    }, []);

    return (
        <PaymentContext.Provider value={{ stripePayment, cartId }}>
            {props.children}
        </PaymentContext.Provider>
    );
}
