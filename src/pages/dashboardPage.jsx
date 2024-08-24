import AddExperience from '../layouts/dashboard/AddExperience'
import DashboardAside from '../layouts/dashboard/DashboardAside'
// import DashboardUserProfile from '../layouts/dashboard/DashboardUserProfile'

function dashboardPage() {
  return (
    <>
      <div className="flex">
        <DashboardAside />
        <AddExperience />
        {/* <DashboardUserProfile /> */}
      </div>
    </>
  )
}

export default dashboardPage