import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs/AboutUs'
import Navbar from './Navbar/Navbar'
import Classes from './Classes/Classes'
import Footer from './Footer/Footer'
import Facility from './Page/Facility'
import Team from './Page/Team'
import CallToAction from './Page/CallToAction'
import Appointment from './Page/Appointment'
import ContactUs from './Page/ContactUs'

const Main = () => {
    return (
        <>
            <div className="container-xxl bg-white p-0">
                <Navbar />
                <Hero />
                {/* <AboutUs /> */}
                {/* <Classes /> */}
                {/* <Facility /> */}
                {/* <Team /> */}
                {/* <CallToAction /> */}
                {/* <Appointment /> */}
                {/* <ContactUs /> */}

                <Footer />
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                    <i className="bi bi-arrow-up" />
                </a>

            </div>
        </>
    )
}

export default Main