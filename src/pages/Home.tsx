import { useNavigate } from "react-router-dom"
import IntroSlider from "../components/slider/IntroSlider"
import VolunteerList from "../components/volunteer/VolunteerList"
import MainLayout from "../layout/MainLayout"
import useScrollTop from "../Hook/useScrollTop"
const Home = () => {
    useScrollTop()
    const navigate = useNavigate()
    return (
        <MainLayout>
            <IntroSlider />
            <VolunteerList subtitle='আমাদের ডোনাররা' heading="প্রতিনিয়ত রক্ত দিয়ে সাহায্য করে থাকেন" />
            <section className="cta-section text-center bg-[#FE3C47] py-[70px] sm:py-[100px] px-5">
                <h2 className="text-white font-[500] text-[30px] mb-4 capitalize">We are helping people from This years</h2>
                <p className="text-white mb-4">
                    You can give blood at any of our blood donation venues all over the world. We have total sixty <br />thousands donor centers and visit thousands of other venues on various occasions.
                </p>
                <button onClick={() => navigate('/be_volunteer')} className="bg-[#fff] px-4 py-3 text-sm font-semibold shadow-sm focus-visible:outline hover:bg-[#FE3C47] hover:text-[#fff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 cursor-pointer border border-stone-50 rounded-[30px] hover:scale-105 transition-all duration-500">BECOME VOLUNTEER</button>
            </section>
        </MainLayout>
    )
}

export default Home