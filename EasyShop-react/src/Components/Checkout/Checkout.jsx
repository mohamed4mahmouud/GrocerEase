import React from "react";
import { BillingInfo } from "./BillingInfo";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export const Checkout = () => {
    // const stripePromise = loadStripe("pk_test_51OuwZ7P4QXY6vJt9m9okfqgidkB8sveYygAgUK285FabkOcXWjUyDTKsWuBzNjKen5GZfuVrYebJEM0sPOFCtNbM00u5VRBGR7");
    
    return (
        <>
            {/* <Elements stripe={stripePromise}> */}
                <BillingInfo />
            {/* </Elements> */}
        </>
    );
};
