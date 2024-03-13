import { Fragment } from "react";
import { useFormik } from "formik";

export const SignUp = () => {
    function registerSubmit(values) {
        console.log(values);
    }

    let formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: registerSubmit,
    });

    return (
        <Fragment>
            <div className="w-75 mx-auto py-5">
                <h3>Register Now</h3>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        name="fullName"
                        id="fullName"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control mb-2"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        className="form-control mb-2"
                        name="phone"
                        id="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <label htmlFor="address">Address</label>
                    <input
                        type="tel"
                        className="form-control mb-2"
                        name="address"
                        id="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control mb-2"
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <label htmlFor="confirmPassword"> Confirm Password</label>
                    <input
                        type="confirmPassword"
                        className="form-control mb-2"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <button
                        className="btn btn-primary text-white mt-2"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </Fragment>
    );
};
