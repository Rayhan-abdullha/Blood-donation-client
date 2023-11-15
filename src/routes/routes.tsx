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
import SingleVolunteer from '../components/volunteer/SingleVolunteer';
import AboutUs from '../pages/About';
import Messanger from '../pages/Messanger';

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
        path: "/volunteers/1",
        element: <SingleVolunteer />
    },
    {
        path: "/login",
        element: <AuthPage />
    },
    {
        path: "/messenger",
        element: <Messanger />
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
        path: "/about_us",
        element: <AboutUs />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
]);

export default router