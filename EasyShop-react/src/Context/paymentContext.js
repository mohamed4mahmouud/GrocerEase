import axios from "axios";
import React, { createContext } from "react";

export let PaymentContext = createContext();

let userToken = localStorage.getItem('userToken');
let headers = {
    token: userToken
}

function stripePayment(cartId, values) {
    return axios.post(`http://127.0.0.1:8000/api/payment/${cartId}?url=http://localhost:3000/`,
        {
            shippingAddress: values
        }, { headers }
            .then(((response) => response)
                .catch((err) => err)
            ))
}

export default function PaymentContextProvider(props) {
    return <PaymentContext.Provider value={{ stripePayment }}>
        {props.children}
    </PaymentContext.Provider>
}