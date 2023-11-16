import FAQ from "../components/faq/Faq"
import SecondaryLayout from '../layout/SecondaryLayout';
import bg from '../assets/banner/header-bg.jpg'

const FaqPage = () => {
    return (
        <SecondaryLayout bgImg={bg} title="Faq Page">
            <FAQ />
        </SecondaryLayout>
    )
}

export default FaqPage