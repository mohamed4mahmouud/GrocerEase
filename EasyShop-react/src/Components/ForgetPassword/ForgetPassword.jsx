import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
    let navigate = useNavigate();
    const initialValues = {
        email: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
       let {data} = await axios.post(`http://localhost:8000/api/auth/forgot-password`,values);
        setSubmitting(false);
        if(data.msg == "Emil sent with OTP"){
            navigate('/resetPassword')
        }
    };

    return (
        <div className="container mt-5">
            <h2>Forgot Password</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3 font">
                            <label htmlFor="email" className="form-label font">
                                Email
                            </label>
                            <Field
                                type="email"
                                name="email"
                                id="email"
                                className="form-control w-50"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn greencart text-white rounded-4 fw-semibold font"
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

export default ForgotPassword;
