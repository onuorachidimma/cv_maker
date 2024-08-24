import { Link } from "react-router-dom"
const SignupFreeButton = (props) => {
    return(
        <div className="text-center md:text-left">
            <Link to={props.link}><button className="bg-customYellow py-2.5 px-5 rounded-35px text-xs md:text-sm lg:text-base font-semibold">{props.prompt}</button></Link>
        </div>
    )
}
export default SignupFreeButton