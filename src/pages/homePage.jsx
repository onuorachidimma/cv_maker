import Hero from '../layouts/Hero'
import HomepageNavbar from '../layouts/HomepageNavbar'
import React from 'react';
import HomepageBody2 from '../layouts/homepageBody2/HomepageBody2';
import HomepageBody1 from '../layouts/homepageBody1/homepageBody1';
import CvTemplate from '../layouts/homepageBody2/cvTemplate';
import BuildCV from '../layouts/buildCV/buildCV.jsx';
// import Footer from '../layouts/footer/footer';
import Footer from '../layouts/footer/footer.jsx';

const HomePage = () => {
    return(
        <>
            <HomepageNavbar />
            <Hero />
            <CvTemplate/>
            <HomepageBody1 />
            {/* <HomepageBody2/> */}
            <BuildCV />
            <Footer />
        </>

    )

}

export default HomePage 