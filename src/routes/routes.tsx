import Auth from '../pages/AuthPage';
import BloodRequest from '../pages/BloodRequest';
import Home from './../pages/Home';
import AuthPage from './../pages/AuthPage'
import {
    createBrowserRouter,

} from "react-router-dom";
import NotFoundPage from '../pages/404Page';
import VolunteerRequest from '../pages/VolunteerRequest';
import CampaignPage from '../pages/CampaignPage';
import SingleVolunteer from '../components/volunteer/SingleVolunteer';
import AboutUs from '../pages/About';
import Messanger from '../pages/Messanger';
import FaqPage from '../pages/FaqPage';
import ProfilePage from '../pages/ProfilePage';

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
        path: "/volunteers/:id",
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
        element: <FaqPage />
    },
    {
        path: "/about_us",
        element: <AboutUs />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
]);

export default router