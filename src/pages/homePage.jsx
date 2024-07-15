import Hero from '../layouts/Hero'
import HomepageNavbar from '../layouts/HomepageNavbar'
import React from 'react';
import HomepageBody2 from '../layouts/homepageBody2/HomepageBody2';
import HomepageBody1 from '../layouts/homepageBody1/homepageBody1';
import CvTemplate from '../layouts/homepageBody2/cvTemplate';
import Footer from '../layouts/footer/footer';

const HomePage = () => {
    return(
        <>
            <HomepageNavbar />
            <Hero />
            <HomepageBody1 />
            <HomepageBody2/>
            <CvTemplate/>
            <Footer/>
        </>

    )

}

export default HomePage