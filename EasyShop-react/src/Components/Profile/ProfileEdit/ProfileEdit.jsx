import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "../Profile.module.css";
import ProfileNav from "../ProfileNav/ProfileNav";
import CityDropDown from "./CityDropDown";
import axios from "axios";

export default function ProfileEdit() {
    const [profileLoading, setProfileLoading] = useState(false);
    const [profileMessage, setProfileMessage] = useState(null);
    const [profileError, setProfileError] = useState(null);

    const profileValidationSchema = Yup.object({
        name: Yup.string().required("Full Name is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        phone: Yup.string().required("Phone Number is required"),
        address: Yup.string().required("Address is required"),
    });

    const updateProfileSubmit = async (values) => {
        setProfileLoading(true);
        try {
            const response = await axios.put(
                "http://localhost:8000/api/user/profile/edit",
                values
            );
            setProfileLoading(false);
            setProfileMessage(response.data.message);
            setProfileError(null);
        } catch (error) {
            setProfileLoading(false);
            setProfileMessage(null);
            setProfileError(error.response.data.message);
        }
    };

    const formikProfile = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
        },
        validationSchema: profileValidationSchema,
        onSubmit: updateProfileSubmit,
    });

    const profileAlert = (
        <>
            {profileError && (
                <div className="alert alert-danger p-2 mt-2">
                    {profileError}
                </div>
            )}
            {profileMessage && (
                <div className="alert alert-success p-2 mt-2">
                    {profileMessage}
                </div>
            )}
        </>
    );

    const validationSchema = Yup.object({
        current_password: Yup.string().required("Current password is required"),

        new_password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("New password is required"),

        confirm_password: Yup.string()
            .oneOf([Yup.ref("new_password")], "Passwords must match")
            .required("Please confirm your password"),
    });

    const [isLoading, setisLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const updatePasswordSubmit = async (values) => {
        setisLoading(true);
        let { data } = await axios.put(
            `http://localhost:8000/api/changepassword`,
            values
        );

        if (data.msg === "Password Changed Successfully") {
            setisLoading(false);
            setError(null);
            setMessage(data.msg);
        } else {
            setisLoading(false);
            setMessage(null);
            setError(data.msg);
        }
    };

    let formik = useFormik({
        initialValues: {
            current_password: "",
            new_password: "",
            confirm_password: "",
        },
        validationSchema,
        onSubmit: updatePasswordSubmit,
    });

    const passwordAlert = (
        <>
            {error ? (
                <div className="alert alert alert-danger p-2 mt-2">{error}</div>
            ) : null}
            {message ? (
                <div className="alert alert-success p-2 mt-2">{message}</div>
            ) : null}
        </>
    );

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <ProfileNav />
                </div>
                <div className="col-md-9 ">
                    <div>
                        <div className="card shadow">
                            <div className={`${style.cardHeader} card-header`}>
                                <p className="h3">Account Settings</p>
                            </div>
                            <div className="card-body d-flex">
                                <form
                                    className="col-md-7"
                                    onSubmit={formikProfile.handleSubmit}
                                >
                                    <div className="form-group">
                                        <label htmlFor="name" className="mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className={`${style.inpOrg} form-control mb-2`}
                                            id="name"
                                            placeholder="Name"
                                            value={formikProfile.values.name}
                                            onChange={
                                                formikProfile.handleChange
                                            }
                                            onBlur={formikProfile.handleBlur}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className={`${style.inpOrg} form-control mb-2`}
                                            id="email"
                                            placeholder="Email"
                                            value={formikProfile.values.email}
                                            onChange={
                                                formikProfile.handleChange
                                            }
                                            onBlur={formikProfile.handleBlur}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className={`${style.inpOrg} form-control mb-4`}
                                            id="phone"
                                            placeholder="Phone"
                                            value={formikProfile.values.phone}
                                            onChange={
                                                formikProfile.handleChange
                                            }
                                            onBlur={formikProfile.handleBlur}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="address"
                                            className="mb-2"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="tel"
                                            className={`${style.inpOrg} form-control mb-4`}
                                            id="address"
                                            placeholder="Address"
                                            value={formikProfile.values.address}
                                            onChange={
                                                formikProfile.handleChange
                                            }
                                            onBlur={formikProfile.handleBlur}
                                        />
                                        {profileAlert}
                                    </div>
                                    <button
                                        type="submit"
                                        className={`${style.savechange} btn rounded-pill`}
                                    >
                                        Save Changes
                                    </button>
                                    {error ? (
                                        <div className="alert alert alert-danger p-2 mt-2">
                                            {error}
                                        </div>
                                    ) : null}
                                    {message ? (
                                        <div className="alert alert-success p-2 mt-2">
                                            {message}
                                        </div>
                                    ) : null}
                                </form>
                                <div className="col-md-5 text-center">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        className="rounded-circle mt-4 mb-3"
                                        width={"50%"}
                                        alt="Avatar"
                                    />
                                    <br />
                                    <button
                                        className={`${style.choseImg} btn rounded-pill`}
                                    >
                                        Choose Image
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow mt-5">
                        <div className={`${style.cardHeader} card-header`}>
                            <p className="h3">Billing Address</p>
                        </div>
                        <div className="card-body d-flex">
                            <form className="d-flex flex-wrap col-md-12 justify-content-between">
                                <div className={`${style.newWidth} form-group`}>
                                    <label htmlFor="FirstName" className="mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`${style.inpOrg} form-control mb-2`}
                                        id="FirstName"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className={`${style.newWidth} form-group`}>
                                    <label htmlFor="LastName" className="mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`${style.inpOrg} form-control mb-2`}
                                        id="LastName"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div className={`${style.newWidth} form-group`}>
                                    <label
                                        htmlFor="companyName"
                                        className="mb-2"
                                    >
                                        Company Name{" "}
                                        <span className="text-secondary">
                                            (optional)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`${style.inpOrg} form-control mb-4`}
                                        id="companyName"
                                        placeholder="Company Name"
                                    />
                                </div>
                                <div className={`w-100 form-group`}>
                                    <label
                                        htmlFor="streetAdress"
                                        className="mb-2"
                                    >
                                        Street Address
                                    </label>
                                    <input
                                        type="text"
                                        className={`${style.inpOrg} form-control mb-4`}
                                        id="streetAdress"
                                        placeholder="Street Address"
                                    />
                                </div>
                                <div className={`${style.newWidth} form-group`}>
                                    <label htmlFor="country" className="mb-2">
                                        Country
                                    </label>
                                    <input
                                        className={`${style.inpOrg} form-control mb-4`}
                                        type="text"
                                        id="country"
                                        placeholder="Egypt"
                                        readOnly
                                    ></input>
                                </div>
                                <div className={`${style.newWidth} form-group`}>
                                    <label htmlFor="city" className="mb-2">
                                        City
                                    </label>
                                    <CityDropDown />
                                </div>
                                <div className={`${style.newWidth} form-group`}>
                                    <label htmlFor="zipCode" className="mb-2">
                                        Zip Code
                                    </label>
                                    <input
                                        type="tel"
                                        className={`${style.inpOrg} form-control mb-4`}
                                        id="zipCode"
                                        placeholder="12345"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`${style.savechange} btn rounded-pill`}
                                >
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="card shadow mt-5 mb-5">
                        <div className={`${style.cardHeader} card-header`}>
                            <p className="h3">Change Password</p>
                        </div>
                        <div className="card-body d-flex">
                            <form
                                className="d-flex flex-wrap col-md-12 justify-content-between"
                                onSubmit={formik.handleSubmit}
                            >
                                <div className={`w-100 form-group`}>
                                    <label htmlFor="oldPass" className="mb-2">
                                        Current Password
                                    </label>
                                    <input
                                        type="password"
                                        className={`${style.inpOrg} form-control mb-4`}
                                        id="oldPass"
                                        placeholder="Current Password"
                                        name="current_password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.errors.current_password &&
                                formik.touched.current_password ? (
                                    <div className="alert alert-danger p-2 mt-2">
                                        {formik.errors.current_password}
                                    </div>
                                ) : null}
                                <div className={`w-50 form-group`}>
                                    <label htmlFor="newPass" className="mb-2">
                                        New Password
                                    </label>
                                    <input
                                        className={`${style.inpOrg} form-control mb-4`}
                                        type="password"
                                        id="newPass"
                                        placeholder="Password"
                                        name="new_password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    ></input>
                                </div>
                                {formik.errors.new_password &&
                                formik.touched.new_password ? (
                                    <div className="alert alert-danger p-2 mt-2">
                                        {formik.errors.new_password}
                                    </div>
                                ) : null}
                                <div className={`w-50 form-group`}>
                                    <label
                                        htmlFor="confirmNewPass"
                                        className="mb-2"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className={`${style.inpOrg} form-control mb-4`}
                                        id="confirmNewPass"
                                        placeholder="Password"
                                        name="confirm_password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.errors.confirm_password &&
                                formik.touched.confirm_password ? (
                                    <div className="alert alert-danger p-2 mt-2">
                                        {formik.errors.confirm_password}
                                    </div>
                                ) : null}
                                <button
                                    type="submit"
                                    className={`${style.savechange} btn rounded-pill`}
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
                                        <span>Save Changes</span>
                                    )}
                                </button>
                                {passwordAlert}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
