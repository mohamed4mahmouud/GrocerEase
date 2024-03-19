import { useContext } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { OrderSummery } from "./Order Summery";
import { PaymentContext } from "../../Context/paymentContext";

export const Checkout = () => {
    const { CardPayment, cartId } = useContext(PaymentContext);

    const initialValues = {
        shipping_address: "",
    };

    const validationSchema = Yup.object({
        shipping_address: Yup.string().required("Shipping address is required"),
    });

    const checkoutSubmit = async (values) => {
        // console.log("Values:", values);
        try {
            const response = await CardPayment(cartId, values.shipping_address);
            // console.log(response?.data.session.url);
            // window.location.href = response?.data.session.url;
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    };

    return (
        <div className="checkout">
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row">
                        <OrderSummery />
                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Billing Information</h4>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={checkoutSubmit}
                            >
                                {(formik) => (
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="row">
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="shipping_address"
                                                    className="form-label"
                                                >
                                                    Street Address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="shipping_address"
                                                    name="shipping_address"
                                                    placeholder="1234 Main St"
                                                    value={
                                                        formik.values
                                                            .shipping_address
                                                    }
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    required
                                                />
                                                {formik.touched
                                                    .shipping_address &&
                                                    formik.errors
                                                        .shipping_address && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                formik.errors
                                                                    .shipping_address
                                                            }
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                        <a
                                            href={`http://localhost:8000/checkout?${cartId}`}
                                        >
                                            <button
                                                className="btn px-4 rounded-pill greencart text-white fw-medium"
                                                type="submit"
                                            >
                                                Place Order
                                            </button>
                                        </a>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
