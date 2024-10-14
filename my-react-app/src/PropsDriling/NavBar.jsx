import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <nav>
            <Link to='/'>
            <li>Home</li>
            </Link>
           <Link to='/card'>
           <li>Card</li>
           </Link>
            
        </nav>
    </div>
  )
}

export default NavBar