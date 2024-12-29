
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import addicon from "../assets/add_icon.png"
const SideBar = () => {
  return (
    <div className="flex flex-col min-h-screen  w-1/4  bg-slate-200  ">
      <Link to={"/"}>
        <div className="flex flex-col mb-11 items-center mt-9 ">
          <img src={logo} className="w-44" alt="logo" />
          <h1 className=" -mt-4 font-bold">ADMIN PANEL</h1>
        </div>
      </Link>

      <nav className="flex flex-col items-center mt-8">
        <NavLink
          to="/add"
          className=" flex items-center text-center w-3/4 bg-slate-500 p-3 rounded-md text-slate-200 text-lg hover:bg-slate-400 mb-4"
        >
          <img src={addicon} className="mr-8" alt="add" />
          Add New Course
        </NavLink>
      </nav>
    </div>
  );
}  

export default SideBar