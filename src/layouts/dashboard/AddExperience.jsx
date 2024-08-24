

function AddExperience() {
  return (
    <>
        <div className="ml-11">
            <h1 className=" text-54px font-bold">Add your <span className="text-54px text-customYellow">Experience</span></h1>
            <p>Begin with your latest job, followed by previous positions. 
                Include volunteer work, internships, or extracurricular activities as desired.
            </p>
            <div className="w-auto h-48 bg-customLightGray">
                <form action="">
                    <label>
                        JOB TITLE
                        <input type="text"
                        placeholder="Front-end developer" 
                        />
                    </label>
                    <label>
                        EMPLOYER
                        <input type="text"
                        placeholder="Jubril" 
                        />
                    </label>
                    <label>
                        START DATE
                        <input type="text"
                        placeholder="Jubril" 
                        />
                    </label>
                    <label>
                        END DATE
                        <input type="text"
                        placeholder="Jubril" 
                        />
                    </label>
                    <label>
                        CITY
                        <input type="text"
                        placeholder="Lagos" 
                        />
                    </label>
                    <label>
                        COUNTRY
                        <input type="text"
                        placeholder="Nigeria" 
                        />
                    </label>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddExperience;