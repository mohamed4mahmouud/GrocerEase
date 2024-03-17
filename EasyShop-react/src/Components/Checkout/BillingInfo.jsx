import { useContext, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { OrderSummery } from "./Order Summery";
import { PaymentContext } from "../../Context/paymentContext";

export const BillingInfo = () => {
    let { stripePayment } = useContext(PaymentContext);

    async function paymentSubmit(values) {
        let response = await stripePayment(
            "13",
            "http://localhost:3000",
            values
        );
        console.log(response?.data.session.url);
        window.location.href = response?.data.session.url;
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        address: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        zip: Yup.string().required("Required"),
        paymentMethod: Yup.string().required("Required"),
        // ccName: Yup.string().required("Required"),
        // ccNumber: Yup.string().required("Required"),
        // ccExpiration: Yup.string().required("Required"),
        // ccCvv: Yup.string().required("Required"),
    });

    let formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            country: "",
            state: "",
            zip: "",
            paymentMethod: "",
            // ccName: "",
            // ccNumber: "",
            // ccExpiration: "",
            // ccCvv: "",
            // notes: "",
        },
        validationSchema,
        onSubmit: paymentSubmit,
    });
    return (
        <>
            <div className="checkout">
                <section className="py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row">
                            <OrderSummery />
                            <div className="col-md-8 order-md-1">
                                <h4 className="mb-3">Billing Information</h4>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label
                                                htmlFor="firstName"
                                                className="form-label"
                                            >
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Your first name"
                                                value={formik.values.firstName}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                required
                                            />
                                            {formik.touched.firstName &&
                                                formik.errors.firstName && (
                                                    <div className="invalid-feedback">
                                                        {
                                                            formik.errors
                                                                .firstName
                                                        }
                                                    </div>
                                                )}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label
                                                htmlFor="lastName"
                                                className="form-label"
                                            >
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Your last name"
                                                value={formik.values.lastName}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                required
                                            />
                                            {formik.touched.lastName &&
                                                formik.errors.lastName && (
                                                    <div className="invalid-feedback">
                                                        {formik.errors.lastName}
                                                    </div>
                                                )}
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="email"
                                                className="form-label"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="you@example.com"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                required
                                            />
                                            {formik.touched.email &&
                                                formik.errors.email && (
                                                    <div className="invalid-feedback">
                                                        {formik.errors.email}
                                                    </div>
                                                )}
                                        </div>
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
                                            {formik.touched.address &&
                                                formik.errors.address && (
                                                    <div className="invalid-feedback">
                                                        {formik.errors.address}
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5 mb-3">
                                            <label
                                                htmlFor="country"
                                                className="form-label"
                                            >
                                                Country / Region
                                            </label>
                                            <select
                                                as="select"
                                                className="form-select d-block w-100"
                                                id="country"
                                                name="country"
                                                value={formik.values.country}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                required
                                            >
                                                <option value="">Select</option>
                                                <option>United States</option>
                                            </select>
                                            {formik.touched.country &&
                                                formik.errors.country && (
                                                    <div className="invalid-feedback">
                                                        {formik.errors.country}
                                                    </div>
                                                )}
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label
                                                htmlFor="state"
                                                className="form-label"
                                            >
                                                States
                                            </label>
                                            <select
                                                as="select"
                                                className="form-select d-block w-100"
                                                id="state"
                                                name="state"
                                                value={formik.values.state}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                required
                                            >
                                                <option value="">Select</option>
                                                <option>California</option>
                                            </select>
                                            {formik.touched.state &&
                                                formik.errors.state && (
                                                    <div className="invalid-feedback">
                                                        {formik.errors.state}
                                                    </div>
                                                )}
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label
                                                htmlFor="zip"
                                                className="form-label"
                                            >
                                                Zip Code
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zip"
                                                name="zip"
                                                placeholder="Zip Code"
                                                value={formik.values.zip}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                required
                                            />
                                            {formik.touched.zip &&
                                                formik.errors.zip && (
                                                    <div className="invalid-feedback">
                                                        {formik.errors.zip}
                                                    </div>
                                                )}
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="same-address"
                                                name="sameAddress"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="same-address"
                                            >
                                                Ship to a different address
                                            </label>
                                        </div>
                                        <hr className="mb-4" />
                                        <h4 className="mb-3">
                                            Additional Info
                                        </h4>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="notes"
                                                className="form-label"
                                            >
                                                Order Notes{" "}
                                                <span className="text-muted">
                                                    (Optional)
                                                </span>
                                            </label>
                                            <textarea
                                                as="textarea"
                                                className="form-control"
                                                id="notes"
                                                name="notes"
                                                placeholder="Notes about your order, e.g. special notes for delivery"
                                                value={formik.values.notes}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.notes &&
                                                formik.errors.notes && (
                                                    <div className="invalid-feedback">
                                                        {formik.errors.notes}
                                                    </div>
                                                )}
                                        </div>
                                        <hr className="mb-4" />
                                        <h4 className="mb-3">Payment</h4>
                                        <div className="d-block my-3">
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    id="credit"
                                                    name="paymentMethod"
                                                    className="form-check-input"
                                                    value={
                                                        formik.values
                                                            .paymentMethod
                                                    }
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    required
                                                />
                                                {formik.touched.paymentMethod &&
                                                    formik.errors
                                                        .paymentMethod && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                formik.errors
                                                                    .paymentMethod
                                                            }
                                                        </div>
                                                    )}
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="credit"
                                                >
                                                    Credit card
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    id="paypal"
                                                    name="paymentMethod"
                                                    className="form-check-input"
                                                    value={
                                                        formik.values
                                                            .paymentMethod
                                                    }
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    required
                                                />
                                                {formik.touched.paymentMethod &&
                                                    formik.errors
                                                        .paymentMethod && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                formik.errors
                                                                    .paymentMethod
                                                            }
                                                        </div>
                                                    )}
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="paypal"
                                                >
                                                    Paypal
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    id="cash"
                                                    name="paymentMethod"
                                                    className="form-check-input"
                                                    value={
                                                        formik.values
                                                            .paymentMethod
                                                    }
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    required
                                                />
                                                {formik.touched.paymentMethod &&
                                                    formik.errors
                                                        .paymentMethod && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                formik.errors
                                                                    .paymentMethod
                                                            }
                                                        </div>
                                                    )}
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="cash"
                                                >
                                                    Cash on Delivery
                                                </label>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label
                                                    htmlFor="cc-name"
                                                    className="form-label"
                                                >
                                                    Name on card
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cc-name"
                                                    name="ccName"
                                                    placeholder=""
                                                    value={formik.values.ccName}
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    required
                                                />
                                                {formik.touched.ccName &&
                                                    formik.errors.ccName && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                formik.errors
                                                                    .ccName
                                                            }
                                                        </div>
                                                    )}
                                                <small className="text-muted">
                                                    Full name as displayed on
                                                    card
                                                </small>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label
                                                    htmlFor="cc-number"
                                                    className="form-label"
                                                >
                                                    Credit card number
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cc-number"
                                                    name="ccNumber"
                                                    placeholder=""
                                                    value={
                                                        formik.values.ccNumber
                                                    }
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    required
                                                />
                                                {formik.touched.ccNumber &&
                                                    formik.errors.ccNumber && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                formik.errors
                                                                    .ccNumber
                                                            }
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 mb-3">
                                                <label
                                                    htmlFor="cc-expiration"
                                                    className="form-label"
                                                >
                                                    Expiration
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cc-expiration"
                                                    name="ccExpiration"
                                                    placeholder=""
                                                    value={
                                                        formik.values
                                                            .ccExpiration
                                                    }
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    required
                                                />
                                                {formik.touched.ccExpiration &&
                                                    formik.errors
                                                        .ccExpiration && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                formik.errors
                                                                    .ccExpiration
                                                            }
                                                        </div>
                                                    )}
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label
                                                    htmlFor="cc-cvv"
                                                    className="form-label"
                                                >
                                                    CVV
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cc-cvv"
                                                    name="ccCvv"
                                                    placeholder=""
                                                    value={formik.values.ccCvv}
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    required
                                                />

                                                {formik.touched.ccCvv &&
                                                    formik.errors.ccCvv && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                formik.errors
                                                                    .ccCvv
                                                            }
                                                        </div>
                                                    )}
                                            </div> */}
                                        {/* </div> */}
                                    </div>
                                    <button
                                        className="btn px-4 rounded-pill greencart text-white fw-medium"
                                        type="submit"
                                        // disabled={
                                        //     !(formik.isValid && formik.dirty)
                                        // }
                                    >
                                        Place Order
                                    </button>
                                    {/* {error && (
                                        <div className="text-danger mt-3">
                                            {error}
                                        </div>
                                    )} */}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
