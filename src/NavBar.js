import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <NavLink to= "/" activeClassName= "active" style={{ fontWeight: 'bold' }}> Home | </NavLink>
        <NavLink to= "/movies" activeClassName= "active" style={{ fontWeight: 'bold' }}> Movie List </NavLink>
    </div>
  )
}

export default NavBar