
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex h-full'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Layout