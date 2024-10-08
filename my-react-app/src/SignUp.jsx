import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
 
  return (
    <div>
        <fieldset>
            <legend>Sign Up</legend>
            <form >
                <input type="text" placeholder='Enter your name'/>
                <br />
                <br />
                <input type="text" placeholder='Enter the last name'/>
                <br />
                <br />
                <input type="email" placeholder='Enter your email'/>
                <br />
                <br />
                <input type="text" placeholder='Create a  password'/>
                <br />
                <br />
            </form> 
        </fieldset>
        <Link to='/'>Long in</Link>
    </div>
  )
}

export default SignUp