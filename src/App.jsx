
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/FeaturedProperties/Home.jsx";
import './index.css'
import Properties from "./pages/Properties/Properties.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/aboutUs',
                element: <AboutUs />,
            },
            {
                path: '/properties',
                element: <Properties />,
            },
        ],
        errorElement: <h1>404 Not Found</h1>,
    },
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}


// let a = {
//         font-family: "Urbanist", sans-serif;
//         font-weight: 500;
//         font-style: normal;
// }
