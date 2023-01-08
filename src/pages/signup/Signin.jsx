import React, { useState } from 'react'
import './Signup.css';
import { Link } from "react-router-dom";
import img from "../../assets/form.jpg"
export default function Signin() {
  return (
    <>
    <Link to="/" className='logo'>BrainGym</Link>
    <div className="form__wrapper">
    <div className="form__img">
        <img src={img} alt="img" />
      </div>
      <div className="form">
        <h2>Login</h2>
        <form action="">
       
        <div className="form__element">
        <h4>Email</h4>
          <input type="email" name="name" id="name" /> 
        </div>
        <div className="form__element">
        <h4>Password</h4>
          <input type="password" name="name" id="name" /> 
        </div>
       
        <button type="submit"><h4>Login</h4></button>
        </form>
        <Link id='link' to="/SignUp"> New here ?</Link>
      </div>
    </div>
    </> 
  )
}
