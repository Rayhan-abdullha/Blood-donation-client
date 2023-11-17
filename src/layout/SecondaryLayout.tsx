import { ReactNode } from "react"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/navbar/Navbar"
import { Link } from "react-router-dom"
import Topbar from "../components/Topbar"

interface Props {
    bgImg: string,
    title: string,
    children: ReactNode,
}

const SecondaryLayout = ({ children, bgImg, title }: Props) => {
    return (
        <>
            <Topbar />
            <Navbar />
            <div className="page-header bg-cover h-[300px] relative after:absolute after:h-[100%] after:w-[100%] after:bg-black after:top-0 after:left-0 after:opacity-[.5]" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="page-title container mx-auto xl:w-3/4 px-4 sm:px-6 lg:px-8 z-[1] relative h-[100%] flex justify-center items-center">
                    <div className="absolute text-center">
                        <h3 className="text-white text-[30px] sm:text-[40px] font-[500] capitalize mb-5">
                            {title} information
                        </h3>
                        <div className="page-breadcrumb flex justify-center gap-5 text-white">
                            <Link className="hover:bg-red-500 p-2 transition-all rounded-md" to="/about_us">Volunteers</Link><span className="mt-2">/</span>
                            <Link className="hover:bg-red-500 p-2 transition-all rounded-md" to="/faq">Faq</Link><span className="mt-2">/</span>
                            <Link className="hover:bg-red-500 p-2 transition-all rounded-md" to="/campaign"> Campaign</Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                children
            }
            <Footer />
        </>
    )
}

export default SecondaryLayout