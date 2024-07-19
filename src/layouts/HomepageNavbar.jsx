import React from 'react'
import Logo from '../assets/images/Logo-whitebg.svg'
import { Link } from 'react-router-dom'

function HomepageNavbar() {
  return (
    <>
        <div className="flex h-24 justify-between"> 
            <img className="h-24 w-96" src={Logo} alt="Logo" />
            <div className="flex items-center gap-11 text-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer">Resume Builder</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Tool</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">More</a>
                {/* <ul className="flex text-lg items-center gap-11 cursor-pointer">
                    <li>Resume Builder</li>
                    <li>Tool</li>
                    <li>More</li>
                </ul> */}
            </div>
            <div className=" mt-5 text-lg items-center ">
                <button className="bg-customGreen py-2.5 px-5 rounded-lg mr-2"><Link to="/login">Login</Link></button>
                <button className="border border-customGreen py-2.5 px-5 rounded-lg mr-6"><Link to="/signup">Sign up</Link></button>
            </div>
        </div>
    </>
  )
}

export default HomepageNavbar