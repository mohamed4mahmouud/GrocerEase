import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ResetPassword = () => {
    const [msg , setMsg] = useState('');
    const initialValues = {
        email: "",
        otp: "",
        new_password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        new_password: Yup.string()
            .required("New password is required")
            .min(8, "Password must be at least 8 characters"),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
       let {data}= await axios.post('http://localhost:8000/api/auth/reset-password' , values)
        setSubmitting(false);
        setMsg(data.msg);
        
    };

    return (
        <div className="container mt-5">
            <h2>Reset Password</h2>
            {msg && <div className="alert alert-success fw-semibold">{msg}</div>}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <Field
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="code" className="form-label">
                                Code
                            </label>
                            <Field
                                type="text"
                                name="otp"
                                id="code"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="otp"
                                component="div"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">
                                New Password
                            </label>
                            <Field
                                type="password"
                                name="new_password"
                                id="newPassword"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="new_password"
                                component="div"
                                className="text-danger"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ResetPassword;
