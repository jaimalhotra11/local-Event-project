import React from 'react';
import "./Signup.css";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <>
     <div className="signup-container">
            <div className="signup">
              <h1 className="signup-heading">Welcome!</h1>
              <div>
                <div className="placeholder">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="Enter Your Email" />
                </div>
                <div className="placeholder">
                  <label className="form-label">Password</label>
                  <input className="form-input" type="password" placeholder="Enter Your Password" />
                </div>
                <button className="signup-btn">Sign Up</button>
                <p className="signup-para">Don't have an account? <a href="/signup"  className="signup-para signup-log">Sign up</a></p>
              </div>
    
              <div className="google-auth">
                <div className="signup-border">
                  <div className="signup-border-first"></div>
                  <div className="signup-border-middle">Or sign in with</div>
                  <div className="signup-border-first"></div>
                </div>
                <button className="signup-btn">
                  <FcGoogle /> Sign Up With Google
                </button>
              </div>
            </div>
          </div>
    </>
  )
}

export default Login
