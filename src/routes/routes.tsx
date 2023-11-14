import Auth from '../pages/AuthPage';
import BloodRequest from '../pages/BloodRequest';
import Home from './../pages/Home';
import AuthPage from './../pages/AuthPage'
import {
    createBrowserRouter,

} from "react-router-dom";
import NotFoundPage from '../pages/404Page';
import VolunteerRequest from '../pages/VolunteerRequest';
import FAQ from '../pages/FAQ';
import CampaignPage from '../pages/CampaignPage';

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
        element: <BloodRequest />
    },
    {
        path: "/be_volunteer",
        element: <VolunteerRequest />
    },
    {
        path: "/login",
        element: <AuthPage />
    },
    {
        path: "/messenger",
        element: <h1>Messagner</h1>
    },
    {
        path: "/campaign",
        element: <CampaignPage />
    },
    {
        path: "/faq",
        element: <FAQ />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
]);

export default router