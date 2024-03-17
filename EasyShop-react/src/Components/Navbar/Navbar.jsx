import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { userContext } from "../../Context/UserContext";

export default function Navbar() {
    const { token } = useContext(userContext);

    const [wordEntered, SetWordEnterd] = useState("");
    const [filterdData, SetFilteredData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //seacrh function
    const [allProducts, SetAllProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const products = await fetch("http://127.0.0.1:8000/api/allData");
            const setProducts = await products.json();
            SetAllProducts({
                products: await setProducts.products,
                shops: await setProducts.shops,
            });
            setIsLoading(false);
        };
        getProducts();
    }, []);

    const handleFilter = (event) => {
        const searchProduct = event.target.value;

        SetWordEnterd(searchProduct);

        if (!isLoading) {
            const productFilter = allProducts.products.filter((value) => {
                return value.title
                    .toLowerCase()
                    .includes(searchProduct.toLowerCase());
            });
            const shopFilter = allProducts.shops.filter((value) => {
                return value.name
                    .toLowerCase()
                    .includes(searchProduct.toLowerCase());
            });

            const allData = [...productFilter, ...shopFilter];
            if (searchProduct === "") {
                SetFilteredData([]);
            } else {
                SetFilteredData(allData);
            }
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bgnavbar">
                <div className="container-fluid">
                    <Link className="navbar-brand bgnavbar fw-bold" to="/">
                        <img src={logo} width={40} className="mb-2" /> Talabatk
                        Eh
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <Link
                                    className="nav-link active bgnavbar"
                                    aria-current="page"
                                    to="/"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="26"
                                        fill="currentColor"
                                        className="bi bi-shop-window pe-2 mb-2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                    Market
                                </Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link bgnavbar" to="/Cart">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="26"
                                        fill="currentColor"
                                        className="bi bi-basket3 pe-2 mb-2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z" />
                                    </svg>
                                    Basket
                                </Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link
                                    className="nav-link bgnavbar"
                                    to="/myOrder"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="26"
                                        fill="currentColor"
                                        className="bi bi-calendar2-event pe-2 mb-2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                    My orders
                                </Link>
                            </li>

                            <div className={styles.form}>
                                <input
                                    type="text"
                                    className="form-control ps-5 txtsearchbar rounded-pill"
                                    placeholder="What do you need?"
                                    value={wordEntered}
                                    onChange={handleFilter}
                                />
                                <i className="fa-solid fa-magnifying-glass ps-3 pb-2 txtsearchbar"></i>
                            </div>
                        </ul>
                        {token ? (
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link bgnavbar" to="#">
                                        LogOut
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link bgnavbar"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link bgnavbar"
                                        to="/register"
                                    >
                                        SignUp
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
            {/* TODO: Handle search result appearnace */}
            {wordEntered && isLoading ? (
                <div>Loading...</div> // Show loading spinner while fetching data
            ) : (
                filterdData.length !== 0 && (
                    <div className="dataResult">
                        {filterdData.slice(0, 15).map((value, index) => {
                            return (
                                <div
                                    className={`${styles.list} ${styles.borderBottom}`}
                                    key={index}
                                >
                                    <div className="d-flex flex-column ml-3">
                                        <span>
                                            {value.title
                                                ? value.title
                                                : value.name}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )
            )}
        </>
    );
}
