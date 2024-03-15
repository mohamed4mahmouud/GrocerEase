import "./App.css";
import Cart from "./Components/Cart/Cart";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import { Products } from "./Components/Products/Products";
import Profile from "./Components/Profile/Profile";
import { SignUp } from "./Components/Register/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shops from "./Components/Shops/Shops";

let routers = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "register", element: <SignUp /> },
            { path: "login", element: <Login /> },
            { path: "profile", element: <Profile /> },
            { path: "cart", element: <Cart /> },
            { path: "myOrder", element: <OrderHistory /> },
            { path: "products", element: <Products /> },
            { path: "shops", element: <Shops /> },
            { path: "*", element: <ErrorPage /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={routers}></RouterProvider>
        </>
    );
}

export default App;
