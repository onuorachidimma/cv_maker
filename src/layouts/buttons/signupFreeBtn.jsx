import { Link } from "react-router-dom"
const SignupFreeButton = (props) => {
    return(
        <div className="text-center md:text-left">
            <button className="bg-customYellow py-2.5 px-5 rounded-35px text-base md:text-sm lg:text-base font-semibold"><Link to={props.link}>{props.prompt}</Link></button>
        </div>
    )
}
export default SignupFreeButton