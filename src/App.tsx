
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs.tsx";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import './index.css'
import Properties from "./pages/Properties/Properties.tsx";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails.tsx";
import {createHashRouter} from "react-router-dom";

const router = createHashRouter([
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
            {
                path: '/properties/:propertyDetails',
                element: <PropertyDetails />,
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

