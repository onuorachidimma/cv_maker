const SectionHeading = (props) => {
    return(
        <div className="text-center md:text-left">
            <h3 className="text-2xl lg:text-4xl  font-bold mb-11">{props.heading}</h3>
            <h3 className="text-base font-normal">{props.headingText}</h3>
        </div>
    )
}
export default SectionHeading