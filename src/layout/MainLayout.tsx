import React, { ReactNode } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Topbar from '../components/Topbar'

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