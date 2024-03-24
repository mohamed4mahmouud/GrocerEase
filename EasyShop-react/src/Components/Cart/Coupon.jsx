import axios from "axios";
import style from "./Cart.module.css";
import { useFormik } from "formik";

export const Coupon = ({ subtotal }) => {
    const couponSubmit = async (values) => {
        let { data } = await axios.put(
            `http://127.0.0.1:8000/api/coupons`,
            values
        );
        if (data.message === "success") {
            let priceAfterDiscount = subtotal + data.discountedPrice;
            console.log(subtotal);
        }
        console.log(data);
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
            </form>
        </>
    );
};
