import useScrollTop from "../Hook/useScrollTop"
import bg from "../assets/banner/header-bg.jpg"
import SecondaryLayout from '../layout/SecondaryLayout'
const AboutUs = () => {
    useScrollTop()
    return (
        <SecondaryLayout bgImg={bg} title="About Us">SingleVolunteer</SecondaryLayout>
    )
}

export default AboutUs