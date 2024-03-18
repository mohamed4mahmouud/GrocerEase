import axios from "axios";
import React, { createContext } from "react";

export const PaymentContext = createContext();

let userToken = localStorage.getItem('userToken');
let headers = {
    token: userToken
}

function stripePayment(cartId, values, url) {
    return axios.post(`http://localhost:8000/checkout/${cartId}?url=${url}`,
        {
            shippingAddress: values
        }, 
        { headers }
        )
        .then((response) => response)
        .catch((err) => err)
}

export default function PaymentContextProvider(props) {
    return <PaymentContext.Provider value={{stripePayment}}>
        {props.children}
    </PaymentContext.Provider>
}
