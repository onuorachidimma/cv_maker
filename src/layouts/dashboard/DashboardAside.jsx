import { FaRegUserCircle, FaFile, FaGraduationCap, FaTools, FaRegIdCard } from "react-icons/fa";
import { LuFile, LuGraduationCap } from "react-icons/lu";

function DashboardAside() {
  return (
    <>
        <div className="w-32 h-full bg-customDarkGreen text-white flex flex-col items-center gap-11 py-11">
            <FaRegUserCircle className="text-5xl" />
            {/* <FaFile /> */}
            <LuFile className="text-5xl" />
            {/* <FaGraduationCap /> */}
            <LuGraduationCap className="text-5xl" />
            <FaTools className="text-5xl" />
            <FaRegIdCard className="text-5xl" />
        </div>
    </>
  )
}

export default DashboardAside