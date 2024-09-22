import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav>
         <Link to='/'>  <li>Home</li></Link>
         <Link to='/about'>   <li>About</li> </Link>
         <Link to='/contact'>  <li>Contact us</li></Link>
        </nav>
    </>
    
  )
}

export default Navbar