import React from 'react'
import logo from "../assets/logo.png"
const NavBar = () => {
  return (
    <div className='bg-white flex h-28 items-center'>
        <img src={logo} className='h-16 ml-11' alt="logo" />
    </div>
  )
}

export default NavBar