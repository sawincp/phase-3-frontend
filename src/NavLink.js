import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLink = () => {
  return (
    <div>
        <NavLink to= "/" className= "active-link"> Home </NavLink>
        <NavLink to= "/movies" className= "active-link"> Movie List </NavLink>
    </div>
  )
}

export default NavLink