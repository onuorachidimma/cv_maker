import { Link } from 'react-router-dom'
import { useState } from 'react';
import Logo from '../assets/images/Logo-whitebg.svg'
import Hamburger from '../assets/images/hamburger menu.svg'


function HomepageNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
        <div className="flex flex-col lg:flex-row h-auto lg:h-24 justify-between items-center lg:items-stretch p-4 lg:p-0 lg:ml-16 lg:mr-20">
            <div className="flex items-center justify-between w-full lg:w-auto mb-4 lg:mb-0">
                <img className="h-16 lg:h-24 w-auto" src={Logo} alt="Logo" />
                <button
                    className="block lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none ml-4"
                    onClick={toggleMenu}
                >
                    <img className="h-8 w-8" src={Hamburger} alt="Menu" />
                </button>
            </div>
            <div className={`lg:flex lg:items-center lg:w-auto 
                ${isOpen ? 'block absolute top-24 left-0 drop-shadow-md bg-blend-darken bg-white bg-opacity-100 p-10 w-10/12' 
                : 'hidden lg:block'}`}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-11 text-lg lg:mr-[134px]">
                    <Link to="">Resume Builder</Link>
                    <Link to="">Tool</Link>
                    <Link to="">More</Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mt-4 lg:mt-0 text-lg">
                    <button className="bg-customGreen py-2.5 px-5 rounded-lg">
                    <Link to="/login" className="block lg:inline-block">Login</Link>
                    </button>
                    <button className="border border-customGreen py-2.5 px-5 rounded-lg">
                    <Link to="/signup" className="block lg:inline-block">Sign up</Link>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomepageNavbar