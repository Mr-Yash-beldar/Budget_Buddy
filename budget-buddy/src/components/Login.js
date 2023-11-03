import React from 'react'
import '../components/css/loginstyle.css'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div>
      <body>
    <div class="bg-img">
      <div class="content">
        <header>Login Form</header>
        <form action="#">
          <div class="field">
            <span class="fa fa-user"></span>
            <input type="text" required placeholder="Email or Phone"/>
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" required placeholder="Password"/>
            <span class="show">SHOW</span>
          </div>
          <div class="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div class="field">
            <input type="submit" value="LOGIN"/>
          </div>
        </form>
        
        <div class="signup">Don't have account?
          <a> <NavLink to="/register">Signup Now</NavLink> </a>
        </div>
      </div>
    </div>


  </body>
    </div>
  )
}

export default Login
