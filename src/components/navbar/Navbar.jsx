import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
  <nav className='navbar px-3 shadow-sm'>
    <div className='d-flex align-items-center justify-content-between w-100'>
        <Link className='navbar-brand fw-bold link' to="/">
        My Blog
        </Link>
         <Link className='btn btn-outline-light  fw-bold m-3 link' to="/create">
        + Create Post
        </Link>
    </div>
  </nav>
  )
}

export default Navbar
