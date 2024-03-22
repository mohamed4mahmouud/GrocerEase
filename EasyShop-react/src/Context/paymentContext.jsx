import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getCart } from "../Components/Cart/Cart";

export const PaymentContext = createContext();

let userToken = localStorage.getItem("userToken");
let headers = {
    token: userToken,
};

async function CardPayment(cartId, shipping_address) {
    // console.log(cartId);
    // console.log(shipping_address);
    // console.log('context values:',values)
    let response = await axios.get(
        `http://localhost:8000/checkout/${cartId}`,
        {
            shipping_address: shipping_address,
        },
        { headers }
    );
    console.log(response);
}

export default function PaymentContextProvider(props) {
    const [cartId, setCartId] = useState(null);
    const [shopId, setShopId] = useState(null);

    async function fetchCartId() {
        try {
            const response = await getCart();
            const cartItems = response?.data?.cart;
            if (cartItems && cartItems.length > 0) {
                const { cart_id: cartId, shop_id: shopId } = cartData[0];
                setCartId(cartId);
                setShopId(shopId);
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
        <PaymentContext.Provider value={{ CardPayment, cartId, shopId }}>
            {props.children}
        </PaymentContext.Provider>
    );
}
