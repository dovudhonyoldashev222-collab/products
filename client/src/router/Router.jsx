import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
// pages import
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Wishlist from "../pages/wishlist/Wishlist";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home showData={[]} categories={[]} category="all" setCategory={() => { }} />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "wishlist",
                element: <Wishlist />,
            },
        ],
    },
    {
        path: "*",
        element: <h1>Page Not Found</h1>,
    },
]);