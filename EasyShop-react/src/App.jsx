import "./App.css";
import Cart from "./Components/Cart/Cart";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import { Products } from "./Components/Products/Products";
import { Product } from "./Components/Product/Product";
import Profile from "./Components/Profile/Profile";
import { SignUp } from "./Components/Register/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shops from "./Components/Shops/Shops";
import UserContextProvider, { userContext } from "./Context/UserContext";
import axios from "axios";
import { useContext } from "react";
import CreateShop from "./Components/Shops/CreateShop";
import ProfileEdit from "./Components/Profile/ProfileEdit/ProfileEdit";

let routers = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "register", element: <SignUp /> },
            { path: "login", element: <Login /> },
            { path: "profile", element: <Profile /> },
            { path: "profileEdit", element: <ProfileEdit /> },
            { path: "cart", element: <Cart /> },
            { path: "myOrder", element: <OrderHistory /> },
            { path: "product", element: <Product /> },
            { path: "products", element: <Products /> },
            { path: "shops/:category", element: <Shops /> },
            { path: "createshop", element: <CreateShop /> },
            { path: "*", element: <ErrorPage /> },
        ],
    },
]);
let token = localStorage.getItem("userToken");
axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

function App() {
    return (
        <>
            <UserContextProvider>
                <RouterProvider router={routers}></RouterProvider>
            </UserContextProvider>
        </>
    );
}

export default App;
