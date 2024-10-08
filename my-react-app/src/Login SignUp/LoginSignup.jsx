import React, { useState } from 'react'
import './LoginSignUp.css'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
const LoginSignup = () => {
  let [btn , setbtn]=useState(true)
  return (
    <div className='container'>
      <div className='form-container'>
          <div className='toggle-btn'>  
            <button className={btn ? 'active' :""} onClick={()=> setbtn(true)} >Login</button>
            <button className={!btn ? 'active' : ""} onClick={()=> setbtn(false)}>SignUp</button>
          </div>
          {btn ? <>
          <h1>Login Form</h1>
           <div id='login'>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          <a href='#'>Forget password</a>
          <button>Login</button>
            </div> 
            

          </>:""}
      
    </div>
      
    </div>
  )
}

export default LoginSignup