import { useContext, useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { OrderSummery } from "./Order Summery";
import axios from "axios";
import { useSelector } from "react-redux";

export const Checkout = () => {
    const [shipping_address, setShippingAddress] = useState("");
    const handleChange = (event) => {
        setShippingAddress(event.target.value);
    };
    const [user, setUser] = useState("");
    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/user`,
                    {
                        headers: {
                            token: localStorage.getItem("userToken"),
                        },
                    }
                );
                setUser(response.data.id);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
        getUser();
    }, []);
    const cartItems = useSelector((state) => state.cartItems);
    const serializedCartItems = JSON.stringify(cartItems);

    const [cartProduct, setCartProduct] = useState([]);
    const shopId = cartItems.map((item) => item.shop_id);
    const cartId = cartItems.map((item) => item.id);
    useEffect(() => {
        const storedCart = JSON.parse(sessionStorage.getItem("cartState"));
        if (storedCart) {
            setCartProduct(storedCart.cartItems);
        }
    }, []);

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
                                                    value={shipping_address}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <a
                                            className="btn greencart text-white fw-semibold"
                                            style={{ borderRadius: "20px" }}
                                            href={`http://localhost:8000/checkout?cartItems=${serializedCartItems}&shipping_address=${shipping_address}&user=${user}&shopId=${shopId}`}
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
