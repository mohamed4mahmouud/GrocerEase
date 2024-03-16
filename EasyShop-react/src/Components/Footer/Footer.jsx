import React from "react";
import logo from "../../assets/logo.png";
import Payment from "../../assets/Payment.png";

export default function Footer() {
    return (
        <footer className="text-center text-lg-start bgnavbar">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="fw-bold mb-4">
                                <img src={logo} width={40} className="mb-2" />{" "}
                                Talabatk Eh
                            </h6>
                            <p>
                                Here you can use rows and columns to organize
                                your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="fw-bold mb-4">Contact Us</h6>
                            <p>
                                <i className="fas fa-home me-3"></i> New York,
                                NY 10012, US
                            </p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-3"></i> + 01 234
                                567 88
                            </p>
                            <p>
                                <i className="fas fa-print me-3"></i> + 01 234
                                567 89
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="fw-bold mb-4">Our Policies</h6>
                            <p>
                                <a
                                    href="#!"
                                    className="text-reset text-decoration-none"
                                >
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#!"
                                    className="text-reset text-decoration-none"
                                >
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#!"
                                    className="text-reset text-decoration-none"
                                >
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#!"
                                    className="text-reset text-decoration-none"
                                >
                                    Help
                                </a>
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="fw-bold mb-4">Our Team</h6>
                            <p>
                                <a
                                    href="#!"
                                    className="text-reset text-decoration-none"
                                >
                                    Seif Eldein Ahmed
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#!"
                                    className="text-reset text-decoration-none"
                                >
                                    Mohamed Mahmoud
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#!"
                                    className="text-reset text-decoration-none"
                                >
                                    Ahmed Tarek
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#!"
                                    className="text-reset text-decoration-none"
                                >
                                    Farah Ali
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#!"
                                    className="text-reset text-decoration-none"
                                >
                                    Nourhan Shawky
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="ms-5 me-5 text-secondary text-opacity-75" />
            <section className="d-flex justify-content-center justify-content-lg-between p-4 ms-4 me-2 border-bottom">
                <div className="text-center">© 2024, All rights reserved</div>

                <div className="me-5 d-none d-lg-block">
                    <img src={Payment} width={140} />
                </div>

                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f socialmediaicons"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter socialmediaicons"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram socialmediaicons"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-linkedin socialmediaicons"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-youtube socialmediaicons"></i>
                    </a>
                </div>
            </section>
        </footer>
    );
}
