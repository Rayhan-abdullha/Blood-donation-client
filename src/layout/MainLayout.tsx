import React, { ReactNode } from 'react'
import Navbar from '../components/shared/navbar/Navbar'
import Footer from '../components/shared/Footer/Footer'
import Topbar from '../components/shared/Topbar'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Topbar />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout