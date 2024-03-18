import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { userContext } from "../../Context/UserContext";
export default function Layout() {
    const location = useLocation();
    const pathsToShowFooter = ["/register", "/login"];
    const showFooter = pathsToShowFooter.includes(location.pathname);

    let { setToken } = useContext(userContext);

    useEffect(() => {
        if (localStorage.getItem("userToken") !== null) {
            setToken(localStorage.getItem("userToken"));
        }
    }, []);

    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            {/* {showFooter ? '' :<Footer />} */}
        </>
    );
}
