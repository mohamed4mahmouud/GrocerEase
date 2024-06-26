import { Fragment, useContext, useState } from "react";
import style from "../Register/SignUp.module.css";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import style2 from "./Login.module.css";
import { userContext } from "../../Context/UserContext";

export default function Login() {
    let navigate = useNavigate();

    let { setToken } = useContext(userContext);

    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    let validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("email is required"),

        password: Yup.string().required("password is required"),
    });

    async function loginSubmit(values) {
        setisLoading(true);
        let { data } = await axios
            .post(`http://localhost:8000/api/auth/login`, values)
            .catch((err) => {
                setisLoading(false);
                setError(err.response.data.message);
            });

        if (data.msg === "success") {
            setisLoading(false);
            let token = data.accessToken.split("|")[1];
            localStorage.setItem("userToken", token);
            setToken(token);
            navigate("/");
        }
    }

    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: loginSubmit,
    });

    useEffect(() => {
        document.body.style.background =
            "linear-gradient(to right, white 0%, white 60%, #DEF9EC 60%, #DEF9EC 100%)";

        return () => {
            document.body.style.background = "";
        };
    }, []);

    return (
        <Fragment>
            <div className={`${style.wrapper} col-md-4 shadow rounded mt-5`}>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="mt-3">
                            <h3 className={`${style.colorPrim} mr-3`}>
                                GrocerEase
                            </h3>
                        </div>
                        <div className="ms-2">
                            <img
                                src="../../images/logo.png"
                                alt=""
                                height={70}
                            />
                        </div>
                    </div>
                    <div className="ms-5">
                        <div className="mt-1">
                            <p>Welcome back !!!</p>
                        </div>
                        <div>
                            <h1 className={`${style.colorPrim} mb-2 fw-bold`}>
                                Log in
                            </h1>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className={`${style.customWidth90} form-control  mb-2`}
                                    id="email"
                                    name="email"
                                    placeholder="Enter email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.errors.email && formik.touched.email ? (
                                <div className="text-danger text-decoration-none d-block me-5">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className={`${style.customWidth90} form-control  mb-2`}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            {formik.errors.password &&
                            formik.touched.password ? (
                                <div className="text-danger text-decoration-none d-block me-5">
                                    {formik.errors.password}
                                </div>
                            ) : null}
                                <Link className="text-end text-danger text-decoration-none d-block me-5" to="/forgetPassword">forgot password?</Link>
                            </div>
                            <button
                                type="submit"
                                className={`${style.customWidth90} btn btn-primary  mt-2 mb-2`}
                            >
                                {isLoading ? (
                                    <div className="d-flex justify-content-center mt-2">
                                        <div
                                            className="spinner-border"
                                            role="status"
                                        >
                                            <span className="visually-hidden">
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <span>Login</span>
                                )}
                                &#8594;
                            </button>
                            {error ? (
                                <div className="text-danger text-decoration-none d-block p-2 mt-2">
                                    {error}
                                </div>
                            ) : null}
                        </form>
                    </div>
                    <div className="text-center ">
                        <p>
                            I don't have an account ?
                            <Link
                                to="/register"
                                className={`${style.colorSec} text-decoration-none text-reset fw-bold ms-1`}
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className={style.linethrough}>
                                        <span className={style.line}></span>
                                        <span
                                            className={`${style.word} ${style.colorSec} fw-bold`}
                                        >
                                            OR SIGN IN WITH
                                        </span>
                                        <span className={style.line}></span>
                                    </div>
                                    <div className="mt-2 mb-3">
                                        <a href="">
                                            <img
                                                src="../../images/google.png"
                                                alt="google"
                                                height={30}
                                            />
                                        </a>
                                        <a href="">
                                            <img
                                                src="../../images/facebook.png"
                                                alt="facebook"
                                                height={30}
                                                className="ms-4"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.footerLine} mt-4`}>
                <span>.</span>
            </div>
            <div className={style2.image}>
                <img src="../../images/log.png" alt="woman_pic" />
            </div>
        </Fragment>
    );
}
