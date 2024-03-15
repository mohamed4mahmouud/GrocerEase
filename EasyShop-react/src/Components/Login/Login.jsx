import { Fragment } from "react";
import style from "../Register/SignUp.module.css";
import React, { useEffect } from 'react';
import style2 from "./Login.module.css";
export default function Login() {

    useEffect(() => {
        document.body.style.background = 'linear-gradient(to right, white 0%, white 60%, #DEF9EC 60%, #DEF9EC 100%)';
    
        return () => {
          document.body.style.background = ''; 
        };
      }, []);

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
                                Welcome back !!!
                            </p>
                        </div>
                        <div>
                            <h1 className={`${style.colorPrim} mb-2 fw-bold`}>
                                Log in
                            </h1>
                        </div>
                        <form >
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className={`${style.customWidth90} form-control  mb-2`}
                                    id="email"
                                    name="email"
                                    placeholder="Enter email"
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
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={`${style.customWidth90} btn btn-primary  mt-2 mb-2`}
                            >
                                Login &#8594;
                            </button>
                        </form>
                    </div>
                    <div className="text-center ">
                        <p>
                            I don't have an account ? 
                            <a
                                href=""
                                className={`${style.colorSec} text-decoration-none text-reset fw-bold ms-1`}
                            >
                                Sign up
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
  )
}
