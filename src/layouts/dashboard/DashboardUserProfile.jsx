import { FaUser } from "react-icons/fa";

function DashboardUserProfile() {
  return (
    <>
        <div className="ml-11">
            <h1 className=" text-54px font-bold">Contact Information</h1>
            <p>Include your full name and at least email or phone number</p>
            <div className="w-64 h-48 bg-customLightGray">
                <FaUser className="text-6xl text-customDarkGreen " />
            </div>
        </div>
    </>
  )
}

export default DashboardUserProfile