import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ResetPassword = () => {
    const initialValues = {
        email: "",
        code: "",
        newPassword: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        code: Yup.string().required("Code is required"),
        newPassword: Yup.string()
            .required("New password is required")
            .min(8, "Password must be at least 8 characters"),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    };

    return (
        <div className="container mt-5">
            <h2>Reset Password</h2>
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
                                name="code"
                                id="code"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="code"
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
                                name="newPassword"
                                id="newPassword"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="newPassword"
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
