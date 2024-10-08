import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <fieldset>
        <legend>Login Form</legend>
        <form >
          <input type="text" placeholder='Enter Username ' />
          <br />
          <br />
          <input type="password" placeholder='Enter password ' />
          <br />
          <br />
          <button>Login</button>
          <br />
          <br />
        </form>
      </fieldset>
      <Link to="/signup">Sign Up</Link>

    </div>
  )
}

export default Login