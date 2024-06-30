import HomepageNavbar from '../layouts/HomepageNavbar'


const HomePage = () => {
    return(
        <>
            <HomepageNavbar />
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-3xl font-bold underline">I am the Home page,Welcome to Elevate Cv</p>
            </div>
         
            <HomepageBody2/>
        </>

    )

}

export default HomePage