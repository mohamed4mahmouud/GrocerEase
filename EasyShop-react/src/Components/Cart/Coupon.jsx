import axios from "axios";
import style from "./Cart.module.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updatePriceAfterCoupon } from "../../redux/Actions/action";
import { useState } from "react";

export const Coupon = (props) => {
    const dispatch = useDispatch();
    let [message, setMessage] = useState(null);
    let [error, setError] = useState(null);

    const couponSubmit = async (values) => {
        let { data } = await axios.put(
            `http://127.0.0.1:8000/api/coupons`,
            values
        );
        if (data.message === "success") {
            let priceAfterDiscount = props.data + data.discountedPrice;
            dispatch(updatePriceAfterCoupon(priceAfterDiscount));
            setMessage("Coupon Applied");
        }
        //console.log(data);
    };
    let formik = useFormik({
        initialValues: {
            coupon: "",
        },
        onSubmit: couponSubmit,
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="input-group mb-3">
                    <h5 className="mt-2">Coupon Code</h5>
                    <input
                        type="text"
                        className="form-control rounded-5 ms-2 "
                        placeholder="Enter coupon code"
                        name="coupon"
                        onChange={formik.handleChange}
                    />
                    <button
                        className={`${style.coupon} rounded-5 text-white`}
                        type="submit"
                    >
                        Apply coupon
                    </button>
                </div>
                {message ? (
                    <div className="alert alert-success">{message}</div>
                ) : null}
                {error ? (
                    <div className="alert alert-danger">{error}</div>
                ) : null}
            </form>
        </>
    );
};
