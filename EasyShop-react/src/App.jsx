import "./App.css";
import Layout from "./Components/Layout/Layout";
import { SignUp } from "./Components/Register/SignUp";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

let routers = createBrowserRouter([
    {path:'', element:<Layout />}
])

function App() {
    return (
        <>
            <RouterProvider router={routers}></RouterProvider>
        </>
    );
}

export default App;
