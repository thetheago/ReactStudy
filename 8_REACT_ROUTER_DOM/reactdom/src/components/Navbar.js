// 2 - LInks com react router

import './Navbar.css'

import { NavLink } from 'react-router-dom'

import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Navbar