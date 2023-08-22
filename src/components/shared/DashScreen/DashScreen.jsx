import SideBar from '../Sidebar/Sidebar'
import './dashscreen.css'

function DashScreen({children}) {
  return (
    <div className='admin-dashbord'>
    <SideBar/>
    <main className='dashboard-screen' >
      {children}
    </main>
    </div>
  )
}

export default DashScreen