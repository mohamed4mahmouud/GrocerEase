import { Fragment } from "react";
import { useFormik } from "formik";
import style from "./SignUp.module.css";
import * as Yup from "yup";
import React, { useEffect } from 'react';
import axios from "axios";

export const SignUp = () => {

    useEffect(() => {
        document.body.style.background = 'linear-gradient(to right, white 0%, white 60%, #DEF9EC 60%, #DEF9EC 100%)';
    
        return () => {
          document.body.style.background = ''; 
        };
      }, []);

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    let validateSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .max(50, "Name must be at most 50 characters")
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

    async function registerSubmit(values) {
     let response = await axios.post(`http://127.0.0.1:8000/api/auth/register`,values);
     console.log(response);
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
            <div className={`${style.wrapper} col-md-4 shadow rounded mt-5`}>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="mt-3">
                            <h3 className={`${style.colorPrim} mr-3`}>
                                Talabatk Eh
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
                            <p>
                                Do you want to get all you need when you need!!!
                                <br />
                                Join Us :)
                            </p>
                        </div>
                        <div>
                            <h1 className={`${style.colorPrim} mb-2 fw-bold`}>
                                Register
                            </h1>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    className={`${style.customWidth90} form-control  mb-2`}
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.name && formik.touched.name ? (
                                    <div className="alert alert-danger p-2 mt-2">
                                        {formik.errors.name}
                                    </div>
                                ) : null}
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
                                    
                                />
                                {formik.errors.email && formik.touched.email ? (
                                    <div className="alert alert-danger p-2 mt-2">
                                        {formik.errors.email}
                                    </div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    className={`${style.customWidth90} form-control  mb-2`}
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter phone number"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    
                                />
                                {formik.errors.phone && formik.touched.phone ? (
                                    <div className="alert alert-danger p-2 mt-2">
                                        {formik.errors.phone}
                                    </div>
                                ) : null}
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
                                    
                                />
                                {formik.errors.address &&
                                formik.touched.address ? (
                                    <div className="alert alert-danger p-2 mt-2">
                                        {formik.errors.address}
                                    </div>
                                ) : null}
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
                                    
                                />
                                {formik.errors.password &&
                                formik.touched.password ? (
                                    <div className="alert alert-danger p-2 mt-2">
                                        {formik.errors.password}
                                    </div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className={`${style.customWidth90} form-control  mb-2`}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm your Password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    
                                />
                                {formik.errors.confirmPassword &&
                                formik.touched.confirmPassword ? (
                                    <div className="alert alert-danger p-2 mt-2">
                                        {formik.errors.confirmPassword}
                                    </div>
                                ) : null}
                            </div>
                            <button
                                type="submit"
                                className={`${style.customWidth90} btn btn-primary  mt-2 mb-2`}
                                disabled={!(formik.isValid && formik.dirty)}
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
                                        <span
                                            className={`${style.word} ${style.colorSec} fw-bold`}
                                        >
                                            OR SIGN UP WITH
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
            <div className={style.image}>
                <img src="../../images/reg.png" alt="woman_pic" />
            </div>
        </Fragment>
    );
};
