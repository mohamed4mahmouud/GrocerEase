import { Fragment } from "react";
import { useFormik } from "formik";
import style from "./SignUp.module.css"

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
            
            <div className={`${style.wrapper} col-md-4 shadow rounded mt-4`}>
                <div className="container ">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="mt-3">
                            <h3 className={`${style.colorPrim} mr-3`}>Talabatk Eh</h3>
                        </div>
                        <div className="ms-2">
                            <img src="../../images/logo.png" alt="" height={70} />
                        </div>
                    </div>
                    <div className="ms-5">
                        <div className="mt-4 ">
                            <p>
                                Do you want to get all you need when you need!!!
                                <br />
                                Join Us :)
                            </p>
                        </div>
                        <div >
                            <h1 className={`${style.colorPrim} mb-4`}>Register</h1>
                        </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                className={`${style.customWidth90} form-control  mb-2`}
                                id="fullName"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className={`${style.customWidth90} form-control  mb-2`}
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="tel"
                                className={`${style.customWidth90} form-control  mb-2`}
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Enter phone number"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Address</label>
                            <input
                                type="tel"
                                className={`${style.customWidth90} form-control  mb-2`}
                                id="address"
                                name="address"
                                placeholder="Enter your adress"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className={`${style.customWidth90} form-control  mb-2`}
                                id="password"
                                name="password"
                                placeholder="Enter your Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                className={`${style.customWidth90} form-control  mb-2`}
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your Password"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className={`${style.customWidth90} btn btn-primary  mt-2 mb-2`}
                        >
                            REGISTER &#8594;
                        </button>
                    </form>
                    </div>
                    <div className="text-center ">
                        <p>
                            already have an account?{" "}
                            <a
                                href=""
                                className={`${style.colorSec} text-decoration-none text-reset fw-bold`}
                            >
                                Login
                            </a>
                        </p>
                        </div>
                    <div className="text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className={style.linethrough}>
                                        <span className={style.line}></span>
                                        <span className={`${style.word} ${style.colorSec} fw-bold`}>
                                            OR SIGN UP WITH
                                        </span>
                                        <span className={style.line}></span>
                                    </div>
                                    <div className="mt-2 mb-3">
                                        <a href=""><img src="../../images/google.png" alt="sdgsd" height={30} /></a>
                                        <a href=""><img src="../../images/facebook.png" alt="sdgsd" height={30} className="ms-4"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.footerLine} mt-4`}>
                <span>
                    .
                </span>
            </div>
            <div className={style.image}>
                <img src="../../images/reg.png" alt="ffffff" />
            </div>
            
            
        </Fragment>
    );
};

