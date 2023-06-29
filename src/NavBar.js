import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const linkStyles = {
    display: "inline",
    justifyContent: "center", 
    alignItems: "center", 
    width: "50px",
    height: "50px",
    padding: "20px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "underline",
    color: "white",
    fontWeight: "bold"
  };

  
  return (
    <div>
        <NavLink to= "/" style={ linkStyles }> Home </NavLink>
        <NavLink to= "/movies" style={ linkStyles }> Movie List </NavLink>
    </div>
  )
}

export default NavBar