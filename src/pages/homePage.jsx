import Hero from '../layouts/Hero'
import HomepageNavbar from '../layouts/navbar/HomepageNavbar'
// import HomepageBody2 from '../layouts/homepageBody2/HomepageBody2';
import HomepageBody1 from '../layouts/homepageBody1/homepageBody1';
import CvTemplate from '../layouts/homepageBody2/cvTemplate';
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
            <Footer />
        </>

    )

}

export default HomePage