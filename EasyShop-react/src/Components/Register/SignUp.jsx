import { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SignUp = () => {
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    let validateSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .max(15, "Name must be at most 15 characters")
            .required("name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("email is required"),
        phone: Yup.string()
            .matches(phoneRegExp, "Phone number is invalid")
            .required("phone is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Please confirm your password"),
    });

    function registerSubmit(values) {
        console.log(values);
    }

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: validateSchema,
        onSubmit: registerSubmit,
    });

    return (
        <Fragment>
            <div className="w-75 mx-auto py-5">
                <h3>Register Now</h3>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        name="name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
