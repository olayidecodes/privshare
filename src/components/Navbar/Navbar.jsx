import React from 'react'
import { FiDownload } from 'react-icons/fi';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <p>privshare</p>
        </div>
        <div className="news">
            <FiDownload />
            <p>Get the Windows App</p>
        </div>
    </div>
  )
}

export default Navbar