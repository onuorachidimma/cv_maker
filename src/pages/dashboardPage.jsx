import DashboardAside from '../layouts/dashboard/DashboardAside'
import DashboardUserProfile from '../layouts/dashboard/DashboardUserProfile'

function dashboardPage() {
  return (
    <>
      <div className="flex">
        <DashboardAside />
        <DashboardUserProfile />
      </div>
    </>
  )
}

export default dashboardPage