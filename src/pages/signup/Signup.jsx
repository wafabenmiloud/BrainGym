import React, { useState } from 'react'
import './Signup.css';
import { Link } from "react-router-dom";
import img from "../../assets/form.jpg"
export default function Signup() {
  const [user,setUser] = useState({
    name:"",
    age:"",
    email:"",
    password:""
  })
  const handleChange = e =>{
    co
  }

  return (
    <>
    <Link to="/" className='logo'>BrainGym</Link>
    <div className="form__wrapper">
    <div className="form__img">
        <img src={img} alt="img" />
      </div>
      <div className="form">
        <h2>Create an account</h2>
        <form action="">
        <div className="form__element">
          <h4>Username</h4>
          <input type="text" name="name" id="name" /> 
        </div>
        <div className="form__element">
        <h4>Age</h4>
          <input type="number" name="age" id="age" /> 
        </div>
        <div className="form__element">
        <h4>Email</h4>
          <input type="email" name="name" id="name" /> 
        </div>
        <div className="form__element">
        <h4>Password</h4>
          <input type="password" name="name" id="name" /> 
        </div>
        <div className="form__element">
        <h4>Confirm Password</h4>
          <input type="password" name="pwd" id="pwd" /> 
        </div>
        <button type="submit"><h4>Register</h4></button>
        </form>
        <Link id='link' to="/SignIn"> Already have an account ?</Link>
      </div>
    </div>
    </> 
  )
}
