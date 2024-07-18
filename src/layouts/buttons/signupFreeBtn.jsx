import { Link } from "react-router-dom"
const SignupFreeButton = () => {
    return(
        <div className="text-center md:text-left">
            <button className="bg-customYellow py-2.5 px-5 rounded-35px text-base md:text-sm lg:text-base"><Link to="#">Sign Up - It’s completely free</Link></button>
        </div>
    )
}
export default SignupFreeButton