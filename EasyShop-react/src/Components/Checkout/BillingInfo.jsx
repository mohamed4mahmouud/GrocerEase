import { useContext, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { OrderSummery } from "./Order Summery";
import { PaymentContext } from "../../Context/paymentContext";
import axios from "axios";

export const Checkout = () => {
    const { cartId, shopId } = useContext(PaymentContext);

    const [shippingAddress, setShippingAddress] = useState("");
    const handleChange = (event) => {
        setShippingAddress(event.target.value);
    };
    let userToken = localStorage.getItem("userToken");
    let headers = {
        token: userToken,
    };
    const [user, setUser] = useState("");
    async function getUser() {
        let response = await axios.get(`http://localhost:8000/api/user`, {
            headers,
        });
        setUser(response.data.id);
    }
    getUser();
    return (
        <div className="checkout">
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row">
                        <OrderSummery />
                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Billing Information</h4>
                            <Formik>
                                {(formik) => (
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="row">
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="shipping_address"
                                                    className="form-label"
                                                >
                                                    Your Address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="shipping_address"
                                                    name="shipping_address"
                                                    placeholder="1234 Main St"
                                                    value={shippingAddress}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <a
                                            className="btn greencart text-white fw-semibold"
                                            style={{ borderRadius: "20px" }}
                                            href={`http://localhost:8000/checkout/${cartId}/${shippingAddress}/${user}/${shopId}`}
                                        >
                                            Place order
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
