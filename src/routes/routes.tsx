import Auth from '../pages/AuthForm';
import Home from './../pages/Home';
import {
    createBrowserRouter,

} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "/blood_request",
        element: <h1>This is Blood</h1>
    },
    {
        path: "/be_volunteer",
        element: <h1>This is Volunteer</h1>
    },
    {
        path: "/about",
        element: <h1>About</h1>
    },
    {
        path: "/messenger",
        element: <h1>Messagner</h1>
    },
    {
        path: "/campaign",
        element: <h1>Campaign</h1>
    },
    {
        path: "*",
        element: <div>Not Found</div>,
    },
]);

export default router