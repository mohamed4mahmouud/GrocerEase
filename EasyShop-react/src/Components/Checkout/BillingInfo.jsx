import { useContext, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { OrderSummery } from "./Order Summery";
import { PaymentContext } from "../../Context/paymentContext";

export const Checkout = () => {
    let { CardPayment, cartId } = useContext(PaymentContext);

    async function checkoutSubmit(values) {
        console.log("Values:", values);
        let response = await CardPayment(
            cartId,
            values,
            "http://localhost:3000"
        );
        console.log(response?.data.session.url);
        window.location.href = response?.data.session.url;
    }

    let formik = useFormik({
        initialValues: {
            address: "",
        },
        validationSchema: Yup.object({
            address: Yup.string().required("Shipping address is required"),
        }),
        onSubmit: checkoutSubmit,
    });
    return (
        <>
            <div className="checkout">
                <section className="py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row">
                            {/* <OrderSummery /> */}
                            <div className="col-md-8 order-md-1">
                                <h4 className="mb-3">Billing Information</h4>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="address"
                                                className="form-label"
                                            >
                                                Street Address
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                placeholder="1234 Main St"
                                                value={formik.values.address}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                required
                                            />
                                            {/* {formik.touched.address &&
                                                formik.errors.address && (
                                                    <div className="invalid-feedback">
                                                        {formik.errors.address}
                                                    </div>
                                                )} */}
                                        </div>
                                    </div>
                                    <button
                                        className="btn px-4 rounded-pill greencart text-white fw-medium"
                                        type="submit"
                                    >
                                        Place Order
                                    </button>
                                </form>
                            </div>
                            <OrderSummery />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
